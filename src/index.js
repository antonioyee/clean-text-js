var characters = require('./characters.json');

var CleanText = (function () {

	validateParam = function (text) {
		isUndefined(text);
		isString(text);

		return changeText(text);
	};

	isString = function (text) {
		
		if ( typeof text === 'string' ) {
			return true;
		}

		throw new Exception('the value is not defined as a string');
	};

	isUndefined = function (text) {
		if ( typeof text === 'undefined' ) {
			throw new Exception('value is not defined');
		}

		return true;
	};

	changeText = function (text) {

		characters.map(function (character) {
			text = text.replace(new RegExp(character, 'g'), '');
		});

		return text;
	};

	return {
		clean: function (text) {
			try{
				return validateParam(text);
			}catch(e){
				return e.message;
			}
		}
	};

})();

function Exception(message) {
   this.message = message;
}

module.exports = CleanText;
