const {expect} = require('chai');

describe('authentication methods', function() {
  const shipwire = require('./../src');

  it('accepts a token', function() {
    const token = new Buffer.from('<user>:<pass>').toString('base64');
    const Shipwire = shipwire({beta: true, token: token});
    expect(Shipwire.state.token).to.equal(token);
  });

  it('accepts user/pass', function() {
    const token = new Buffer.from('<user>:<pass>').toString('base64');
    const Shipwire = shipwire({beta: false, username: '<user>', password: '<pass>'});
    expect(Shipwire.state.token).to.equal(token);
  });

  it('throws errors on improper auth', function() {
    const errmsg = 'No authentication method passed in. Pass in either a token or both a username and a password.';
    expect(function() {shipwire({beta: false, username: 'asdf'})}).to.throw(errmsg);
    expect(function() {shipwire({beta: true, password: 'asdf'})}).to.throw(errmsg);
    expect(function() {shipwire({})}).to.throw(errmsg);
    expect(function() {shipwire(17, '12341234', 123, 'asdf')}).to.throw(errmsg);
    expect(function() {shipwire('17')}).to.throw(errmsg);
    expect(function() {shipwire()}).to.throw(errmsg);
  });
});
