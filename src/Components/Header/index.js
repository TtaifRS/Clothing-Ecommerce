import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../images/Crown.svg";
import { auth } from "../../utils/firebase";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  DisplayNameContainer,
} from "./HeaderStyle";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink className="option" to="/shop">
          Shop
        </OptionLink>
        <OptionLink className="option" to="/shop">
          Contact
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            <DisplayNameContainer>
              {currentUser.currentUser.displayName}
            </DisplayNameContainer>
            Sign Out
          </OptionDiv>
        ) : (
          <OptionLink to="/auth">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
