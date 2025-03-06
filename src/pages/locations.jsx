import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
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
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

export function Locations() {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);
  const [ratingsFilter, setRatingsFilter] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [priceSliderValue, setPriceSliderValue] = useState([12000]);
  const navigate = useNavigate();

  const pgData = [
    {
      name: "Sunrise PG",
      location: "Andheri, Mumbai",
      price: "₹8,000/month",
      features: "WiFi, Meals, Laundry",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Nov/07/full_photo/GR2-470723-2302073.jpeg",
      liked: false,
      rating: 5, // Added rating
    },
    {
      name: "Cozy Nest PG",
      location: "Bandra, Mumbai",
      price: "₹10,000/month",
      features: "Air Conditioning, 24x7 Security",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/May/03/full_photo/GR2-438977-2121783.jpeg",
      liked: false,
      rating: 4.2, // Added rating
    },
    {
      name: "Urban Stay PG",
      location: "Dadar, Mumbai",
      price: "₹7,500/month",
      features: "Shared Kitchen, Housekeeping",
      image:
        "https://gsh-cdn.sgp1.cdn.digitaloceanspaces.com/assets/img/no-broker-thane/PRT687/room-on-rent-in-thane/pg-in-bhiwandi.jpg",
      liked: false,
      rating: 4, // Initial liked status
    },
    {
      name: "Comfort Zone PG",
      location: "Thane, Mumbai",
      price: "₹6,000/month",
      features: "Power Backup, Parking",
      image:
        "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Oct/08/Photo_h220_w280/GR2-322143-1518507_220_280.jpg",
      liked: false,
      rating: 3, // Initial liked status
    },
    {
      name: "Elite Stay PG",
      location: "Bandra, Mumbai",
      price: "₹12,000/month",
      features: "Gym, Meals, Security",
      image: "https://www.colive.com/blog/wp-content/uploads/2018/04/qedqd.jpg",
      liked: false,
      rating: 3.5, // Initial liked status
    },
    {
      name: "Affordable PG",
      location: "Andheri, Mumbai",
      price: "₹5,500/month",
      features: "Basic Amenities, Shared Rooms",
      image:
        "https://www.realtynmore.com/wp-content/uploads/2023/09/b2835151fd0aebf6702be15777e4683e3eb73704-scaled.jpg",
      liked: false,
      rating: 5, // Initial liked status
    },
    {
      name: "Lux PG",
      location: "Dadar, Mumbai",
      price: "₹9,000/month",
      features: "Private Rooms, WiFi",
      image:
        "https://shreedurgapg.com/wp-content/uploads/2022/11/PG-accommodations-in-Gurgaon-Shree-Durga-PG.jpg",
      liked: false,
      rating: 2.7, // Initial liked status
    },
    {
      name: "Thane Stay PG",
      location: "Thane, Mumbai",
      price: "₹6,500/month",
      features: "Laundry, WiFi, 24x7 Security",
      image:
        "https://content.jdmagicbox.com/comp/def_content/paying_guest_accommodations/default-paying-guest-accommodations-6.jpg",
      liked: false,
      rating: 4.1, // Initial liked status
    },
    {
      name: "Ap shah ",
      location: "Thane, Mumbai",
      price: "₹6,500/month",
      features: "Laundry, WiFi, 24x7 Security",
      image:
        "https://content.jdmagicbox.com/comp/def_content/paying_guest_accommodations/default-paying-guest-accommodations-6.jpg",
      liked: false,
      rating: 4.1, // Initial liked status
    },
  ];

  const amenitiesOptions = [
    "WiFi",
    "Meals",
    "Laundry",
    "Air Conditioning",
    "Gym",
    "Parking",
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
      const matchesPrice =
        parseInt(pg.price.replace(/[^0-9]/g, "")) <= priceSliderValue; // Use priceSliderValue instead of input
      const matchesAmenities = amenitiesFilter.every((amenity) =>
        pg.features.toLowerCase().includes(amenity.toLowerCase())
      );
      const matchesRatings = ratingsFilter ? pg.rating >= ratingsFilter : true;

      return (
        matchesText &&
        matchesLocation &&
        matchesPrice &&
        matchesAmenities &&
        matchesRatings
      );
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

    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites);
  };

  const filteredPGs = handleSearch();

  const handleAmenitiesChange = (amenity) => {
    setAmenitiesFilter((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  const matchesRatings = ratingsFilter
    ? parseFloat(pgData.rating) >= parseFloat(ratingsFilter)
    : true;

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar Filter Section */}
        <aside className="w-64 bg-white shadow-lg p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Price Filter */}
          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price</h3>
            <Slider
              value={[priceSliderValue]}
              onValueChange={(value) => {
                setPriceSliderValue(value[0]); // Update the slider value dynamically
              }}
              min={1000}
              max={15000}
              step={500}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>₹1,000</span>
              <span>₹{priceSliderValue}</span>
              <span>₹15,000</span>
            </div>
          </div>

          {/* Ratings Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ratings</h3>
            <Select onValueChange={setRatingsFilter}>
              <SelectTrigger className="w-full rounded-3xl">
                <SelectValue placeholder="Select Ratings" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars & Up</SelectItem>
                <SelectItem value="3">3 Stars & Up</SelectItem>
                <SelectItem value="2">2 Stars & Up</SelectItem>
                <SelectItem value="1">1 Star & Up</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amenities Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {amenitiesOptions.map((amenity) => (
                <button
                  key={amenity}
                  onClick={() => handleAmenitiesChange(amenity)}
                  className={`px-3 py-1 rounded-full border ${
                    amenitiesFilter.includes(amenity)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow p-6">
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
              <SelectContent className="bg-white rounded-2xl mt-2 shadow-2xl">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="andheri">Andheri</SelectItem>
                <SelectItem value="bandra">Bandra</SelectItem>
                <SelectItem value="dadar">Dadar</SelectItem>
                <SelectItem value="thane">Thane</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
                      <h2 className="text-lg font-bold text-white">
                        {pg.name}
                      </h2>
                      <p className="text-gray-300">{pg.location}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-100">{pg.price}</p>

                      <p className="text-gray-400">{pg.features}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, starIndex) => (
                          <span key={starIndex}>
                            <Star
                              size={16}
                              fill={
                                starIndex < Math.floor(pg.rating)
                                  ? "gold"
                                  : "none"
                              }
                              stroke="gold"
                            />
                          </span>
                        ))}
                        <span className="ml-2 text-gray-300">{pg.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Button
                        variant="outline"
                        className="text-black bg-white border-white hover:text-white rounded-full"
                        onClick={() =>
                          navigate("/pg-details", { state: { pg } })
                        }
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
      </div>
      <Footer />
    </>
  );
}
