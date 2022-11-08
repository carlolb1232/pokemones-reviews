import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PokemonForm from "../components/PokemonForm";
import { simpleGet } from "../services/simpleGet";

const Main = () => {
  const [pokemones, setPokemones] = useState([]);
  const navigate =useNavigate()

  const getAllPokemon= async () =>{
    const response = await simpleGet("http://localhost:8000/api/pokemones/")
    setPokemones(response.data.pokemones)
  }

  useEffect(() => {
    getAllPokemon()
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Entrenador</th>
            <th scope="col">Tipos</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pokemones?.map((pokemon)=>
          <tr key= {pokemon._id}>
            <th scope="row"> {pokemon.nombre} </th>
            <td> {pokemon.entrenador} </td>
            <td> {pokemon.tipos[0]},{pokemon.tipos[1]},{pokemon.tipos[2]} </td>
            <td> <button onClick={()=>navigate(`/add-review/${pokemon._id}`)}>Añadir opinión</button> <button onClick={()=>navigate(`/reviews/${pokemon._id}`)}>Ver opiniones</button> </td>
          </tr>

          )}
        </tbody>
      </table>

      <Link to={"/create"}>Crear un pokemon</Link>
    </div>
  );
};

export default Main;
