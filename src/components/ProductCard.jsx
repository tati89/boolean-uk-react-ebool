function ProductCard({productInfo}) {
    const {id,title, image} = productInfo
    return ( 
            <li>
                <a href={`/products/${id}`}><article class="product-item">
                    <img
                    src={image}
                    alt={title} />
                    <h3>{title}</h3>
                    </article></a>
            </li>

                

            
    )
}

export default ProductCard