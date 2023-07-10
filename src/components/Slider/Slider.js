import image1 from '../../Images/pexels-jonathan-borba-3076509.jpg'
import image2 from '../../Images/Location.png'
function Slider() {
    return (
      <>
      <div id="carouselExampleControls" className="carousel slide col-md-12 col-lg-12 col-12 px-0" data-ride="carousel">
        <div className="carousel-inner">

            <div className="carousel-item active">
                <img src={image1} alt="..." className="d-block w-100"/>
                <div className="carousel-caption">
                    <h5>Hello, We Are Store</h5>
                    <p>Happy to sea You here</p>
                    <button className="btn-sm btn-container d-flex">
                        <img className="cart-img" alt='cart' src={image2}/>
                        <p className="text-light">Shop Now</p>
                    </button>
                </div>
            </div>
            <div className="carousel-item ">
                <img src={image2} alt="..." className="d-block w-100"/>
                <div className="carousel-caption">
                    <h5>Hello, We Are Store</h5>
                    <p>Happy to sea You here</p>
                    <button className="btn-sm btn-container d-flex">
                        <img className="cart-img" alt='cart' src={image2}/>
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
        <span className="sr-only">Next</span>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>

       

      </>
    );
  }
  
  export default Slider;