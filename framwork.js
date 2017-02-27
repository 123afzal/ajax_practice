/**
 * Created by Syed Afzal on 2/24/2017.
 */
(function(global){
    var jsonObj = function(){
        return new jsonObj.init();
    }

    jsonObj.prototype = {
        getMovies : function (requestMethod, url) {
            // var ajx = new XMLHttpRequest();
            //
            // ajx.onreadystatechange = function(){
            //     //console.log(this.readyState);
            //     if(this.readyState==4 && this.status==200){
            //         var parsedObject= JSON.parse(this.responseText);
            //         cb(parsedObject);
            //         return parsedObject;
            //     }
            // };
            // ajx.open("GET", "moviedata.json", true);
            // ajx.send();

            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    resolve(JSON.parse(this.responseText));
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