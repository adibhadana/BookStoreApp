import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"

function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container max-auto md:px-20 px-4 '>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus inventore perferendis commodi repellendus ipsam reprehenderit quasi aspernatur distinctio. Dolorum mollitia totam tenetur laborum non maxime? Voluptas repellat doloremque provident iusto. Consequuntur iusto illo laborum? Cupiditate ratione nam aliquid perferendis dolorem neque excepturi, asperiores, omnis assumenda eius mollitia officia?</p> 
      <Link to='/'>
      <button  className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
      
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
        list.map((item)=>(
         <Cards key={item.id} item={item}></Cards>
        ))
      }
    </div>
   </div>
   </>
  )
}

export default Course