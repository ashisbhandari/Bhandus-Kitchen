import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/storeContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div>
      <form className='place-order'>
        <div className="placeorderleft">
          <p className='title'>Delivery Information</p>
          <div className="multifield">
            <input type="text" placeholder='firstname' />
            <input type="text" placeholder='lastname' />
          </div>
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="multifield">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='state' />
          </div>
          <div className="multifield">
            <input type="text" placeholder='Postal Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone' />
        </div>
        <div className="placeorderright">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>RS. {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>RS. {getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b> RS.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
              <hr />
            </div>
            <button >Proceed to Payment</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default PlaceOrder
