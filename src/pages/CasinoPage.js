import {
  BananaFruit,
  CherryFruit,
  LemonFruit,
  PeachFruit,
  PineappleFruit,
  PlumFruit,
  StrawberryFruit,
} from "../Fruits";
import "./CasinoPage.css";
import React from "react";

const slotsCost = 100;
const initialMoney = 1000;

function getStartMoney() {
  var startMoney = JSON.parse(localStorage.getItem("money"));
  if (startMoney == null) startMoney = initialMoney;
  return startMoney;
}

const fruits = [
  <BananaFruit />,
  <CherryFruit />,
  <LemonFruit />,
  <PeachFruit />,
  // <PineappleFruit />,
  // <PlumFruit />,
  // <StrawberryFruit />,
];

function MoneyDisplay({ value }) {
  return <h2>Ai {value} lei.</h2>;
}

function CasinoPage() {
  var [money, setMoney] = React.useState(getStartMoney());
  var [slots, setSlots] = React.useState([null, null, null]);

  React.useEffect(() => {
    if (slots[0] != null) {
      if (slots.every((x) => x == slots[0])) setMoney((prev) => prev + 1000);

      const newEntry = {
        slots: slots,
        data: new Date(),
      };
      var casinoHistory = JSON.parse(localStorage.getItem("history"));
      if (casinoHistory == null) casinoHistory = [];
      casinoHistory.push(newEntry);
      localStorage.setItem("history", JSON.stringify(casinoHistory));
    }
  }, [slots]);

  React.useEffect(() => {
    localStorage.setItem("money", JSON.stringify(money));
  }, [money]);

  function getRandomNumber() {
    return Math.floor(Math.random() * fruits.length);
  }

  function generateNumbers() {
    var sirNou = [];
    for (var i = 0; i < slots.length; i++) {
      sirNou[i] = getRandomNumber();
    }
    setSlots(sirNou);
    setMoney((prev) => prev - slotsCost);
  }

  function addMoney() {
    setMoney((prev) => prev + 1000);
  }

  // const slotsSquares = [];
  // for (var i = 0; i < slots.length; i++) {
  //   slotsSquares.push(<div className="square">{slots[i]}</div>);
  // }

  const slotsSquares = slots.map((slot) => (
    <div className="square">{fruits[slot]}</div>
  ));

  const hasEnoughMoney = money >= slotsCost;

  return (
    <>
      <h1>This is CasinoPage.</h1>
      <button onClick={generateNumbers} disabled={!hasEnoughMoney}>
        Start
      </button>
      <button onClick={addMoney} disabled={money >= slotsCost}>
        Imprumut
      </button>
      <div style={{ display: "flex" }}>{slotsSquares}</div>
      <MoneyDisplay value={money} />
    </>
  );
}

export default CasinoPage;
