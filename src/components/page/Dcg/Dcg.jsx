import React, { useEffect } from "react";
import room from "./../../../assets/images/room.png";
import bus from "./../../../assets/images/bus.png";
import "./dcg.scss";
import { TechspaceNav } from "../../Nav/TechspaceNav";
import { withRouter } from "react-router-dom"
import gsap from "gsap";



const Dcg = (props) => {

  const dgc = gsap.timeline({ paused: true })
  useEffect(() => {
    dgc
      .from(".title-back-layer", .3, { width: 0 })
      .from(".text-letter", .3, { x: "-40%", opacity: 0 })
      .from(".room-image", .4, { x: "-40%", opacity: 0 })
      .from("p", .5, { autoAlpha: 0 });


    dgc.play()
  }, [dgc])

  const changePage = (e, destination) => {
    e.preventDefault();
    dgc.reverse();
    const timelineDuration = dgc.duration() * 1000;
    setTimeout(() => {
      props.history.push(destination);
      console.log(props)
    }, timelineDuration);
  }

  return (
    <div id="digital-career-center">
      <TechspaceNav
        animation={e => changePage(e, "/techspace/histoire")}
        animation1={e => changePage(e, "/techspace/digital-career")}
        animation2={e => changePage(e, "/")}

      />
      <div className="dgc">

        <div className="inner-container">
          <div className="dcg-image-container">
            <div className="inner-image">
              <img className="room-image" src={room} alt="" />
              <img src={bus} alt="" className="bus" />
            </div>
          </div>
          <div className="inner-text-content">
            <div className="title-back-layer">
              <h2 className="text-letter">Digital carreer center</h2>
            </div>
            <div className="text-inner-content">
              <p>
                Nous croyons fermement que la technologie est l’affaire de tous.
                C’est une révolution, une culture, des compétences que tous
                citoyens en âge et capacité d’apprendre se doit d’acquérir. C’est
                pourquoi nous avons à cœur de contribuer au développement de tous,
                en ce qui concerne les domaines du numérique notamment à travers
                l’éducation et le coaching professionnel.
            </p>
              <p>
                Nous croyons fermement que la technologie est l’affaire de tous.
                C’est une révolution, une culture, des compétences que tous
                citoyens en âge et capacité d’apprendre se doit d’acquérir. C’est
                pourquoi nous avons à cœur de contribuer au développement de tous,
                en ce qui concerne les domaines du numérique notamment à travers
                l’éducation et le coaching professionnel.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Dcg);
