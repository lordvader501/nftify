import React from "react";
import "./Card.css";

const BaseToken = ({ name, symbol, address }) => {
  return (
    <div className="card-container flex col">
      <h4 className="card-title">Basic Token</h4>
      <div className="flex col j-center">
        <div className="card-details">
          <span key={name + name}>Name</span>
          <span key={name}>{name}</span>
        </div>
        <div className="card-details">
          <span key={symbol + symbol}>Symbol</span>
          <span key={symbol}>{symbol}</span>
        </div>
        <div className="card-details">
          <span key={`123`}>Address</span>
          <span key={`add`}>
            #{address && address.split("0x")[1].slice(0, 4)}
          </span>
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
          key={"svg1"}
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
          key={"svg2"}
        >
          <path
            d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default BaseToken;
