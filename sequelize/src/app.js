const yargs = require("yargs");
const sequelize = require("./db/connection");
const {createMovie, listMovie, updateActor, updateDirector, deleteMovie} = require("./movie/function");

async function app(yargsInput) {
    await sequelize.sync({alter:true});  
    if (yargsInput.create) {
        //place code to create movie here
        await createMovie({
            title:yargsInput.title,
            actor: yargsInput.actor,
            director: yargsInput.director
        })
    } else if (yargsInput.read) {
        //place code to list all our movies here
        await listMovie();
    } else if (yargsInput.updateActor) {
        //place code to update actor field here
        await updateActor(yargsInput.actor, yargsInput.title);
    } else if (yargsInput.updateDirector) {
        //place code to update director field here
        await updateDirector(yargsInput.director, yargsInput.title)
    } else if (yargsInput.delete) {
        //place code to delete a movie from our table here
        await deleteMovie (yargsInput.title) 
    } else {
        console.log("Unrecognised Yargs command");
    }
}

app(yargs.argv);