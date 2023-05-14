import { FC } from "react";

interface CardSwiperProps {
    image: string;
    hrefDemo: string;
    hrefCode: string;
    name: string;
    alt: string;
  }

  export const CardSwiper: FC<CardSwiperProps> = ({image, hrefDemo, hrefCode, name, alt}) => {
  return (
    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
      <div
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
        className="content-div"
      >
        <img
          src={image}
          alt={alt}
          style={{ border: "2px solid #000000", width:'300px', height:'200px' }}
        />
      </div>
      <div>
        <h1
          style={{
            marginTop: "3px",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "white",
          }}
        >
          {name}
        </h1>
        <button
          type="button"
          style={{
            border: "2px solid #a770ff",
            backgroundColor: "transparent",
            color: "#000000",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: "50",
            fontSize: "1.125rem",
            marginLeft: "0.75rem",
          }}
        >
        <a href={hrefDemo} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>Demo</a>
        </button>
        <button
          type="button"
          style={{
            border: "2px solid #a770ff",
            backgroundColor: "transparent",
            color: "#000000",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: "50",
            fontSize: "1.125rem",
            marginLeft: "0.75rem",
          }}
        >
          <a href={hrefCode} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>Code</a>
        </button>
      </div>
    </div>
  );
};
