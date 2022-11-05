import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./footer/Footer";

const PageContainer = ({ data }) => {
  return (
    <>
      <Header heading={data.heading} />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-6"> missing</div>
            <div className="col-6">
              <div className="page__info">
                <h2 className="heading">{data.heading}</h2>
                <h1 className="page__info__heading">{data.pageHeading}</h1>
                <p className="page__info__msg">{data.message}</p>
                <div className="page__info__link">
                  <Link to="/" className="btn-dark-sm">
                    go back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageContainer;