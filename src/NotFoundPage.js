import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          // Reduced vertical padding to make it more compact
          padding: "30px", 
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: "700",
            color: "#343a40",
            // Reduced margin
            margin: "0", 
            lineHeight: "1",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#495057",
            // Reduced margin
            margin: "15px 0", 
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#6c757d",
            // Reduced margin
            marginBottom: "20px",
          }}
        >
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <img
          src="/media/images/page_not_found.jpg"
          alt="Page Not Found Illustration"
          style={{
            // The image now takes up a large portion of the container
            width: "100%",
            height: "auto",
            // Reduced margin to place the button closer
            marginBottom: "15px",
            // Added max-width to prevent the image from becoming too large on wide screens
            maxWidth: "400px",
          }}
        />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "50px",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;