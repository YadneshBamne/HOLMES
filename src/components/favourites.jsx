import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, Trash2Icon } from "lucide-react";
import { PGDetails } from "@/pages/pgdetails";
import { useNavigate } from "react-router-dom";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Load saved favourites from localStorage
    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const navigate = useNavigate();


  const handleDelete = (index) => {
    // Remove the item at the specified index
    const updatedFavourites = favourites.filter((_, i) => i !== index);
    setFavourites(updatedFavourites);
    // Update localStorage
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="min-h-screen items-center my-auto bg-white">
      <div className="p-6 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Favourites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.length > 0 ? (
            favourites.map((pg, index) => (
              <Card
                key={index}
                className="relative bg-white shadow-md rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="relative z-10 p-4 bg-gradient-to-b from-transparent to-black rounded-2xl">
                  <div className="flex justify-end p-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-white hover:text-red-700"
                      aria-label="Remove from favourites"
                    >
                      <Trash2Icon size={20} />
                    </button>
                  </div>

                  <CardHeader className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-bold text-white">
                        {pg.name}
                      </h2>
                      <p className="text-gray-300">{pg.location}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-100">{pg.price}</p>
                    <p className="text-gray-400">{pg.features}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="text-white border-white rounded-full"
                      onClick={() => navigate("/pg-details", { state: { pg } })}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </div>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </Card>
            ))
          ) : (
            <p className="text-center text-red-500 col-span-full">
              No favourites added.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
