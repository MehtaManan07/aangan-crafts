import React from "react";
import { Link } from "react-router-dom";
import { Props } from "./types";
import { PageWrapper } from "./styles";

const PageHero: React.FC<Props> = ({ title, isSingleProduct }) => {
  return (
    <PageWrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {isSingleProduct ? (
            <Link to="/products">/ Products</Link>
          ) : null}/ {title}
        </h3>
      </div>
    </PageWrapper>
  );
};

export default PageHero;
