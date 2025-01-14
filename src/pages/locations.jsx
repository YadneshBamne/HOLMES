import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart } from "react-feather";
// import { useRouter } from "next/router"; // Import useRouter

export function Locations() {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [favourites, setFavourites] = useState([]);

  const pgData = [
    {
      name: "Sunrise PG",
      location: "Andheri, Mumbai",
      price: "₹8,000/month",
      features: "WiFi, Meals, Laundry",

      liked: false, // Initial liked status
    },
    {
      name: "Cozy Nest PG",
      location: "Bandra, Mumbai",
      price: "₹10,000/month",
      features: "Air Conditioning, 24x7 Security",
      liked: false, // Initial liked status
    },
    {
      name: "Urban Stay PG",
      location: "Dadar, Mumbai",
      price: "₹7,500/month",
      features: "Shared Kitchen, Housekeeping",
      liked: false, // Initial liked status
    },
    {
      name: "Comfort Zone PG",
      location: "Thane, Mumbai",
      price: "₹6,000/month",
      features: "Power Backup, Parking",
      liked: false, // Initial liked status
    },
    {
      name: "Elite Stay PG",
      location: "Bandra, Mumbai",
      price: "₹12,000/month",
      features: "Gym, Meals, Security",
      liked: false, // Initial liked status
    },
    {
      name: "Affordable PG",
      location: "Andheri, Mumbai",
      price: "₹5,500/month",
      features: "Basic Amenities, Shared Rooms",
      liked: false, // Initial liked status
    },
    {
      name: "Lux PG",
      location: "Dadar, Mumbai",
      price: "₹9,000/month",
      features: "Private Rooms, WiFi",
      liked: false, // Initial liked status
    },
    {
      name: "Thane Stay PG",
      location: "Thane, Mumbai",
      price: "₹6,500/month",
      features: "Laundry, WiFi, 24x7 Security",
      liked: false, // Initial liked status
    },
  ];

  const handleSearch = () => {
    return pgData.filter((pg) => {
      const matchesText = pg.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesLocation = selectedLocation
        ? pg.location.toLowerCase().includes(selectedLocation.toLowerCase())
        : true;
      return matchesText && matchesLocation;
    });
  };

  const handleLikeToggle = (pg) => {
    const isLiked = favourites.some((item) => item.name === pg.name);
    if (isLiked) {
      setFavourites(favourites.filter((item) => item.name !== pg.name));
    } else {
      setFavourites([...favourites, pg]);
    }
  };

  const filteredPGs = handleSearch();

  const handleViewFavourites = () => {
    router.push("/favourites"); // Navigate to the favourites page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search for PG"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow rounded-full bg-white shadow-xl"
          />
          <Select onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-48 rounded-xl bg-white shadow-xl">
              <SelectValue placeholder="Filter by Location" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="andheri">Andheri</SelectItem>
              <SelectItem value="bandra">Bandra</SelectItem>
              <SelectItem value="dadar">Dadar</SelectItem>
              <SelectItem value="thane">Thane</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="primary"
            className="bg-[#FF9F1C] text-black rounded-xl"
          >
            Search
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPGs.length > 0 ? (
            filteredPGs.map((pg, index) => (
              <Card key={index} className="bg-white shadow-xl rounded-2xl p-4">
                <CardHeader>
                  <h2 className="text-lg font-bold text-black">{pg.name}</h2>
                  <p className="text-gray-500">{pg.location}</p>
                </CardHeader>
                <CardContent>
                  {/* <img
                    src={pg.image}
                    alt={pg.name}
                    className="w-full h-40 object-cover rounded-md"
                  /> */}
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
                  <button
                    onClick={() => handleLikeToggle(pg)}
                    className={`ml-2 text-xl ${
                      favourites.some((item) => item.name === pg.name)
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    <Heart />
                  </button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No PGs found for your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
