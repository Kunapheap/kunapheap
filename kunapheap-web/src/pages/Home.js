import React from "react";


import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CategoryLayout from "../components/CategoryLayout";
import NewArrivalLayout from "../components/NewArrivalLayout";

function Home() {

  return (
    <div>
      <Banner />
      <CategoryLayout />
      <NewArrivalLayout />
      <Footer />
    </div>
  );
}

export default Home;
