const PokemonController = require("../controllers/pokemones.controller")
const ReviewController = require("../controllers/reviews.controller")

module.exports = app => {

    //Pokemones
    app.get("/api/pokemones",PokemonController.findAll);
    app.get("/api/pokemones/:id",PokemonController.findOne);
    app.post("/api/pokemones/",PokemonController.createPokemon);
    app.put("/api/pokemones/:id",PokemonController.update);
    app.delete("/api/pokemones/:id",PokemonController.delete);

    // Reviews
    app.post("/api/reviews/new",ReviewController.createReview);
    app.get("/api/reviews/:idPokemon",ReviewController.getReviewsFromPokemon);
}