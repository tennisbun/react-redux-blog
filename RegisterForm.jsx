import React from 'react'
import {useForm} from 'react-hook-form'
import {useRef} from 'react'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

function RegisterForm() {

  const formRef = useRef();
    
  const schema = yup.object().shape({
      fullname: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(7).required(),
      confirmpassword: yup.string().oneOf([yup.ref("password"),null], "passwords dont match").required(),
  })
   
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
    
  const onSubmit =(userData)=> {

    console.log(userData);
    formRef.current.reset();
    
    fetch('http://localhost:3000/signup',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:'post', body: JSON.stringify(userData)
      })
    .then((response)=>console.log(response.body));

  }

  let errorClass = "text-xs text-rose-600";

  return (
    <div className="">
      
      <div> 
    
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef} 
            className="flex flex-col border p-5 rounded shadow-xl">

          <p className="flex justify-center items-center mt-1 text-sm">Sign Up</p>
    
          <input {...register("email")}
            className="emailInput px-2 border mt-2 text-xs outline-none" placeholder="email"></input>
            <p className={errorClass}>{errors.email?.message}</p>
          
          <input {...register("fullname")}
            className="fnInput px-2 border mt-2 text-xs outline-none" placeholder="full name"></input>
          <p className={errorClass}>{errors.fullname?.message}</p>
          
          <input {...register("password")} 
            className="pwdInput px-2 border mt-2 text-xs outline-none" type="password" placeholder="password"></input>
          <p className={errorClass}>{errors.password?.message}</p>
          
          <input {...register("confirmpassword")}
            className="pwdcfInput px-2 border mt-2 text-xs outline-none" type="password" placeholder="password">
          </input>
          <p className={errorClass}>{errors.confirmpassword?.message}</p>
          
          <button type="submit" 
            className="submitButton px-2 border mt-2 text-sm bg-green-600 hover:bg-green-800 duration-300 text-white ">Submit</button>
        
        </form>
      
      </div>
    
    </div>
  )
}

export default RegisterForm 
