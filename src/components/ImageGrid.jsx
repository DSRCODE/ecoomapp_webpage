const ImageGrid = () => {
  const images = [
    "/images/brand1.jpg",
    "/images/brand2.jpg",
    "/images/brand3.jpg",
    "/images/brand4.jpg",
  ]; // Use public/images/

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Campaign Snapshots
      </h2>
      <p className="text-gray-600 mb-8">
        Real promotions. Real reach. Real impact.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={src}
              alt={`campaign-${i}`}
              className="object-cover w-full h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
