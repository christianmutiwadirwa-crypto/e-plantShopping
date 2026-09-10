import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <span className="brand-mark">PN</span>
        <span>Paradise Nursery</span>
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart">
          <span aria-hidden="true">🛒</span>
          Cart <strong>{cartItemCount}</strong>
        </NavLink>
      </nav>
    </header>
  )
}
