function Header() {
    return (
      <>
    {/* <!-- ****** start navbar ******--> */}
    <header className="py-2">
        <nav className="navbar navbar-expand-lg navbar-dark col-md-12 col-lg-12 m-auhref">
            <a className="navbar-brand mr-0 col-5 col-md-3" href="/#">
                <img src="" alt=""
                    style={({height:'40px', width:'60px'})}/>
            </a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                <span className="navbar-hrefggler-icon"></span>
            </buthrefn>
            <div className="collapse navbar-collapse  col-md-9 col-lg-9" id="navbarSupportedContent">
                <ul className="navbar-nav col-md-12 col-lg-12 flex-wrap">

                    <li className="nav-item el-active alignCenter">
                        <a className="nav-link" href="/#">Home</a>
                    </li>
                    <li className="nav-item alignCenter">
                        <a className="nav-link" href="/#">Products </a>
                    </li>
                    <li className="nav-item alignCenter">
                        <a className="nav-link" href="/#">Best Seler</a>
                    </li>
                    <li className="nav-item alignCenter">
                        <a className="nav-link" href="/#">Flash Sale</a>
                    </li>
                    <li className="nav-item  alignCenter">
                        <a className="nav-link" href="/#">Wish List</a>
                    </li>

                    <li className="nav-item alignCenter ">
                        <a className="nav-link" href="/#">About Us</a>
                    </li>

                    <li className="nav-item alignCenter ">
                        <a className="nav-link" href="/#">Contact US</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
      </>
    );
  }
  
  export default Header;