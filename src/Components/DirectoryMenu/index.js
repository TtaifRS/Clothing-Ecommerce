import React, { Component } from "react";
import "./DirectoryMenu.scss";

import Hat from "../../images/Hat-menu.jpg";
import Jacket from "../../images/Jacket-menu.jpg";
import Shoe from "../../images/Shoe-menu.jpg";
import Women from "../../images/Women-menu.jpg";
import Men from "../../images/Men-menu.jpg";
import MenuItem from "../MenuItem";

export default class DirectoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HATS",
          image: Hat,
          id: 1,
        },
        {
          title: "JACKETS",
          image: Jacket,
          id: 2,
        },
        {
          title: "SHOES",
          image: Shoe,
          id: 3,
        },
        {
          title: "WOMENS",
          image: Women,
          id: 4,
          size: "large",
        },
        {
          title: "MENS",
          image: Men,
          id: 5,
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, image, id, size }) => (
          <MenuItem key={id} title={title} image={image} size={size} />
        ))}
      </div>
    );
  }
}
