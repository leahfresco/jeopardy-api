"use strict";

var rewire = require('rewire');
var expect = require('chai').expect;
var supertest = require('supertest');
var app = require('../server/server.js');
var api = supertest(app);

describe ('canary test', function(){
	it('should pass the canary test', function(){
		expect(true).to.be.true;
	});
});

describe('jeopardyQuestions function tests', function(){
	it('returns encouragment', function(done) {
		api.get('/api/jeopardyQuestions/encouragement')
		.end(function (err, res){
			if (err) throw err;
			console.log(res.body);
			expect([
				"Youre doing great!",
				"You are so smart!",
				"No one is as smart as you!"
			]).to.include(res.body.encouragement);
				done();
		})
	});
});