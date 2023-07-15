import React from "react";



function TopButtons(){
    const cities =[
     {
         id:1,
    title:"london"
     },
     {
         id:2,
    title:"england"
     },
     {
         id:3,
    title:"france"
     },
     {
         id:4,
    title:"itly"
     }
    ]



  return (
    <div className="flex items-center justify-around my-6 ">
        {cities.map((city)=>(
<button key={city.id} className="text-white text-lg font-medium">
    {city.title}
    
    </button>
        ))}
        </div>
  )
}

export default TopButtons;