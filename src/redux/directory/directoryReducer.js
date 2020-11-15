import Hat from "../../images/Hat-menu.jpg";
import Jacket from "../../images/Jacket-menu.jpg";
import Shoe from "../../images/Shoe-menu.jpg";
import Women from "../../images/Women-menu.jpg";
import Men from "../../images/Men-menu.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "HATS",
      imageUrl: Hat,
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "JACKETS",
      imageUrl: Jacket,
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "SNEAKERS",
      imageUrl: Shoe,
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "WOMENS",
      imageUrl: Women,
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "MENS",
      imageUrl: Men,
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
