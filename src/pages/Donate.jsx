import React, { useState } from "react";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    paymentMethod: "Mpesa",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", formData);
    alert("Thank you for your donation! ❤️");
    setFormData({ name: "", email: "", amount: "", paymentMethod: "Mpesa" });
  };

  return (
    <section className="bg-orange-100 pt-10 pb-8 " id="donate">
      <div className="max-w-2xl mx-auto px-6 py-16 bg-white rounded-lg shadow-md  ">
        <h2 className="text-center text-4xl font-bold text-green-600 mb-6">
          Donate to Nawiri
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Your contribution helps us empower communities and make a lasting
          impact.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Donation Amount */}
          <div>
            <label className="block text-gray-800 font-medium">
              Donation Amount (KES)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Enter amount"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-800 font-medium">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="Mpesa">Mpesa</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Donate;
