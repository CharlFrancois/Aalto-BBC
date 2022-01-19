import React from "react";



const Card = ({ article }) => {

  return (

    <div className="p-8 space-y-3 ">
      <div className="flex justify-between">
        <div>{article.attributes.Category}</div>
        <div>{article.attributes.publishedAt.substring(0,10)}</div>
      </div>

      <img className="img-art" src="test.png" width="483" height="373"></img>


    <p className="text-gray-500 dark:text-gray-300">
      {article.attributes.Title}
    </p>
    <p className="text-gray-500 dark:text-gray-300">
      {article.attributes.Describe}
    </p>

    <div className="text-center">
    <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
        
        Lire l'article
    </a>
    </div>
  </div>
      

  );
};

export default Card;
