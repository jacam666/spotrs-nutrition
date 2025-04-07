"use client";

import React from "react";
// import {
//     Card,
//     CardActionArea,
//     CardMedia,
//     CardContent,
//     Typography,
//     Container,
// } from "@mui/material";
//import Grid from "@mui/material/Grid"; // ✅ Separate import to avoid TS errors
import TailWindNavbar from "@/components/TailwindNavbar";
import Image from "next/image";
import Footer from "@/components/Footer";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    flavour: string;
}

const ProteinProducts: Product[] = [
    {
        id: 1,
        name: 'THE ONLY WHEY PROTEIN',
        price: 39.99,
        image: "sncImages/only-whey-final-300x300.png",
        flavour: "",
        size: "2.2 Kg",
    },
    {
        id: 2,
        name: 'THE ONLY WHEY PROTEIN',
        price: 29.99,
        image: "sncImages/only-whey-final-300x300.png",
        flavour: "",
        size: "908g",
    },
    {
        id: 3,
        name: "AFTER TRAIN ADVANCED",
        price: 39.99,
        image: "sncImages/advanced-aftertrain-strawberrylime-300x300.png",
        flavour: "Strawberry and Lime",
        size: "2Kg"
    },
    {
        id: 4,
        name: "AFTER TRAIN ADVANCED",
        price: 39.99,
        image: "sncImages/AFTER-TRAIN-ADVANCED-300x300.png",
        flavour: "Blue Candy Flavour",
        size: "2Kg"
    },
    {
        id: 5,
        name: "AFTER TRAIN ADVANCED",
        price: 39.99,
        image: "sncImages/orange-mango-advanced-aftertrain-for-web-300x300.png",
        flavour: "Orange Mango Flavour",
        size: "2Kg"
    },
    {
        id: 6,
        name: "AFTER TRAIN",
        price: 24.99,
        image: "sncImages/1After_Train_Fruit_Punch-1-300x300.png",
        flavour: "Fruit Punch",
        size: "908g"
    },
    {
        id: 7,
        name: "AFTER TRAIN",
        price: 24.99,
        image: "sncImages/2After_Train_Raspberry-1-300x300.png",
        flavour: "Raspberry",
        size: "908g"
    },
    {
        id: 8,
        name: "AFTER TRAIN",
        price: 24.99,
        image: "sncImages/apple-aftertrain-300x300.png",
        flavour: "Apple",
        size: "908g"
    },
    {
        id: 9,
        name: "AFTER TRAIN",
        price: 24.99,
        image: "sncImages/3After_Train_Orange-1-300x300.png",
        flavour: "Orange",
        size: "908g"
    },
];

export default function Proteins() {
    return (
        <div>
            <TailWindNavbar />
            
            <div className="flex flex-col items-center justify-center pb-4 min-h-screen bg-gradient-to-r from-gray-200 via-slate-200 to-cyan-950 animate-gradient-x">
            <Image
                src="/sncImages/OnlyWheYBanner.png"
                alt="banner"
                width={1920}
                height={400}
                className="w-full"
                priority
            />
                            <h1 className="text-4xl text-white font-bold">Proteins</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                                {ProteinProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-gray-200/30 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-4 text-white"
                                    >
                                        <Image
                                            src={`/${product.image}`}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                            className="w-full h-52 object-cover rounded-t-lg"
                                        />
                                        <h2 className="text-xl text-gray-900 font-semibold mt-4">{product.name}</h2>
                                        <p className="text-gray-600">{product.flavour}</p>
                                        <p className="text-gray-600">{product.size}</p>
                                        <p className="text-lg text-gray-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
            <Footer />
        </div>
    );
}
