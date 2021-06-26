import { Link } from 'react-router-dom'
function ProductCard({productInfo}) {
    const {id,title, image} = productInfo
    return ( 
            <li>
                <Link to={`/products/${id}`}><article class="product-item">
                    <img
                    src={image}
                    alt={title} />
                    <h3>{title}</h3>
                    </article></Link>
            </li>

                

            
    )
}

export default ProductCard