import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';
import { simpleGet } from '../services/simpleGet';

const Reviews = () => {

    const {idPokemon} =useParams();
    const [pokemon, setPokemon] = useState();
    const [reviews, setReviews] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getPokemon();
        getReview();
    }, []);
    
    const getPokemon = async() =>{
        const response = await simpleGet("http://localhost:8000/api/pokemones/"+idPokemon)
        console.log(response);
        setPokemon(response.data.pokemon);
    }

    const getReview = async() =>{
        const response = await simpleGet("http://localhost:8000/api/reviews/"+idPokemon)
        console.log(response);
        setReviews(response.data.reviews);
    }

    const deletePokemon = async() =>{
        const response = await simpleDelete("http://localhost:8000/api/pokemones/"+idPokemon)
        console.log(response);
        navigate('/');
    }


    return (
        <div>
            <button onClick={()=>deletePokemon()}>Borrar Pokemon</button>
            <table className="table">
        <thead>
            <tr>
                <th scope="col">Nombre creador</th>
                <th scope="col">Rating</th>
                <th scope="col">Contenido</th>
            </tr>
        </thead>
        <tbody>
            {reviews?.map((review)=>
                <tr key= {review._id}>
                <th > {review.creatorName} </th>
                <td> {review.rating} </td>
                <td> {review.content}</td>
                
        </tr>
        

        )}
        </tbody>
            </table>
            <button onClick={()=>navigate('/')}>Volver</button>
        </div>
    );
}

export default Reviews;
