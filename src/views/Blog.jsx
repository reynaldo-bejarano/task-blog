import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h2 className="text-center my-5">Cargando ...</h2>;
  }

  if (error !== "") {
    return <h2 className="text-center my-5">{error}</h2>;
  }

  const handleChange = (e) => {
    const filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control my-5 shadow-sm"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />

      {data
        .filter((item) => {
          const param = searchParams.get("filter");
          if (!param) return true;
          return item.title.startsWith(param.toLowerCase());
        })
        .map((item) => (
          <p key={item.id}>
            <Link to={`/blog/${item.id}`}>
              {item.id} - {item.title}
            </Link>{" "}
          </p>
        ))}
    </div>
  );
};

export default Blog;
