import React, { useEffect,useRef } from 'react';
import "./home.scss";
import { Link , withRouter } from 'react-router-dom'
import gsap from 'gsap';


import Nav from './../../Nav/Nav';
import { HomeB } from '../../BreadCrumbs/HomeB';
import {teams} from "./../Main/team";


const Home = (props) => {


    let imageGap = useRef(null)





    
  
    
    
    
    
    
    let homeTl = gsap.timeline({ paused:true })
    useEffect(() => {
        let homeTl = gsap.timeline({ paused:true })
        homeTl
            .from("#home",.4,{opacity:0})
            .from(imageGap, .4, { backgroundPositionX: "-30%", delay: -.6 })
            .from(["#home h1","#home h3","#home P"], {
                duration: 0.4,
                y: "100%",
                ease: "power0.inOut",
                opacity: 0,
                stagger: {
                    amount: 0.4
                }
            })
            homeTl.play()
            
            // eslint-disable-next-line 
    }, [])

    const changePage=(e, destination) => {
        e.preventDefault();
        homeTl.reverse();
        const timelineDuration = homeTl.duration()*1000;
        setTimeout(() => {
            props.history.push(destination);
            console.log(props)
          }, timelineDuration);
    }


    return (
        <div id="home" >
        <Nav animation={e => changePage(e , "/")} animation0={e => changePage(e , "/services")} animation1={e => changePage(e , "/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />
            <div className="home-wrapper">
                <div className="left-gap" ></div>
                <div className="image-layer" ref={e => imageGap = e}>
                    <div className="logo-layer">
                     <HomeB />
                    </div>
                    <div className="blue-layer" ></div>
                </div>
                <div className="center-home-content"  >
                    {/* <nav className="home-nav">
                        <ul>
                            <li><Link onClick={e => changePage(e , "/debriefs/services")} to="/debriefs/services">SERVICES</Link></li>
                            <li><Link onClick={e => changePage(e , "/techspace/menubox/")}>WEBINAIRES</Link></li>
                            <li><Link onClick={e => changePage(e , "/techspace/")}>TECHSPACE</Link></li>
                            <li><button>NewsLetter</button></li>
                        </ul>
                    </nav> */}
                    {/* <Nav animation={e => changePage(e , "/debriefs/services")} animation1={e => changePage(e , "/debriefs/a-propos")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/debriefs/blog/")} /> */}
                    <div className="home-content">
                        <div className="home-title">
                            <h1>AGENCE DIGITALE</h1>
                            <div className="underline"></div>
                        </div>
                        <div className="home-subtitle">
                            <h3>
                                BRANDING, SITE WEB, FORMATION CYBERSECURITY, DIGITAL MARKETING
                    </h3>
                        </div>
                        <div className="home-text">
                            <p>Etes-vous prêt pour une transformation digitale ?  <br/>
                            Nous sommes là, pour accompagner, assurer et faciliter la transition digitale de votre business.
                            Notre spécificité, c’est un parfait mixte entre marketing digital et sécurité en ligne. 
                            Avec nous, grâce à nos services et formations, le digital deviendra pour vous plus clair et simple à gérer.
                            Nous sommes également une agence solidaire, au travers de notre ASBL Le TECHSPACE, nous souhaitons fournir notre expertise aux plus grands nombre.</p>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="line"></div>
                        <Link onClick={e => changePage(e , "/contact")} to="/contact">
                            <button>
                                <div className="button-overlay"></div>
                                <p className="animated-button thar-three">Parlons digital</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="about">
                          <div className="title-content">
                              <h2>A propos de nous</h2>
                              <div className="underline"></div>
                          </div>

                   { teams.map((team) => (
                          <div className="about-media-content" key={team.id}>
                          <div className="team-content">
                          
                          <div className="image-container">
                              <img src={team.image} alt="" />
                          </div>
                      
                      <div className="about-text-content">
                          <h3 className="about-title">{team.title}</h3>
                          <div className="underline-about"></div>
                          <p className="about-text">
                             {team.about}
                          </p>
                      </div>
                      </div>
                         
                          </div>
                    ))}
            </section>
        </div>
    )
}
export default withRouter(Home)