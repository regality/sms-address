sms-address
====================

Performs a lookup of the mobile phone carrier company name to get the sms and mms gateway email addresses for that carrier.

You can use the SMS gateway address to send text messages from email.

Usage
===

```bash
npm install sms-address
```

```javascript
'use strict';

var smsAddress = require('sms-address')
  , email
  ;

email = smsAddress.sms('verizon', 5550002222);

console.log(email);
// 5550002222@vtext.com
```

API
===

  * `sms` - lookup sms domain or email
  * `mms` - lookup mms domain or email
  * `carrier` - reverse lookup carrier from sms, mms, or company name

### sms

Accepts any carrier name / company name string and an optional phone number
and returns the gateway domain or email to sms address or `null`

```javascript
lookups.sms(carrierString);                   // gateway
lookups.sms(carrierString[, phone]);          // phone@gateway
```

```javascript
lookups.sms('Cellco DBA Verizon Wireless');   // "vtext.com"
lookups.sms('T-Mobile', '+15550002222');      // "5550002222@tmomail.net"
lookups.sms('att', '+15550002222');           // "5550002222@txt.att.net"
```

### mms

Accepts any carrier name / company name string and an optional phone number
and returns the gateway domain or email to mms address or `null`

```javascript
lookups.mms(carrierString);                   // gateway
lookups.mms(carrierString[, phone]);          // phone@gateway
```

```javascript
lookups.mms('AT&T Mobility');                 // "mms.att.net"
lookups.mms('Sprint', '+15550002222');        // "5550002222@pm.sprint.com"
lookups.mms('tmobile', '+15550002222');       // "5550002222@tmomail.net"
```

### carrier

Accepts an sms or mms gateway domain or email address, or a carrier string
and returns the simple carrier string or `null`

```javascript
lookups.carrier(smsMmsOrCarrierString);       // programmer-friendly carrier name
```

```javascript
lookups.sms('AT&T Mobility');                 // "att"
lookups.sms('messaging.sprintpcs.com');       // "sprint"
lookups.carrier('5550002222@vzwpix.com');     // "verizon"
```
