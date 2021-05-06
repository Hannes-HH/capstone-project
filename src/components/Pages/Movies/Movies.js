// import axios from "axios";
// import { useEffect, useState } from "react";
// import CustomPagination from "../../Pagination/CustomPagination";
// import SingleContent from "../../SingleContent/SingleContent";

// const Movies = () => {
//   const [page, setPage] = useState(1);
//   const [content, setContent] = useState([]);
//   const [numOfPages, setNumOfPages] = useState();

//   const fetchMovies = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=1e37d8deae00c9b519356f5d9412edbb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
//     );
//     console.log(data);
//   };

//   setContent(data.results);
//   setNumOfPages(data.total_pages);
// };

//   useEffect(() => {
//     fetchMovies();
//     // eslint-disable-next-line
//   }, [page]);
// };

//   return (
//     <div>
//       <span className="pageTitle">Discover Movies</span>
//       <Genres
//         type="movie"
//         selectedGenres={selectedGenres}
//         setSelectedGenres={setSelectedGenres}
//         genres={genres}
//         setGenres={setGenres}
//         setPage={setPage}
//       />
//       <div className="trending">
//         {content &&
//           content.map((c) => (
//             <SingleContent
//               key={c.id}
//               id={c.id}
//               poster={c.poster_path}
//               title={c.title || c.name}
//               date={c.first_air_date || c.release_date}
//               media_type="movie"
//               vote_average={c.vote_average}
//             />
//           ))}
//       </div>
//       {numOfPages > 1 && (
//         <CustomPagination setPage={setPage} numOfPages={numOfPages} />
//       )}
//     </div>
//   );
// };

// export default Movies;
