import React from 'react';
import "./Title.css"

function Title({ text, size }) {
  let heading;

  switch (size) {
    case 'h1':
      heading = <h1>{text}</h1>;
      break;
    case 'h2':
      heading = <h2>{text}</h2>;
      break;
    case 'h3':
      heading = <h3>{text}</h3>;
      break;
    case 'h4':
      heading = <h4>{text}</h4>;
      break;
    case 'h5':
      heading = <h5>{text}</h5>;
      break;
    case 'h6':
      heading = <h6>{text}</h6>;
      break;

    default:
      heading = <h6>{text}</h6>;
      break;
  }
  return <>{heading}</>;
}

export default Title;
