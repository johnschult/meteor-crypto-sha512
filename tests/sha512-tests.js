var C = CryptoJS;

Tinytest.add('MeteorCryptoSHA512 - Vector 1', function(t) {
  t.equal(
    C.SHA512('').toString(),
    'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9' +
    'ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Vector 2', function(t) {
  t.equal(
    C.SHA512('a').toString(),
    '1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f' +
    '5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Vector 3', function(t) {
  t.equal(
    C.SHA512('abc').toString(),
    'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d3' +
    '9a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Vector 4', function(t) {
  t.equal(
    C.SHA512('message digest').toString(),
    '107dbf389d9e9f71a3a95f6c055b9251bc5268c2be16d6c13492ea45b0199' +
    'f3309e16455ab1e96118e8a905d5597b72038ddb372a89826046de66687bb420e7c'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Vector 5', function(t) {
  t.equal(
    C.SHA512('abcdefghijklmnopqrstuvwxyz').toString(),
    '4dbff86cc2ca1bae1e16468a05cb9881c97f1753bce3619034898faa1aa' +
    'be429955a1bf8ec483d7421fe3c1646613a59ed5441fb0f321389f77f48a879c7b1f1'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Vector 6', function(t) {
  t.equal(
    C.SHA512(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
      .toString(),
    '1e07be23c26a86ea37ea810c8ec7809352515a970e9253c26f536cfc7a99' +
    '96c45c8370583e0a78fa4a90041d71a4ceab7423f19c71b9d5a3e01249f0bebd5894'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Vector 7', function(t) {
  t.equal(
    C.SHA512(
      '123456789012345678901234567890123456789012' +
      '34567890123456789012345678901234567890').toString(),
    '72ec1ef1124a45b047e8b7c75a932195135bb61de24ec0d1914042246e0aec3a2' +
    '354e093d76f3048b456764346900cb130d2a4fd5dd16abb5e30bcb850dee843'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Update And Long Message', function(t) {
  var sha256 = C.algo.SHA512.create();
  for (var i = 0; i < 100; i++) {
    sha256.update('12345678901234567890123456789012345678901234567890');
  }

  t.equal(
    sha256.finalize().toString(),
    '9bc64f37c54606dff234b6607e06683c7ba248558d0ec74a11525d9f59e0be56' +
    '6489cc9413c00ca5e9db705fc52ba71214bcf118f65072fe284af8f8cf9500af'
  );
});

Tinytest.add('MeteorCryptoSHA512 - Clone', function(t) {
  var sha256 = C.algo.SHA512.create();

  t.equal(
    sha256.update('a').clone().finalize().toString(),
    C.SHA512('a').toString()
  );
  t.equal(
    sha256.update('b').clone().finalize().toString(),
    C.SHA512('ab').toString()
  );
  t.equal(
    sha256.update('c').clone().finalize().toString(),
    C.SHA512('abc').toString()
  );
});

Tinytest.add('MeteorCryptoSHA512 - InputIntegrity', function(t) {
  var message = C.lib.WordArray.create([0x12345678]);
  var expected = message.toString();
  C.SHA512(message);
  t.equal(message.toString(), expected);
});

Tinytest.add('MeteorCryptoSHA512 - Helper', function(t) {
  t.equal(
    C.SHA512('').toString(),
    C.algo.SHA512.create().finalize('').toString()
  );
});

Tinytest.add('MeteorCryptoSHA512 - HmacHelper', function(t) {
  t.equal(
    C.HmacSHA512(
      'Hi There',
      C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString(),
    C.algo.HMAC.create(
      C.algo.SHA512,
      C.enc.Hex.parse(
        '0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString()
  );
});
