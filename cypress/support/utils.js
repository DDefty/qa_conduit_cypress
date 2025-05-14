const { faker } = require('@faker-js/faker');
const generatePassword = require('generate-password');

function generateRandomEmail() {
  return faker.internet.email();
}

function generateStrongPassword() {
  return generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });
}
function generateUsername() {
  return faker.internet.userName();
}
module.exports = {
  generateRandomEmail,
  generateStrongPassword,
  generateUsername
};