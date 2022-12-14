import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { image, symbol, id } = coin;
  return (
    <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
      <Link to={`/coin-details/${id}`}>
        <div className="flex gap-4 justify-between items-center">
          <div className="flex-shrink-0">
            <img className="mx-auto object-cover rounded-full h-16 w-16" src={image} alt="CoinImage" />
          </div>
          <div className="flex flex-col justify-end">
            <span className="text-gray-600 font-medium">{coin.name}</span>
            <span className="text-gray-400 text-xs">{symbol}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
