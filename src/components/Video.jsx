function Video(){
    return (
        <>
            <div className="w-full h-full flex items-center justify-center z-50 " >
                <video src="./src/assets/GithubVdo.mp4" className="w-3/4 relative p-4 drop-shadow-2xl drop-shadow-blue-400 border-1 border-blue-400 rounded-lg  " autoPlay muted loop  ></video>
                {/* <img src="./src/assets/react.svg" alt=""  className="w-full h-full" /> */}
            </div>

        </>
    )
}

export default Video;