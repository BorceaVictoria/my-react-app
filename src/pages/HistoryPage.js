import {
  BananaFruit,
  CherryFruit,
  LemonFruit,
  PeachFruit,
  PineappleFruit,
  PlumFruit,
  StrawberryFruit,
} from "../Fruits";

const fruitSize = 16;
const fruits = [
  <BananaFruit size={fruitSize} />,
  <CherryFruit size={fruitSize} />,
  <LemonFruit size={fruitSize} />,
  <PeachFruit size={fruitSize} />,
  <PineappleFruit size={fruitSize} />,
  <PlumFruit size={fruitSize} />,
  <StrawberryFruit size={fruitSize} />,
];

function HistoryPage() {
  const casinoHistory = JSON.parse(localStorage.getItem("history"));
  return (
    <>
      <h1>This is history page.</h1>
      <ol>
        {casinoHistory.map((x) => (
          <li>
            {x.data} - {x.slots.map((slot) => fruits[slot])}
          </li>
        ))}
      </ol>
    </>
  );
}

export default HistoryPage;
