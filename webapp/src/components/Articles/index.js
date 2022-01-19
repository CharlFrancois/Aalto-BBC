import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Card from "../Card";



const Articles = ({ articles }) => {
  const [blogs, setBlogs] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await axios.get("http://localhost:1337/api/articles");
        console.log(result);
        setBlogs(result.data.data);
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
      
    }
    fetchData();
    
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="mx-10 my-15 divide-y ">
      <div class="grid grid-cols-2 gap-4">
        <div class="justify-items-center"><img className="img-art" src="test.png" width="483" height="373"></img></div>
        <div class="...">02</div>

      </div>
      <div className="flex flex-wrap divide-y divide-blue-200">
            {blogs
              .sort((a, b) => b.attributes.created_at>a.attributes.created_at)
              .map((blog) => {
                return (
                  <div className="w-full overflow-hidden xl:w-1/3 "
                    key={blog.id}
                  >
                    <Card article={blog} key={`article__${blog.id}`} />
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Articles;
