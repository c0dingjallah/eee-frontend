import { Link } from "react-router-dom";

const Footer = () => {
 
  return (
    <>
      {/* footer */}  
  <footer id="aa-footer">
    {/* footer bottom */}
    <div className="aa-footer-top">
     <div className="container">
        <div className="row">

     </div>
    </div>
    {/* footer-bottom */}
    <div className="aa-footer-bottom">
      <div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="aa-footer-bottom-area">
            <p>&#169; 2022 <Link to="http://www.markups.io/">EEE Group Of Companies.</Link></p>
            <div className="aa-footer-payment">
              <span className="fa fa-cc-mastercard"></span>
              <span className="fa fa-cc-visa"></span>
              <span className="fa fa-paypal"></span>
              <span className="fa fa-cc-discover"></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </footer>
    </>
  )
}

export default Footer