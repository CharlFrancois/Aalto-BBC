import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../../articles.css'


const Details = ({details}) => {
  const {id} = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        await axios.get(`http://localhost:1337/api/articles/${id}?populate=*`).then(res => {
          setNews(res.data.data)
          setLoading(false)
          console.log(news)
          console.log(res.data.data)
        });

      } catch (error) {
        setError(error);
        setLoading(false);
      }      
    }
    fetchData();
    
  }, [id]);
  if (loading ) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <div className="mx-10 mt-[102px]">
        <div className="mx-10 flex justify-between mb-4">
            <div><h1 className="details-title font-gallery ">{news.attributes.Title}</h1></div>
            <div className="self-end"><h1 className="details-cat font-gallery ">{news.attributes.publishedAt.substring(0,10)} <br/> {news.attributes.category.data.attributes.name}</h1></div>
        </div>
      </div>
      <div className="py-[4rem]">
        <img src={`http://localhost:1337${news.attributes.bigPic.data.attributes.url}`} alt="alto-art"/>
      </div>
      <div className=" mx-10 grid grid-cols-6 gap-4 text-center">
        <div className="...">
            <ul>
              <li className="details-section text-center"><a href="#1">{news.attributes.Title}</a></li>
              <li className="details-section text-center"><a href="#2">{news.attributes.secondTitle}</a></li>
            </ul>
        </div>
        <div className="col-start-2 col-span-4">
          <div>
            <div className="text-left">
              <div id="1"><h1 className="details-subtitle font-gallery">{news.attributes.Title}</h1></div>
              <div className="details-describe pt-[4rem]" >{news.attributes.Describe}</div>
            </div>
            <div className="py-[4rem]">
              <img className="img-art w-full" src={`http://localhost:1337${news.attributes.Main_Picture.data.attributes.url}`}></img>
            </div>
            <div className="text-left">
              <div className="details-describe pt-[4rem]" >{news.attributes.subDescribe}</div>
            </div>
          </div>
          <div className="py-[4rem]">
            <div className="text-left">
              <div id="2"><h1 className="details-subtitle font-gallery">{news.attributes.secondTitle}</h1></div>
              <div className="details-describe pt-[4rem]" >{news.attributes.secondDescribe}</div>
            </div>
          </div>
        </div>


      </div>
    </div>
    
  );
};

export default Details;
