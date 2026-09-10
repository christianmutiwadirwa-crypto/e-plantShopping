import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function Navbar() {
  const itemCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0))

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">PN</span>
        <span>Paradise Nursery</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart">
          <span aria-hidden="true">🛒</span>
          Cart <strong>{itemCount}</strong>
        </NavLink>
      </nav>
    </header>
  )
}

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Grow something good</p>
          <h1>Make room for a little more green.</h1>
          <p className="hero-description">Thoughtful houseplants for rooms that feel alive. Delivered with care from our nursery to your windowsill.</p>
          <Link className="primary-button" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Plants with presence, picked for real homes.</p>
        </div>
      </section>
      <AboutUs />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  )
}
