function Slider() {
    return (
      <>
       <div id="carouselExampleControls" class="carousel slide col-md-12 col-lg-12 col-12 px-0" data-ride="carousel">
        <div class="carousel-inner">

            <div class="carousel-item  ">
                <img src="" alt="" class="d-block w-100"/>
                <div class="carousel-caption">
                    <h5>News</h5>
                    <p>Hello in Our New Site</p>
                    <button class="btn-sm btn-container d-flex">
                        <img class="cart-img" src="" alt=""/>
                        <p class="text-light">Shop Now</p>
                    </button>
                </div>
            </div>

        </div>

        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

      </>
    );
  }
  
  export default Slider;