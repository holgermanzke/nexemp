const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: 5432
});

pool.on("connect", client => {
  client.query(`SET search_path TO bwgeneratorwechsel`);
});

function normalizeCandidate(sqlCandidate) {
  return {
    id: sqlCandidate.id,
    imgSrc: `${(sqlCandidate.image &&
      "https://bewerbungsgenerator.s3.eu-central-1.amazonaws.com/media/" + sqlCandidate.image) ||
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg"}`,
    firstName: sqlCandidate.first_name,
    lastName: sqlCandidate.last_name,
    profession: sqlCandidate.which_job,
    special1: sqlCandidate.position_or_graduation,
    special2: sqlCandidate.first_activity,
    eMail: sqlCandidate.mail.toLowerCase(),
    phone: sqlCandidate.sender_phone_first,
    street: sqlCandidate.street,
    streetNumber: sqlCandidate.number,
    city: sqlCandidate.town,
    aboutMe:
      "About me: Ich liebe die Herausforderung, die jedes neue Projekt mitbringt. Mittlerweile habe ich mich auf das Backend spezialisiert. Hier nutze ich vor allem React, Nodejs und Expressjs.",
    companies: [],
    fromDates: [],
    dueDates: [],
    createDate: sqlCandidate.application_date.toLocaleDateString(),
    companiesCities: [],
    companiesProfessions: []
  };
}

function reduceSQLCandidates(sqlCandidates) {
  return sqlCandidates.reduce((candidates, currentApplication) => {
    const candidate =
      candidates[currentApplication.application_id] || normalizeCandidate(currentApplication);

    candidate.companies.push(currentApplication.company);
    candidate.fromDates.push(currentApplication.date_from);
    candidate.dueDates.push(currentApplication.date_to);
    candidate.companiesCities.push(currentApplication.company_town);
    candidate.companiesProfessions.push(currentApplication.company_position);

    return {
      ...candidates,
      [currentApplication.application_id]: candidate
    };
  }, {});
}

const getCandidatesById = async (request, response) => {
  const id = parseInt(request.params.id);
  const result = await pool.query(
    `SELECT application_application.id, application_application.image, application_application.first_name, application_application.last_name, application_application.which_job, application_application.position_or_graduation, application_application.first_activity, application_application.mail, application_application.sender_phone_first, application_application.street, application_application.number, application_application.application_date, application_application.town, application_career.company, application_career.date_from, application_career.date_to, application_career.company_town, application_career.company_position FROM application_application INNER JOIN application_career ON application_application.id=application_career.application_id WHERE application_application.id=${id} LIMIT 100`
  );

  const candidates = reduceSQLCandidates(result.rows);
  response.status(200).json(Object.values(candidates));
};

const getCandidates = async (request, response) => {
  const result = await pool.query(
    `SELECT id, first_name, last_name, which_job, position_or_graduation, first_activity, second_activity, town FROM application_application WHERE to_tsvector(which_job || ' ' || position_or_graduation || ' ' || first_activity || ' ' || second_activity) @@ to_tsquery('${request.query.prof}') LIMIT 10`
  );

  // const candidates = reduceSQLCandidates(result.rows);
  response.status(200).json(result.rows);
};

module.exports = { getCandidates, getCandidatesById };
