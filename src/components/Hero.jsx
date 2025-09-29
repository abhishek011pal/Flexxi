import { useState,useEffect } from "react";

function Hero(){
    const arr=['Creativity', 'Flexibility','Innovation','Growth','Impact','You']

    const[words,setWord]=useState(arr[0]);

    const [i, setI] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setI((prev) => {
            const nextIndex = (prev + 1) % arr.length; 
            setWord(arr[nextIndex]);
            return nextIndex;
        });
        }, 1000);

        return () => clearInterval(interval); 
    }, [arr]);

    return (
        <>
            <div className="bg-fixed w-2/3 h-[calc(100vh-70px)] flex justify-end p-8q  "  >
                <div className=" flex flex-col flex-wrap items-start justify-end w-full  ">
                    <div className="text-9xl text-wrap font-extrabold" >
                        The Design Company Built For <span className="inline-block transform-3d -rotate-z-4 transition duration-500 text-10xl ">{words}</span>
                    </div>              
                </div>
            </div>
        </>
    )
}

export default Hero;