import { Route, Switch, Redirect } from 'react-router-dom'
import Header from "./components/Header";
import ProductDetailPage from './components/ProductDetailPage';
import BasketPage from './pages/BasketPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductPage from './pages/ProductsPage';

function App() {
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
             <ProductDetailPage />
            </Route>
            <Route path="/categories" exact >
             <CategoriesPage />
            </Route>
            <Route path="/categories/:categoryId" exact>
              <ProductPage />
            </Route>
            <Route path="/basket" exact>
             <BasketPage />
            </Route>
          </Switch>
          
      </main>
    </>
  );
}

export default App;
