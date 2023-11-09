import Popup from 'reactjs-popup'

import CartContext from '../../context/CartContext'
import PaymentModes from '../PaymentModes'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              modal
              trigger={
                <button type="button" className="checkout-button d-sm-none">
                  Checkout
                </button>
              }
            >
              {close => (
                <PaymentModes
                  totalItems={cartList.length}
                  totalAmount={total}
                  close={close}
                />
              )}
            </Popup>
          </div>
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-button d-lg-none">
                Checkout
              </button>
            }
          >
            {close => (
              <PaymentModes
                totalItems={cartList.length}
                totalAmount={total}
                close={close}
              />
            )}
          </Popup>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
