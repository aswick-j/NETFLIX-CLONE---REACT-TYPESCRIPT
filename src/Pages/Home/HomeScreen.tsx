import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../Nav/NavBar";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <NavBar />
      <Banner/>
    </>
  );
};

export default HomeScreen;
