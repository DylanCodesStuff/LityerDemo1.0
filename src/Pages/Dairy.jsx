import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
import { nanoid } from "nanoid";
export default function Dairy({ img, title, description, price }) {
  const dairyData = data.find((data) => data.name === "dairy");
  return (
    <div className="page-wrapper">
      <div className="dairy-page-container category-page-container">
        <div className="dairy-title catchphrase text-center mb-4 text-3xl">
          Delicious dairy products you &nbsp;<u>love</u>!
        </div>
      </div>
      <div className="dairy-items category-items">
        {
          <div key={nanoid()}>
            <Card img={dairyData.img} title={dairyData.title} description={dairyData.description} price={dairyData.price} />
          </div>
        }
      </div>
    </div>
  );
}
