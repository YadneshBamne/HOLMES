import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Check if there are any saved favourites in localStorage
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Your Favourites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.length > 0 ? (
            favourites.map((pg, index) => (
              <Card key={index} className="bg-white shadow-md rounded-2xl p-4">
                <CardHeader>
                  <h2 className="text-lg font-bold text-black">{pg.name}</h2>
                  <p className="text-gray-500">{pg.location}</p>
                </CardHeader>
                <CardContent>
                  <img
                    src={pg.image}
                    alt={pg.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-gray-800">{pg.price}</p>
                  <p className="text-gray-600">{pg.features}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="text-purple-600 border-purple-600 rounded-full"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No favourites added.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
