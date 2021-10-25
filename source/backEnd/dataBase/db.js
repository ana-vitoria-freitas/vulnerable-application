require('dotenv').config();
const proConfig = {
    connectionString: process.env.DATABASE_URI,
    ssl: {
      rejectUnauthorized: false
    }
}

module.exports = proConfig;