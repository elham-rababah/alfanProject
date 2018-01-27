import React from "react";
import Card from "./Card";
const cardsInfo = `[
  {"name" : "Elham ","verified" : true,"flage" : "JorF","subscriber" : "1000","view" : "100","country" : "Jordan","url" : "../assets/1.jpg","type" : "Comedy"},
  {"name" : "Ali", "verified" : false,"flage" : "UkF","subscriber" : "1000","view" : "100","country" : "Uk","url" : "../assets/2.jpg","type" : "Gaming" },
  {"name" : "Mohammad", "verified" : false,"flage" : "USAF","subscriber" : "1000","view" : "100","country" : "USA","url" : "../assets/3.jpg","type" : "cooking"},
  {"name" : "Mariam", "verified" : false,"flage" : "CanadaF","subscriber" : "1000","view" : "100","country" : "Canada","url" : "../assets/4.jpg","type" : "writting"},
  {"name" : "Aeshah", "verified" : false,"flage" : "JapanF","subscriber" : "1000","view" : "100","country" : "Japan","url" : "../assets/6.jpg","type" : "Comedy"}
]`;

export default class Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    var cardsInfoArr = JSON.parse(cardsInfo);
    return (
      <div>
        {cardsInfoArr.map(card => {
          return <Card card={card} />
        })}
      </div>
  );
  }
}