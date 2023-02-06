import mysql2 from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql2.createConnection({
    host: "localhost",
    database: "thaimaiyudan",
    port: 3307,
    user: "root",
    password: "",
    // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });
  try {
     const query = "SELECT name, email FROM users";
     const values = [];
     const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

     res.status(200).json({ users: data });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}