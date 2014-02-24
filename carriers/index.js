'use strict';

var carriers
  , carriersSms = {}
  ;

carriers = require('./in-the-wild').concat(require('./historic'));
carriers.forEach(function (c) {
  carriersSms[c.name] = c.sms;
});

function formatNum(num) {
  num = String(num).replace(/\D/g, '').replace(/^\+?1/, '');
  if (!/^\d{10}/.test(num)) {
    return null;
  }
  return num;
}

function lookupByComment(comment) {
  var name
    ;

  if (!comment) {
    return;
  }

  carriers.some(function (carrier) {
    if (new RegExp(carrier.name, 'i').test(comment.replace(/\W/, ''))) {
      name = carrier.name;
      return true;
    }
  });

  return name;
}

function lookupBySms(gateway) {
  var name
    ;

  if (!gateway) {
    return;
  }

  carriers.some(function (carrier) {
    if (carrier.sms) {
      if (new RegExp(carrier.sms, 'i').test(gateway)) {
        name = carrier.name;
        return true;
      }
    }
  });

  return name;
}

function lookupByMms(gateway) {
  var name
    ;

  if (!gateway) {
    return;
  }

  carriers.some(function (carrier) {
    if (carrier.mms) {
      if (new RegExp(carrier.mms, 'i').test(gateway)) {
        name = carrier.name;
        return true;
      }
    }
  });

  return name;
}

function createTestCarrier(carrierName) {
  function testCarrier(string) {
    var re = new RegExp(carrierName, 'i')
      ;

    return re.test((string||'').replace(/[\W\-]+/g, ''));
  }

  return testCarrier;
}

function lookup(type, number, map) {
  map = map || {};
  var ctype = (type||'').replace(/-/, '').replace(/\s+/g, ' ')
    ;

  carriers.some(function (carrier) {
    var testWireless
      ;

    function isWireless(string) {
      if (/wireless|pcs|cellular/i.test(string)) {
        return true;
      }
    }

    if ((carrier.test||createTestCarrier(carrier.name))(ctype)) {
      if (true === typeof carrier.wireless) {
        map.wireless = true;
      } else {
        if ('function' === typeof carrier.wireless) {
          testWireless = carrier.wireless;
        } else {
          testWireless = isWireless;
        }
        if (testWireless(ctype)) {
          map.wireless = true;
        }
      }

      map.carrier = carrier.name;
      if (carrier.sms) {
        if (number) {
          map.smsAddress = formatNum(number) + '@' + carrier.sms; 
        } else {
          map.smsGateway = carrier.sms; 
        }
      }
      if (carrier.mms) {
        if (number) {
          map.mmsAddress = formatNum(number) + '@' + carrier.mms; 
        } else {
          map.mmsGateway = carrier.mms; 
        }
      }

      return true;
    }
  });

  return map;
}

function lookupSms(str) {
  var sms
    ;

  carriers.some(function (carrier) {
    var test = carrier.test || createTestCarrier(carrier.name)
      ;

    if (test(str)) {
      sms = carrier.sms || null;
      return sms;
    }
  });

  return sms;
}

function lookupMms(str) {
  var mms
    ;

  carriers.some(function (carrier) {
    var test = carrier.test || createTestCarrier(carrier.name)
      ;

    if (test(str)) {
      mms = carrier.mms || null;
      return mms;
    }
  });

  return mms;
}

function phoneToEmail(number, carrier) {
  return module.exports.sms(carrier, number);
}

function lookupCarrierName(str) {
  str = (str || '').replace(/.*@/, '');

  return (lookupBySms(str) || lookupByMms(str) || lookupByComment(str) || null);
}

function lookupSmsAddress(carrierString, num) {
  num = formatNum(num);
  var sms = lookupSms(carrierString)
    ;

  if (sms) {
    if (num) {
      return num + '@' + sms;
    }
    return sms;
  }
  return null;
}

function lookupMmsAddress(carrierString, num) {
  num = formatNum(num);
  var mms = lookupMms(carrierString)
    ;

  if (mms) {
    if (num) {
      return num + '@' + mms;
    }
    return mms;
  }
  return null;
}

module.exports = phoneToEmail;
module.exports.carriers = carriersSms;
module.exports.gateways = carriers;

module.exports.sms = lookupSmsAddress;
module.exports.mms = lookupMmsAddress;
module.exports.carrier = lookupCarrierName;
module.exports.lookup = lookup;
module.exports.carrierBySms = lookupBySms;
module.exports.carrierByMms = lookupBySms;
module.exports.carrierByComment = lookupByComment;

// Deprecated
module.exports.lookupBySmsGateway = lookupBySms;
module.exports.lookupByComment = lookupByComment;
