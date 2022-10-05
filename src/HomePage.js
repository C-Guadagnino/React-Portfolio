import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import passion from "./images/passion.png"

function HomePage() {

    const slideLeft = () => {
      let slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 500
    }
    
    const slideRight = () => {
      let slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft + 500
    }

    // const handleGitClick = (item) => {
    //   item.link ? window.open(item.link) : "Sup Bitch"
    // }
  
    return (
      <>
      <div>
       <div className='bg-hero-image w-full h-[1000px] bg-cover bg-center flex items-center px-4 justify-center'>
            <div className='uppercase text-center text-white font-extrabold'>
                <h1 className='text-8xl '>Cameron Guadagnino</h1>
                <h3>Full Stack Engineer</h3>
            </div>
        </div> 
        <div className='relative flex items-center bg-gradient-to-b from-gray-900 to-gray-500'>
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div id='slider' className='w-full h-[150px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex'>
              {data.map((item) => (
                <img className='w-[200px] h-[150px] opacity-70 justify-center inline-block p-2 cursor-pointer hover:opacity-100 hover:scale-90 ease-in-out duration-300'src={item.img} alt='/' onClick={() => item.link ? window.open(item.link) : "There is no link to this project"} />
              ))}
            </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>

        </div>
      </>
    );
  }
  
  export default HomePage;