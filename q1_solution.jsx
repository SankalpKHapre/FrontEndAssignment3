import React, { useEffect, useState } from 'react'

const App = () => {

    const [isVisible,setIsVisible] = useState(false)
    const [profile,setprofile] = useState([])

    const handleLoad = ()=>{
        setIsVisible(true);
    };

    useEffect(()=>{
        async function fetchProfile(){
            const response = await fetch('dummmyapicall');
            const data = await response.json()
            setprofile(data)

        }    
        document.addEventListener("profile-loaded",handleLoad);
        fetchProfile();
        return ()=>{
            document.removeEventListener("profile-loaded", handleLoad);
        }
    },[])    



  return (
    <div>
        {
            isVisible ?
            `Profile shown:${data.name}`:
            "Loading"

        }</div>
  )
}

export default App