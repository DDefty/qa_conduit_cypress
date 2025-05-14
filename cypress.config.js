require('dotenv').config();

module.exports = {
  e2e: {
    env: {
      email: process.env.CYPRESS_email,
      password: process.env.CYPRESS_password
    }
  }
};