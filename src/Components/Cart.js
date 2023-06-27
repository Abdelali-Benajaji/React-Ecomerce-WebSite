import { useState } from "react";

const Cart=({cartItems,setCartItems})=>{
    const [totalPrice,setTotalPrice]=useState(0)

    const handleRemoveItem=(poroductId)=>{
        const updateCartItems=cartItems.filter((item)=>item.id !== poroductId);
        setCartItems(updateCartItems);
        updateTotalPrice(updateCartItems);
    }

    const updateTotalPrice=(items)=>{
        const newTotalPrice=items.reduce((item,total)=>total+item.price,0);
        setTotalPrice(newTotalPrice);
        console.log(totalPrice)
    }
    return(
        <div>
            <h2>Cart</h2>
            {
                cartItems.length === 0 ?(
                    <p>Cart is empty</p>
                ):(
                    <div >
                           {cartItems.map((item) => (
                                <div key={item.id}>
                                    <p>{item.title}</p> 
                                    <p>{item.price}</p>
                                    <button onClick={() => handleRemoveItem(item.id) }>Remove</button>
                                </div>
                            ))} 
                            <p>Total Price: ${totalPrice}</p>
                    </div>
                )
            }
        </div>
    )

}

export default Cart;