import React from "react";
import "./Card.css";

const BasicInfo = ({ createdAt, symbol, id, address }) => {
  return (
    <div className="card-container flex col">
      <h4 className="card-title">Basic Info</h4>
      <div className="flex col j-center">
        <div className="card-details">
          <span key={symbol + createdAt}>Pair created at</span>
          <span key={createdAt}>{createdAt}</span>
        </div>
        <div className="card-details">
          <span key={symbol + symbol}>Symbol</span>
          <span key={symbol}>{symbol}</span>
        </div>
        <div className="card-details">
          <span key={symbol + id}>Dex ID</span>
          <span key={id}>#{id}</span>
        </div>
        <div className="card-details">
          <span key={symbol + symbol}>Pair Address</span>
          <span>#{address && address.split("0x")[1].slice(0, 4)}</span>
        </div>
      </div>
      <div className="card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="outer-icon"
          key={"1"}
        >
          <circle cx="24" cy="24" r="24" fill="#960252" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="inner-icon"
          key={"2"}
        >
          <path
            d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default BasicInfo;
