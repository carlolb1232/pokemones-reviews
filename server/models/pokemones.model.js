const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  nombre:{
      type:String,
      required:[true,"El nombre es obligatorio (back)"],
      minlength:[3, "El pokemon debe tener minimo 3 caracteres"],
      maxlength:[20, "El pokemon maximo 20 letras debe de tener"]
  },
  entrenador:{
      type:String,
      required:[true,"El entrenador es obligatorio (back)"],
      minlength:[3, "El entrenador debe tener minimo 3 caracteres"],
      maxlength:[20, "El pokemon maximo 20 letras debe de tener"]
  },
  tipos:{
      type:Array,
      required:[true,"El tipo es obligatorio (back)"],
      minlength:[1, "El tipo es de uno al menos"],
  },
  /* salud:{
    type:Number,
    required:[true, "La salud es obligatoria"],
    minlength:[1, "Al menos debe de tener 1 de salud"]
  },
  poder:{
    type:Number,
    required:[true, "El poder es obligatoria"],
    minlength:[1, "Al menos debe de tener 1 de poder"]
  }, */
  reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
},
{
timestamps:true
})

const Pokemon = mongoose.model("Pokemon",PokemonSchema);

module.exports = Pokemon;