import React from "react";
import Banner from "../../Components/Banner/Banner";
import Rows from "../../Components/Rows/Rows";
import NavBar from "../Nav/NavBar";
import UrlReq from "../../helpers/UrlReq"

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <NavBar />
      <Banner/>
      <Rows title="Netflix Originals" fetchurl={UrlReq.fetchNetflixOriginals} isLarge={true}/>
      <Rows title="Trending Now" fetchurl={UrlReq.fetchTrending} isLarge={false}/>
      <Rows title="Top Rated" fetchurl={UrlReq.fetchTopRated} isLarge={false}/>
      <Rows title="Best in Romance" fetchurl={UrlReq.fetchRomanceMovies} isLarge={false}/>
      <Rows title="Best in Actions" fetchurl={UrlReq.fetchActionMovies} isLarge={false}/>
      <Rows title="Best in Comedy" fetchurl={UrlReq.fetchComedyMovies} isLarge={false}/>
      <Rows title="Best in Horror" fetchurl={UrlReq.fetchHorrorMovies} isLarge={false}/>
    </>
  );
};

export default HomeScreen;
