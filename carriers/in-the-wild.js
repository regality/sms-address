'use strict';
// IN THE WILD
// these carriers have been discovered through actual lookups on real numbers

// ALPHABETIC ORDER
// When editing this file, please maintain alphabetic order

// WIRELESS vs LANDLINE
// Note that most of the time there are two separate companies
// for cell and landline coverage. The cell companies are usually
// postfixed with Wireless, Mobile, Mobility, PCS, or Cellular

// EXAMPLE
/*
  { "name": "boost"             // programmer-friendly name
  , "carrier": "Boost"          // print-friendly name
  , "wireless": true            // cellular only (true), landline only (false), or null / function to test
  , "sms": "myboostmobile.com"  // sms gateway
  , "mms": "myboostmobile.com"  // mms gateway
  , "updated": 1393227602319    // last time this was found in the wild
  }
*/

module.exports = [
  { "name": "alaska"
  , "carrier": "Alaska"
  , "wireless": true
  , "sms": "sms.alaska-wireless.com"
  , "mms": "msg.acsalaska.net"
  , "updated": 1393227602319
  }
, { "name": 'att'
  , "carrier": "AT&T Mobility"
    // the default wireles function will test for carrier the strings
    // Wireless / Mobility / PCS, etc to determine whether AT&T or Cingular
  , "wireless": null
  , "sms": "txt.att.net"
  , "mms": "mms.att.net"
  , "test": function test(string) {
      var re = /\b(AT\s*&?\s*T|cingular)\b/i
        ;

      return re.test(string);
    }
  , "updated": 1393227602319
  }
, { "name": "boost"
  , "carrier": "Boost"
  , "wireless": true
  , "sms": "myboostmobile.com"
  , "mms": "myboostmobile.com"
  , "updated": 1393227602319
  }
, { "name": "cricket"
  , "carrier": "Cricket"
  , "wireless": true
  , "sms": "sms.mycricket.com"
  , "mms": "mms.mycricket.com"
  , "updated": 1393227602319
  }
, { "name": "qwest"
  , "carrier": "Qwest Corporation"
    // might be voip? or mislabled?
  , "wireless": false
  , "sms": "qwestmp.com"
  , "updated": 1393227602319
  }
, { "name": "sprint"
  , "carrier": "Sprint"
  , "wireless": true
  , "sms": "messaging.sprintpcs.com"
  , "mms": "pm.sprint.com"
  , "updated": 1393227602319
  }
, { "name": "syringa"
  , "carrier": "Syringa Wireless"
  , "wireless": true
  , "sms": "rinasms.com"
  , "updated": 1393227602319
  }
, { "name": "tmobile"
  , "carrier": "T-Mobile"
  , "wireless": true
  , "sms": "tmomail.net"
  , "mms": "tmomail.net"
  , "test": function (string) {
      // being careful not to match boos*tmobile*
      var re = /\bt-?mobile\b/i
        ;

      return re.test(string);
    }
  , "updated": 1393227602319
  }
, { "name": "metropcs"
  , "carrier": "T-Mobile_MetroPCS"
  , "wireless": true
    // was "mymetropcs.com" but is now T-Mobile
  , "sms": "tmomail.net"
  , "mms": "tmomail.net"
  , "updated": 1393227602319
  }
, { "name": "uscellular"
  , "carrier": "US Cellular"
  , "wireless": true
  , "sms": "email.uscc.net"
  , "mms": "mms.uscc.net"
  , "test": function (string) {
      var re = /\b((u\.?s\.?\s*cellular)|(united\s*states\s*cellular))\b/i
        ;

      return re.test(string);
    }
  , "updated": 1393227602319
  }
, { "name": "verizon"
  , "carrier": "Verizon Wireless"
  , "wireless": null
  , "sms": "vtext.com"
  , "mms": "vzwpix.com"
  , "updated": 1393227602319
  }
, { "name": "viaero"
  , "carrier": "Viaero Wireless"
  , "wireless": true
  , "sms": "viaerosms.com"
  , "mms": "mmsviaero.com"
  , "updated": 1393227602319
  }
, { "name": "virgin"
  , "carrier": "Virgin Mobile"
  , "wireless": true
  , "sms": "vmobl.com"
  , "mms": "vmpix.com"
  , "updated": 1393227602319
  }
, { "name": "wind"
  , "carrier": "Wind Telecom"
  , "wireless": true
  , "sms": "txt.windmobile.ca"
  , "mms": "mms.windmobile.ca"
  , "updated": 1393227602319
  }
];
