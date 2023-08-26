import React, { useState, useEffect } from "react";
import "./TokenLayout.css";
import BasicInfo from "../Cards/BasicInfo";
import BaseToken from "../Cards/BaseToken";
import QuoteToken from "../Cards/QuoteToken";
import Price from "../Cards/Price";
const TokenLayout = () => {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
      );
      const data = await response.json();
      const limitedTokens = [...data.pairs].slice(0, 5);
      setTokens(limitedTokens);
    };
    fetchData();
  }, []);
  return (
    <div className="token-container">
      <h1 style={{ marginLeft: "20px" }}>Token Search Results</h1>
      {tokens.map((token, index) => {
        const timestamp = token.pairCreatedAt;
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return (
          <div className="flex row j-center flex-wrap" key={index}>
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

export default TokenLayout;
