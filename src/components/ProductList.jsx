import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { plantCategories } from '../data/plants'

function PlantCard({ plant }) {
  const dispatch = useDispatch()
  const isInCart = useSelector((state) => state.cart.items.some((item) => item.id === plant.id))

  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img src={plant.image} alt={plant.name} className="plant-image" />
        <span className="plant-tag">Indoor</span>
      </div>
      <div className="plant-card-content">
        <div className="plant-card-heading">
          <h3>{plant.name}</h3>
          <p className="plant-price">${plant.price}</p>
        </div>
        <p className="plant-description">{plant.description}</p>
        <button className="add-button" type="button" disabled={isInCart} onClick={() => dispatch(addToCart(plant))}>
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}

export default function ProductList() {
  return (
    <main className="catalog-page">
      <section className="catalog-intro">
        <div>
          <p className="eyebrow">The collection</p>
          <h1>Find your new favorite plant.</h1>
        </div>
        <p>Curated greens for bright rooms, quiet corners, and every space in between.</p>
      </section>
      <div className="category-list">
        {plantCategories.map((category) => (
          <section className="category-section" key={category.name}>
            <div className="category-heading">
              <div>
                <p className="eyebrow">{category.eyebrow}</p>
                <h2>{category.name}</h2>
              </div>
              <span>{category.plants.length} plants</span>
            </div>
            <div className="plant-grid">
              {category.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
