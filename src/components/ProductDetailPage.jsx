import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function ProductDetailPage() {
   const [product, setProduct] = useState(null)

   const {id} = useParams()

   useEffect(() => {
      fetch(`http://localhost:4000/products/${id}`)
        .then((resp) => resp.json())
        .then((product) => setProduct(product))
        
   },[id]
  );

  if (!product) {
    return (
      <>
        <section className="product-detail main-wrapper">
          <img
            src="https://cdn.dribbble.com/users/51771/screenshots/3650224/netneutrality-fidget-spinner-animated.gif"
            alt="loading..."
          />
          <div
            className="product-detail__side"
            style={{ borderColor: 'var(--yellow)' }}
          >
            <h2>Loading...</h2>
            <p>Loading...</p>
            <p>£Loading...</p>
          </div>
        </section>
      </>
    )
  }

    return (
        <main>
          <section class="product-detail main-wrapper">
            <img
              src={product.image}
              alt={product.title}
            />
          <div class="product-detail__side" style={{borderColor: "var(--yellow)"}}>
            
            <h2>{product.title}</h2>
            <p>
              {product.description}
            </p>
            <p>{product.price}</p>
     
             <button>Add to basket</button>
          </div>
        </section>
      </main>
    )
}

export default ProductDetailPage