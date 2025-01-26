import React from "react";

const CategoryCard = ({ title, description, image }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#fff",
        marginBottom: "15px",
        width: "100%",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "200px",
          height: "100px",
          objectFit: "cover",
          marginRight: "20px",
          borderRadius: "8px",
        }}
      />
      <h2 style={{ margin: "10px 0", fontSize: "1.5rem" }}>{title}</h2>
      <p
        style={{
          fontSize: "1rem",
          color: "#555",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginLeft: "15px",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default CategoryCard;