import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
//import {Link} from "react-router-dom";
import { edadValidator } from "./validators";
import img from '../../assets/login/koala_login.jpg'
import logo from '../../assets/icons/koalaLogo.png';
import Footer from "../../components/Footer/Footer";


// const validateForm = (input) => {
//   const error = {};
//   if(!input.username.length) error.username = <h3>username is required</h3>
//   if(!input.email.length) error.email = <h3>email is required</h3>
//   if(!input.name.length) error.name = <h3>name is required</h3>
//   if(!input.last_name.length) error.last_name = <h3>last name is required</h3>
//   if(!input.password.length) error.password = <h3>password is required</h3>
//   if(!input.img.length) error.img = <h3>img is required</h3>
//   if(!input.date.length) error.date = <h3>date is required</h3>
//   if(!input.description.length) error.description = <h3> description is required</h3>
//   if(!input.genre.length) error.genre = <h3>genre is required</h3>
//   // if(!input.baned.length) error.baned = <h3>baned is required</h3>
//   // if(!input.is_admin.length) error.is_admin = <h3>is admin is required</h3>

//   return error;
// }



export default function CreateUser() {
 const dispatch = useDispatch();
  //const history = useHistory();

  const [error, setErrors] = useState({});

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
        img: 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png',
        is_banned: false
    }
});
  // const [input, setInput] = useState({
  //   username: "",
  //   email: "",
  //   name: "",
  //   last_name: "",
  //   banned: false, //ver xq esta como booleano
  //   password: "",
  //   img: "",
  //   date: "",
  //   description: "",
  //   genre: [],
  // });

  
  //history.push("/home");
/* 
  useEffect(() => {

    
  }, []); */

  function handleInputChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validateForm({
      ...input,
      [e.target.name]: e.target.value
    }))
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (
  //     !input.username ||
  //     !input.email ||
  //     !input.name ||
  //     !input.last_name ||
  //     !input.password ||
  //     !input.date
  //   ) {
  //     console.log("El input", input);
  //     return alert("Complete all required fields");
  //   }
  //   // PostUser5(input);
  //   alert("User created");
  //   console.log(input);
  //   setInput({
  //     username: "",
  //     email: "",
  //     name: "",
  //     last_name: "",
  //     password: "",
  //     date: "",
  //   });
  // }


  const genre = ['male', 'female']

  const onSubmit = (data) => {
    console.log(data);
}


  return (
    <div >

        <div className="flex min-height-full">

            <div className="hidden lg:block relative h-full flex-1">
              <img class='w-[750px] ' src={img} alt="" /> 
            </div>

            <div className="justify-center flex-1 flex flex-col py-12 px-4 sm:px-6 lg:px-20 xl:px-24" >

                <div class='text-center lg:text-left'>
                  <img class='h-12 w-auto m-auto lg:m-0' src={logo} alt="" />
                  <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>Create User</h2>
                </div>
              
                <div class='mt-6'>
                <form onSubmit={handleSubmit(onSubmit)} class='space-y-1'>

                  <div class='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>



                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Username: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='Username'  
                          type="text" {...register('username' , {
                          required: true,
                          maxLength: 50,
                          minLength: 3
                          })} />
                            {errors.username?.type === 'required' && <p class='text-red-600'> the user name is required</p>}
                            {errors.username?.type === 'maxLength' && <p class='text-red-600'>the maximum capacity of characters allowed is 50</p>}
                            {errors.username?.type === 'minLength' && <p class='text-red-600'>the minimum capacity of characters allowed is 3</p>}
                      </div>

                      {/* <div class='flex justify-center'>
                      {error.username && <span >{error.username}</span>}
                      </div> */}

                      <div >
                      <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Email</label>
                            <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='Email'  {...register('email', {
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                required: true,
                                maxLength: 50,
                                minLength: 3
                            })} />
                            {errors.email?.type === 'pattern' && <p class='text-red-600'>The email format is incorrect</p>}
                            {errors.email?.type === 'required' && <p class='text-red-600'> the email is required</p>}
                            {errors.email?.type === 'maxLength' && <p class='text-red-600'>the maximum capacity of characters allowed is 50</p>}
                            {errors.email?.type === 'minLength' && <p class='text-red-600'>wrong email</p>}
                      </div>

                      {/* <div class='flex justify-center'>
                      {error.email && <span >{error.email}</span>}
                      </div> */}

                      <div >
                      <label class='text-black '>Name</label>
                            <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Name' {...register('nombre', {
                                required: true
                            })} />
                      </div>

                      {/* <div class='flex justify-center'>
                      {error.name && <span >{error.name}</span>}
                      </div> */}

                      <div>
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'> Last name: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Last name'
                      
                          type="text"  {...register('last_name', {
                            required: true,
                        })} />
                        {errors.last_name?.type === 'required' && <p class='text-red-600' >the last name is required</p>}
                      </div>
                  {/* 
                      <div class='flex justify-center'>
                      {error.last_name && <span >{error.last_name}</span>}
                      </div> */}

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Password: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Password'
                    
                        type="password" {...register('password', {
                          pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ ,
                          required: true,
                          maxLength: 16,
                          minLength: 8
                      })} />
                      {errors.password?.type === 'required' && <p class='text-red-600'>the passaword is required</p>}
                      {errors.password?.type === 'pattern' && <p class='text-red-600'>the password at least one digit, at least one lower case and at least one upper case.</p>}
                      {errors.password?.type === 'maxLength' && <p class='text-red-600'>must have a maximum of 16 characters</p>}
                      {errors.password?.type === 'minLength' && <p class='text-red-600'>must contain at least 8 characters</p>}

                      </div>

                      {/* <div class='flex justify-center'>
                      {error.password && <span >{error.password}</span>}
                      </div> */}


                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Image: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='img'
                      
                          type="text"

                        />
                      </div>

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Date: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='date'
                      
                          type="date" {...register('date', {
                            required: true,
                            validate: edadValidator
                        })} />
                        {errors.date?.type === 'required' && <p class='text-red-600'> the date is required</p>}
                        {errors.date && <p>La edad minima es de 14</p>}
                      </div>

                      {/* <div class='flex justify-center'>
                      {error.date && <span >{error.date}</span>}
                      </div> */}

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Description: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Description'
                    
                          type="text" 

                        />
                      </div>

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Genre</label>
                        <select name="genre" class='rounded-md w-[250px] relative' >
                            <option value="">Select Genre</option>
                            {
                              genre.map(genre => (
                                <option value={genre} key={genre}>{genre}</option>
                              ))
                            }
                          </select>
                      </div>

                      </div>

                      <div>
                          <button class='mt-4 w-full py-3 bg-gray-900 text-white' type='submit'>Register</button>
                      </div>

                  </form>
                </div>
            
              
            </div>
        </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
