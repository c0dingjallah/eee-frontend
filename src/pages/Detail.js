import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
import { useOrdersContext } from '../hooks/useOrdersContext'

const Detail = () => {
  const { itemname } = useParams();
  const { image } = useParams();
  const price = 100;


  const { user } = useAuthContext()
  const navigate = useNavigate()
  const {dispatch} = useOrdersContext()

  const [date, setDate] = useState('Deluxe');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState('');
  const [oerror, setOerror] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  setDate
  setTime
  setContact

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      //console.log(localStorage)
      
      if (!user) {
          if (window.confirm('You must login to book Reservation.')) 
          {
              return(
                  navigate('/Login', { replace: true })
                  )
          };
          
        }

        if(user){
          
              const username = user.user.name;
              const user_id = user.user._id;

              //console.log(user)
              const orderObj = {username, itemname, image, price, date, time, contact, user_id}
              
              const response = await fetch('/api/order', {
                method: 'POST',
                body: JSON.stringify(orderObj),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${user.token}`
                }
              })
              const json = await response.json()
  
              if (!response.ok) {
                setOerror(json.error)
                setEmptyFields(json.emptyFields)
                alert(oerror+" "+emptyFields)
              }
              if (response.ok) {

                setDate('')
                setTime('')
                setContact('')
                setOerror(null)
                setEmptyFields([])
                dispatch({type: 'CREATE_ORDER', payload: json})
                  return(
                    navigate('/Dashboard', { replace: true })
                  )
                
              }
  
        }
         
    }


  return (
    <>
          {/* catg header banner section */}
  <section id="aa-catg-head-banner">
   <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img"/>
   <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>Product</h2>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>         
          <li><Link to="">Shop</Link></li>
          <li className="active">Product</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  {/* / catg header banner section */}

  {/* product category */}
  <section id="aa-product-details">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-product-details-area">
            <div className="aa-product-details-content">
              <div className="row">
                {/* Modal view slider */}
                <div className="col-md-5 col-sm-5 col-xs-12">                              
                  <div className="aa-product-view-slider">                                
                    <div id="demo-1" className="simpleLens-gallery-container">
                      <div className="simpleLens-container">
                        <div className="simpleLens-big-image-container"><a data-lens-image={`img/${itemname}/${image}`} className="simpleLens-lens-image"><img src={`img/${itemname}/${image}`} className="simpleLens-big-image" /></a></div>
                      </div>
                        
                    </div>
                  </div>
                </div>
                {/* Modal view content */}
                <div className="col-md-7 col-sm-7 col-xs-12">
                  <div className="aa-product-view-content">
                    <h3>Item</h3>
                    <form className="comments-form contact-form" onSubmit={handleSubmit}>
                      <div className="row">

                        <label>Choose Date</label>
                          <div className="form-group">                        
                            <input type="datetime-local" 
                            placeholder="Your Name" 
                            className="form-control" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                            
                          </div>
                        
                       
                          <div className="form-group">   
                            <label>Choose Rental Time</label>                     
                            <select className="form-control"
                            value={date}
                            onChange={(e) => setTime(e.target.value)}
                            required >
                            <option value="1">1 day - 24 hrs</option>
                            <option value="2">2 days - 48 hrs</option>
                            <option value="3">3 days - 72 hrs</option>
                            <option value="4">4 days - 96 hrs</option>
                            <option value="5">5 days - 120 hrs</option>
                            <option value="6">6 days - 144 hrs</option>
                            <option value="7">7 days - 168 hrs</option>
                          </select>
                          </div>
                       
                      </div>
                       <div className="row">
                        <label>Phone Number</label>
                          <div className="form-group">                        
                            <input type="text"
                             value={contact}
                             onChange={(e) => setContact(e.target.value)}
                             required  
                            placeholder="Subject" 
                            className="form-control" />
                          </div>
                        
                        
                      </div>                  
                       
                      <button className="aa-secondary-btn">Submit Reservation</button>
                    </form>
                   </div>
                 </div>
               </div>
             </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aa-product-details-bottom">
              <ul className="nav nav-tabs" id="myTab2">
                <li><a href="#description" data-toggle="tab">Description</a></li>
                <li><a href="#review" data-toggle="tab">Reviews</a></li>                
              </ul>

              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane fade in active" id="description" style={{paddingLeft: 40}}>
                  <p>(EEE) EXCELLENT EFFICIENT & EFFECTIVE</p>
                  <p>WE DO THE FOLLOWING</p>
                  <ul>
                    <li>Tables Rental</li>
                    <li>Chairs Rental</li>
                    <li>Coolers Rental</li>
                    <li>Barrels Rental</li>
                    <li>Generator Rental</li>
                    <li>Stools Rental</li>
                    <li>Canopies(All Sizes) Rental</li>
                    <li>Whole Sale Drinks(All Kinds)</li>
                    <li>Tappoline Rental</li>
                    <li>Musical Set(All Occasions) Rental</li>
                    <li>Lonestar Mobile Money</li>
                    <li>Orange Money</li>
                  </ul>
                  
            
                </div>
                <div className="tab-pane fade " id="review">
                 <div className="aa-product-review-area">
                   <h4>2 Reviews</h4> 
                   <ul className="aa-review-nav">
                     <li>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl image" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading"><strong>Marla</strong> - <span>March 26, 2016</span></h4>
                            <div className="aa-product-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star-o"></span>
                            </div>
                            <p>great service, they really treated me well.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img className="media-object" src="img/testimonial-img-2.jpg" alt="girl image" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading"><strong>Edwin</strong> - <span>March 26, 2016</span></h4>
                            <div className="aa-product-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star-o"></span>
                            </div>
                            <p>I enjoy my business with them, they're very good.</p>
                          </div>
                        </div>
                      </li>
                   </ul>
                   <h4>Add a review</h4>
                   <div className="aa-your-rating">
                     <p>Your Rating</p>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                   </div>
                   {/* review form */}
                   <form action="" className="aa-review-form">
                      <div className="form-group">
                        <label >Your Review</label>
                        <textarea className="form-control" rows="3" id="message"></textarea>
                      </div>
                      <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                      </div>  
                      <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
                      </div>

                      <button type="submit" className="btn btn-default aa-review-submit">Submit</button>
                   </form>
                 </div>
                </div>            
              </div>
            </div>
            


  </section>
  {/* / product category */}
    </>
  )
}

export default Detail