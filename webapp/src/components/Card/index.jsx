import React from "react";

import { Link } from 'react-router-dom';
import '../../articles.css'

const Card = ({ article,key }) => {

  return (

    <div className="p-[4rem] space-y-3 ">
      <div className="flex justify-between">
        <div><h3 className="card-cat">{article.attributes.category.data.attributes.name}</h3></div>
        <div><h3 className="card-cat">{article.attributes.publishedAt.substring(0,10) }</h3></div>
      </div>

      <img className="img-art" src={`http://localhost:1337${article.attributes.card_picture.data[0].attributes.url}`} width="483" height="373"></img>

      <div className="grid">
        <h3 className="font-gallery card-title">
          {article.attributes.Title}
        </h3>
        <p className="card-body-main">
          {article.attributes.Describe}
        </p>

        <div className="text-center card-goto">
          <Link to={`${article.id}`} className="inline-flex self-end ">
            <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-1.29153e-08 9.89057C1.95984 9.89057 3.88155 10.0984 5.83658 10.1658C8.32786 10.2517 10.8038 10.0363 13.2922 10.0363C16.5166 10.0363 19.7439 9.89057 22.9739 9.89057C24.7873 9.89057 26.6006 9.89057 28.4139 9.89057C29.383 9.89057 30.3763 9.59914 31.3281 9.59914" stroke="#B47B48" stroke-width="2"/>
              <path d="M24.9668 19C25.9778 18.2341 27.0444 17.2093 27.664 16.094C27.9925 15.5028 28.4352 15.0056 28.7756 14.4294C29.0338 13.9925 29.204 13.5174 29.481 13.0865C30.2431 11.9009 30.8149 10.6015 31.817 9.5993C32.3555 9.06085 31.0254 7.81382 30.6546 7.42123C29.901 6.6233 29.3908 5.56247 28.5104 4.87074C27.6243 4.17452 26.8283 3.32086 26.0615 2.52339C25.5783 2.02091 24.8688 1.53745 24.5605 0.92087" stroke="#B47B48" stroke-width="2"/>
            </svg> &nbsp; Lire l'article
          </Link> 
        </div>
      </div>
    </div>
      

  );
};

export default Card;
