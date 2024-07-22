import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const savedFeedback = localStorage.getItem('userFeedback');
    if (savedFeedback) {
      const feedbackData = JSON.parse(savedFeedback);
      setName(feedbackData.name);
      setEmail(feedbackData.email);
      setFeedback(feedbackData.feedback);
    }
  }, []);

  const saveFeedback = () => {
    if (name && email && feedback) {
      const feedbackData = { name, email, feedback };
      localStorage.setItem('userFeedback', JSON.stringify(feedbackData));
      alert('Feedback saved!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFeedback();
  };

  return (
    <div className="bg-green-500 text-white p-6 my-2.5">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 rounded bg-white text-green-500" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 rounded bg-white text-green-500" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-lg font-medium">Feedback:</label>
            <textarea 
              id="feedback" 
              className="w-full p-2 rounded bg-white text-green-500" 
              rows="4" 
              value={feedback} 
              onChange={(e) => setFeedback(e.target.value)} 
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-white text-green-500 p-2 rounded">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;