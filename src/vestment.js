const getTemperature = require('./weather.js').getTemperature;

function properAttire(city) {
   if (getTemperature(city) > 55) {
      return 'Sweater';
   }  else if (getTemperature(city) > -30) {
      return 'Coat';
   }
}

module.exports = {properAttire};
