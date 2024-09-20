import { FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
    return(
        <>

        <div className="flex bg-slate-700 z-10 w-full h-36 justify-center fixed bottom-0 space-x-3 items-center ">
            
            <div className="cursor-pointer"><FaGithub size={40} /></div>
            <div className="cursor-pointer"><FaDiscord size={40} /></div>
        </div>
        </>
    )
}

export default Footer;
