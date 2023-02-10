import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  const [search, setSeacrh]= useState();
  return (
    <div className='homeBg'>
        <div className='home'>
            <h1>Search for your favourite movies and tv shows!.</h1>
            <input onChange={(event)=>setSeacrh(event.target.value)} value = {search} placeholder='Search Movies, TV shoows and more...'/>
            <button >
                <Link to={`/search/${search}`}>Search</Link>
            </button>
        </div>
    

    </div>
  )
}





































