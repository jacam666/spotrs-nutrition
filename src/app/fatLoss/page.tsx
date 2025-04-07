import TailWindNavbar from "@/components/TailwindNavbar";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    flavour: string;
};

const FatLossproduct: Product[] = [
    {
        id: 1,
        name: "STAGE RIPPED EXTREME",
        price: 34.99,
        image: "sncImages/RIPPED-EXTREME-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
    {
        id: 2,
        name: "NO MORE HUNGER",
        price: 24.99,
        image: "sncImages/NO-HUNGER-300x300.png",
        size: "90 Caps",
        flavour: "",
    },
    {
        id: 3,
        name: "STAGE RIPPED",
        price: 29.99,
        image: "sncImages/Stage-Ripped-CGI-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
]


export default function FatLoss() {
    return (
        <div>
            <TailWindNavbar />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-gray-200 via-slate-200 to-cyan-950 animate-gradient-x">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Fat Loss</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {FatLossproduct.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                            <h2 className="text-xl text-gray-900 font-semibold mt-4">{product.name}</h2>
                            <p className="text-gray-600">{product.flavour}</p>
                            <p className="text-gray-600">{product.size}</p>
                            <p className="text-lg text-gray-600 font-bold mt-2">${product.price.toFixed(2)}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}