import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
const CoinList = () => {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(50);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFullCoinsData();
  }, []);

  const getFullCoinsData = async () => {
    setLoading(true);
    try {
      let receive = await fetch("https://api.coincap.io/v2/assets?limit=300");
      let res = await receive.json();
      setLoading(false);
      setData(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="section">
        <h3>Loading... pls wait</h3>
      </div>
    );
  }

  const ShowMore = () => {
    setViewMore((viewMore) => viewMore + 50);
  };

  return (
    <div className="m">
      <div className="detailsMain">
        <div className="details">
          <div>
            <p>
              MARKET CAP <br />
              $1.65T
            </p>
          </div>
          <div>
            <p>
              EXCHANGE VOL
              <br />
              $130.29B
            </p>
          </div>
          <div>
            <p>
              ASSETS
              <br />
              1,737
            </p>
          </div>
          <div>
            <p>
              Exchanges
              <br />
              90
            </p>
          </div>
          <div>
            <p>
              MARKETS
              <br />
              10,085
            </p>
          </div>
          <div>
            <p>
              BTC DOM INDEX
              <br />
              45.0%
            </p>
          </div>
        </div>
      </div>
  <div className="box">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP (24hr)</th>
            <th>Supply</th>
            <th>Volume (24hr)</th>
            <th>Change(24hr)</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, viewMore).map((e) => (
            <tr key={e.rank}>
              <td>{e.rank}</td>

              <td>
                <div className="table-flex">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${e.symbol.toLowerCase()}%402x.png`}
                    alt="logo"
                    className="logo-img"
                  />
                  <div className="logoText">
                    {e.name}
                    <br />
                    <span>{e.symbol}</span>
                  </div>
                </div>
              </td>

              <td>${parseFloat(e.priceUsd).toFixed(2)}</td>
              <td>
                $
                {Math.abs(e.marketCapUsd) >= 1.0e9
                  ? (Math.abs(e.marketCapUsd) / 1.0e9).toFixed(2) + "B"
                  : Math.abs(e.marketCapUsd) >= 1.0e6
                  ? (Math.abs(e.marketCapUsd) / 1.0e6).toFixed(2) + "M"
                  : Math.abs(e.marketCapUsd) >= 1.0e3
                  ? (Math.abs(e.marketCapUsd) / 1.0e3).toFixed(2) + "K"
                  : Math.abs(e.marketCapUsd)}
              </td>

              <td>${parseFloat(e.vwap24Hr).toFixed(2)}</td>
              <td>
                {Math.abs(e.supply) >= 1.0e9
                  ? (Math.abs(e.supply) / 1.0e9).toFixed(2) + "B"
                  : Math.abs(e.supply) >= 1.0e6
                  ? (Math.abs(e.supply) / 1.0e6).toFixed(2) + "M"
                  : Math.abs(e.supply) >= 1.0e3
                  ? (Math.abs(e.supply) / 1.0e3).toFixed(2) + "K"
                  : Math.abs(e.supply)}
              </td>
              <td>
                $
                {Math.abs(e.volumeUsd24Hr) >= 1.0e9
                  ? (Math.abs(e.volumeUsd24Hr) / 1.0e9).toFixed(2) + "B"
                  : Math.abs(e.volumeUsd24Hr) >= 1.0e6
                  ? (Math.abs(e.volumeUsd24Hr) / 1.0e6).toFixed(2) + "M"
                  : Math.abs(e.volumeUsd24Hr) >= 1.0e3
                  ? (Math.abs(e.volumeUsd24Hr) / 1.0e3).toFixed(2) + "K"
                  : Math.abs(e.volumeUsd24Hr)}
              </td>
              {e.changePercent24Hr < 0 ? (
                <td className="redText">
                  {parseFloat(e.changePercent24Hr).toFixed(2)}%
                </td>
              ) : (
                <td className="greenText">
                  {parseFloat(e.changePercent24Hr).toFixed(2)}%
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="view" onClick={ShowMore}>
        View More
      </button>
    </div>
    </div>
  );
};
export default CoinList;
