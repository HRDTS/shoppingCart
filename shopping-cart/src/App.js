import HomePage from "./home";
import ShoppingPage from "./shop";
import NavBar from "./navbar";
import ProductPage from "./productPage";

/*
    <div>
        <div className="App">
      <NavBar/>
      <HomePage/>
      </div>
    </div>
*/

/*
        <div className="App">
          <div className="shopping">
            <div className="navbarShopping"><NavBar/></div>
            <ShoppingPage/>
        </div>
      </div>
*/

function App() {
  return (
    <div>
        <div className="App">
      <NavBar/>
      <HomePage/>
      </div>
    </div>

  );
}

export default App;


