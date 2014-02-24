'use strict';

var carriersL = require('./carriers-original')
  , maps = []
  , carriers = require('./carriers')
  ;

Object.keys(carriersL).forEach(function (k) {
  var sms = carriersL[k]
    ;

  if (carriers.sms(k) !== sms) {
    console.log('[MISMATCH]', k, sms, carriers.sms(k));
  }

  maps.push({
    carrier: k
  , sms: sms
  });
});
