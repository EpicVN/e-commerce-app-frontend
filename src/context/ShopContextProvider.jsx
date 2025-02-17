import { products } from "../assets/assets";
import { ShopContext } from "./ShopContext";
import PropTypes from "prop-types";

const ShopContextProvider = (props) => {
  ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products, currency, delivery_fee
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
