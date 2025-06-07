import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || "serveurplayciel",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "playciel",
  password: process.env.DB_PASSWORD || "playciel",
  database: process.env.DB_NAME || "BI",
  waitForConnections: true
});

export default pool;
