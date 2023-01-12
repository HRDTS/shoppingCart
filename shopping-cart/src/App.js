import HomePage from "./home";
import ShoppingPage from "./shop";
import NavBar from "./navbar";

/*
    <div>
        <div className="App">
      <NavBar/>
      <HomePage/>
      </div>
    </div>
*/

function App() {
  return (
    <div>
        <div className="App">
          <div className="shopping">
            <div className="navbarShopping"><NavBar/></div>
            <ShoppingPage/>
        </div>
      </div>
    </div>

  );
}

export default App;


