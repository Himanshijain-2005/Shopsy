import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/Frontend_Assets/all_product';
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
   const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
   }
   const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let iteminfo=all_product.find((product)=>product.id===Number(item));
            totalAmount+=iteminfo.new_price*cartItems[item];
        }
    }
            return totalAmount;

   }
    const contextValue = { all_product, cartItems ,addToCart,removeFromCart,getTotalCartAmount}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;