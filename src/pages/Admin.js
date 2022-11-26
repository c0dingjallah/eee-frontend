import { Link } from "react-router-dom";


const Dashboard = () => {
 
  return (
    <>
     {/* catg header banner section */}
  <section id="aa-catg-head-banner">
    <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
    <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>Account Page</h2>
        <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>                    
          <li className="active">Account</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  {/* / catg header banner section */}

 {/* Cart view section */}
 <section id="aa-myaccount">
   <div className="container">
     <div className="row">
       <div className="col-md-12">
        <div className="aa-myaccount-area">         
            <div className="row">
              <div className="col-md-12">
                <div className="aa-myaccount-login">
                <h4>Admin Login</h4>
                 <form action="" className="aa-login-form">
                  <label >Username or Email address<span>*</span></label>
                   <input type="text" placeholder="Username or email" />
                   <label >Password<span>*</span></label>
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="aa-browse-btn">Login</button>
                  </form>
                </div>
              </div>
            </div>          
         </div>
       </div>
     </div>
   </div>
 </section>
 {/* / Cart view section */}
    </>
  )
}

export default Dashboard