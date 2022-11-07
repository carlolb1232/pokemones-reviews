const Pokemon = require("../models/pokemones.model")
const { Review } = require("../models/reviews.model")


module.exports.findAll = (req,res) => {
    Pokemon.find()
        .then((all)=>res.json({pokemones:all}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.createPokemon = async(req,res)=>{
    try{
        const {nombre, entrenador, tipos, salud, poder, rating, content, creatorName} = req.body;
        const review = new Review({rating,content,creatorName});
        const pokemon = new Pokemon({nombre, entrenador, tipos, salud, poder});
        pokemon.reviews.push(review);
        await pokemon.save();
        await review.save();
        res.json({message:"",pokemon:pokemon,review:review})
    }
    catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}

module.exports.findOne = (req,res) => {
  Pokemon.findOne({_id: req.params.id})
        .then((pokemon)=>res.json({pokemon:pokemon}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.update = (req,res) => {
  Pokemon.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators: true})
        .then((pokemon)=>res.json({message:"", pokemon:pokemon}))
        .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.delete = (req,res) => {
  Pokemon.deleteOne({_id: req.params.id})
        .then((result)=>res.json({resultado:result}))
        .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}