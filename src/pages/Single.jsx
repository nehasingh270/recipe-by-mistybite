import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Single = () => {

  let location = useLocation();
  console.log(location);
  let recipe = location.state
  // console.log(location.state);


  return (
    <div>
      
    
{/* <div className='main flex gap-4'>
  <div className='left'>
    <img src={recipe.image} alt="" />
  </div>
  <div className='right'>
    <h1 className='lg:text-3xl md:text-2xl'><span>Title:</span>{recipe.label}</h1> 
    <h3>Dishtype:{recipe.dishType}</h3>
    <h3>Dishtype:{recipe.dishType}</h3>
    <h3>Dietlabel:{recipe.dietLabels}</h3>
    <button className='bg-green-800 p-2 w-max rounded-md'>Details</button>
  </div>
</div> */}

      
   <div className='flex flex-row  justify-center items-center mt-32'>
   <a href="#" className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={recipe.image}  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span>Title : </span>{recipe.label}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Ingredients : </span>{recipe.ingredientLines}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>MealType : </span>{recipe.mealType}</p>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>DishType : </span>{recipe.dishType}</p>
     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Diet Label : </span>{recipe.dietLabels}</p> */}
   <Link to={recipe.url} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500
    to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
     dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 
     font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Method</Link>
  </div>
    </a>
   </div>






   <div className="relative overflow-x-auto mt-3 w-[80%] mx-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-6 py-3">
          Nutrients
        </th>
        <th scope="col" className="px-6 py-3">
          LABEL
        </th>
        <th scope="col" className="px-6 py-3">
          QUANTITY
        </th>
        <th scope="col" className="px-6 py-3">
          UNIT
        </th>
        
      </tr>
    </thead>
    <tbody>
      {
      Object.entries(recipe.totalNutrients).map(([key,value],i)=>{
  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    {key}
  </th>
  <td className="px-6 py-4">
    {value.label}
  </td>
  <td className="px-6 py-4">
    {value.quantity}
  </td>
  <td className="px-6 py-4">
    {value.unit}
  </td>
</tr>})
      }
   
    </tbody>
  </table>
</div>

  



{/* <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
  <li>
    List item one
    <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
      {
      Object.entries(recipe.ingredients).map(([ele],i)=>{
        return <li>{ele}</li>
      })

      
       
      }
    </ol>
  </li>
 
</ul> */}


<div className="relative overflow-x-auto mt-3 w-[80%] mx-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-6 py-3">
          Nutrients
        </th>
        <th scope="col" className="px-6 py-3">
          LABEL
        </th>
        <th scope="col" className="px-6 py-3">
          QUANTITY
        </th>
        <th scope="col" className="px-6 py-3">
          UNIT
        </th>
        
      </tr>
    </thead>
    <tbody>
      {
      Object.entries(recipe.ingredients).map(([key,value],i)=>{
  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    {key}
  </th>
  <td className="px-6 py-4">
    {value.text}
  </td>
  <td className="px-6 py-4">
    {value.quantity}
  </td>
  <td className="px-6 py-4">
    {value.measure}
  </td>
</tr>})
      }
   
    </tbody>
  </table>
</div>



    </div>
  )
}

export default Single
