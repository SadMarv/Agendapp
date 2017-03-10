
//Abertura do Modulo de Serviço
app = angular.module('UserDirectory.services', [])

    //Serviço para interceptar status de autorização de login
    app.service('APIInterceptor', function ($rootScope, $q) {
            var service = this;

            service.responseError = function (response) {
                if (response.status === 401) {
                    $rootScope.$broadcast('unauthorized');
                }
                return $q.reject(response);
            };
        })

    //Serviço de Login
    app.service('LoginService', function (Backand) {
        var service = this;

        service.signin = function (email, password, appName) {
            //chamada do Backand para login
            return Backand.signin(email, password);
        };

        service.signout = function () {
          //Chamada do Backand para logoff
          return Backand.signout();
        };

        //Serviço para cadastrar um usuario
        service.signup = function(firstName, lastName, email, password, confirmPassword, parameters){
            return Backand.signup(firstName, lastName, email, password, confirmPassword, parameters);
        }
    })



    //Serviço de Atividades
    app.service('itemsAtiv', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'Atividade/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })


    //Serviço de Resumo do Dia
    app.service('resumo', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'ResumoDoDia/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviço de Comunicados
    app.service('comunicados', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'comunicados/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviço de Eventos
    app.service('eventos', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'eventos/';


        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })


    //Serviço de Coordenador
    app.service('userAdmin', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'userAdmin/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviço de Professor
    app.service('userFuncio', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'userFuncio/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviço de Turmas
    app.service('turmas', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'turmas/';
            objectDeep = '?deep=true';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id + objectDeep;
        }

        service.all = function () {
            return $http.get(getUrl());
        };


        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })


    //Serviço de Alunos
    app.service('alunos', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'alunos/';
            objectDeep = '';


        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }


        service.all = function () {
            return $http.get(getUrl());
        };


        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviçlo de Relação de Usuarios com Turmas
    app.service('users_turmas', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'users_turmas/';


        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }


        service.all = function () {
            return $http.get(getUrl());
        };


        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(), object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviço de Responsáveis
    app.service('responsaveis', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'responsaveis/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }


        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(),object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })

    //Serviço da base de usuarios
    app.service('users', function ($http, Backand) {
        var service = this,
            baseUrl = '/1/objects/',
            objectName = 'users/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        function getUrlForId(id) {
            return getUrl() + id;
        }


        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (id) {
            return $http.get(getUrlForId(id));
        };

        service.create = function (object) {
            return $http.post(getUrl(),object);
        };

        service.update = function (id, object) {
            return $http.put(getUrlForId(id), object);
        };

        service.delete = function (id) {
            return $http.delete(getUrlForId(id));
        };
    })
