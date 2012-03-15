var carriers = require('./carriers.json');

function phoneToEmail(number, carrier) {
  number = number.replace(/[^\d]/g, '');
  var domain = carriers[carrier];
  if (domain) {
    return number + "@" + domain;
  } else {
    return null;
  }
}

phoneToEmail.carriers = carriers;

module.exports = phoneToEmail;
