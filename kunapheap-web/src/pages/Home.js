import React from "react";
import Footer from "../components/Footer";


import Banner from "../components/Banner";
import CategoryLayout from "../components/CategoryLayout";
import NewArrivalLayout from "../components/NewArrivalLayout";
import Loading from "../components/Loading";
import { useState } from "react";
function Home() {

  const [laoding,setLoading] = useState(false)

  return (
    
    <div>
      {laoding && <Loading />}
      <Banner />
      <CategoryLayout />
      <NewArrivalLayout />
     
      <Footer />
    </div>
  );
}

export default Home;
