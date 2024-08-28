import { Link } from "react-router-dom";
import { useFilters } from "../../../../hooks";
import { services } from "../../../../utils/constants";

export const ServicesCards = () => {
  const { clearFilters, handleClickFromServices } = useFilters();
  return (
    <div className="services-center">
      {services.map(({ id, icon, title }) => {
        return (
          <article key={id} className="service">
            <span className="icon">{icon}</span>
            <h4>{title}</h4>
            <Link to="/products">
              <button
                className="btn"
                name="home-page-category"
                type="button"
                value={title}
                onClick={() => {
                  clearFilters();
                  handleClickFromServices();
                  // if (data?.updateFilters) {
                  //   data?.updateFilters(e);
                  // }
                }}
              >
                click for {title}
              </button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};
