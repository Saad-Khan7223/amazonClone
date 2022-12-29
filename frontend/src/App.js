import data from './data';
function App() {
  return (
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
          <div className="row center">
          {
            data.products.map((product)=>{
              return(
              <div className="card" key={product.id}>
              <a href={`/product/${product.id}`}>
                <img className="medium" src={product.image} alt={product.name} />
              </a>
              <div className="cardBody">
              <a href={`/product/${product.id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
            )

            })
          }
            

          </div>
        </main>
        <footer className="row center">All rights are reserved</footer>
      </div>
    </div>
  );
}

export default App;
