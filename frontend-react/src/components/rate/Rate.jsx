import React from "react";
import "./Rate.css";
import Star from "./Star";

const Rate = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];
  const newRating = parseInt(rating - 1);
  return (
    <div className="App">
      <div class="flex-container">
        {stars.map((star, i) => (
          <Star key={i} starId={i} rating={newRating} />
        ))}
      </div>
    </div>
  );
};

export default Rate;
