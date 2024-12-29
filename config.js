const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	nodeEnv: process.env.NODE_ENV,
  	httpPort: process.env.PORT,
	databaseConnectionString: process.env.DATABASE_CONNECTION_STRING,
};