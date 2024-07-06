import banana from "./fruits/banana.png";
import cherry from "./fruits/cherry.png";
import lemon from "./fruits/lemon.png";
import peach from "./fruits/peach.png";
import pineapple from "./fruits/pineapple.png";
import plum from "./fruits/plum.png";
import strawberry from "./fruits/strawberry.png";

const defaultSize = 64;

export function BananaFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={banana} />;
}

export function CherryFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={cherry} />;
}

export function LemonFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={lemon} />;
}

export function PeachFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={peach} />;
}

export function PineappleFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={pineapple} />;
}

export function PlumFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={plum} />;
}

export function StrawberryFruit({ size = defaultSize }) {
  return <img width={size} height={size} src={strawberry} />;
}
