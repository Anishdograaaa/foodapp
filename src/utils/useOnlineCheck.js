import { useEffect,useState } from "react";

const useOnlineCheck = () => {
    const [onlineCheck,setonlineCheck] = useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonlineCheck(true)
        }),
        window.addEventListener("offline",()=>{
            setonlineCheck(false)
        }
        
            )
    })
    
    return onlineCheck;
}

export default useOnlineCheck;