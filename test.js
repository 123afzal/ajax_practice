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
})


