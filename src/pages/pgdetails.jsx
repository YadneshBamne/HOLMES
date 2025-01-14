import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PGDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve PG details passed via state
  const pg = location.state?.pg;

  if (!pg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No PG details available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <img
          src={pg.image}
          alt={pg.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-black">{pg.name}</h1>
          <p className="text-gray-500">{pg.location}</p>
          <p className="text-gray-800 text-lg mt-4">{pg.price}</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-black">Description</h3>
            <p className="text-gray-600 mt-2">
              This PG offers a comfortable stay with top-notch amenities and a
              welcoming environment. Perfect for students and working
              professionals.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-black">Amenities</h3>
            <p className="text-gray-600 mt-2">{pg.features}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-black">Ratings</h3>
            <p className="text-gray-600 mt-2">4.5/5 (200 Reviews)</p>
          </div>
          <Button
            onClick={() => navigate(-1)}
            className="mt-6 bg-[#FF9F1C] text-black rounded-xl"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
