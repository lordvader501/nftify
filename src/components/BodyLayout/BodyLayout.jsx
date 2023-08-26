import React, { useState, useEffect } from "react";
import "./bodylayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Searchbar from "../SearchBar/Searchbar";
import TokenLayout from "../TokenLayout/TokenLayout";
import PairLayout from "../PairLayout/PairLayout";
import ConnectButton from "../ConnectButton";
import HambuergerNav from "../HamburgerNav/HambuergerNav";

const BodyLayout = () => {
  const [selectedNav, setSelectedNav] = useState({ token: true, pair: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [hamOpen, setHamopen] = useState(false);
  useEffect(() => {
    if (searchQuery.length > 0) setSelectedNav({ token: false, pair: true });
  }, [searchQuery]);
  return (
    <div className="container">
      <div className="body">
        <Sidebar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

        <div className="flex col flex-start w-fit">
          <div className="res-search flex row j-between pt-40">
            <Searchbar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <div className="header">
              <div className="heading col">
                <div className="flex row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    style={{ marginLeft: "20px" }}
                    onClick={() => setHamopen(!hamOpen)}
                  >
                    <path
                      d="M50 5.57143H1.64307M50 23H1.94307M50 40.4286H1.64307"
                      stroke="white"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 style={{ marginBlock: "0", marginLeft: "10px" }}>
                    NFTify
                  </h1>
                </div>
                {hamOpen ? (
                  <HambuergerNav
                    selectedNav={selectedNav}
                    setSelectedNav={setSelectedNav}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="btn-right">
                <ConnectButton />
              </div>
            </div>
          </div>
          <div className="contents">
            {selectedNav.token && <TokenLayout />}
            {selectedNav.pair && <PairLayout searchData={searchQuery} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLayout;
