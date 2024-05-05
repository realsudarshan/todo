"use client"
import React from "react";
import { useState } from "react";
const page = () => {
  const [name, changename] = useState("");
  const [description, changedescription] = useState("");
  const [tasks, changetasks] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    changetasks([...tasks, { name, description }])
    changename("");
    changedescription("");
  }
  const deletehandler=(i)=>{
    let copytask=[...tasks];
    copytask.splice(i,1);
    changetasks(copytask);
  }
  let rendertask;
   rendertask = "No task available";
  if(tasks.length>0){
     rendertask = tasks.map((e, i) => {
    return(
    <ul key={i} class="flex justify-between mb-5">
      <li className="flex text-xl font-semibold ml-10">
        {e.name}
        </li>
        <li className="flex text-xl font-semibold mr-10">
        {e.description}
        </li>
        <button class="bg-red-500 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{deletehandler(i)}}>Delete</button> 
    </ul>
   )})
  }


return (
  <div>
    <div>
    <h1 className="bg-black text-white p-5 text-5xl text-center">My todo list</h1>
    </div>
    <div class="flex">
      <form onSubmit={submithandler}>
        <input type="text" value={name} class="m-2 border border-gray-900 flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter task" onChange={(e) => changename(e.target.value)} />
        <input type="text" value={description} class=" border border-gray-900 flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Description" onChange={(e) => changedescription(e.target.value)} />
        <button class="bg-blue-500 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add</button>
      </form>
      </div>
      <div class=" bg-gray-100">
{rendertask}
      </div>




  </div>)
}
export default page;