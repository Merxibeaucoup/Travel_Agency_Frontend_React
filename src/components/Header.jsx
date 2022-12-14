import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = ({ heading, paragraph, children, image }) => {
  const [state] = useState({
    video: "/assets/videos/header.mp4",
    poster: "/assets/images/screen.png",
    logo: "/assets/images/logo.png",
  });

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container pr">
        <div className="header__logo">
          <LazyLoadImage
            src={state.logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <div className="header__video">
        {/* check if image has a value ...(for details page) */}
        {image ? (
          <LazyLoadImage src={image} alt={image} />
        ) : (
          <video
            src={state.video}
            autoPlay
            loop
            muted
            poster={state.poster}
          ></video>
        )}
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">{heading}</h1>
              <p className="header__contents__text__child__p">{paragraph}</p>
              <div className="header__contents__text__child__link">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
