import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    const handleGoBack = () => {
        navigate(-1)
    }


    const getBeer = async () => {
        try {
            const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
            const data = await res.json();
            if (data && data.length > 0) {
                setBeer(data[0]);
            }
        } catch (error) {
            console.error('Error fetching beer:', error);
        }
    };

    useEffect(()=>{
        getBeer()
    }, [id])
    
  
  
  return (
    <div>
        <h2>Cerveza numero {beer.id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={handleGoBack}>Go back</button>
    </div>

  )
}

export default Beer