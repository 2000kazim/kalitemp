let utils = require('./utils');

(function () {
  // define global data and default values - subject to change during runtime
  let data = {
    global: {
      Authorization: 'Bearer-authorization-token'
    },
    pm: {
      id: null,
      email: utils.randomEmail(),
      first_name: null,
      last_name: null,
      address: null,
      date_stamp: utils.getDateStamp(),
      time_stamp: utils.getTimeStamp(),
      string: utils.randomString(256, 'ĄČĘĖĮŠŲŪŽąčęėįšųūžzxcvbnmlkjhgfdsaqwertyuiop`1234567890-=~!@#$%^&*()_+[]\;\',./<>?:{}|\"'),
    }
  };
  exports.getDefaultEmptyValue = function () {
    return null;
  };
  exports.getAll = function () {
    return data;
  };
})();
