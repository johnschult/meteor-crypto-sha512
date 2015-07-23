[SHA512](https://en.wikipedia.org/wiki/SHA-2) algorithm from [CryptoJS](https://code.google.com/p/crypto-js/).

[![Build Status](https://secure.travis-ci.org/johnschult/meteor-crypto-sha512.png)](http://travis-ci.org/johnschult/meteor-crypto-sha512)

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

Install
-------

Inside your project folder run
```
$ meteor add johnschult:crypto-sha512
```
The following method under the `CryptoJS` namespace will now be available
on **both the client and server**:

`CryptoJS.SHA512(message)`

If [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac) is also installed, the following method will also be available:

`CryptoJS.HmacSHA512(message, key)`


Usage
-----
SHA512 digest of a string:
```javascript
CryptoJS.SHA512("Message").toString()
// "4fb472dfc43def7a46ad442c58ac532f89e0c8a96f23b672f5fd637652eab158d4d589444ef7530a34e6626b40830b4e1ec5364611ae31c599bffa958e8b4c4e"
```

SHA512 HMAC of a string, given a passphrase:
```javascript
CryptoJS.HmacSHA512("Message", "Secret Passphrase").toString()
// "c03f82cd6f9d03920d95caeedfa722d4e42325a18b049942ee5560787ad2aa394be6b95849c563ecdd37495726cd6236529a721b563b9778dd6119939bcab7e1"
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/> and the documentation for Hashers is at <https://code.google.com/p/crypto-js/#Hashers>.

Related packages
----------------

- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)
- [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)
- [`jparker:crypto-aes`](https://github.com/p-j/meteor-crypto-aes)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)

Credits
-------

Based on [Eelco Wiersma's work](https://github.com/Pagebakers/meteor-crypto-sha256)
