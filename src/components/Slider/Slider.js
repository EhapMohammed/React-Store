function Slider() {
    return (
      <>
       <div id="carouselExampleControls" className="carousel slide col-md-12 col-lg-12 col-12 px-0" data-ride="carousel">
        <div className="carousel-inner">

            <div className="carousel-item  ">
                <img src="" alt="" className="d-block w-100"/>
                <div className="carousel-caption">
                    <h5>News</h5>
                    <p>Hello in Our New Site</p>
                    <button className="btn-sm btn-container d-flex">
                        <img className="cart-img" src="" alt=""/>
                        <p className="text-light">Shop Now</p>
                    </button>
                </div>
            </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

      </>
    );
  }
  
  export default Slider;