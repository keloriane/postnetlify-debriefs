import React from 'react';
import {Link} from'react-router-dom';

const Head = () => {
    return (
        <div id="main">
            <div className="container">
                <div className="head-title">
                    <h2>
                        About us
                    </h2>
                </div>
                <div className="text-about-container">
                    <p className="about-text"> Notre agence est née de la passion de deux amies pour le digitale… 
Pamela Gerbino et Ornella Simba, fondatrices de l’agence Debrief. 
Nous avons décidé suites à nos transitions professionnelles respectives vers le digitale, de rassembler autour de nous les meilleures de nos collègues pour ensemble travailler et fournir des services qui répondraient à deux challenges que nous considérons cruciaux : 
 1. Lutte contre la fracture numérique par l’acquisition des compétences digitale et/ou  technologique plus largement
2. La digitalisation des services et des métiers, par l’accompagnement des PME, indépendants, startups.   
Au travers de notre agence, nous souhaitons accompagner les entreprises, organismes publics, associations et indépendants tout au long de leurs projets digitales, en leurs permettant d’acquérir l’autonomie et la confiance nécessaire pour faire croître et sécuriser leurs activités et business.  
</p>
                </div>
            </div>
        </div>
    )
}
export default Head;
