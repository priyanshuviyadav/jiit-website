import React from "react";

const Point = ({ st, info }) => {
  return (
    <>
      <div className='point'>
        <h1>{st}</h1>
        <h4>{info}</h4>
        {/* <h1>{img}</h1> */}
      </div>
    </>
  );
};

export default Point;
