
//Abertura para Modulo de Fábrica
angular.module('UserDirectory').factory('Utils', function($ionicLoading,$ionicPopup) {

	var Utils = {

//POPUP de Carregamento

    show: function() {
      $ionicLoading.show({
  	    animation: 'fade-in',
  	    showBackdrop: false,
  	    maxWidth: 200,
  	    showDelay: 500,
        template: '<p class="item-icon-left">Carregando...<ion-spinner icon="lines"/></p>'
      });
    },

    hide: function(){
      $ionicLoading.hide();
    },

//POPUP de Mensagem
		alertshow: function(tit,msg){
			var alertPopup = $ionicPopup.alert({
				title: tit,
				template: msg
			});
			alertPopup.then(function(res) {
				//console.log('Registrado correctamente.');
			});
		},

		errMessage: function(err) {

	    var msg = "Usuário ou senha não conferem!";
/*
	    if(err && err.code) {
	      switch (err.code) {
	        case "EMAIL_TAKEN":
	          msg = "This Email has been taken."; break;
	        case "INVALID_EMAIL":
	          msg = "Invalid Email."; break;
          case "NETWORK_ERROR":
	          msg = "Network Error."; break;
	        case "INVALID_PASSWORD":
	          msg = "Invalid Password."; break;
	        case "INVALID_USER":
	          msg = "Invalid User."; break;
	      }
	    }
	*/
			Utils.alertshow("Erro",msg);
	},


  };

	return Utils;

});
