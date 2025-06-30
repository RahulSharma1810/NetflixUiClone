import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowForwardCircleOutline,IoArrowBackCircleOutline } from "react-icons/io5";

const TitleCards = ({title,category}) => {

  
  const [apiData, setApiData] = useState([]);
      const cardsRef = useRef(null);
        
      const scrollLeft = ()=>{
        cardsRef.current.scrollBy({
          left: -300, behavior:"smooth"
        })
      }
      const scrollRight = ()=>{
        console.log("scroll right clicded")
        cardsRef.current.scrollBy({
          left: 300, behavior:"smooth"
        })
      }

      const handleWheel = (event) =>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
      }


      useEffect(() =>{
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);

      },[])

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2VkZGMzYjZlZTU0NjE1YWU1NmFjODBjZDVlYWM2OSIsIm5iZiI6MTc1MDY5MDkxNy4wOTksInN1YiI6IjY4NTk2YzY1MWU1YzdlNjFkYzk5NjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiNVCgYO1v2KsGyznsGp5xGpzQdoH3z7rmybwNjJrTc'
  }
};


  return (
    <div className='mt-[50px]  mb-[30px]'>
        <h2 className='mb-4 text-white'>{title?title:"Popular on Netflix"}</h2>

        
        <div className=' flex scrollbar-hide overflow-x-auto  whitespace-nowrap
        gap-2 px-4 py-2 snap-x snap-mandatory'
        ref={cardsRef} >
            {apiData.map((card,index) => (
<div className='w-[300px] snap-start shrink-0 h-auto' key={index}>  
                  <Link  to={`/player/${card.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
                  className=' flex  border-2  h-40 w-full  cursor-pointer decor' alt="" /> 
                <p className='text-white'>{card.original_title}</p>
                </Link>
                </div> 

            ))}
        </div>
        <div className='flex text-center justify-self-end text-red-400   '>
        
          <button onClick={scrollLeft} 
          className=''>
            <IoArrowBackCircleOutline
            className='h-10 w-16'/>
          </button>
          <button className=' rounded-md text-red-400'
          
          onClick={scrollRight}>
            <IoArrowForwardCircleOutline className='h-10 w-16'/>
          </button>
        </div>
    </div>
  )
}

export default TitleCards