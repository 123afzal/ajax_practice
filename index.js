/**
 * Created by Syed Afzal on 2/24/2017.
 */
var obj =  J$();

//Promise
//then() method
//resolve
//reject
//callbacks

obj.getMovies("GET", "moviedata.json").then(function (response) {
    console.log(response)
});

obj.delMovie("GET", "moviedata.json", 3).then(function (response){
   console.log(response);
});

var updat_movie = [{"title": "John Wick 2", "release_date": "25/2/2017"}];
console.log(updat_movie[0].title);
obj.editMovie("GET", "moviedata.json", 5, updat_movie).then(function (response){
    console.log(response);
});



