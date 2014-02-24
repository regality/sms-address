'use strict';

var carriers = require('./carriers')
  ;

// SMS LOOKUP

if ('5550002222@vtext.com' !== carriers(5550002222, 'Verizon Wireless')) {
  throw new Error('carrier num@vtext fail');
}

//
// GATEWAY LOOKUP
//

if ('vtext.com' !== carriers.sms('Verizon Wireless')) {
  throw new Error('vtext fail');
}

if ('5550002222@vtext.com' !== carriers.sms('Verizon Wireless', 5550002222)) {
  throw new Error('num@vtext fail');
}

if ('vzwpix.com' !== carriers.mms('Verizon Wireless')) {
  throw new Error('vzwpix fail');
}

if ('5550002222@vzwpix.com' !== carriers.mms('Verizon Wireless', 5550002222)) {
  throw new Error('num@vzwpix fail');
}

if (null !== carriers.mms('Foobar', 5550002222)) {
  throw new Error('null fail');
}

//
// CARRIER LOOKUP
//

if ('verizon' !== carriers.carrier('CELLCO Network DBA Verizon Wireless - UT')) {
  console.log('carrier lookup:', carriers.carrier('CELLCO Network DBA Verizon Wireless - UT'));
  throw new Error('comment fail');
}

if ('verizon' !== carriers.carrier('Verizon Wireless')) {
  throw new Error('company fail');
}

if ('verizon' !== carriers.carrier('verizon')) {
  throw new Error('name fail');
}

if ('verizon' !== carriers.carrier('vtext.com')) {
  throw new Error('vtext fail');
}

if ('verizon' !== carriers.carrier('5550002222@vtext.com')) {
  throw new Error('num@vtext fail');
}

if ('verizon' !== carriers.carrier('vzwpix.com')) {
  throw new Error('vzwpix fail');
}

if ('verizon' !== carriers.carrier('5550002222@vzwpix.com')) {
  throw new Error('num@vzwpix fail');
}

if (null !== carriers.carrier('Foobar')) {
  throw new Error('2 null fail');
}

console.log(carriers.carriers);
