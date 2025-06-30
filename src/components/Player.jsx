import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {


    const navigate = useNavigate();

    const {id} = useParams();

    const [apiData,setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })

    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2VkZGMzYjZlZTU0NjE1YWU1NmFjODBjZDVlYWM2OSIsIm5iZiI6MTc1MDY5MDkxNy4wOTksInN1YiI6IjY4NTk2YzY1MWU1YzdlNjFkYzk5NjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiNVCgYO1v2KsGyznsGp5xGpzQdoH3z7rmybwNjJrTc'
    }
};

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])


    return (
        
    <div className=' flex w-full h-full p-10 flex-col text-center absolute items-center'>
        <img src="/back_arrow_icon.png"
        className='absolute top-[20px] left-[20px] cursor-pointer object-cover h-10 w-10'
        onClick={() => {navigate(-2)}}
        alt="" />
        <div className=' h-full w-full px-32 relative'>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
        className='w-full h-full    '
            title='trailer' frameborder="0" allowFullScreen></iframe>
            </div>
            <div className='flex items-center text-white justify-between w-[90%]'>
                <p>{apiData.published_at.slice(0,10)} </p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
    </div>
    
    )
}

export default Player