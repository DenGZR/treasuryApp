import angular from 'angular';
import animate from 'angular-animate';
import uirouter from 'angular-ui-router';
import appVars from './appVars';

import toolsService from './toolsService';
// routing
import routing from './routing';

//service

//modules
import Auth from './modules/Auth';
import validation from './modules/validation';

angular.module('treasuryApp', ['validation'])
	.run(function ($state, $rootScope, AuthService) {
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			console.log('stateChangeStart triggered');
			if (!AuthService.isLoggedIn()) {
				if (toState.name !== 'login' && toState.name !== 'registration') {
					event.preventDefault();
					$state.go('login');
				}
			}
		});
	})
	.config(routing)
	.factory('toolsService', toolsService)
	.factory('appVars', appVars);
