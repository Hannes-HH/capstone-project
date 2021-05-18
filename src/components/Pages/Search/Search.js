import { TextField, Button, Tabs, Tab } from "@material-ui/core";
import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CustomPagination from "../../Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Search.css";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=1e37d8deae00c9b519356f5d9412edbb&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.results);
        setNumOfPages(data.total_pages);
      });
  }, [searchText, page, type]);

  return (
    <div className="ThemeProvider">
      <div className="SearchField">
        <TextField
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="Button">
          <Button variant="contained" onClick={fetch}>
            <div className="SearchIcon">
              <SearchIcon />
            </div>
          </Button>
        </div>
      </div>

      <div className="Tabs">
        <Tabs
          value={type}
          indicatorColor="secundary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab label="Search Movies" />
          <Tab label="Search TV Series" />
        </Tabs>
      </div>

      <div>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            ))}
          {searchText &&
            !content &&
            (type ? <h2>No Series found</h2> : <h2>No Movies found</h2>)}
        </div>
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
