import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaBuilding } from "react-icons/fa";
import { Building, Building2Icon } from "lucide-react";

const pgSchema = z.object({
  name: z.string().min(3, "PG name must be at least 3 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  ownerName: z.string().min(3, "Owner's name must be at least 3 characters"),
  ownerMobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  rent: z.string().regex(/^\d+$/, "Rent price must be a valid number"),
  bhk: z.enum(["1 BHK", "2 BHK", "3 BHK", "Studio"]),
  images: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "At least one image is required"),
});

const AddPG = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pgSchema),
  });

  const [previewImages, setPreviewImages] = useState([]);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const files = event.target.files;
    setValue("images", files); // Update form state
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages(imageUrls);
  };

  const onSubmit = (data) => {
    console.log("PG Details:", data);
    alert("PG Listed Successfully!");
    // TODO: Send data to backend (MongoDB, Firebase, etc.)
  };

  return (
    <div className="w-1/2 mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center gap-2">
        <Building2Icon className="mb-2" />
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          List Your PG
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* PG Name */}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            PG Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            {...register("address")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Owner Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Owner's Name
          </label>
          <input
            type="text"
            {...register("ownerName")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.ownerName && (
            <p className="text-red-500 text-sm">{errors.ownerName.message}</p>
          )}
        </div>

        {/* Owner's Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Owner's Mobile Number
          </label>
          <input
            type="text"
            {...register("ownerMobile")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.ownerMobile && (
            <p className="text-red-500 text-sm">{errors.ownerMobile.message}</p>
          )}
        </div>

        {/* Rent */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rent Price (₹)
          </label>
          <input
            type="text"
            {...register("rent")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.rent && (
            <p className="text-red-500 text-sm">{errors.rent.message}</p>
          )}
        </div>

        {/* BHK Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            BHK Type
          </label>
          <select
            {...register("bhk")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select BHK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="Studio">Studio</option>
          </select>
          {errors.bhk && (
            <p className="text-red-500 text-sm">{errors.bhk.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        {/* Image Preview */}
        {previewImages.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-3">
            {previewImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-md"
              />
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center ">
        <button
          type="submit"
          className="w-5/6 mt-5 rounded-xl flex justify-center bg-purple-600 text-white py-2 px-4 hover:bg-purple-700"
        >
          List PG
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddPG;
