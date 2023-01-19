const Movie = require("./table");

exports.createMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
       console.log(error);
    }
}

exports.listMovie = async () => {
    try {
        console.log("entering list movies");
        const movies = await Movie.findAll();
        console.log("all movies:", JSON.stringify(movies, null, 2));
    } catch (error) {
       console.log(error);
    }
}

exports.updateActor = async (inputActor,inputTitle) => {
    try {
        console.log("update actor");
        const movies = await Movie.update({ actor: inputActor}, {
            where: {
                title: inputTitle
            }
        });
       
    } catch (error) {
       console.log(error);
    }
}

exports.updateDirector = async (inputDirector,inputTitle) => {
    try {
        console.log("update director");
        const movies = await Movie.update({ director: inputDirector}, {
            where: {
                title: inputTitle
            }
        });
       
    } catch (error) {
       console.log(error);
    }
}

exports.deleteMovie = async (inputTitle) => {
    try {
        console.log("delete Movie");
        const movies = await Movie.destroy(  {
            where: {
                title: inputTitle
            }
        });
       
    } catch (error) {
       console.log(error);
    }
}