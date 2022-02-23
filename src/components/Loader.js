import React, { Fragment } from "react"


const Loader = () => {

  return (
    <Fragment>
      <div className="loader-wrap">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Loader;