'use strict';
// HISTORIC
// this is a compiled list of known carriers that have not yet
// yet been seen in the wild. It is believed that they are
// bought out and deprecated (such as Alltel and Cingular), but since many
// numbers are still listed under their original carrier in many
// public records and some of their gateways still function, they
// are useful nonetheless.

// ALPHABETIC
// When editing this file, please maintain alphabetic order
module.exports = [
  { "name": 'alltel'
  , "carrier": "Alltel"
  , "sms": 'text.wireless.alltel.com'
  , "wireless": true
  }
  // listed a second time for reverse lookup by the alternate sms address
, { "name": 'alltel'
  , "carrier": "Alltel"
  , "sms": 'message.alltel.com'
  , "wireless": true
  }
, { "name": 'alltel'
  , "carrier": "Alltel"
  , "sms": "sms.alltelwireless.com"
  }
, { "name": "ameritech"
  , "carrier": "Ameritech"
  , "sms": "paging.acswireless.com"
  }
, { "name": "bellsouth"
  , "carrier": "BellSouth"
  , "sms": "bellsouth.cl"
  }
, { "name": "bluegrass"
  , "carrier": "Bluegrass Cellular"
  , "sms": "sms.bluecell.com"
  }
, { "name": "cspire"
  , "carrier": "C Spire Wireless"
  , "sms": "cspire1.com"
  }
, { "name": "cellcom"
  , "carrier": "Cellcom"
  , "sms": "cellcom.quiktxt.com"
  }
, { "name": "cellularone"
  , "carrier": "Cellular One"
  , "sms": "mobile.celloneusa.com"
  }
, { "name": "cellularsouth"
  , "carrier": "Cellular South"
  , "sms": "csouth1.com"
  }
, { "name": 'cingular'
  , "sms": 'cingularme.com'
  , "wireless": true
  }
, { "name": "charitonvalley"
  , "carrier": "Chariton Valley Wireless"
  , "sms": "sms.cvalley.net"
  }
, { "name": "cleartalk"
  , "carrier": "Cleartalk"
  , "sms": "sms.cleartalk.us"
  }
, { "name": "edge"
  , "carrier": "Edge Wireless"
  , "sms": "sms.edgewireless.com"
  }
, { "name": "element"
  , "carrier": "Element Mobile"
  , "sms": "SMS.elementmobile.net"
  }
, { "name": "esendex"
  , "carrier": "Esendex"
  , "sms": "echoemail.net"
  }
, { "name": "googlevoice"
  , "carrier": "Google Voice"
  // valid only for receiving, not for sending
  , "sms": "txt.voice.google.com"
  , "test": function (string) {
      // allow googlevoice or gvoice or google voice
      var re = /\b(g(oogle)?\s*voice)\b/i
        ;

      return re.test(string);
    }
  }
, { "name": 'gophone'
  , "sms": 'cingularme.com'
  , "wireless": true
  }
, { "name": 'gophone'
  , "carrier": "Cingular (GoPhone prepaid)"
  , "sms": "cingulartext.com"
  }
, { "name": "kajeet"
  , "carrier": "Kajeet"
  , "sms": "mobile.kajeet.net"
  }
, { "name": "longlines"
  , "carrier": "LongLines"
  , "sms": "text.longlines.com"
  }
, { "name": "metropcs"
  , "carrier": "MetroPCS"
  , "sms": "mymetropcs.com"
  }
, { "name": 'nextel'
  , "carrier": "Nextel"
  , "sms": "messaging.nextel.com"
  , "wireless": true
  }
, { "name": "o2"
  , "carrier": "O2"
  , "sms": "mobile.celloneusa.com"
  }
, { "name": "orange"
  , "carrier": "Orange"
  , "sms": "mobile.celloneusa.com"
  }
, { "name": "pioneer"
  , "carrier": "Pioneer Cellular"
  , "sms": "zsend.com"
  }
, { "name": 'powertel'
  , "sms": 'ptel.net'
  }
, { "name": "qwest"
    // duplicated for second name as Qwest Wireless
  , "carrier": "Qwest Wireless"
  , "sms": "qwestmp.com"
  }
, { "name": "redpocket"
  , "carrier": "Red Pocket Mobile"
  , "sms": "txt.att.net"
  }
, { "name": "simple"
  , "carrier": "Simple Mobile"
  , "sms": "smtext.com"
  }
, { "name": "southcentral"
  , "carrier": "South Central Communications"
  , "sms": "rinasms.com"
  }
, { "name": "straighttalk"
  , "carrier": "Straight Talk"
  , "sms": "vtext.com"
  }
, { "name": 'suncom'
  , "sms": 'tms.suncom.com'
  }
, { "name": "teleflip"
  , "carrier": "Teleflip"
  , "sms": "teleflip.com"
  }
, { "name": "unicel"
  , "carrier": "Unicel"
  , "sms": "utext.com"
  }
, { "name": "usamobility"
  , "carrier": "USA Mobility"
  , "sms": "usamobility.net"
  }
];
