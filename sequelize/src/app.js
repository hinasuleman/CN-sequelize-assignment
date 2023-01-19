require("dotenv").config();
const yargs = require("yargs");
const sequelize = require("./db/connection");
const {createMovie, listMovie, updateActor, updateDirector, deleteMovie} = require("./movie/function");
const Movie = require("./movie/movie.table.js")
const Actor = require("./movie/actor.table.js");
const { HasMany } = require("sequelize");
console.log (process.env.MYSQL_URI)

async function app(yargsInput) {
    await sequelize.sync({alter:true});  
    Actor.hasMany (Movie);
    Movie.belongsTo (Actor)
    if (yargsInput.create) {
        //place code to create movie here
        // await createMovie({
        //     titles: [yargsInput.titleone,yargsInput.titletwo,yargsInput.titlethree],
        //     actor: yargsInput.actor
           
        // })
        const obj = {titles: [yargsInput.titleone,yargsInput.titletwo,yargsInput.titlethree],
            actor: yargsInput.actor}
        const actor = await Actor.create({name:obj.actor})
        obj.titles.forEach (async (title) => {
        await actor.createMovie({title:title})
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