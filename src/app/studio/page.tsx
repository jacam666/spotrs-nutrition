"use client";

import Footer from "@/components/Footer";
import TailWindNavbar from "@/components/TailwindNavbar";
import Image from "next/image";

type Product = {
    id: number;
    image: string;
};


const StudioImages: Product[] = [
    // {
    //     id: 1,
    //     image: "sncImages/studio-image.jpg",
    // },
    {
        id: 2,
        image: "sncImages/studioPic1.jpg",

    },
    {
        id: 3,
        image: "sncImages/studioPic2.jpg",

    },
    {
        id: 4,
        image: "sncImages/studioPic3.jpg",

    },
    {
        id: 5,
        image: "sncImages/studioPic4.jpg",

    },
    {
        id: 6,
        image: "sncImages/studioPic5.jpg",

    },
    {
        id: 7,
        image: "sncImages/studioPic6.jpg",

    },
    {
        id: 8,
        image: "sncImages/studioPic7.jpg",

    },
    {
        id: 9,
        image: "sncImages/studioPic8.jpg",

    },
]

export default function Studio() {
    return (
        <div>
            <TailWindNavbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-700">
                <h1 className="text-5xl text-center font-bold text-white pt-4">Our Studio</h1>
                <div className="flex flex-col items-center justify-center py-4 ">
                    <div className="flex flex-col sm:flex-row  justify-evenly px-4 gap-6">
                        <div className="bg-white shadow-md p-4 rounded-lg">
                            <Image
                                src="/sncImages/studioPic9.jpg"
                                alt="Studio Image"
                                width={300}
                                height={500}
                                className="rounded-lg mx-auto"
                                priority
                            />
                        </div>
                        <div className="bg-white shadow-md p-4 rounded-lg">
                            <Image
                                src="/sncImages/studio-image.jpg"
                                alt="Studio Image"
                                width={300}
                                height={500}
                                className="rounded-lg mx-auto"
                                priority
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                        {StudioImages.map((product) => (
                            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                                <div className="relative w-full">
                                    <Image
                                        src={`/${product.image}`}
                                        alt={`Studio Image ${product.id}`}
                                        width={500}
                                        height={500}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}