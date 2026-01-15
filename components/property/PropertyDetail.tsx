import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <h1 className="text-4xl font-bold">{property.name}</h1>

      <div className="flex items-center gap-3 mt-2 text-gray-600">
        <span className="text-yellow-500 font-semibold">
          ⭐ {property.rating}
        </span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={property.image}
              alt={property.name}
              className="col-span-2 h-96 w-full object-cover rounded-lg"
            />
            {property.images?.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${property.name}-${index}`}
                className="h-48 w-full object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="mt-2 text-gray-700">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">
              What this place offers
            </h2>
            <ul className="flex flex-wrap gap-3 mt-3">
              {property.category.map((amenity, index) => (
                <li
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-md"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          {property.reviews && (
            <ReviewSection reviews={property.reviews} />
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 h-fit">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
