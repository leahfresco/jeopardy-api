'use strict';

module.exports = function(Jeopardyquestion) {

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.ceil(max);
		return Math.floor(Math.random()* (max-min)) + min;
	}

	Jeopardyquestion.encouragement = function(cb){
		var encouragementArray = [
			"Youre doing great!",
			"You are so smart!",
			"No one is as smart as you!"
		];
		var random = getRandomInt(0, (encouragementArray.length));
		return cb(null, encouragementArray[random])
	}

	Jeopardyquestion.remoteMethod(
		'encouragement', {
			http: {
				path: '/encouragement',
				verb: 'get'
			},
			description: 'Gives you encouragement',
			returns: {
				arg: 'encouragement',
				type: 'json'
			}
		}
	);
};
