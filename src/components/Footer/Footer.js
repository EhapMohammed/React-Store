function Footer() {
    return (
        <>
            {/* <!-- Buy now popup --> */}
            <div id="popUp" className="popUp col-md-12 ">
                <div id="popup-container" className="popup-container col-md-6 mx-auto text-center bg-light p-5">
                    <i id="close-icon" onclick="closePopup()" className="fas fa-times position-absolute"></i>
                    <img src="{{asset('images/'.$setting->image_buy_now)}}" width="150px" height="150px" alt="" />
                    <p className=""></p>
                    <a href="/#" target="_blank" id="buy_now_link" className="btn btn-dark">Continue</a>
                </div>
            </div>

            {/* <!-- Footer Section --> */}
            <footer className="col-md-12 col-lg-12 col-12 mt-5 p-4">
                <div className="col-md-6 d-flex align-items-center flex-column ">
                    <a className=" col-5 col-md-3 align-center" href="/#">
                        <img src="" alt="" style={({height: '40px',width: '60px',})} />
                    </a>
                    {/* <!-- <P>{{$setting->footer_description}}</P> --> */}
                    <p style={({color: '#dba95c',marginTop:'1rem',})} className="text-center"></p>
                    <div className="input-group">
                        <input type="text" className="form-control" id="mail_input" placeholder="Enter Your Email"
                            aria-label="Recipient's username" aria-describedby="basic-addon2" style={({borderRadius: 'unset',})} />
                        <button className="btn btn-warning send_subscribe" onclick="sendSubscribe()" id="basic-addon2"
                            style={({borderRadius: 'unset',})}>Subscripe Now</button>
                    </div>
                </div>

            </footer>

        </>
    )
}
export default Footer;