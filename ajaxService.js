/**
 * Created by Syed Afzal on 2/24/2017.
 */
(function(global){
    var jsonObj = function(){
        return new jsonObj.init();
    }

    jsonObj.prototype = {
        getMovies : function (requestMethod, url) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    resolve(JSON.parse(this.responseText));
                };
                xhr.onerror=reject;
                xhr.open(requestMethod, url);
                xhr.send();
            });
        },

        delMovie : function (requestMethod, url, id) {
            self = this;
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    var movies=JSON.parse(this.responseText);
                    for(var i=0; i<movies.length; i++){
                        if(movies[i].id==id)
                        {movies.splice(i, 1);break;}
                    }
                    resolve(movies);
                };
                xhr.onerror=reject;
                xhr.open(requestMethod, url);
                xhr.send();
            });
        },

        editMovie : function (requestMethod, url,id,movie_obj) {
            self = this;
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                  var movies=JSON.parse(this.responseText);
                  for(var i=0; i<movies.length; i++) {
                      if (movies[i].id === id) break;
                  }
                  movies[i].title = movie_obj[0].title;
                  movies[i].release_date = movie_obj[0].release_date;
                  resolve(movies);
                };
                xhr.onerror=reject;
                xhr.open(requestMethod, url);
                xhr.send();
            });
        }
    };

    jsonObj.init = function () {
        var self = this;
    }

    //Inherited all functions which is in jsonObj.prototype
    jsonObj.init.prototype = jsonObj.prototype;

    //To call object from window
    global.jsonObj = global.J$ = jsonObj;
}(window));