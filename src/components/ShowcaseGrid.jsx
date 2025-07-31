import { motion } from "framer-motion";

const showcaseItems = [
  {
    src: "https://img.freepik.com/free-photo/content-concept-laptop-screen_53876-13531.jpg",
    title: "Content Creation",
    description:
      "Influencers craft visually compelling content for your product.",
    size: "row-span-2",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69uHkhcuqC4bXrMzmlaMS7SgslpKAO7pW7w&s",
    title: "Targeted Reach",
    description: "We match your campaign with the right audience.",
    size: "col-span-2",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX1B-PHoZ1Gw0Uq0lYvOPU2c3bGjN4L3fp3jO8KHUvzMaaUb1f2-og3_s6hEFPDumj-8&usqp=CAU",
    title: "Campaign Analytics",
    description: "Get real-time reports of performance & conversions.",
    size: "row-span-1",
  },
  {
    src: "https://t3.ftcdn.net/jpg/07/90/25/84/360_F_790258449_HBEYujAn2hwus75CEnb0XsSEWiravMDg.jpg",
    title: "Engagement Boost",
    description: "Watch your social presence grow organically.",
    size: "row-span-1",
  },
  {
    src: "https://media.istockphoto.com/id/1156623026/photo/brand-awareness-and-attractiveness-customer-relationship-building.jpg?s=612x612&w=0&k=20&c=UoWJJh0IQiRuhC-FQG_hYnUNHhUfuZJDkmlSHWDF5es=",
    title: "Brand Trust",
    description: "Trusted voices build authenticity for your brand.",
    size: "col-span-2",
  },
];

const ShowcaseGrid = () => {
  return (
    <div className="px-4 py-16 bg-gradient-to-r from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Explore Influencer Marketing
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Discover how our influencers turn your vision into viral campaigns.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
        {showcaseItems.map((item, i) => (
          <motion.div
            key={i}
            className={`relative rounded-xl overflow-hidden shadow-lg group ${item.size}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseGrid;
