import { Link } from "react-router-dom";


function Product({product}) {
  return (
    <>
<Link to={`/details/${product.id}`}>
        <div className=" position-relative card-img-container">
          <img className="card-img-top" src={product.image} alt={product.title} />

          {/* <img className="heart" src= alt={product.title} /> */}

        
        </div>

        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text font-weight-bold">${product.price}</p>
        </div>
        </Link>
    </>
  );
}
export default Product;
