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
  const results = await pool.query(
    "SELECT * FROM application_application INNER JOIN application_career ON application_application.id=application_career.application_id LIMIT 100"
  );
  response.status(200).json(results.rows);
};

const getCandidatesById = async (request, response) => {
  const id = parseInt(request.params.id);
  const results = await pool.query(
    "SELECT * FROM application_application WHERE id=$1",
    [id]
  );
  response.status(200).json(results.rows);
};

module.exports = { getCandidates, getCandidatesById };
