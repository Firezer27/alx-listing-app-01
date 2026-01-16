import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Amazing stay! Super clean and great location.",
  },
  {
    name: "Sarah Smith",
    rating: 4,
    comment: "Very comfortable and well equipped.",
  },
];

const ReviewSection = () => {
  return (
    <section className="mt-10">
      <h3 className="text-xl font-semibold mb-6">
        {reviews.length} Reviews
      </h3>

      <div className="grid gap-6">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="font-medium">{review.name}</p>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-black"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
