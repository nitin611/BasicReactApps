import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email, gender);
  };

  const handleReset = () => {
    setFirstName("");
    setEmail("");
    setGender("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black text-white px-6 py-4 text-center font-bold rounded-md w-full max-w-lg">
        <h2 className="text-lg">React Form</h2>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg mt-6">
        <form
          action="#"
          className="flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              First Name*
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender*
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="focus:ring focus:ring-indigo-300"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="focus:ring focus:ring-indigo-300"
                />
                Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="other"
                  name="gender"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="focus:ring focus:ring-indigo-300"
                />
                Other
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
            <button
              type="reset"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
