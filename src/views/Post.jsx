import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Post = () => {
  const params = useParams();

  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) {
    return <h2 className="text-center my-5">Cargando ...</h2>;
  }

  if (error !== "") {
    return <h2 className="text-center my-5">{error}</h2>;
  }

  return (
    <>
      <div className="container card my-5 shadow-lg p-5">
        <div className="card-body">
          <h2 className="mb-3">+ {data.title}</h2>
          <p>{data.body}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
