import { Link } from "react-router-dom";


const Navbar = () => {

    

  return (
    <>
    <header id="aa-header">
    {/* start header top  */}
    <div className="aa-header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-top-area">
              {/* start header top left */}
              <div className="aa-header-top-left">
                {/* start language */}
                <div className="aa-language">
                  <div className="dropdown">
                    <Link className="btn dropdown-toggle" to="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <img src="img/flag/english.jpg" alt="english flag" />ENGLISH
                      <span className="caret"></span>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><Link to="#"><img src="img/flag/english.jpg" alt="" />ENGLISH</Link></li>
                    </ul>
                  </div>
                </div>
                {/* / language */}

                {/* start currency */}
                <div className="aa-currency">
                  <div className="dropdown">
                    <Link className="btn dropdown-toggle" to="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i className="fa fa-usd"></i>USD
                      <span className="caret"></span>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><Link to="#"><i className="fa fa-usd"></i>USD</Link></li>
                    </ul>
                  </div>
                </div>
                {/* / currency */}
                {/* start cellphone */}
                <div className="cellphone hidden-xs">
                  <p><span className="fa fa-phone"></span>0000-000-000</p>
                </div>
                {/* / cellphone */}
              </div>
              {/* / header top left */}
              <div className="aa-header-top-right">
                <ul className="aa-head-top-nav-right">
                  <li><Link to="account.html">My Account</Link></li>
                  <li className="hidden-xs"><Link to="checkout.html">Signup</Link></li>
                  <li><Link to="" data-toggle="modal" data-target="#login-modal">Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* / header top  */}

    {/* start header bottom  */}
    <div className="aa-header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-bottom-area">
              {/* logo  */}
              <div className="aa-logo">
                {/* Text based logo */}
                <Link to="index.html">
                  <span><span className="fa fa-shopping-cart"></span>
                 <strong>EEE</strong>  <span style={{fontSize: 15, color: 'grey', verticalAlign: 'middle'}}>EXCELLENT EFFICIENT & EFFECTIVE</span>
                  </span>
                </Link>
                {/* img based logo */}
                {/* <Link to="index.html"><img src="img/logo.jpg" alt="logo img"></Link> */}
              </div>
              {/* / logo  */}

              {/* search box */}
              <div className="aa-search-box">
                <form action="">
                  <input type="text" name="search" placeholder="Search here ex. 'blue tent' " />
                  <button type="submit"><span className="fa fa-search"></span></button>
                </form>
              </div>
              {/* / search box */}             
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  header bottom  */}
  </header>
    {/* menu */}
    <section id="menu">
      <div className="container">
        <div className="menu-area">
          {/* Navbar */}
          <div className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>          
            </div>
            <div className="navbar-collapse collapse">
              {/* Left nav */}
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><Link to="/Canopies">Canopies</Link></li>
                <li><Link to="#">Musical Set</Link></li>            
                <li><Link to="#">Generators</Link></li>
                <li><Link to="#">Barrels</Link></li>              
                <li><Link to="#">Coolers</Link></li>
                <li><a>More Rentals <span className="caret"></span></a>
                  <ul className="dropdown-menu">                
                    <li><Link to="">Tables</Link></li>
                    <li><Link to="">Chairs</Link></li>
                    <li><Link to="">Stools</Link></li>                
                  </ul>
                </li>
              </ul>
            </div>{/*/.nav-collapse */}
          </div>
        </div>       
      </div>
    </section>
    </>
  )
}

export default Navbar