const Pokemon = require("../models/pokemones.model");
const { Review } = require("../models/reviews.model");


module.exports.createReview = async(req,res)=>{
    try{
        const {rating,content,creatorName,idPokemon} = req.body;
        const review = await Review.create({rating,content,creatorName});
        const pokemon = await Pokemon.findById(idPokemon).exec();
        pokemon.reviews.push(review);
        await pokemon.save();
        res.json({message:"", review:review});
    }
    catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}

module.exports.getReviewsFromPokemon = async(req,res)=>{
    try{
        const {idPokemon} = req.params;
        const pokemon = await Pokemon.findById(idPokemon).populate("reviews").exec();
        console.log("REVIEWS DEL PRODUCT",pokemon.reviews);
        res.json({message:"",reviews:pokemon.reviews})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}