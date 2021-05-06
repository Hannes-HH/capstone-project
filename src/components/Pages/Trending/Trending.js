import { useEffect, useState } from "react";
import CustomPagination from "../../Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState("2");
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1e37d8deae00c9b519356f5d9412edbb&page=${page}`
    )
      .then((res) => res.json())

      .then((data) => {
        setContent(data.results);
      });
  }, [page]);

  return (
    <div>
      <span className="pageTitle">New Releases</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
