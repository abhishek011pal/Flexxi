import { useState,useEffect } from "react";

function Hero (){
    const [show, setShow] = useState (false);
    const [onScroll,setOnScroll]=useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShow(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    


    useEffect(()=>{
        function scrollHandler (){
            // console.log('scroll values::',window.scrollY)
            const scaleValue = Math.max(0.5, 1 - window.scrollY / 1000);

            setOnScroll(scaleValue);                 
            console.log(scaleValue);
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
        window.removeEventListener("scroll", scrollHandler);
    };
        
    },[])
    

    return (
        <>
            <div className="sticky top-10 transition duration-400 "
            style={{ 
                transform: `scale(${onScroll})`,
                opacity:Math.min(1, onScroll), 
                transformOrigin: 'top center'
            }} 
            >
                                
                <div className="w-2/3 p-8 flex flex-col gap-6 mt-12"  >
                    <h1 className="text-9xl font-semibold w-full  "  >
                        <span className=" ">The Design Company Built </span>  
                        <div className="flex gap-8">
                            <span>For </span>
                            <span className={`
                                    text-shadow-sky-300 text-shadow-lg/50 transform transition-all duration-700
                                    ${show ? "opacity-100 translate-y-0 rotate-2" : "opacity-0 translate-y-10 translate-x-10 rotate-6"}
                                `} >
                                {/* <img src="" alt="" /> */}
                                {/* Londrina Outline */}
                                Creativity
                            </span>
                        </div>                  
                    </h1>

                    <h3 className="text-3xl p-4  " >The AI-focused design company for fast-moving teams building what's next.</h3>            
                </div>

                <div className="w-full p-4 px-20 flex flex-row items-center justify-between relative bottom-0 z-1  "  >
                    <button type="button" className="border-2 border-white rounded-3xl p-1 px-4 text-xl font-bold cursor-pointer hover:bg-purple-700 active:bg-purple-900 transition-all duration-600 " >Let's build what's next</button>

                    <div className="flex" > 
                        <div className="w-1 h-1 border-2 border-white bg-white rounded-full animate-ping  " ></div>
                        <div>Booking new clients</div>
                    </div>            
                    {/* <div className="transform rotate-12 " >hello</div> */}                
                </div>  
                            
            </div> 
        </>
    )
}

export default Hero;