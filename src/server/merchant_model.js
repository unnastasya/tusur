const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "books",
	password: "123123",
	port: 5432,
});

// const { Client } = require("pg");
// let db = new Client({
// 	connectionString: "postgresql://postgres:@localhost/dbName",
// });
// db.connect();

const getMerchants = async () => {
	try {
		return await new Promise(function (resolve, reject) {
			pool.query("SELECT * FROM book", (error, results) => {
				if (error) {
					reject(error);
				}
				if (results && results.rows) {
					resolve(results.rows);
				} else {
					reject(new Error("No results found"));
				}
			});
		});
	} catch (error_1) {
		console.error(error_1);
		throw new Error("Internal server error");
	}
};

const getAuthors = async () => {
	try {
		return await new Promise(function (resolve, reject) {
			pool.query("SELECT * FROM authors", (error, results) => {
				if (error) {
					reject(error);
				}
				if (results && results.rows) {
					resolve(results.rows);
				} else {
					reject(new Error("No results found"));
				}
			});
		});
	} catch (error_1) {
		console.error(error_1);
		throw new Error("Internal server error");
	}
};

const getLocations = async () => {
	try {
		return await new Promise(function (resolve, reject) {
			pool.query("SELECT * FROM location", (error, results) => {
				if (error) {
					reject(error);
				}
				if (results && results.rows) {
					resolve(results.rows);
				} else {
					reject(new Error("No results found"));
				}
			});
		});
	} catch (error_1) {
		console.error(error_1);
		throw new Error("Internal server error");
	}
};

module.exports = {
	getMerchants,
	getAuthors,
	getLocations,
};
