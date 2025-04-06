import Link from "next/link";

export default function PreWorkouts() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
            <h1 className="text-4xl font-bold mb-8">Pre Workouts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {/* {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                        <p className="text-gray-600">{product.flavour}</p>
                        <p className="text-gray-600">{product.size}</p>
                        <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                    </div>
                ))} */}
                <Link href="/" className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Take me Home</button>
                </Link>
            </div>
        </div>
    );
}