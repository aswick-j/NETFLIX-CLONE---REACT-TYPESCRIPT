import React, { useEffect, useState } from "react";
import "./Rows.css";
import axios from "../../helpers/axios";
import UrlReq from "../../helpers/UrlReq";
type Props = {
  title: any;
  isLarge: boolean;
  fetchurl:any
};
const Rows = (props: Props) => {
  const [rmovies, setRmovies] = useState<any>([]);
  // const fetchData = props.fetchData;
  const isLarge = props.isLarge
  const fetchurl = props.fetchurl
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchurl);
      setRmovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchurl]);
  const base_url = "https://image.tmdb.org/t/p/original";
//   console.log(rmovies);
  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row__posters">
        {rmovies.map(
          (movie:any) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge&& movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLarge && "row__posterLarge"}`}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Rows;
