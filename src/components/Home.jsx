import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-center justify-center gap-4 m-10'>
        <div className='flex items-center p-10 rounded-full bg-black justify-between gap-11 text-white'>
         
            <Link to={'/assignment1'}> 
            Assignment 1
            </Link>
          
            <Link to={'/assignment2'}>Assignment 2</Link>
          
            <Link to={'/assignment3'}>Assignment 3</Link>
        
            <Link to={'/assignment4'}>Assignment 4</Link>
          
            <Link to={'/assignment5'}>Assignment 5</Link>
          
            <Link to={'/assignment6'}>Assignment 6</Link>
          
            <Link to={'/assignment7'}>Assignment 7</Link>
          
        </div>
    </div>
  )
}

export default Home