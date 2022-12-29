import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./components/screens/ProductScreen";
import HomeScreen from "./components/screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="gridContainer">
          <header className="row">
            <div>
              <a href="/" className="brand">
                amazona
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen/>}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
            </Routes>
          </main>
          <footer className="row center">All rights are reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
