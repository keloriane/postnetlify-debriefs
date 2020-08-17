import React,{useEffect} from 'react';
import gsap from "gsap";
import "./title.scss";
export const Title = (props) => {
    
    useEffect(() => {
        gsap.from(['.title-container h2'],.3,{
            y:"20%"
        })

    })
    
    return (
        <div className="title-container">
            <h2>{props.title}</h2>
            <div className="underline"></div>
        </div>
    )
}
