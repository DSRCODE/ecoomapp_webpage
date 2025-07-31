const BrandOnboardingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle data submission here (send to backend)
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Submit Your Campaign
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Brand / Company Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Contact Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Product / Service Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
          required
        />
        <textarea
          rows="4"
          placeholder="Campaign Description"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Target Audience (e.g., age 18–30, tech-savvy)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
        />
        <input
          type="number"
          placeholder="Estimated Budget (INR)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
        >
          Submit Campaign
        </button>
      </form>
    </div>
  );
};

export default BrandOnboardingForm;
