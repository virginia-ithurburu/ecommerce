import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    
    const [cartList, setCartList] = useState([]) 

    const addToCart = (product) => {
        setCartList([...cartList, product])
    }

    const removeListCart = () => {
        setCartList([])
    }

    const removeItemCart = (id) => {
      const newList = cartList.filter((product) => product.id !== id)

      setCartList(newList)
    }

    const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.Total;
		const sum = cartList.reduce(reducer, 0);
		return sum;
	}


    return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeListCart,
        removeItemCart,
        sumTotal
    }}>
    { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider
