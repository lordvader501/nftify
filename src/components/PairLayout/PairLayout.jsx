import React, { useState, useEffect, useRef } from "react";
import BasicInfo from "../Cards/BasicInfo";
import BaseToken from "../Cards/BaseToken";
import QuoteToken from "../Cards/QuoteToken";
import Price from "../Cards/Price";
const PairLayout = ({ searchData }) => {
  const [tokens, setTokens] = useState([]);
  const ref = useRef();
  ref.current = searchData;
  useEffect(() => {
    const fetchData = async () => {
      if (ref.current) {
        const response = await fetch(
          `https://api.dexscreener.com/latest/dex/search/?q=${ref.current}`
        );
        const data = await response.json();
        if (data.pairs.length > 0) {
          const limitedTokens = [...data.pairs].slice(0, 10);
          setTokens(limitedTokens);
        }
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="token-container">
      <h1 tyle={{ marginLeft: "20px" }}>Pair Search Results</h1>
      {tokens.map((token) => {
        const timestamp = token.pairCreatedAt;
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return (
          <div className="flex row j-center flex-wrap">
            <BasicInfo
              createdAt={formattedDate}
              symbol={token.baseToken.symbol}
              id={token.dexId}
              address={token.pairAddress}
            />
            <BaseToken
              name={token.baseToken.name}
              symbol={token.baseToken.symbol}
              address={token.baseToken.address}
            />
            <QuoteToken
              name={token.quoteToken.name}
              symbol={token.quoteToken.symbol}
              address={token.quoteToken.address}
            />
            <Price
              symbol={token.quoteToken.symbol}
              native={token.priceNative}
              usd={token.priceUsd}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PairLayout;
