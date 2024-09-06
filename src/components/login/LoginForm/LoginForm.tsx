"use client"
import { handleLogin } from "app/actions";

export const LoginForm = () => {
    const handleSubmit = async (event:any)=>{
        const formData = new FormData(event.target)
        event.preventDefault();
        await handleLogin(formData) 
    }
  return (
    <div className="block max-w-lg mx-auto mt-20"  >
      <h1 className="text-2xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input 
            type="text" 
            name="email" 
            placeholder="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="text-gray-700 font-light px-4 py-2 bg-transparent border-b border-gray-400 text-lg focus:outline-none focus:border-pink-500"
            />
        <input 
            type="password" 
            name="password" 
            placeholder="password" 
            className="text-gray-700 font-light px-4 py-2 bg-transparent border-b border-gray-400 text-lg focus:outline-none focus:border-pink-500"
            />
        <input 
            type="submit" 
            name="submit" 
            value="Login" 
            className="border border-pink-500 bg-transparent text-gray-700 py-4 font-bold uppercase cursor-pointer rounded-full hover:bg-pink-500 hover:text-white"
            />
      </form>
    </div>
  );
}