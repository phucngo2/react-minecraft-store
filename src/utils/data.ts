// Import images
import Diamond_Boots from "../img/Diamond_Boots.png";
import Diamond_Chestplate from "../img/Diamond_Chestplate.png";
import Diamond_Helmet from "../img/Diamond_Helmet.png";
import Diamond_Leggings from "../img/Diamond_Leggings.png";
import Diamond_Pickaxe from "../img/Diamond_Pickaxe.png";
import Diamond_Sword from "../img/Diamond_Sword.png";
import Diamond from "../img/Diamond.png";
import Enchanted_Golden_Apple from "../img/Enchanted_Golden_Apple.gif";
import Elytra from "../img/Elytra.png";
import Cake from "../img/Cake.png";
import Emerald from "../img/Emerald.png";
import Book from "../img/Book.png";

// Mock products data
export const products: readonly IProduct[] = [
    { id: 1, name: "Diamond Boots", img: Diamond_Boots, price: 4 },
    {
        id: 2,
        name: "Diamond Chestplate",
        img: Diamond_Chestplate,
        price: 8,
    },
    { id: 3, name: "Diamond Helmet", img: Diamond_Helmet, price: 5 },
    {
        id: 4,
        name: "DiamondLeggings",
        img: Diamond_Leggings,
        price: 7,
    },
    {
        id: 5,
        name: "Diamond Pickaxe",
        img: Diamond_Pickaxe,
        price: 3,
    },
    { id: 6, name: "Diamond Sword", img: Diamond_Sword, price: 2 },
    { id: 7, name: "Diamond", img: Diamond, price: 1 },
    {
        id: 8,
        name: "Enhanted Golden Apple",
        img: Enchanted_Golden_Apple,
        price: 39,
    },
    {
        id: 9,
        name: "Elytra",
        img: Elytra,
        price: 9,
    },
    {
        id: 10,
        name: "CreamPie",
        img: Cake,
        price: 9,
    },
    {
        id: 11,
        name: "Emerald",
        img: Emerald,
        price: 3,
    },
    {
        id: 12,
        name: "Kama Sutra",
        img: Book,
        price: 69,
    },
];

export const emerald = Emerald;
