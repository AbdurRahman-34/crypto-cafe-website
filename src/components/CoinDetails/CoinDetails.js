import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    const url = ` https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data)
        console.log(data);
      });
  }, [id]);
  return (
    <div className="px-4 h-[70vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center">
        <div className="order-2 md:order-1">
            <h1 className="text-3xl ">Genarel Info :</h1> 
            <h2>Coin Name : {coin.name}</h2>
            <h2>Market Cap Rank : {coin.market_cap_rank}</h2>
            <h2>Origin : {coin.country_origin ? coin.country_origin : 'Not Found'}</h2>


            {/* Scores  content Area  */}
            <h1 className="text-3xl mt-10">Scores :</h1> 
            <h2>Community Score : {coin.community_score}</h2>
            <h2>Developer Score : {coin.developer_score}</h2>
        </div>

        <div className="flex justify-center items-center order-1 md:order-2">
            <img src={coin.image?.large} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
