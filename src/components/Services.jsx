import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const initialServices = [
  {
    icon: <FaCocktail />,
    title: "free cocktails",
    info:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia."
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia."
  },
  {
    icon: <FaShuttleVan />,
    title: "free shuttle",
    info:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia."
  },
  {
    icon: <FaBeer />,
    title: "strongest beer ",
    info:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia."
  }
];
const Services = () => {
  const [services] = useState(initialServices);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map(({ icon, title, info }, index) => (
          <article key={index} className="service">
            <span>{icon}</span>
            <h6>{title}</h6>
            <p>{info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
