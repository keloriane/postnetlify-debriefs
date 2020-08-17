import React,{useEffect,useState} from 'react';
import "./Blog.scss";
import { Articles } from './Articles';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';
import axios from "axios"

const Blog = () => {

    const [articles , setArticles] = useState([])
    const [load , setload] = useState(false)
    useEffect(() => {
            axios.get('https://d-briefs.com/wp-json/wp/v2/posts')
                .then((res)=> {
                    setArticles(res.data)
                    console.log(res.data);
                    setload(true)
                })
                .catch((err)=>{
                    console.warn(err)
                })
                
            }, [])
            console.log(articles);
    return (
        <div id="blog">
        { load ? 
    <>
    <HomeB />
    <div className="inner-blog">
                <Title title="Blog"/>
                <div className="blog-wrapper">
                    {
                        articles.map((article)=>(
                          
                                <Articles
                                key={article.id}
                                articleImage={article.jetpack_featured_media_url}
                                articleTitle={article.title.rendered} 
                                articleText={article.content.rendered}
                               
                                />
                        ))
                    }
                 
                </div> 
        

            </div>
         </>
         : <p>Loading </p>
         }
        </div>
    )
}
export default Blog;