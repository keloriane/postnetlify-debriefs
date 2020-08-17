import React,{useEffect} from 'react'
import Nav from "./../Nav/Nav"
import { withRouter} from "react-router-dom"
import gsap from "gsap";
export const FourOhFour = (props) => {
    let FourOhFourTl = gsap.timeline({paused:true})
    
    useEffect(() => {
        let FourOhFourTl = gsap.timeline({paused:true})
       
       FourOhFourTl
        .from('p', .4,{x:100, opacity:0})
       FourOhFourTl.play()
    }, [])


    const changePage=(e, destination) => {
        e.preventDefault();
        FourOhFourTl.reverse();
        const timelineDuration = FourOhFourTl.duration()*1000;
        setTimeout(() => {
            props.history.push(destination);
            
          }, timelineDuration);
    }
    return (
        <div className="not-found">
                        <Nav animation={e => changePage(e , "/")} animation0={e => changePage(e , "/services")} animation1={e => changePage(e , "/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />

            <p>404</p> 
            <p className="sorry"> sorry page not found</p>
        </div>
    )
}
export default withRouter(FourOhFour);