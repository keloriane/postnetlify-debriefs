import React from 'react';
import "./categories.scss";
import { Link } from 'react-router-dom';
const categories = [
    {
        id: 1,
        title: "Team",
        image: `${require("./../../../../assets/images/team.png")}`
    },
    {
        id: 2,
        title: "Webinaire",
        image: `${require("./../../../../assets/images/webinaires.png")}`
    },
    {
        id: 3,
        title: "Articles",
        image: `${require("./../../../../assets/images/articles.png")}`
    }
]
const Categories = () => {

    return (
        <section id="category">
            <div className="container-fluid">
                <div className="row">
                    <div className="cat">
                        {categories.map(cat =>
                            (<div className="cat-container" key={cat.id}>
                                <div className="cat-details">
                                    <div className="title-back-layer"></div>
                                    <Link to={`${cat.title.toLocaleLowerCase()}`}><h2> {cat.title}</h2></Link>
                                </div>
                                <div className="cat-image">
                                    <img src={cat.image} alt="" />
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories