import React from "react";

export const Articles = (props) => {

 

  return (
    <article className="blog-article">
      <div className="image-article-container">
        <img src={props.articleImage} alt="" />
      </div>
      <article className="article-headline">
  <h3 className="article-title">{props.articleTitle}</h3>
        <h3 className="article-time">il y a 2j</h3>
      </article>
      <article className="article-content" >
        <p dangerouslySetInnerHTML={{__html: props.articleText}}>

        </p>
      </article>
    </article>
  );
};
