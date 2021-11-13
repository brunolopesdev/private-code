import React from "react";

export const CardLeft = ({ title, image, subtitle, text }) => {
  return (
    <div className="course_content">
      <div className="course_image">
        <img src={image} alt={title} />
      </div>
      <div className="course_info">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};
