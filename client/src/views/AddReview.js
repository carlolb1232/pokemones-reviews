import React, { useEffect, useState,} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import { simpleGet } from '../services/simpleGet';
import { simplePost } from '../services/simplePost';

const AddReview = () => {

  const {idPokemon} =useParams();
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async() =>{
    const response = await simpleGet("http://localhost:8000/api/pokemones/"+idPokemon)
    console.log(response)
    setPokemon(response.data.pokemon)
  }

  const crearReview = async (values) =>{
    values.idPokemon = idPokemon
    const response = await simplePost("http://localhost:8000/api/reviews/new",values)
    navigate("/");
  }



  return (
    <div>
      <h2>{pokemon?.nombre}</h2>
      <h3>{pokemon?.entrenador}</h3>
      <h4>{pokemon?.tipos}</h4>
      <ReviewForm content="" rating ={1} creatorName="" onSubmitProp={crearReview}/>
    </div>
  );
}

export default AddReview;
