"use client";
import Footer from "@/components/Footer";
import TailWindNavbar from "@/components/TailwindNavbar";
import Image from "next/image";


type Product = {
    id: number;
    image: string;
    name: string;
    flavour: string;
    size: string;
    price: number;
};

const Workoutproducts: Product[] = [
    {
        id: 1,
        name: "B4 EXTREME",
        price: 24.99,
        image: "sncImages/b4-candy-extreme-300x300.png",
        flavour: "COTTON CANDY",
        size: "",
    },
    {
        id: 2,
        name: "B4 EXTREME",
        price: 24.99,
        image: "sncImages/cap-b4pre-blue-300x300 copy1.png",
        flavour: "BLUE RASPBERRY",
        size: "",
    },
    {
        id: 3,
        name: "B4 TRAIN",
        price: 24.99,
        image: "sncImages/B4-Rio-berry-300x300.png",
        flavour: "RIO BERRY",
        size: "",
    },
    {
        id: 4,
        name: "B4 TRAIN",
        price: 24.99,
        image: "sncImages/B4-tropical-gummy-300x300.png",
        flavour: "TROPICAL GUMMY",
        size: "",
    },
    {
        id: 5,
        name: "STAGE PUMP",
        price: 29.99,
        image: "sncImages/cap-stagepump-strawberry-lime-300x300.png",
        flavour: "STRAWBERRY and LIME",
        size: "",
    },
    {
        id: 6,
        name: "STAGE PUMP",
        price: 29.99,
        image: "sncImages/STAGE-PUMP-BLUE-FOR-WEB-300x300.png",
        flavour: "BLUE RASPBERRY",
        size: "",
    },
]

export default function PreWorkouts() {
    return (
        <div>
            <TailWindNavbar />
            <div className="flex flex-col items-center justify-center py-4 min-h-screen bg-white">
                <h1 className="text-4xl text-white font-bold">Pre Workouts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {Workoutproducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-200/30 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-4 text-white"
                        >
                            <Image
                                src={`/${product.image}`}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded-t-lg"
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