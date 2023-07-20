import React from "react";



function TopButtons(){
    const cities =[
     {
         id:1,
    title:"I"
     },
     {
         id:2,
    title:"❤️"
     },
     {
         id:3,
    title:"You"
     },
     {
         id:4,
    title:"Jaan"
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