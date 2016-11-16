
import loginTmpl from './pages/login/login.html';
import loginCtrl from './pages/login/loginCtrl';

import registrationTmpl from './pages/registration/registration.html';
import registrationCtrl from './pages/registration/registrationCtrl';

import sideMenuTmpl from './pages/menu/sideMenu.html';
import sideMenuCtrl from './pages/menu/sideMenuCtrl.js';

export default function routing ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			abstract: true,
			template: sideMenuTmpl,
			controller: sideMenuCtrl,
			controllerAs: 'sideMenuCtrl'
		})
		.state('login', {
			url: '/login',
			template: loginTmpl,
			controller: loginCtrl,
			controllerAs: 'loginCtrl'
		})
		.state('registration', {
			url: '/registration',
			template: registrationTmpl,
			controller: registrationCtrl,
			controllerAs: 'registrationCtrl'
		})
		.state('app.trip', {
			abstract: true,
			url: '/trip/:id',
			template: tabTripTmpl,
			cache: false,
			controller: tripCtrl,
			controllerAs: 'tripCtrl'
		})
	$urlRouterProvider.otherwise('/list-trips')
};
