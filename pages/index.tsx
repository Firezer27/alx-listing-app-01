import { useState } from 'react';
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE, FILTERS } from '@/constants';
import Pill from '@/components/Pill';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredData = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) => p.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-center">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-3 overflow-x-auto">
        {FILTERS.map((item) => (
          <Pill
            key={item}
            label={item}
            active={activeFilter === item}
            onClick={() => setActiveFilter(activeFilter === item ? null : item)}
          />
        ))}
      </div>

      {/* LISTINGS */}
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {filteredData.map((property, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-sm text-gray-500">
                {property.address.city}, {property.address.country}
              </p>

              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold text-blue-600">${property.price}</span>
                <span className="text-yellow-500">★ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
