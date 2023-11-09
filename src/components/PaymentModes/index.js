import {Component} from 'react'

import {AiOutlineClose} from 'react-icons/ai'

import './index.css'

class PaymentsModes extends Component {
  state = {paymentMethod: '', isOrderSuccess: false}

  active = method => {
    const {paymentMethod} = this.state
    if (paymentMethod === method) {
      this.setState({paymentMethod: ''})
    } else {
      this.setState({paymentMethod: method})
    }
  }

  onClickConfirmBtn = () => {
    this.setState({isOrderSuccess: true})
  }

  render() {
    const {paymentMethod, isOrderSuccess} = this.state
    const {close, totalItems, totalAmount} = this.props

    return (
      <div className="payments-popup">
        <button
          aria-label="close"
          className="close-button"
          type="button"
          onClick={() => close()}
        >
          <AiOutlineClose />
        </button>
        <div className="payments-card">
          <p className="payments-title">Payment Methods</p>
          <ul className="payment-methods-list">
            <li>
              <button
                disabled
                type="button"
                onClick={() => this.active('card')}
                className={paymentMethod === 'card' ? 'active' : 'in-active '}
              >
                Card
              </button>
            </li>
            <li>
              <button
                disabled
                type="button"
                onClick={() => this.active('net')}
                className={paymentMethod === 'card' ? 'active' : 'in-active '}
              >
                Net Banking
              </button>
            </li>
            <li>
              <button
                disabled
                type="button"
                onClick={() => this.active('upi')}
                className={paymentMethod === 'card' ? 'active' : 'in-active '}
              >
                UPI
              </button>
            </li>
            <li>
              <button
                disabled
                type="button"
                onClick={() => this.active('wallet')}
                className={paymentMethod === 'wallet' ? 'active' : 'in-active '}
              >
                Wallet
              </button>
            </li>
            <li>
              <button
                onClick={() => this.active('cash')}
                type="button"
                className={paymentMethod === 'cash' ? 'active' : 'in-active '}
              >
                Cash on Delivery
              </button>
            </li>
          </ul>
          <div className="order-info">
            <div>
              <div className="total-count-container">
                <p>No items:</p>
                <p className="total-items">{totalItems}</p>
              </div>
              <div className="total-count-container">
                <p>Total Amount:</p>
                <p className="total-amount">{totalAmount}</p>
              </div>
            </div>
            <button
              className="confirm-button"
              type="button"
              onClick={this.onClickConfirmBtn}
              disabled={paymentMethod !== 'cash'}
            >
              Confirm Order
            </button>
          </div>
          {isOrderSuccess && (
            <p className="confirm-status">
              Your order has been placed successfully
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default PaymentsModes
