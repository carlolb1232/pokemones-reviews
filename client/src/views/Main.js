import React, { useState } from 'react';
import PokemonForm from "../components/PokemonForm";
import { simplePost } from "../services/simplePost";
import { useNavigate } from "react-router-dom";

const Main = () => {
    

    const [pokemones, setPokemones] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    const crearPokemon = async (values) => {
        values.tipos = [values.tipo1,values.tipo2, values.tipo3 ] 
        console.log("VALORES DESDE FORMIK, EN VISTA MAIN", values);
        const response = await simplePost(
          "http://localhost:8000/api/pokemones/",
          values
        );
        if (response.data.message === "") {
            setPokemones([...pokemones, response.data.pokemon]);
        } else {
          console.log("ERRORES", response.data);
          const errorResponse = response.data.errors;
          console.log("Object keys", Object.keys(errorResponse));
          const errorArr = [];
          for (const llave of Object.keys(errorResponse)) {
            console.log(errorResponse[llave]);
            errorArr.push(errorResponse[llave].message);
          }
          setErrors(errorArr);
        }
      };


    return (
        <div>
           
      <PokemonForm
        nombre=""
        entrenador=""
        tipo1=""
        tipo2=""
        tipo3=""
        rating=""
        content=""
        creatorName=""
        

        onSubmitProp={crearPokemon}
      ></PokemonForm>
        </div>
    );
}

export default Main;
