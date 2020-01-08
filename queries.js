const Pool = require("pg").Pool;
const pool = new Pool({
  user: "holgermanzke",
  host: "localhost",
  database: "dbtest",
  password: "neuefische",
  port: 5432
});

pool.on("connect", client => {
  client.query(`SET search_path TO bwgeneratorwechsel`);
});

const getCandidates = async (request, response) => {
  const result = await pool.query(
    "SELECT application_application.id, application_application.image, application_application.first_name, application_application.last_name, application_application.which_job, application_application.position_or_graduation, application_application.first_activity, application_application.mail, application_application.sender_phone_first, application_application.street, application_application.number, application_application.application_date, application_application.town, application_career.company, application_career.date_from, application_career.date_to, application_career.company_town, application_career.company_position FROM application_application INNER JOIN application_career ON application_application.id=application_career.application_id WHERE application_application.id=1793 LIMIT 100"
  );
  const candidates = result.rows.reduce((candidates, currentApplication) => {
    const candidate = candidates[currentApplication.application_id] || {
      id: currentApplication.id,
      imgSrc:
        "https://www.xing.com/image/d_2_e_f7d62c0a7_12951104_10/holger-manzke-foto.1024x1024.jpg",
      firstName: currentApplication.first_name,
      lastName: currentApplication.last_name,
      profession: currentApplication.which_job,
      special1: currentApplication.position_or_graduation,
      special2: currentApplication.first_activity,
      eMail: currentApplication.mail.toLowerCase(),
      phone: currentApplication.sender_phone_first,
      street: currentApplication.street,
      streetNumber: currentApplication.number,
      city: currentApplication.town,
      aboutMe:
        "About me: Ich liebe die Herausforderung, die jedes neue Projekt mitbringt. Mittlerweile habe ich mich auf das Backend spezialisiert. Hier nutze ich vor allem React, Nodejs und Expressjs.",
      companies: [],
      fromDates: [],
      dueDates: [],
      createDate: currentApplication.application_date.toLocaleDateString(),
      companiesCities: [],
      companiesProfessions: []
    };

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

  response.status(200).json(Object.values(candidates));
};

const getCandidatesById = async (request, response) => {
  const id = parseInt(request.params.id);
  const result = await pool.query(
    "SELECT application_application.id, application_application.image, application_application.first_name, application_application.last_name, application_application.which_job, application_application.position_or_graduation, application_application.first_activity, application_application.mail, application_application.sender_phone_first, application_application.street, application_application.number, application_application.application_date, application_application.town, application_career.company, application_career.date_from, application_career.date_to, application_career.company_town, application_career.company_position FROM application_application INNER JOIN application_career ON application_application.id=application_career.application_id WHERE application_application.id=$1 LIMIT 100",
    [id]
  );

  const candidates = result.rows.reduce((candidates, currentApplication) => {
    const candidate = candidates[currentApplication.application_id] || {
      id: currentApplication.id,
      // imgSrc:
      //   "https://www.xing.com/image/d_2_e_f7d62c0a7_12951104_10/holger-manzke-foto.1024x1024.jpg",
      firstName: currentApplication.first_name,
      lastName: currentApplication.last_name,
      profession: currentApplication.which_job,
      special1: currentApplication.position_or_graduation,
      special2: currentApplication.first_activity,
      eMail: currentApplication.mail.toLowerCase(),
      phone: currentApplication.sender_phone_first,
      street: currentApplication.street,
      streetNumber: currentApplication.number,
      city: currentApplication.town,
      aboutMe:
        "About me: Ich liebe die Herausforderung, die jedes neue Projekt mitbringt. Mittlerweile habe ich mich auf das Backend spezialisiert. Hier nutze ich vor allem React, Nodejs und Expressjs.",
      companies: [],
      fromDates: [],
      dueDates: [],
      createDate: currentApplication.application_date.toLocaleDateString(),
      companiesCities: [],
      companiesProfessions: []
    };

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

  response.status(200).json(Object.values(candidates));
};

const getSearchResults = async (request, response) => {
  const results = await pool.query(
    `SELECT id, first_name, last_name, which_job, position_or_graduation, first_activity, second_activity, town FROM application_application WHERE to_tsvector(which_job || ' ' || position_or_graduation || ' ' || first_activity || ' ' || second_activity) @@ to_tsquery('${request.query.prof}') LIMIT 10`
  );
  response.status(200).json(results.rows);
};

module.exports = { getCandidates, getCandidatesById, getSearchResults };
