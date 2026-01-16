const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="sticky top-24 border rounded-xl p-6 shadow-lg h-fit">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">${price}</p>
        <span className="text-sm text-gray-600">per night</span>
      </div>

      {/* Dates */}
      <div className="border rounded-lg mt-4">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r">
            <label className="text-xs font-semibold">CHECK-IN</label>
            <input type="date" className="w-full mt-1 outline-none" />
          </div>
          <div className="p-3">
            <label className="text-xs font-semibold">CHECK-OUT</label>
            <input type="date" className="w-full mt-1 outline-none" />
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-4">
        <span>Total</span>
        <span className="font-semibold">${price * 5}</span>
      </div>

      {/* CTA */}
      <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Reserve
      </button>
    </div>
  );
};

export default BookingSection;
