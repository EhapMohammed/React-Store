import image1 from '../../Images/Stretching exercises-rafiki.png'
import Modal from '../Modal/Modal';
function Slider() {
    return (
      <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption">
                    <h5>Hello, We Are Store</h5>
                    <p>Happy to sea You here</p>
                   <Modal />
                </div>
        </div>
        <div className="carousel-item">
          <img src={image1} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption">
                    <h5>Hello, We Are Store</h5>
                    <p>Happy to sea You here</p>
                     <Modal />
                </div>
        </div>
        <div className="carousel-item">
          <img src={image1} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption">
                    <h5>Hello, We Are Store</h5>
                    <p>Happy to sea You here</p>
                     <Modal />
                </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
      </>
    );
  }
  
  export default Slider;