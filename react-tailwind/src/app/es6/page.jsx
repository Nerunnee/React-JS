import Image from "next/image";

export default function Home() {
  const car = { brand: "Tesla", model: "Model 3", year: 2023 };
  const fruit = ["apple", "banana"];
  return (
    <div>
      <Double number={3} />
      <DrinkList />
      <CarInfo car={car} />
      <AddFruits fruit={fruit} />
    </div>
  );
}

const ColorList = () => {
  const colors = ["red", "blue", "white"];

  return (
    <ul>
      {colors.map((color, index) => {
        return <li key={index}>{color}</li>;
      })}
    </ul>
  );
};

const Double = (props) => {
  return <span>{props.number * 2}</span>;
};

const DrinkList = () => {
  const drinks = ["Coffee", "Tea", "Water"];

  return (
    <div>
      {drinks.map((drink, index) => {
        return <ol key={index}>{drink}</ol>;
      })}
    </div>
  );
};

const CarInfo = ({ car }) => {
  const { brand, model, year } = car;

  return (
    <div>
      {brand} {model} {year}
    </div>
  );
};

const AddFruits = ({ fruit }) => {
  // allFruits = [];
  // {...fruit, allFruits.push("cherry")};
  // return allFruits
};
