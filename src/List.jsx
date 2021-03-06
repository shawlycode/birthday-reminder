import React from "react";
import image from "./images/gift.jpg";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { Id, name, age, Image } = person;
        return (
          <article key={Id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
