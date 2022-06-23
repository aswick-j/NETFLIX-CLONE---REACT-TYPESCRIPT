import React, { useEffect, useState } from "react";
import axios from "../../helpers/axios";
import UrlReq from "../../helpers/UrlReq";
import "../Banner/Banner.css"
type Props = {};

const Banner = () => {
  const [bmovies, setBmovies] = useState<any>([]);
  useEffect(() => {
    const fetchDatas = async () => {
      const request = await axios.get(UrlReq.fetchNetflixOriginals);
      setBmovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };

    fetchDatas();
  }, []);

  function truncate(string: any, n: any) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  console.log(bmovies);
  return (
    <>
      <div>
        <header
          className="banner__img"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${bmovies?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__text">
              {bmovies?.title || bmovies?.name || bmovies?.original_name}
            </h1>
          </div>
          <div >
            <button className="banner__button">Play</button>
            <button className="banner__button">List</button>
          </div>
          <div className="banner__desc">{truncate(bmovies?.overview, 150)}</div>
          <div className="banner__crossfade"></div>
        </header>
      </div>
    </>
  );
};

export default Banner;
