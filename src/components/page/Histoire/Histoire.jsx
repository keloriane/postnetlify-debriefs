import React from 'react';
import "./histoire.scss";
import {team} from "./../../../data.js";
import { TechspaceNav } from '../../Nav/TechspaceNav';

function Histoire() {
    return (
        <div id="story">
               <TechspaceNav
         
            
            /> 
            <div className="title-story-container">
                <h1>Notre Histoire</h1>
                <h3>Le pourquoi</h3>
            </div>
            <div id="our-story">
                <div className="text-story-container">
                    <p>La maîtrise de l’outil informatique reste problématique pour toute une partie de la population, y compris à un niveau élémentaire. Posséder un ordinateur et un accès à Internet n’est pas une garantie d’exploiter ces ressources.</p>
                    <p>
                        86 % des belges ont accès à un ordinateur et Internet, 40 % d’entre eux sont incapables d’utiliser Tax-on-web et 50 % ne parviennent pas à remplir un formulaire, 1 belge sur 5 est incapable d’envoyer ou de recevoir des e-mails, 1 belge sur 7 est incapable de surfer sur Internet, 1 belge sur 4 est incapable de consulter les sites d’actualités.
                </p>
                </div>
                <div className="text-story-container">
                    <p>En effet, même si de nombreuses initiatives autour de la promotion des Nouvelles Technologies se multiplient, la connaissance de celles-ci, est souvent fortement axée sur entrepreneuriat et/ou la formation, ce qui est une bonne chose toutefois laissant ainsi de côté tout l’aspect socioculturel.</p>
                    <p>
                        De plus, les programmes de formation sont souvent soit trop longs pour des personnes en transition professionnelle ou courts et intenses ce qui peut parfois être laborieux pour des personnes qui s’initient à peine. D’ailleurs beaucoup n’ont pas toujours le luxe de suivre une formation continue pour des raisons familiales, budgétaires ou autres.
                        Aussi, ces personnes doivent être capables et armées en vue de comprendre comment leur monde et environnement se transforment et ainsi pouvoir aborder ces changements grandissants avec sérénité.

                </p>
                </div>
            </div>
            <div className="techspace-team">
                {team.map(people=>(
                    <div className="team-mate">
                        <img src={people.photo} alt=""/>
                        <p> {people.name} </p>
                        <p> {people.lastName} </p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Histoire
