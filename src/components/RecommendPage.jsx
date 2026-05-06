import React from 'react'
import { useLocation, useNavigate } from 'react-router';


const RecommendPage = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { recomendation, songName } = location.state;
    console.log(songName);
    console.log(recomendation);


    

  return (
    <div className='text-white max-w-screen-xl mx-auto text-5xl overflow-hidden'>
        <h3 className='font-bebas text-center'>Your search: {songName}</h3>
        <div className='flex items-center justify-between'>
          <h4 className='font-mono mt-10'>Our Recommendations</h4>
          <button onClick={()=>navigate('/')} className='px-4 py-2 text-lg bg-[#E50914] rounded-full cursor-pointer'>GO BACK</button>
        </div>
          <div className='w-full flex flex-col items-start gap-5 mt-7'>
            {recomendation.map(( item , index)=>{
              const duration_sec = item.duration_ms
              const duration_seconds = Math.floor(duration_sec / 1000);
              const minutes = Math.floor(duration_seconds / 60);
              const seconds = duration_seconds % 60;
              item.duration = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
              
              return (
                <div key={index} className={`w-[70%] mx-auto h-62 rounded-xl p-7 pt-10 bg-zinc-700`}>
                  <div className='w-full h-full flex items-center justify-between gap-7'>
                    <img className='h-full shadow-xl rounded shadow-black' src={item.image ? item.image : './placeholder.png'} alt="" />
                    <div className='h-full w-full flex flex-col items-start justify-end'>
                      <div className='pr-40'>
                        <h3 className='text-lg font-bold bottom-0'>Song</h3>
                        <p className='text-3xl font-black leading-9'>{item.name}</p>
                        <div className=''>
                          <a href='' className='text-sm'>{item.artist}</a>
                          <a href='' className='text-sm'>{item.album}</a>
                          <a href='' className='text-sm'>{item.duration ? item.duration : 'UA'}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
              })}
          </div>
            
        </div>
  )
}

export default RecommendPage