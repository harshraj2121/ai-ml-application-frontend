import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import { useNavigate } from 'react-router'

const Home = () => {

  
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [outSongs, setOutSongs] = useState([])
  const [recomendation, setRecomendation] = useState("")


    function debounce(func, delay) {
    let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }

    const fetchData = async (query) => {
      if (!query || query.trim().length < 2) return; // optional safety
    
      try {
        const res = await axios.post(`${process.env.VITE_BACKEND_URL}/search`, {
          search: query
        });
        setOutSongs(res.data.searchedOutput);
      } catch (err) {
        console.error("Search error:", err);
      }
    };


    const debouncedFetch = useCallback(
      debounce((query) => {
        fetchData(query);
      }, 1000),
      []
    );
    const handleSearch = (e) => {
    setSearch(e.target.value);
    debouncedFetch(e.target.value);
  };


    const handleSongClick = async (songName) => {
      const res = await axios.post(`${process.env.BACKEND_URL}/recommend`, {songName: songName});
      console.log("han chal gaya")
      setRecomendation(res.data.recommendation);
      console.log(res.data.recommendation)
      navigate("/recommend", {state: {recomendation: res.data.recommendation, songName: songName}});
    }
    
    useEffect( ()=>{
      console.log(recomendation)
    }, [search, outSongs, recomendation])

  return (
    <div className='max-w-screen-xl mx-auto flex items-center flex-col text-white font-bebas tracking-wider relative'>
        <h1 className='text-6xl mt-10 font-bold'>Song Recomendation System</h1>
        <div className='w-[60%] mt-2 flex items-center justify-center relative'>
            <input type="text" onChange={handleSearch} value={search} spellCheck='false' className='w-full h-12 bg-zinc-700 rounded p-3 outline-[1px] mt-4 placeholder:tracking-widest' placeholder='Search For A Song' />
            {search.length > 0 ? (<span onClick={()=>{setSearch(""); setOutSongs([])}}className='absolute top-1/2 -translate-y-[10%] right-4 cursor-pointer'><ImCancelCircle /></span>) : null}
        </div>
        {search.length > 0 ? (
            <div className='w-[60%] max-h-fit h-[57vh] bg-zinc-200 text-black overflow-auto absolute top-[100%]'>
              {outSongs.map((item, id)=>{
                  return (
                      <div key={id} onClick={()=>handleSongClick(item.name)} className='relative cursor-pointer w-full h-24 flex items-center justify-start px-3 gap-5 border-1 border-black'>
                        <img src={item.image || "./placeholder.jpg"} className='h-18 w-18 bg-amber-100'/>
                        <div>
                          <p className='text-xl font-mono tracking-tighter'>{item.name}</p>
                          <span className='text-zinc-600'>{item.artist}</span>
                          <span className='pl-3 text-zinc-600'>album:[{item.album}]</span>
                        </div>
                      </div>
                  )
              })}
            </div>
        ): null}
    </div>
  )
}

export default Home