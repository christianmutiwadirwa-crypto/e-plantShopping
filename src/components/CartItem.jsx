import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <p className="eyebrow">Your garden starts here</p>
        <h1>Your cart is waiting for something green.</h1>
        <Link className="primary-button" to="/plants">Continue Shopping <span aria-hidden="true">→</span></Link>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Your selections</p>
          <h1>Shopping cart</h1>
        </div>
        <Link className="text-link" to="/plants">← Continue shopping</Link>
      </div>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-product-info">
                <h2>{item.name}</h2>
                <p>${item.price} each</p>
                <button className="remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
              <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">Order summary</p>
          <div className="summary-line"><span>Plants</span><strong>${total.toFixed(2)}</strong></div>
          <div className="summary-line"><span>Delivery</span><strong>Free</strong></div>
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="checkout-button" type="button" onClick={() => window.alert('Checkout is coming soon!')}>Checkout</button>
        </aside>
      </div>
    </main>
  )
}
