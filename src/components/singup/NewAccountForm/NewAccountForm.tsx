"use client";
import { useState } from "react";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    handleCreateUser(formData)
  }

  return (
    <div className="block max-w-[30rem] mt-20 mx-auto"  >
      <h1 className="text-2xl font-bold mb-12 linearg text-transparent bg-clip-text">New Account</h1>
      <form className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-8" onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="first_name" 
            placeholder="Name" 
            disabled={loading}
            className="inputform" 
            />
        <input 
            type="text" 
            name="last_name" 
            placeholder="Lastname" 
            disabled={loading}
            className="inputform" 
            />
        <input 
            type="text" 
            name="email" 
            placeholder="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            disabled={loading} 
            className="inputform"
            />
        <input 
            type="text" 
            name="phone" 
            placeholder="phone number" 
            pattern="^[0-9]*$" 
            disabled={loading}
            className="inputform"
            />
        <input 
            type="password" 
            name="password" 
            placeholder="password" 
            disabled={loading} 
            className="inputform"
            />
        <input 
            type="password" 
            name="password_confirmation" 
            placeholder="re-type password" 
            disabled={loading}
            className="inputform"
            />
        <input 
            type="submit" 
            name="submit" 
            value="Crear cuenta" 
            disabled={loading} 
            className="col-span-2 border border-pink-600 bg-transparent text-base text-text-color py-4 font-bold uppercase cursor-pointer rounded-lg"
            />
      </form>
      {errors.length > 0 && 
        <div>
          {errors.map((error, index) => {
            return <p key={index} className="text-red-600 font-light mt-4">{error}</p>
          })}
        </div>
      }
    </div>
  );
}