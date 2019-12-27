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
    "SELECT * FROM application_application LIMIT 100"
  );
  response.status(200).json(results.rows);
};

module.exports = { getCandidates };
