const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/e0d726348ace64acc56e341488ea02b8/' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      console.log(body.daily);
      callback(
        undefined,
        body.daily.data[0].summary +
          ' It is currently ' +
          body.currently.temperature +
          ' degress out. There is a ' +
          body.currently.precipProbability +
          '% chance of rain.' +
          '\n' +
          '\nThe minimalist temperature of the day will be ' +
          body.daily.data[0].temperatureLow +
          ' degress and on the contrary, the highest temperature of the day will be ' +
          body.daily.data[0].temperatureLow +
          ' degress.'
      );
    }
  });
};

module.exports = forecast;
