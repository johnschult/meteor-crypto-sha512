Package.describe({
  name: 'johnschult:crypto-sha512',
  summary: 'SHA512 algo for CryptoJS, standard secure crypto algorithms',
  version: '3.1.2',
  git: 'https://github.com/johnschult/meteor-crypto-sha512.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jparker:crypto-core@0.1.0', ['client', 'server']);
  api.imply('jparker:crypto-core@0.1.0', ['client', 'server']);
  api.addFiles('lib/cryptojs/x64-core.js', ['client', 'server']);
  api.addFiles('lib/cryptojs/sha512.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jparker:crypto-core');
  api.use('jparker:crypto-hmac');
  api.use('johnschult:crypto-sha512');
  api.addFiles('tests/sha512-tests.js');
});
