import Modal from "../Modal/Modal";
import Product from "../Product/Product";

function Home() {
  return (
    <>
      {/* <!-- second Section OUR PRODUCTS--> */}
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
          {/* <!-- card of single product --> */}
          <Product />
        </div>
      </section>

      {/* <!-- fourth Section Best Saller--> */}
      <section
        id="best-seler"
        className="bestSaller-main-contianer col-md-12 col-lg-12 col-12 my-5"
      >
        <div className="best-description col-md-5 col-lg-5 col-12">
          <h4 className="card-title ">Best Seller</h4>
          <a href="" className="product-title font-weight-bold"></a>
          <p className="card-text">
            if you are looking for comfort, distinction and enjoyment, then you
            are here
          </p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center">
              <img src="" alt="" className="mr-1" />
              <p className="m-0"></p>
            </li>
          </ul>
          <div className="mb-2">
            <p className="m-0 Available-Size">
              Available Size<span className="orange-font">(Size Guide)</span>
            </p>
            <ul type="none" className="d-flex p-0 m-0 justify-content-between">
              <li></li>
            </ul>
            <div>price</div>
            <div className="price font-weight-bold"></div>
          </div>
          <Modal />
        </div>
        <div className="best-img col-md-6 col-lg-6 col-12 px-0">
          <img className="img1" src="" alt="Card image cap" />
          <img className="img2" src="" alt="Card image cap" />
          <img className="img3" src="" alt="Card image cap" />
        </div>
      </section>

      {/* <!-- fourth Section FLASH SALE--> */}
      <section id="flash-sale" className="flashSale-main-contianer my-5">
        <h3 className="mb-5 ps-3">FLASH SALE</h3>
        <div className="flashSale-section">
          <div className="card">
            <div className=" position-relative card-img-container">
              <img
                className="card-img-top"
                src="{{asset('images/'.$product->image)}}"
                alt="Card image cap"
              />
            </div>
            <div className="card-body ">
              <h4 className="card-title">
                <a href="" className=""></a>
              </h4>
              <p className="card-text"></p>
              <Modal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
