"use strict";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

/**
 * Establishes a database connection to the database and returns the database object.
 * Any errors that occur should be caught in the function that calls this one.
 * @returns {sqlite3.Database} - The database object for the connection.
 */
async function getDBConnection() {
  const db = await sqlite.open({
    filename: "./Chinook_Sqlite.sqlite",
    driver: sqlite3.Database,
  });

  return db;
}

async function main() {
  let db = await getDBConnection();
  const sqlString = "SELECT * FROM Artist";
  let rows = await db.all(sqlString);
  console.log(rows);
}

main().catch(console.error);
