const InfluencerOnboardingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle data submission here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Join as an Influencer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Instagram / YouTube Handle"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
        />
        <input
          type="number"
          placeholder="Total Followers"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
        />
        <input
          type="text"
          placeholder="Category (Fashion, Tech, Food...)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
        />
        <textarea
          placeholder="Why do you want to join Bidzord?"
          rows="3"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
        >
          Join Now
        </button>
      </form>
    </div>
  );
};

export default InfluencerOnboardingForm;
