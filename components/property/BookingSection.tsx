import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [nights, setNights] = useState(7);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border">
      <h3 className="text-2xl font-semibold">
        ${price} <span className="text-sm">/ night</span>
      </h3>

      <div className="mt-4">
        <label className="block text-sm">Check-in</label>
        <input type="date" className="border p-2 w-full mt-1" />
      </div>

      <div className="mt-4">
        <label className="block text-sm">Check-out</label>
        <input type="date" className="border p-2 w-full mt-1" />
      </div>

      <div className="mt-4 font-semibold">
        Total payment: ${price * nights}
      </div>

      <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
