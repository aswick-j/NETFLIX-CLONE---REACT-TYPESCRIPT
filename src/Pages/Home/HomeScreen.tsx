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
      <Rows title="Netflix Originals" fetchDatas={UrlReq.fetchNetflixOriginals} isLarge={true}/>
      <Rows title="Trending Now" fetchDatas={UrlReq.fetchTrending} isLarge={false}/>
      <Rows title="Top Rated" fetchDatas={UrlReq.fetchTopRated} isLarge={false}/>
      <Rows title="Best in Romance" fetchDatas={UrlReq.fetchRomanceMovies} isLarge={false}/>
      <Rows title="Best in Actions" fetchDatas={UrlReq.fetchActionMovies} isLarge={false}/>
      <Rows title="Best in Comedy" fetchDatas={UrlReq.fetchComedyMovies} isLarge={false}/>
      <Rows title="Best in Horror" fetchDatas={UrlReq.fetchHorrorMovies} isLarge={false}/>
    </>
  );
};

export default HomeScreen;
