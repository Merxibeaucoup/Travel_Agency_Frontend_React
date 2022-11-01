import React from "react";
import { BiChevronRight } from "react-icons/bi";

const ServicesList = ({ services }) => {
  return services.length > 0
    ? services.map((service, index) => (
        <div className="services__list" key={index}>
          <h4 className="services__list__heading">
            <BiChevronRight size={20} />
            {service.heading}
          </h4>
          <p className="services__list__details">{service.p}</p>
        </div>
      ))
    : "";
};

export default ServicesList;
