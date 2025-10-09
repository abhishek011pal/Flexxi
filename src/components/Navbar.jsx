import { useEffect, useState } from "react";


const Navbar=({active})=>{
    
    const [icon,setIcon]=useState(false)
    
    function iconChanger(){        
        setIcon((prev) => !prev);
    }
    useEffect(()=>{
        function scrollhandler(){
            // console.log(window.scrollY)
        }
        window.addEventListener('scroll',scrollhandler)
    })


    return(
        <>
            <div className={`w-full p-0 px-20 flex flex-row items-center justify-between fixed top-0 z-50 
            ${active? "bg-none": "bg-blue-950"} 
            
            `}
            > 
                <div className="cursor-pointer">
                    <svg width="80" height="50" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer   ">
                       <text x="50%" 
                            y="50%" 
                            dominantBaseline="middle" 
                            textAnchor="middle" 
                            fontFamily="Arial, sans-serif" 
                            fontSize="48" 
                            fill="black" 
                            stroke="white" 
                            strokeWidth="0.8" 
                            className="transition-colors duration-500 hover:fill-white hover:stroke-black hover ">
                            CC
                        </text>
                        <text x="50%" 
                            y="50%" 
                            dominantBaseline="middle" 
                            textAnchor="middle"                                 
                            fontFamily="Arial, sans-serif" 
                            fontSize="48" 
                            fill="white" 
                            stroke="black" 
                            strokeWidth="0.8" 
                            className="transition-colors duration-500 hover:fill-black hover:stroke-white ">
                            3
                        </text>          
                    </svg>  
                </div>

                <div className="flex items-center gap-8 transform transition-all duration-500 " >
                    <button type="button" className="border-2 border-white rounded-3xl p-1 px-4 text-xl font-bold cursor-pointer hover:bg-purple-700 active:bg-purple-900 transition-all duration-600 " >Book a Call</button>

                    <button type="button" className="border-2 border-white rounded-3xl py-5 text-xl min-w-10  font-bold cursor-pointer hover:bg-purple-700 active:bg-purple-900 rotate-90 text-center transition-all duration-600 hover:text-lg" 
                    onClick={iconChanger}>{icon? "✕" : "|||"}</button>   

                </div>
            </div>
        </>
    )
}
export default Navbar;


