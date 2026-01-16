import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { Star } from "lucide-react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      {/* Header */}
      <h1 className="text-3xl font-semibold">{property.name}</h1>

      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
        <Star size={16} className="fill-black" />
        <span>{property.rating}</span>
        <span>·</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <img
          src={property.image}
          className="w-full h-[420px] object-cover rounded-xl"
          alt={property.name}
        />
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={property.image}
              className="h-[200px] w-full object-cover rounded-xl"
              alt="property"
            />
          ))}
        </div>
      </div>

      {/* Content + Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        {/* LEFT */}
        <div className="lg:col-span-2">
          {/* About */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold">
              Entire place hosted by ALX
            </h2>
            <p className="text-gray-600 mt-2">
              {property.offers.occupants} guests · {property.offers.bed} beds ·{" "}
              {property.offers.shower} baths
            </p>
          </section>

          {/* Amenities */}
          <section className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              What this place offers
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {property.category.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  ✔ {item}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <ReviewSection />
        </div>

        {/* RIGHT */}
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
