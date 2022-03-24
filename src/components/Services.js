import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Boissons Gratuites",
        info: "Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Nos Services"></Title>
        <div className="services-center">
            {this.state.services.map((item, index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
