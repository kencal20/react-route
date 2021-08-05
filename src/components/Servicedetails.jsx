import React from "react";

const Servicedetails = (props) => {
  return (
    <div>
      <h1>Service {props.match.params.id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta
        qui veritatis labore ab, expedita tenetur nam ducimus laudantium
        molestiae unde earum necessitatibus neque nulla, architecto voluptatum
        ipsum consequatur eveniet.
      </p>
    </div>
  );
};

export default Servicedetails;
