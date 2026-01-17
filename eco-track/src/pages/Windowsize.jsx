import { useEffect, useState } from "react";

function Windowsize(){
    //usestate hook to track the size and setter for size initially set to maximum window size
    let [size, setsize] = useState({
        width : window.innerWidth,
        height : window.innerHeight,
    })

    //resize runs when a change in size is detected and changes the width and height acc to the current size
    let resize = ()=>{
        console.log("Change detected");
        setsize(
           {
            width : window.innerWidth,
            height : window.innerHeight,
           }
        )
    }

    //this runs one time when component renders because of [] and has a event listener on window that keeps
    //on watching for change in window size
    useEffect(()=>{
        //removes the event listener and prevents memory leaks
        

        return ()=>{
            window.removeEventListener("resize", resize);
        }
    }, [])

    window.addEventListener("resize", resize);  

    return(
        <>
        <p>RENDER</p>
        <p>Height : {size.height}</p>
        <p>Width : {size.width}</p>
        <p>RENDERING COMPLETED</p>
        </>
    )


}

export default Windowsize