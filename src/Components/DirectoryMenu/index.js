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
          linkUrl: "hats",
        },
        {
          title: "JACKETS",
          image: Jacket,
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "SNEAKERS",
          image: Shoe,
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "WOMENS",
          image: Women,
          id: 4,
          size: "large",
          linkUrl: "womens",
        },
        {
          title: "MENS",
          image: Men,
          id: 5,
          size: "large",
          linkUrl: "mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
