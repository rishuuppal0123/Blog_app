import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishu0123@",
  database: "blog",
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Rishu0123@",
//   database: "blog",
// });

// connection.connect();

// export default connection;

// const { createPool } = require("mysql");

// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "Rishu0123@",
//   database: "test",
//   connectionLimit: 10,
// });

// pool.query(`SELECT * FROM blog.users`, (err, res) => {
//   return console.log(res);
// });
