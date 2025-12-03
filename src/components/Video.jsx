import { forwardRef } from "react";


const Video=forwardRef ((props,ref)=>{
    return (
        <>
            <div className="w-full h-full flex items-center justify-center z-50 mt-4 mb-8 " ref={ref}  >
                <video src="./src/assets/GithubVdo.mp4" className="w-3/4 relative p-4 drop-shadow-2xl drop-shadow-purple-500 border-1 border-purple-400 rounded-lg " autoPlay muted loop  ></video>
                {/* <img src="./src/assets/react.svg" alt=""  className="w-full h-full" /> */}
            </div>

        </>
    )
})

export default Video;