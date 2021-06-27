import BasketItem from "../components/BasketItem"

function BasketPage({basket, setQuantity}) {
  
  let total = 0;
  for (const item of basket) {
    total += item.quantity * item.price;
  }
  
    return (
        
  <section className="basket-container">
    <h2>Your Basket</h2>
    <ul>
      {basket.map(item => (
        <BasketItem item={item} key={item.title} setQuantity={setQuantity} />
      ))}
    
    </ul>
    {/* <!-- Basket total is calculated using each item's total from above --> */}
    <h3>Your total: £{total.toFixed(2)}</h3>
  </section>

    )
}

export default BasketPage

