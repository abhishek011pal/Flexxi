function Navbar(){
    return(
        <>
            <div className="w-full text-white flex items-center justify-between py-4 px-16  ">
                <div className="" >
                    <img src="./src/assets/react.svg " alt="my_logo" className="animate-bounce cursor-pointer hover:animate-spin" />
                </div>

                <div>
                    <ul className="list-none flex justify-center gap-8 " >
                        <li className="cursor-pointer hover-item py-1 px-2 ">Home</li>
                        <li className="cursor-pointer hover-item py-1 px-2 ">Projects</li>
                        <li className="cursor-pointer hover-item py-1 px-2 ">About Us</li>
                        <li className="cursor-pointer hover-item py-1 px-2 ">Contact</li>
                    </ul>
                </div>

                <div className="border-4 border-solid border-blue-900 rounded-4xl px-3 py-0.5 hover:bg-blue-200 hover:border-blue-400 cursor-pointer hover:text-black text-balance font-medium" >
                    Book a Call
                </div>

            </div>
        </>
    )
}

export default Navbar