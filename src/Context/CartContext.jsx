import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart')) || [] 
    
    const [cartList, setCartList] = useState(cartLocalStorage) 

    useEffect (() => {  localStorage.setItem('cart', JSON.stringify(cartList))}
    
    ,[cartList])

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.Total;
        const sum = cartList.reduce(reducer, 0);
        return sum.toFixed(2);
    }

    const addToCart = (product) => {
        const existingprod = cartList.find (prod => prod.id === product.id)
        if (existingprod){ console.log(existingprod)
            existingprod.Lot += product.Lot
            existingprod.Total += product.Total
            setCartList(cartList)
            sumTotal(product)
        } else {
        setCartList([...cartList, product])
        sumTotal(product)
    }}

    const removeListCart = () => {
        setCartList([])
    }

    const removeItemCart = (id) => {
      const newList = cartList.filter((product) => product.id !== id)

      setCartList(newList)
    }

    const countTotalItem = () => {
      return cartList.reduce((acum, product) => acum += product.Lot, 0)
    }




    return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeListCart,
        removeItemCart,
        sumTotal,
        countTotalItem,
    }}>
    { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider
