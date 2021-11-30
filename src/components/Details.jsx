import React from "react";

function Details(props){
  return (
    <div className="note">
      <h1>{props.titleDetails}</h1>
      <p>{props.contentDetails}</p>
    </div>
  );
};

export default Details;
