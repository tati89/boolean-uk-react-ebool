import { Route, Switch, Redirect } from 'react-router-dom'
import Header from "./components/Header";
import ProductDetailPage from './pages/ProductDetailPage';
import BasketPage from './pages/BasketPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductPage from './pages/ProductsPage';
import { useState } from 'react';

function App() {
  const [basket, setBasket] = useState([])

   function addItemToTheBasket(item) {
    const itemAlreadyInTheBag = basket.find((basketItem) => basketItem.id === item.id)
    console.log({item, itemAlreadyInTheBag})
    if (!itemAlreadyInTheBag) {
      return setBasket([...basket, {...item, quantity: 1}])
    } else {
      return increaseQuantity(itemAlreadyInTheBag)
    }
  }

  function increaseQuantity(item) {
     const updatedBasket = basket.map((basketItem) => {
          if (item.id === basketItem.id) {
            return {...basketItem, quantity: item.quantity + 1 };
          } else {
            return basketItem;
          }
  })
  setBasket(updatedBasket)
}

 function setQuantity(item, newQuantity) {
     const updatedBasket = basket.map((basketItem) => {
          if (item.id === basketItem.id) {
            return {...basketItem, quantity: newQuantity };
          } else {
            return basketItem;
          }
    }).filter((basketItem) => basketItem.quantity > 0)
    setBasket(updatedBasket)
  
 }

  return (
    <>
      <Header />
      <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/products"/>
            </Route>
            <Route path="/products" exact>
             <ProductPage />
            </Route>
            <Route path="/products/:id" exact>
             <ProductDetailPage addItemToTheBasket={addItemToTheBasket} />
            </Route>
            <Route path="/categories" exact >
             <CategoriesPage />
            </Route>
            <Route path="/categories/:categoryId" exact>
              <ProductPage />
            </Route>
            <Route path="/basket" exact>
             <BasketPage basket={basket} setQuantity={setQuantity} />
            </Route>
          </Switch>
          
      </main>
    </>
  );
}

export default App;
