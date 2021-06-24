import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"


function ProductPage() {
  const [products, setProducts] = useState([])

  useEffect(() =>
      fetch("http://localhost:4000/products")
        .then((resp) => resp.json())
        .then((products) => setProducts(products)),
    []
  );

  return (
    <main>
       <section class="products-container main-wrapper">
            <ul class="products-container__list">
              {products.map((product) => (
                <ProductCard productInfo={product} />
              ))}
           </ul>
      </section>
    </main>
  )
}

export default ProductPage