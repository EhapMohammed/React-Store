
import { useState , useEffect } from "react";
import Product from "../Product/Product"

function ProductList() {
  const proudect_api = "https://fakestoreapi.com/products";
  const [products , setProducts] = useState([]);

  useEffect(() => {
    fetch(proudect_api)
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }, [])
  
  console.log(products)
  return (
    <>
      
      <section 
        id="our-product"
        className="product-main-contianer col-md-12 col-lg-12 col-12 mx-auto my-5"
      >
        <h3 className="ps-3">Our Product</h3>
        <p className="ps-3">
          if you are looking for comfort, distinction and enjoyment, then you
          are here
        </p>
        <div className="products-section col-12 col-md-12 flex-wrap px-0">
        {products.map(product => {
          return(
            <div key={product.id} className="card col-12 col-md-6 col-lg-3 position-relative px-0 border-0">
            <Product product={product}/>
            </div>
          )   
           })}
           </div>

      </section>
            

    </>
  );
}
export default ProductList;
