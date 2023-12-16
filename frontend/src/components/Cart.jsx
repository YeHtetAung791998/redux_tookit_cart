import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { removeFromCart,decreaseCart,increaseCart,clearCart, getTotals } from "../features/cartSlice";
const Cart = () => {
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getTotals());
    }, [cart]);

    const handleRemovefromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }
    const handleDecreaseCart = (cartItem)=>{
        dispatch(decreaseCart(cartItem));
    } 

    const handleIncreaseCart = (cartItem)=>{
        dispatch(increaseCart(cartItem));
    } 
    return ( 
    <div class="cart-container">
<h2>Cart</h2>
{cart.cartItems.length === 0? (
 <div className="cart-empty text-center p-8">
 <p>Your cart is currently empty</p>
 <div className="start-shopping mt-4">
   <Link to="/">
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Start Shopping
     </button>
   </Link>
 </div>
</div>

):(<>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                cart.cartItems?.map( cartItem => (
                    <tr key={cartItem.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4">
                        <img src={cartItem.image} class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                       {cartItem.name}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center">
                            <button onClick={()=>handleDecreaseCart(cartItem)} class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <div>
                                <input value={cartItem.cartQuantity} type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                            </div>
                            <button onClick={()=>handleIncreaseCart(cartItem)} class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${cartItem.price}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${Math.floor(cartItem.price * cartItem.cartQuantity)}
                    </td>
                    <td class="px-6 py-4">
                        <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=> handleRemovefromCart(cartItem)}>Remove</button>
                    </td>
                </tr>
                ))
            }
         
        </tbody>
    </table>
</div>

<div class="flex justify-between items-center mb-4 mt-5">
    <button onClick={() => dispatch(clearCart())} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
      Clear Cart
    </button>
    <div class="rounded-lg border w-72 bg-white text-card-foreground shadow-sm" data-v0-t="card">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight">Subtotal</h3>
      </div>
      <div class="p-6 grid gap-4">
        <div class="flex items-center">
          <div>Total</div>
          <div class="ml-auto">{cart.cartTotalAmount}</div>
        </div>
      </div>
      <div class="p-6 flex items-center gap-2">
        <button class="inline-flex bg-blue-500 items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 ml-auto">
          Checkout
        </button>
      </div>
    </div>
  </div>
</>)}
    </div>
     );
}
 
export default Cart;