import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard"


function ProductPage() {
  const [products, setProducts] = useState([])

  useEffect(() =>
      fetch("http://localhost:4000/products")
        .then((resp) => resp.json())
        .then((products) => setProducts(products)),
    []
  );

  const {categoryId} = useParams();
  console.log(categoryId)


  const productsMatchingCategoryId = categoryId ? products.filter((product) => product.categoryId === Number(categoryId)) : products
  

  return (
    <main>
       <section class="products-container main-wrapper">
            <ul class="products-container__list">
              {productsMatchingCategoryId.map((product) => (
                <ProductCard productInfo={product} />
              ))}
           </ul>
      </section>
    </main>
  )
}

export default ProductPage