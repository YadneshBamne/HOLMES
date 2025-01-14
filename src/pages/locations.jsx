import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OpenLayersMap from "@/components/maps";
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
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

export function Locations() {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  const pgData = [
    {
      name: "Sunrise PG",
      location: "Andheri, Mumbai",
      price: "₹8,000/month",
      features: "WiFi, Meals, Laundry",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Nov/07/full_photo/GR2-470723-2302073.jpeg",
      liked: false, // Initial liked status
    },
    {
      name: "Cozy Nest PG",
      location: "Bandra, Mumbai",
      price: "₹10,000/month",
      features: "Air Conditioning, 24x7 Security",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/May/03/full_photo/GR2-438977-2121783.jpeg",
      liked: false, // Initial liked status
    },
    {
      name: "Urban Stay PG",
      location: "Dadar, Mumbai",
      price: "₹7,500/month",
      features: "Shared Kitchen, Housekeeping",
      image:"https://gsh-cdn.sgp1.cdn.digitaloceanspaces.com/assets/img/no-broker-thane/PRT687/room-on-rent-in-thane/pg-in-bhiwandi.jpg",
      liked: false, // Initial liked status
    },
    {
      name: "Comfort Zone PG",
      location: "Thane, Mumbai",
      price: "₹6,000/month",
      features: "Power Backup, Parking",
      image:"https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Oct/08/Photo_h220_w280/GR2-322143-1518507_220_280.jpg",
      liked: false, // Initial liked status
    },
    {
      name: "Elite Stay PG",
      location: "Bandra, Mumbai",
      price: "₹12,000/month",
      features: "Gym, Meals, Security",
      image:"https://www.colive.com/blog/wp-content/uploads/2018/04/qedqd.jpg",
      liked: false, // Initial liked status
    },
    {
      name: "Affordable PG",
      location: "Andheri, Mumbai",
      price: "₹5,500/month",
      features: "Basic Amenities, Shared Rooms",
      image:"https://www.realtynmore.com/wp-content/uploads/2023/09/b2835151fd0aebf6702be15777e4683e3eb73704-scaled.jpg",
      liked: false, // Initial liked status
    },
    {
      name: "Lux PG",
      location: "Dadar, Mumbai",
      price: "₹9,000/month",
      features: "Private Rooms, WiFi",
      image:"https://shreedurgapg.com/wp-content/uploads/2022/11/PG-accommodations-in-Gurgaon-Shree-Durga-PG.jpg",
      liked: false, // Initial liked status
    },
    {
      name: "Thane Stay PG",
      location: "Thane, Mumbai",
      price: "₹6,500/month",
      features: "Laundry, WiFi, 24x7 Security",
      image:"https://content.jdmagicbox.com/comp/def_content/paying_guest_accommodations/default-paying-guest-accommodations-6.jpg",
      liked: false, // Initial liked status
    },
  ];

  // Load favourites from localStorage on initial render
  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

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
    let updatedFavourites;
    const isLiked = favourites.some((item) => item.name === pg.name);

    if (isLiked) {
      updatedFavourites = favourites.filter((item) => item.name !== pg.name);
    } else {
      updatedFavourites = [...favourites, pg];
    }

    // Update localStorage and state
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites);
  };

  const filteredPGs = handleSearch();

  const handleViewFavourites = () => {
    navigate("/favourites");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        {/* Search Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search for PG"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow rounded-full"
          />
          <Select onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-48 rounded-full">
              <SelectValue placeholder="Filter by Location" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-2xl mt-3">
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
  
        {/* Map Section */}
  
        {/* PG Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPGs.length > 0 ? (
            filteredPGs.map((pg, index) => (
              <Card
                key={index}
                className="relative bg-white shadow-md rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="absolute inset-0 object-cover w-full h-full "
                />
  
                {/* Overlay Content */}
                <div className="relative z-10 p-6 bg-gradient-to-b from-transparent to-black rounded-2xl">
                  <CardHeader>
                    <h2 className="text-lg font-bold text-white">{pg.name}</h2>
                    <p className="text-gray-300">{pg.location}</p>
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
  
                    <button
                      onClick={() => handleLikeToggle(pg)}
                      className="ml-2 text-xl"
                    >
                      {favourites.some((item) => item.name === pg.name) ? (
                        <Heart size={20} stroke="red" fill="red" />
                      ) : (
                        <Heart size={20} className="text-white" />
                      )}
                    </button>
                  </CardFooter>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No PGs found for your search.
            </p>
          )}
        </div>
      </div>
  
      {/* Footer */}
      <Footer />
    </div>
  );
}
