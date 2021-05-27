import React from "react";
import PropTypes from "prop-types";
import dp from "../assets/dp.jpeg";
// const name = "Aryan Kabra";
// const leadText = "I am a freelancer developer";

function Title(props) {
  const { name, leadText } = props;
  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={dp}
            alt="Aryan Kabra"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am{" "}
            <span className="text-info font-weight-normal">{name}</span>
          </div>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}

Title.defaultProps = {
  name: "NAME",
  leadText: "I'm a freelance developer",
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
