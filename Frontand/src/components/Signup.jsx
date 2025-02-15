import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div  className="border[2px] shadow-md p-5 rounsed-md w-[600px]">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-box btn-ghost absolute right-2 top-2">Back</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-'>
      <span>Name</span>
      <br />
      <input type="text"  placeholder='Entere your Name' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("name", { required: true })}
      />
      <br />
      {errors.name && <span className='text-small text-red-500'>This field is required</span>}
    </div>
    {/* {email} */}
    <div className='mt-4 space-y-'>
      <span>Email</span>
      <br />
      <input type="email"  placeholder='Entere your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("email", { required: true })}
      />
      <br />
      {errors.email && <span className='text-small text-red-500'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-4 space-y-'>
      <span>Password</span>
      <br />
      <input type="password"  placeholder='Entere your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("password", { required: true })}/>
      <br />
      {errors.password && <span className='text-small text-red-500'>This field is required</span>}
      </div>
      {/* button */}
      <div className='flex justify-around mt-5'>
    <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'>Signup</button>
    <p>Have account? {"  "} 
      <button className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}> Login</button>
      <Login></Login>
    </p>
    
      </div>
      </form>
  </div>
    </div>
    </div>
    </>
    
  )
}

export default Signup