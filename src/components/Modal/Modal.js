
import LocationImg from '../../Images/Location.png'
import helloImg from '../../Images/Hello-cuate.png'


function Modal() {
  return (
    <div>
      <button type="button" className="btn btn-light float-start" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img className="cart-img me-2" alt='cart' src={LocationImg}/>
      Shop Now
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={helloImg} alt='modal pic'/>
              <p className='text-center'>Modal body text goes here.</p>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;