"use client";

import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Container,
    Box,
} from "@mui/material";
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
            <Image
                src="/sncImages/OnlyWheYBanner.png"
                alt="banner"
                width={1920}
                height={400}
                className="w-full protein-banner"
                priority
            />
            <Container sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom className="mx-auto text-center font-bold">
                    Protein Products
                </Typography>
                <Grid container spacing={4} className="flex flex-col items-center justify-center">
                    {ProteinProducts.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <Card elevation={0}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.image}
                                        alt={product.name}
                                    />
                                    <Box className="flex flex-col">
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {product.name}
                                        </Typography>
                                        {product.flavour && (
                                            <Typography variant="body2" color="text.secondary">
                                                {product.flavour}
                                            </Typography>
                                        )}
                                        <Typography variant="body2" color="text.secondary">
                                            Size: {product.size}
                                        </Typography>
                                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
                                            £{product.price.toFixed(2)}
                                        </Typography>
                                    </CardContent>
                                    </Box>
                                    
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
        
    );
}
