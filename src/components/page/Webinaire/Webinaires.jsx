import React,{useEffect} from 'react';

import "./webinaires.scss";
import webinaireImg from './../../../assets/images/webinaires.png'
import Nav from "./../../Nav/Nav";
import gsap from "gsap";
import {withRouter} from "react-router-dom"
import axios from "axios";
import { HomeB } from '../../BreadCrumbs/HomeB';



const Webinaires = (props) => {


    let webinaireTl = gsap.timeline({paused: true});
    useEffect(()=> {



        webinaireTl
            .from('p', 1,{opacity:0})
        
        webinaireTl.play()
    })

    const changePage=(e, destination) => {
        e.preventDefault();
        webinaireTl.reverse();
        const timelineDuration = webinaireTl.duration()*1000;
        setTimeout(() => {
            props.history.push(destination);

          }, timelineDuration);
    }





    return (
        <div id="webinaire">
            <HomeB />
            <Nav animation={e => changePage(e , "/")} animation0={e => changePage(e , "/services")} animation1={e => changePage(e , "/debriefs/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />

            <h2>Webinaires</h2>
        <div id="webinaire-page">
            <div className="timeline"></div>
            <div className="webinaire-item">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item reverse">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item reverse">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item reverse">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item reverse">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item reverse">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
            <div className="webinaire-item reverse">
                <div className="webinaire-content">
                <h3>Veille Technologique</h3>
                <p className="webinaire-credits"> Veill cybersecurité </p>
                <p className="webinaire-date">mars 2019 </p>
                <div className="webinaire-line"></div>
                </div>
                <div className="webinaire-image">
                    <img src={webinaireImg} alt=""/>
                </div>

                <div className="timeline-dot">

                </div>
            </div>
        </div>

        </div>
    )
}
export default withRouter(Webinaires);