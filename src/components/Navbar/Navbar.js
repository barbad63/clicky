import React from "react";

const styles = {

  heading: {
    background: "#0033cc",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.0rem",
    color: "white",
    padding: "0 20px"
  },
  brand: {
    fontWeight: "bold",
    fontSize: "2.0rem"
  }
};

const Navbar = (props) => (

  <div className="container-fluid" style={styles.heading}>
    <div className="row text-center">
        <div className="col-4"style={styles.brand}>Clicky Game</div>
        <div className="col-4">Click an image to begin!</div>
        <div className="col-4">Score: {props.count} | High Score: {props.highCount}</div>
    </div>
  </div>
);

export default Navbar;

