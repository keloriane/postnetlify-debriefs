import React from "react";
import "./techspace.scss";
import video from './../../../assets/video/video.mp4';
import techspace from './../../../assets/images/techspace.png';
import gsap from "gsap";
import { Link, withRouter } from 'react-router-dom';
import { TechspaceNav } from "../../Nav/TechspaceNav";
import { useEffect } from "react";



const Techspace = (props) => {
    let techspaceTl = gsap.timeline({paused: true});
    useEffect(()=>{
        
        //Split each word from a tag
        let titleArray = [];
        function splitWord(word) {
            return [...word]
            .map(letter => `<span class="chars">${letter}</span>`)
            .join("");
        }
        const words = [...document.querySelectorAll(".text-letter")];
        words.map(word => {
            word.innerHTML = splitWord(word.textContent);
            const newLetter = [...word.querySelectorAll(".chars")]; 
            newLetter.map(letter => {
                titleArray.push(letter);
            });
        }); 
        let chars = document.querySelectorAll('.chars')
        console.log(chars)
        techspaceTl
        // .staggerFrom(titleBackground,.5,{x:"-150%", ease:"sin.out"},0.5)
        .from("#techspace",.2,{autoAlpha:0})
        .from([".screen-video",".title-back-layer"], .4, { delay:-.3,width: 0, stagger: .3 })
        .from(chars,.5,{y:100,ease:"sin.out( 1.7)", stagger:.04})
        .from( ".techspace p", .3, { y: 100, opacity: 0, stagger: .3 })
        .from(".techspace img", .3, {  opacity: 0 })
        techspaceTl.play()

    })


 const changePage=(e, destination) => {
    e.preventDefault();
    techspaceTl.reverse();
    const timelineDuration = techspaceTl.duration()*1000;
    setTimeout(() => {
      console.log(props)
        props.history.push(destination);
      }, timelineDuration);
  }
    return (
        <div id="techspace">
            <TechspaceNav 
            animation={e =>  changePage(e,'/techspace/histoire')}
            animation1={e => changePage(e,'/techspace/digital-career')}
            animation2={e => changePage(e,'/')}
            
            /> 
            <div className="techspace">
                <div className="screen">
                    <img src={techspace} alt="" />
                    <div className="screen-video">
                        <video loop muted autoPlay={true} className="screen__video">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="techspace-content">
                    <div className="title-back-layer">
                        <h1 className="text-letter">Techspace</h1>
                    </div>
                    <div className="techspace-title">
                        <p> Nous croyons fermement que la technologie est l’affaire de tous. C’est une révolution, une culture, des compétences que tous citoyens en âge et capacité d’apprendre se doit d’acquérir. C’est pourquoi nous avons à cœur de contribuer au développement de tous, en ce qui concerne les domaines du numérique notamment à travers l’éducation et le coaching professionnel.</p>
                    </div>
                    <Link to="/techspace/histoire/" className="button-call">
                        <div className="line"></div>
                        <button>
                            <div className="button-overlay"></div>
                            <p>devenir partenaire</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Techspace);