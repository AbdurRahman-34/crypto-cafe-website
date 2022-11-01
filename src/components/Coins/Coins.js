import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-4 py-20 pb-24 mx-auto max-w-7xl md:px-2">
          <h2 className="text-center text-3xl font-bold text-gray-700">
            Availabe Crypto Currencies
          </h2>
          <p className="text-center mb-12 mt-4 text-xl font-normal text-gray-500">
            Total Coins : {coins.length}
          </p>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin}></CoinCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
