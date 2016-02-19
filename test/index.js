var expect = require('chai').expect;
var CleanText = require('../src/index');

var char = '    <jose/ >  Antonio Yee felix;';
	char += '<script>';
	char += '	alert("Helo!!!");';
	char += '</script>';

var array = [1, 12, 334, 32];
var obj = { a : 1, b : 3, c : 'hola' };

describe('Types', function () {

	it('response NULL', function () {
		expect(null).to.not.equal(CleanText.clean());
	});

	it('response UNDEFINED', function () {
		expect(undefined).not.equal(CleanText.clean());
	});

	it('response ARRAY', function () {
		expect([]).not.equal(CleanText.clean());
	});

	it('response ARRAY', function () {
		expect(array).not.equal(CleanText.clean());
	});

	it('response OBJECT', function () {
		expect({}).not.equal(CleanText.clean());
	});

	it('response OBJECT', function () {
		expect(obj).not.equal(CleanText.clean());
	});

});

describe('String', function () {

	it('different response', function () {
		expect(char).to.not.equal(CleanText.clean(char));
	});

	it('not incluide character', function () {
		expect('<script></script>').not.to.include(CleanText.clean(char));
	});

	it('not incluide character: Char origin', function () {
		expect(char).not.to.include(CleanText.clean(char));
	});

});
