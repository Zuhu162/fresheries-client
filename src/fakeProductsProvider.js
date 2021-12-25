import acornImage from "./assets/fruits/acorn.png";
import appleImage from "./assets/fruits/apple.png";
import apricotImage from "./assets/fruits/apricot.png";
import avocadoImage from "./assets/fruits/avocado.png";
import bananaImage from "./assets/fruits/banana.png";
import blackberryImage from "./assets/fruits/blackberry.png";
import cherryImage from "./assets/fruits/cherry.png";
import coconutImage from "./assets/fruits/coconut.png";
import cucumberImage from "./assets/fruits/cucumber.png";
import caImage from "./assets/fruits/custardApple.png";
import dateImage from "./assets/fruits/date.png";
import dragonImage from "./assets/fruits/dragon.png";
import durianiImage from "./assets/fruits/durian.png";
import figImage from "./assets/fruits/fig.png";
import gooseberryImage from "./assets/fruits/gooseberry.png";
import grapesImage from "./assets/fruits/grapes.png";
import guava from "./assets/fruits/guava.png";
import jackfruit from "./assets/fruits/jackfruit.png";
import jabuticaba from "./assets/fruits/jabuticaba.png";
import jambuk from "./assets/fruits/jambuk.png";
import jujube from "./assets/fruits/jujube.png";
import kiwi from "./assets/fruits/kiwi.png";
import kumquat from "./assets/fruits/kumquat.png";
import lemon from "./assets/fruits/lemon.png";
import longan from "./assets/fruits/longan.png";
import lychee from "./assets/fruits/lychee.png";
import mango from "./assets/fruits/mango.png";
import mangosteen from "./assets/fruits/mangosteen.png";
import muskmelon from "./assets/fruits/muskmelon.png";
import orange from "./assets/fruits/orange.png";
import palmyra from "./assets/fruits/palmyra.png";
import papaya from "./assets/fruits/papaya.png";
import passionfruit from "./assets/fruits/passionfruit.png";
import pear from "./assets/fruits/pear.png";
import pineapple from "./assets/fruits/pineapple.png";
import plum from "./assets/fruits/plum.png";

const fruitsProducts = [
  {
    name: "Acorn",
    price: 15,
    minAmount: 0.5,
    image: acornImage,
  },
  {
    name: "Apple",
    price: 30,
    minAmount: 1,
    image: appleImage,
  },
  {
    name: "Apricot",
    price: 50,
    minAmount: 1,
    image: apricotImage,
  },
  {
    name: "Avocado",
    price: 50,
    minAmount: 1,
    image: avocadoImage,
  },
  {
    name: "Banana",
    price: 10,
    minAmount: 1,
    image: bananaImage,
  },
  {
    name: "Blackberry",
    price: 10,
    minAmount: 0.5,
    image: blackberryImage,
  },
  {
    name: "Cherry",
    price: 15,
    minAmount: 0.5,
    image: cherryImage,
  },
  {
    name: "Coconut",
    price: 30,
    minAmount: 3,
    image: coconutImage,
  },
  {
    name: "Cucumber",
    price: 5,
    minAmount: 1,
    image: cucumberImage,
  },
  {
    name: "Custard Apple",
    price: 40,
    minAmount: 0.5,
    image: caImage,
  },
  {
    name: "Date",
    price: 20,
    minAmount: 0.5,
    image: dateImage,
  },
  {
    name: "Dragon Fruit",
    price: 30,
    minAmount: 1,
    image: dragonImage,
  },
  {
    name: "Durian",
    price: 5,
    minAmount: 1,
    image: durianiImage,
  },
  {
    name: "Fig",
    price: 5,
    minAmount: 1,
    image: figImage,
  },
  {
    name: "Gooseberry",
    price: 15,
    minAmount: 0.5,
    image: gooseberryImage,
  },
  {
    name: "Grapes",
    price: 15,
    minAmount: 0.5,
    image: grapesImage,
  },
  {
    name: "Guava",
    price: 5,
    minAmount: 1,
    image: guava,
  },
  {
    name: "Jackfruit",
    price: 10,
    minAmount: 3,
    image: jackfruit,
  },
  {
    name: "Jabuticaba",
    price: 15,
    minAmount: 0.5,
    image: jabuticaba,
  },
  {
    name: "Jambuk",
    price: 10,
    minAmount: 1,
    image: jambuk,
  },
  {
    name: "Kiwi",
    price: 20,
    minAmount: 1,
    image: kiwi,
  },
  {
    name: "Kumquat",
    price: 10,
    minAmount: 1,
    image: kumquat,
  },
  {
    name: "Lemon",
    price: 5,
    minAmount: 1,
    image: lemon,
  },
  {
    name: "Lychee",
    price: 5,
    minAmount: 0.5,
    image: lychee,
  },
  {
    name: "Mango",
    price: 35,
    minAmount: 1,
    image: mango,
  },
  {
    name: "Mangosteen",
    price: 15,
    minAmount: 1,
    image: mangosteen,
  },
];

const getFruits = () => {
  return fruitsProducts;
};

export default getFruits;
