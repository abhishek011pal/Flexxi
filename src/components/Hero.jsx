import { useState,useEffect, useRef } from "react";
import Video from "./Video";
import Navbar from "./Navbar";


function Hero ({setNavActive}){
    const [show, setShow] = useState (false);
    const [onScroll,setOnScroll]=useState(1);
    const ref=useRef(null)

   

    useEffect(()=>{
        // let sectinRation;
        let observer= new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                // console.log(entry)
                if(entry.isIntersecting){
                    setShow(true);
                }
                
                setOnScroll(1-(entry.intersectionRatio));    
                            
                setNavActive(entry.intersectionRatio <0.9);

                console.log('ratio::',entry.intersectionRatio);
                // console.log('rect::',entry.intersectionRect);
                // console.log('bounding Rect::',entry.boundingClientRect);                
            });
        },{
            threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
        }
        );
        
        if (ref.current){
            // console.log('current reference ::',ref.current);
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };  
    },[onscroll]);

    return (
        <>  
            <div className="flex flex-col w-full gap-2 relative top-20 h-full">       
                <div className="hero sticky top-20 transition duration-400  "
                    style={{ 
                        transform: `scale(${onScroll})`,
                        opacity:Math.min(1, onScroll),
                        transformOrigin: 'center center'

                    }} 
                >
                                    
                    <div className="w-full flex flex-col gap-6 p-28"  >
                        <h1 className="text-8xl font-semibold w-full text-center  "  >
                            <span className=" ">The Design Company Built For </span>  
                            {/* <div className="flex gap-8"> */}
                                {/* <span>For </span> */}
                                <span className={`
                                        text-shadow-sky-300 text-shadow-lg/50 transform transition-all duration-700
                                        ${show ? "opacity-100 translate-y-0 rotate-2" : "opacity-0 translate-y-10 translate-x-10 rotate-6"}
                                    `} >
                                    
                                    {/* <img src="" alt="" /> */}
                                    {/* Londrina Outline */}
                                    Creativity
                                </span>
                            {/* </div>                   */}
                        </h1>

                        <h3 className="text-3xl p-4 text-center " >The AI-focused design company for fast-moving teams building what's next.</h3>            
                    </div>     

                    <div className="w-full p-9 px-20 flex flex-row items-center justify-between relative bottom-0 z-1  "  >
                        <button type="button" className="border-2 border-white rounded-3xl p-1 px-4 text-xl font-bold cursor-pointer hover:bg-purple-700 active:bg-purple-900 transition-all duration-600 " >Let's build what's next</button>

                        <div className="flex" > 
                            <div className="w-1 h-1 border-2 border-white bg-white rounded-full animate-ping  " ></div>
                            <div>Booking new clients</div>
                        </div>            
                        {/* <div className="transform rotate-12 " >hello</div> */}                
                    </div>  
                </div> 


                <div>
                    <Video ref={ref} />
                </div>
            </div>
            
        </>
    )
}

export default Hero;



