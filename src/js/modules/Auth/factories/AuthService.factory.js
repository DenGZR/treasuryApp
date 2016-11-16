AuthService.$inject = ['$localStorage', '$q'];

export default function AuthService ($localStorage, $q) {
	var auth = $firebaseAuth(firebase.auth());
	var authUser;

	return {
		isLoggedIn: () => {
			return true;
		},

		signIn: (email, password) => {
			return auth.$signIn(email, password);
		},

		signOut: () => {
			auth.$signOut();
		},

		createNewUser: (email, password) => {
			return auth.$createNewUser(email, password);
		},

		getDataUser: () => {
			return auth.$getAuth();
		}
	}

};

/*
 if ($localStorage.authUser) {
 authUser = $localStorage.authUser
 } else {
 authUser = {
 status: false,
 data: false
 }
 }
 */
