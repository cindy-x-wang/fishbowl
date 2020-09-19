import React, { Component } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";
import Hamburger from "./Hamburger";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      
      return {
        style: {
         //"font-weight": isCurrent ? 900 : "inherit",
         textShadow: isCurrent ? "0 0 1px white" : "none",
         // display: isCurrent ? "none" : "",
        }
      };
    }}
  />
);


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="NavBar-container">
      <Hamburger />
      <div className="NavBar-main">
          <div className="NavBar-title-container u-pointer">
            <NavLink to="/" className="title-link">
               Fishbowl
            </NavLink>
          </div>
          <div className="all-menu-items">
            <div className="menu-item">
              <NavLink to="/" className="NavBar-link">
                home
              </NavLink>
            </div>
          </div>

          
      </div>
        {/* <div className="NavBar-title-container">
          
        </div> */}
        {/* <div className="logout-button">
        {this.props.userId ? (
          null
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}

        </div> */}
        
      </div>
      </>
    );
  }
}

export default NavBar;