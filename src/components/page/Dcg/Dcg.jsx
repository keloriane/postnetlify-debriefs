import React from "react";
import room from "./../../../assets/images/room.png";
import bus from "./../../../assets/images/bus.png";
import "./dcg.scss";
import { TechspaceNav } from "../../Nav/TechspaceNav";


const Dcg = () => {
  return (
    <div id="digital-career-center">
      <TechspaceNav/>
      <div className="inner-container">
        <div className="dcg-image-container">
          <div className="inner-image">
            <img src={room} alt="" />
            <img src={bus} alt="" className="bus"/>
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
  );
};
export default Dcg;
