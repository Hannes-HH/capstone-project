import { Chip } from "@material-ui/core";
import { useEffect } from "react";
import "./Genres.css";

const Genres = ({
  selectedGenres,
  onSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    onSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    onSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=1e37d8deae00c9b519356f5d9412edbb&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, [setGenres, type]);

  return (
    <div className="Chip">
      {selectedGenres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          color="primary"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
