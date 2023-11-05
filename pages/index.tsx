import Home from "@/modules/Home";
import { NextPage } from "next";
// import dotenv from "dotenv";
// import mysql from "mysql2";

// require("dotenv").config();

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;

// dotenv.config();

// // Create the connection to the database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// // Simple query
// connection.query("show tables", function (err, results, fields) {
//   if (err) throw err;
//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra metadata about results, if available
// });

// // Example with placeholders
// connection.query(
//   "select 1 from dual where ? = ?",
//   [1, 1],
//   function (err, results) {
//     if (err) throw err;
//     console.log(results);
//   }
// );

// connection.end();

const HomePage: NextPage = () => <Home />;

export default HomePage;
