import React, { Component } from "react";
import Home from "./pages/Home";
import SemanticMenu from "./Menu"

class Portfolio extends Component {
    state = {
        currentPage: "Home"
    };
    render() {
        return (

            <div>
                <SemanticMenu />
            </div>
        )

    };
}
export default Portfolio;
