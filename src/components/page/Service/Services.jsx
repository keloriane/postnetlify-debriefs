import React,{useEffect} from "react";
import {Link, withRouter} from "react-router-dom"
import "./services.scss";

import gsap from 'gsap'
import { Title } from "../../Title/Title";
import { HomeB } from "../../BreadCrumbs/HomeB";
import Nav from "./../../Nav/Nav";
const Services = (props) => {
  const services= [{
      id: 0,
      title: "Sécurité & protection des données",
      name: "Sécurité",
      paragraph: "Security by design ",
      paragraphDetails:"Aujourd’hui la sécurité des informations et des données clients devient un enjeu commercial et juridique incontournables. La sécurité en ligne est indispensable Nous accompagnons nos clients dans la mise en place de standard de sécurité dès la conception et développement de leurs plateformes en lignes et autres systèmes informatiques Pour que celle-ci soient sécurisé by design. Nous assurons également la mise en conformité avec le RGPD, Règlement Général sur la protection des données.Vous trouverez plus de détails sur nos packs et prix dans notre brochures à télécharger",
      paragraphBreak: "RGPD",
      image: `https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
    },
    {
      id: 1,
      title: "Dévelopement",
      name: "Dévelopement",
      paragraph: "Site web/ E-commerce/ Application",
      paragraphBreak: "Modélisation et Assurance qualité ",
      paragraphDetails:"Nous développons pour vous vos plateformes en ligne, site web vitrines, applications web, e- commerce. Vous avez l’idée, nous avons les compétences… De la maquette passant par le développement jusqu’au déploiement, nous vous accompagnons de A à Z.",
      image: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
      
    },
    {
      id: 2,
      title: "Stratégie & Marketing digital",
      name: "Stratégie",
      paragraph: "Plan et Stratégie digitale ",
      paragraphBreak: "Optimisation et référencement",
      paragraphDetails:"Notre équipe marketing vous apporte toute l’aide nécessaire en vue d’optimiser la visibilité de votre activité tout en s’assurant de la cohérence et qualité globale de votre contenue et méthode de communication en ligne. Une bonne stratégie Marketing digital vous aidera à entrer en relation avec votre clientèle au bon moment au bon endroit, et de la bonne manière. L’optimisation pour les moteurs de recherches (SEO), la publicité sur Réseaux sociaux et Ads, votre site web et la qualité de votre contenue, nous vous accompagnons à tous les niveaux pour vous assurer une meilleures visibilités.",
      image: `https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80`
    },
    {
      id: 3,
      title: "Création contenu & design",
      name:"Design",
      paragraph: "Création et montage vidéos",
      paragraphBreak: "Branding",
      paragraphDetails:"Une image de marque forte est importante pour se démarquer et marquer les esprits. C’est ce que nous vous aidons à réaliser dans la création de contenu et le branding de votre activité. Logo, web-design et création de contenu de tout genre pour vos publicités et réseaux sociaux, l’agence peut réaliser avec vous chacune de vos idées.",
      image: `https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
    },
    {
      id: 4,
      title: "Audit",
      name: "Audit",
      paragraph: "Audit sécurité de votre site",
      paragraphBreak: "internet Audit digital marketing",
      paragraphDetails:"Nous réalisons des audits de sécurités, RGPD et Marketing. A quoi ça sert ? En ce qui concerne la sécurité et le RGDP, l’audit vous permet d’évaluer le risque que votre business encourt en cas de faiblesse de vos plateforme en ligne. Etes vous vulnérable ou carrément sujet à des cyberattaques ( vols de données bancaires, ou informations clients, données personnelles, etc…). Grâce à cette audit, vous recevez un état des lieux de votre niveau de sécurité et de conformité à la réglementation ainsi que des recommandations sur base du niveau de risque que vous encourez. Vous pouvez ainsi décider d’y remédier selon votre ordre de priorités. L’audit marketing est dans la même ligné, car elle vous informera du niveau d’impact et d’efficacité de votre stratégie marketing, pour vous permettre suite aux recommandations fournies d’améliorer les zones de faiblesses.",
      image: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
    },
    {
      id: 5,
      title: "Formations et workshops",
      name:"Workshop",
      paragraph: "Sur mesure ou en entreprise",
      paragraphBreak: "Webinaire & E-learning",
      paragraphDetails:"L’un des éléments clés et caractérisant notre agence, c’est que nous croyons fortement en la force de l’apprentissage tout au long de la vie. Nous sommes nous même des autodidactes et constamment en train de nous former à de nouvelles branches des nouvelles technologies. L’autonomie de nos clients est essentielles pour nous car nous savons que c’est essentielle à une relation dans le long terme. Vous apprendre à apprendre, nous permet de vous garder près de nous car nous pourrons avancer, comprendre et faire face aux nouveaux enjeux de demain ensemble. C’est dans cette optique que nous proposons en entreprise, en format e-learning ou webinaires des formations dans les domaines du e-commerce, de la cybersécurité et du marketing digitale. N’hésitez pas à nous contacter et nous faire part de vos besoins en terme de formation.",
      image: `https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
}]
  let serviceTl = gsap.timeline({paused:true})
  useEffect(()=>{
    let serviceTl = gsap.timeline({paused:true})
    serviceTl
      .from('#services p',.6,{
          y:70, 
          opacity:0,
          delay:.1
          
      })
      .from('#services h3',.4,{
          y:70, 
          opacity:0,
          delay:-.4
          
      })
      serviceTl.play()
  },[])
    
    const changePage=(e, destination) => {
      e.preventDefault();
      serviceTl.reverse();
      const timelineDuration = serviceTl.duration()*1000;
      setTimeout(() => {
          props.history.push(destination);
          
        }, timelineDuration);
  }
  return (
    <div id="services" >
            <Nav animation={e => changePage(e , "/")} animation0={e => changePage(e , "/services")} animation1={e => changePage(e , "/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />
        <HomeB/>
      <div className="service-container">
        {/* <div className="title-service">
          <h2>Nos Services</h2>
          <div className="underline"></div>
        </div> */}
        <Title title="Services" />
        <div className="services-grid">
          {services.map(({id,title,paragraph,paragraphBreak}) => (
              <Link onClick={e=>changePage(e,`/services/${id}` )}to={`/services/${id}`} key={id}>
                <div className="service-item" >
              <p className="number"> 0{(id) + 1} /</p>
              <div className="headline-service">
                <h3>{title}</h3>
              </div>

              <p>
                {paragraph} <br /> {paragraphBreak}{" "}
              </p>
              <div className="underline-service"></div>
            </div>

              </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
};
export default withRouter(Services);
