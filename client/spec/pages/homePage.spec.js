'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {
  var homePage;

  beforeEach(function() {
    homePage = new HomePage();
  });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the contacts page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });

    describe('left', function() {
      it('should take the user to the register page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('register');
      });
    });

    describe('top', function() {
      it('should scroll the watch face up', function() {
        spyOn(homePage, 'scrollUp');
        homePage.setButtonEvents();
        homePage.trigger('top');
        expect(homePage.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', function() {
      it('should scroll the watch face down', function() {
        spyOn(homePage, 'scrollDown');
        homePage.setButtonEvents();
        homePage.trigger('bottom');
        expect(homePage.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      homePage.render();
      expect(homePage.$el).toContainText('Hello, World!');
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });
  });

});
