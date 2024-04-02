
import { useState , useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product"

function ProductList() {
  const proudect_api = "https://fakestoreapi.com/products";
  const [products , setProducts] = useState([]);
  const [refresh , setRefresh] = useState(false);


  // useEffect(() => {
  //   fetch(proudect_api)
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data))
  // }, [])

  
  useEffect(() => {
    (async ()=>{
      const result = await axios.get(proudect_api);
      setProducts(result.data);
    })() ;
   
  },[refresh])
  
  const addCat = ()=>{
    // fetch('https://fakestoreapi.com/products',{
    //         method:"POST",
    //         body:JSON.stringify(
    //             {
    //                 title: 'test product',
    //                 price: 13.5,
    //                 description: 'lorem ipsum set',
    //                 image: 'https://i.pravatar.cc',
    //                 category: 'electronic'
    //             }
    //         )
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json));

            setRefresh(!refresh);
  }

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
            <div key={product.id} className="card position-relative px-0 border-0">
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
