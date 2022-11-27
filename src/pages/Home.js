import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";

const Home = () => {

  const slideImages = [
    {
      url: 'img/slider/1.jpg',
      caption: 'Save Up to 75% Off',
      captiontwo: 'Tents & Canopies',
      caption3: 'Best tents & Canopies On The Market.',
      tent: 'tent21.jpg'
    },
    {
      url: 'img/slider/2.jpg',
      caption: 'Save Up to 75% Off',
      captiontwo: 'Tents & Canopies',
      caption3: 'Best tents & Canopies On The Market.',
      tent: 'tent5i.jpg'
    },
    {
      url: 'img/slider/3.jpg',
      caption: 'Save Up to 75% Off',
      captiontwo: 'Tents & Canopies',
      caption3: 'Best tents & Canopies On The Market.',
      tent: 'tent14.jpg'
    },
    {
      url: 'img/slider/4.jpg',
      caption: 'Save Up to 75% Off',
      captiontwo: 'Tents & Canopies',
      caption3: 'Best tents & Canopies On The Market.',
      tent: 'tent18.jpg'
    },
    {
      url: 'img/slider/5.jpg',
      caption: 'Save Up to 75% Off',
      captiontwo: 'Tents & Canopies',
      caption3: 'Best tents & Canopies On The Market.',
      tent: 'tent17.jpg'
    }
  ];

  return (
    <>
    {/* wpf loader Two */}
    {/* <div id="wpf-loader-two">          
      <div className="wpf-loader-two-inner">
        <span>Loading</span>
      </div>
    </div>  */}
    {/* / wpf loader Two */}       
  {/* SCROLL TOP BUTTON */}
    <Link className="scrollToTop" to="#"><i className="fa fa-chevron-up"></i></Link>
  {/* END SCROLL TOP BUTTON */}


  {/* Start header section */}

  {/* / header section */}

  {/* / menu */}
  {/* Start slider */}
  <section id="aa-slider">
     <div className="aa-slider-area" > 
    <div className="seq-screen">
    <div className="slide-container" >
        <Slide autoplay={true}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" style={{height: 500}} key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`, height: 500,   width: '100%', textAlign: 'center'}}>
                <div id="slidestyle">
                <span >{slideImage.caption}</span>                
                <h2 style={{verticalAlign: 'middle'}} >{slideImage.captiontwo}</h2>                
                <p style={{verticalAlign: 'middle'}} >{slideImage.caption3}</p>
                <Link  to={`Detail/canopies/${slideImage.tent}`}>SHOP NOW</Link>
              </div>
              </div>
            </div>
          ))} 
        </Slide>
      
      {/* 
        
          <ul className="seq-canvas">
          
            <li>
              <div className="seq-model">
                <img data-seq src="img/slider/1.jpg" alt="Men slide img" />
              </div>
              <div className="seq-title">
               <span data-seq>Save Up to 75% Off</span>                
                <h2 data-seq>Tents & Canopies</h2>                
                <p data-seq>Best tents & Canopies On The Market.</p>
                <Link data-seq to="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</Link>
              </div>
            </li>
           
            <li>
              <div className="seq-model">
                <img data-seq src="img/slider/2.jpg" alt="Wristwatch slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 75% Off</span>                
                <h2 data-seq>Tents & Canopies</h2>                
                <p data-seq>Best tents & Canopies On The Market.</p>
                <Link data-seq to="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</Link>
              </div>
            </li>
           
            <li>
              <div className="seq-model">
                <img data-seq src="img/slider/3.jpg" alt="Women Jeans slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 75% Off</span>                
                <h2 data-seq>Tents & Canopies</h2>                
                <p data-seq>Best tents & Canopies On The Market.</p>
                <Link data-seq to="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</Link>
              </div>
            </li>
                     
            <li>
              <div className="seq-model">
                <img data-seq src="img/slider/4.jpg" alt="Shoes slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 75% Off</span>                
                <h2 data-seq>Tents & Canopies</h2>                
                <p data-seq>Best tents & Canopies On The Market.</p>
                <Link data-seq to="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</Link>
              </div>
            </li>
           
             <li>
              <div className="seq-model">
                <img data-seq src="img/slider/5.jpg" alt="Male Female slide img" />
              </div>
              <div className="seq-title">
                <span data-seq>Save Up to 75% Off</span>                
                <h2 data-seq>Tents & Canopies</h2>                
                <p data-seq>Best tents & Canopies On The Market.</p>
                <Link data-seq to="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</Link>
              </div>
            </li>                   
          </ul>
        </div>
        
        <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
          <Link type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left"></span></Link>
          <Link type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right"></span></Link>
        </fieldset>
      </div> */}
    </div>
    </div>
    </div>
  </section>
  {/* / slider */}
  {/* Start Promo section */}
  <section id="aa-promo">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-promo-area">
            <div className="row">
              {/* promo left */}
              <div className="col-md-5 no-padding">                
                <div className="aa-promo-left">
                  <div className="aa-promo-banner">                    
                    <img src="img/musicalset/speakers1.jpg" alt="img" />                    
                    <div className="aa-prom-content">
                      <span>75% Off</span>
                      <h4><Link to="/Speakers">Speakers</Link></h4>                      
                    </div>
                  </div>
                </div>
              </div>
              {/* promo right */}
              <div className="col-md-7 no-padding">
                <div className="aa-promo-right">
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/generators/generator1.jpg" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>Exclusive</span>
                        <h4><Link to="/Generators">Generators</Link></h4>                        
                      </div>
                    </div>
                  </div>
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/chairs/chair4.jpg" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>Sale Off</span>
                        <h4><Link to="/Chairs">On Chairs</Link></h4>                        
                      </div>
                    </div>
                  </div>
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/barrels/barrel1.png" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>New Arrivals</span>
                        <h4><Link to="/Barrels">For Barrelss</Link></h4>                        
                      </div>
                    </div>
                  </div>
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/coolers/cooler1.jpg" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>25% Off</span>
                        <h4><Link to="/Coolers">For Coolers</Link></h4>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* / Promo section */}
  {/* Products section */}
  <section id="aa-product">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="aa-product-area">
              <div className="aa-product-inner">
                {/* start prduct navigation */}
                 <ul className="nav nav-tabs aa-products-tab">
                  <li className="active"><Link to="#men" data-toggle="tab">Tents</Link></li>
                  <li><Link to="#women" data-toggle="tab">Speakers</Link></li>
                  <li><Link to="#sports" data-toggle="tab">Barrels</Link></li>
                  <li><Link to="#electronics" data-toggle="tab">Generators</Link></li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    {/* Start men product category */}
                    <div className="tab-pane fade in active" id="men">
                      <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent4.jpg"><img src="img/canopies/tent4.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent4.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                              <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent4.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$$$</del></span>
                            </figcaption>
                          </figure>                        
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent4.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent4.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/canopies/tent4.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                          
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" to="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent2.jpg"><img src="img/canopies/tent2.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent2.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                             <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent2.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent2.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent2.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/canopies/tent2.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent3.jpg"><img src="img/canopies/tent3.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent3.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                             <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent3.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent3.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent3.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/canopies/tent3.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent6.jpg"><img src="img/canopies/tent6.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent6.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent6.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent6.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent6.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/canopies/tent6.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" to="#">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="/Detail/canopies/tent8.jpg"><img src="img/canopies/tent8.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="/Detail/canopies/tent8.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="/Detail/canopies/tent8.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                           <Link to="/Detail/canopies/tent8.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="/Detail/canopies/tent8.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="/Detail/canopies/tent8.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent9.jpg"><img src="img/canopies/tent9.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent9.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent9.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent9.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent9.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/canopies/tent9.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent10.jpg"><img src="img/canopies/tent10.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent10.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent10.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent10.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent10.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                           <Link to="Detail/canopies/tent10.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" to="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/canopies/tent18.jpg"><img src="img/canopies/tent18.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/canopies/tent18.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/canopies/tent18.jpg">Tent</Link></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/canopies/tent18.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/canopies/tent18.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/canopies/tent18.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                        </li>                        
                      </ul>
                      <Link className="aa-browse-btn" to="#">Browse all Tents <span className="fa fa-long-arrow-right"></span></Link>
                    </div>
                    {/* / men product category */}
                    {/* start women product category */}
                    <div className="tab-pane fade" id="women">
                      <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/musicalset/speakers1.jpg"><img src="img/musicalset/speakers1.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/musicalset/speakers1.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/musicalset/speakers1.jpg">Speaker</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/musicalset/speakers1.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/musicalset/speakers1.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/musicalset/speakers1.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" to="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/musicalset/speakers2.jpg"><img src="img/musicalset/speakers2.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/musicalset/speakers2.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/musicalset/speakers2.jpg">Speaker</Link></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/musicalset/speakers2.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/musicalset/speakers2.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/musicalset/speakers2.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-hot" to="#">HOT!</span>
                        </li>
                     
                      </ul>
                      <Link className="aa-browse-btn" to="/Speakers">Browse all Speakers <span className="fa fa-long-arrow-right"></span></Link>
                    </div>
                    {/* / women product category */}
                    
                    
                    {/* start sports product category */}
                    <div className="tab-pane fade" id="sports">
                      <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/barrels/barrel0.jpg"><img src="img/barrels/barrel0.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/barrels/barrel0.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/barrels/barrel0.jpg">Barrel</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/barrels/barrel0.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/barrels/barrel0.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/barrels/barrel0.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                          
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" to="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/barrels/barrel1.png"><img src="img/barrels/barrel1.png" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/barrels/barrel1.png"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/barrels/barrel1.png">Barrel</Link></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/barrels/barrel1.png" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/barrels/barrel1.png" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/barrels/barrel1.png" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/barrels/barrel2.jpg"><img src="img/barrels/barrel2.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/barrels/barrel2.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/barrels/barrel2.jpg">Barrel</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/barrels/barrel2.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/barrels/barrel2.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/barrels/barrel2.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                        </li>
                       
                      </ul>
                      <Link className="aa-browse-btn" to="/Barrels">Browse all Barrels <span className="fa fa-long-arrow-right"></span></Link>
                    </div>
                    {/* / sports product category */}
                    {/* start electronic product category */}
                    <div className="tab-pane fade" id="electronics">
                       <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/generators/generator1.jpg"><img src="img/generators/generator1.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/generators/generator1.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/generators/generator1.jpg">Generator</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/generators/generator1.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/generators/generator1.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/generators/generator1.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" to="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/generators/generator2.jpg"><img src="img/generators/generator2.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/generators/generator2.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/generators/generator2.jpg">Generator</Link></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/generators/generator2.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/generators/generator2.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/generators/generator2.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <Link className="aa-product-img" to="Detail/generators/generator3.jpg"><img src="img/generators/generator3.jpg" alt="polo shirt img" /></Link>
                            <Link className="aa-add-card-btn"to="Detail/generators/generator3.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><Link to="Detail/generators/generator3.jpg">Generator</Link></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <Link to="Detail/generators/generator3.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <Link to="Detail/generators/generator3.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                            <Link to="Detail/generators/generator3.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                          </div>
                        </li>
                           
                      </ul>
                      <Link className="aa-browse-btn" to="/Generators">Browse all Generators <span className="fa fa-long-arrow-right"></span></Link>
                    </div>
                    {/* / electronic product category */}
                  </div>
                  {/* quick view modal */}                  
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* / Products section */}
  {/* banner section */}
  <section id="aa-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">        
          <div className="row">
            <div className="aa-banner-area">
            <Link to="/"><img src="img/fashion-banner.jpg" alt="fashion banner img" /></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* popular section */}
  <section id="aa-popular-category">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="aa-popular-category-area">
              {/* start prduct navigation */}
             <ul className="nav nav-tabs aa-products-tab">
                <li className="active"><Link to="#popular" data-toggle="tab">Popular</Link></li>
                <li><Link to="#featured" data-toggle="tab">Featured</Link></li>
                <li><Link to="#latest" data-toggle="tab">Latest</Link></li>                    
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* Start men popular category */}
                <div className="tab-pane fade in active" id="popular">
                  <ul className="aa-product-catg aa-popular-slider">
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent16.jpg"><img src="img/canopies/tent16.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent16.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent16.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent16.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent16.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent16.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" to="#">SALE!</span>
                    </li>
                     {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/generators/generator2.jpg"><img src="img/generators/generator2.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/generators/generator2.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/generators/generator2.jpg">Generator</Link></h4>
                          <span className="aa-product-price">$$.$$</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/generators/generator2.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/generators/generator2.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/generators/generator2.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/barrels/barrel1.png"><img src="img/barrels/barrel1.png" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/barrels/barrel1.png"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><Link to="Detail/barrels/barrel1.png">Barrel</Link></h4>
                        <span className="aa-product-price">$$.$$</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/barrels/barrel1.png" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/barrels/barrel1.png" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/barrels/barrel1.png" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/chairs/chair4.jpg"><img src="img/chairs/chair4.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/chairs/chair4.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/chairs/chair4.jpg">Chair</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/chairs/chair4.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/chairs/chair4.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/chairs/chair4.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/tables/table2.JPG"><img src="img/tables/table2.JPG" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/tables/table2.JPG"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/tables/table2.JPG">Table</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/tables/table2.JPG" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/tables/table2.JPG" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/tables/table2.JPG" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent20.jpg"><img src="img/canopies/tent20.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent20.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent20.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent20.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent20.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent20.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" to="#">HOT!</span>
                    </li>    
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/stools/stool2.JPG"><img src="img/stools/stool2.JPG" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/stools/stool2.JPG"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/stools/stool2.JPG">stool</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/stools/stool2.JPG" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/stools/stool2.JPG" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/stools/stool2.JPG" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" to="#">HOT!</span>
                    </li> 
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/coolers/cooler1.jpg"><img src="img/coolers/cooler1.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/coolers/cooler1.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/coolers/cooler1.jpg">Cooler</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/coolers/cooler1.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/coolers/cooler1.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/coolers/cooler1.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" to="#">SALE!</span>
                    </li>                                                                                   
                  </ul>
                  <Link className="aa-browse-btn" to="/Canopies">Browse all Product <span className="fa fa-long-arrow-right"></span></Link>
                </div>
                {/* / popular product category */}
                
                {/* start featured product category */}
                <div className="tab-pane fade" id="featured">
                 <ul className="aa-product-catg aa-featured-slider">
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent14.jpg"><img src="img/canopies/tent14.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent14.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent14.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent14.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent14.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent14.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" to="#">SALE!</span>
                    </li>
                     {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/musicalset/speakers1.jpg"><img src="img/musicalset/speakers1.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/musicalset/speakers1.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/musicalset/speakers1.jpg">Speaker</Link></h4>
                          <span className="aa-product-price">$$.$$</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/musicalset/speakers1.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/musicalset/speakers1.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/musicalset/speakers1.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent17.jpg"><img src="img/canopies/tent17.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent17.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><Link to="Detail/canopies/tent17.jpg">Tent</Link></h4>
                        <span className="aa-product-price">$$.$$</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent17.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent17.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent17.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent19.jpg"><img src="img/canopies/tent19.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent19.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent19.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent19.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent19.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent19.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/barrels/barrel1.png"><img src="img/barrels/barrel1.png" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/barrels/barrel1.png"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/barrels/barrel1.png">Barrel</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/barrels/barrel1.png" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/barrels/barrel1.png" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/barrels/barrel1.png" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent9.jpg"><img src="img/canopies/tent9.jpg" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent9.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent9.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent9.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent9.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent9.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" to="#">HOT!</span>
                    </li>    
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/stools/stool3.JPG"><img src="img/stools/stool3.JPG" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/stools/stool3.JPG"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/stools/stool3.JPG">Stool</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/stools/stool3.JPG" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/stools/stool3.JPG" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/stools/stool3.JPG" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" to="#">HOT!</span>
                    </li> 
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/tables/table1.JPG"><img src="img/tables/table1.JPG" alt="polo shirt img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/tables/table1.JPG"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/tables/table1.JPG">This is Title</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/tables/table1.JPG" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/tables/table1.JPG" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/tables/table1.JPG" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" to="#">SALE!</span>
                    </li>                                                                                   
                  </ul>
                  <Link className="aa-browse-btn" to="/">Browse all Product <span className="fa fa-long-arrow-right"></span></Link>
                </div>
                {/* / featured product category */}

                {/* start latest product category */}
                <div className="tab-pane fade" id="latest">
                  <ul className="aa-product-catg aa-latest-slider">
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent16.jpg"><img src="img/canopies/tent16.jpg" alt="latest tent img 2432" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent16.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent16.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent16.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent16.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent16.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" to="#">SALE!</span>
                    </li>
                     {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent12.jpg"><img src="img/canopies/tent12.jpg" alt="latest tent img 24332" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent12.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent12.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent12.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent12.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent12.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/musicalset/speakers2.jpg"><img src="img/musicalset/speakers2.jpg" alt="satest Speaker img 243" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/musicalset/speakers2.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><Link to="Detail/musicalset/speakers2.jpg">Speaker</Link></h4>
                        <span className="aa-product-price">$$.$$</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/musicalset/speakers2.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/musicalset/speakers2.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/musicalset/speakers2.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" to="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/barrels/barrel0.jpg"><img src="img/barrels/barrel0.jpg" alt="latest barrel img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/barrels/barrel0.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/barrels/barrel0.jpg">Barrel</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/barrels/barrel0.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/barrels/barrel0.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/barrels/barrel0.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/coolers/cooler1.jpg"><img src="img/coolers/cooler1.jpg" alt="latest cooler img 2" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/coolers/cooler1.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/coolers/cooler1.jpg">Cooler</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/coolers/cooler1.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/coolers/cooler1.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/coolers/cooler1.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/canopies/tent23.jpg"><img src="img/canopies/tent23.jpg" alt="Latest Tent img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/canopies/tent23.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                        <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/canopies/tent23.jpg">Tent</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/canopies/tent23.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/canopies/tent23.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/canopies/tent23.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" to="#">HOT!</span>
                    </li>    
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/chairs/chair4.jpg"><img src="img/chairs/chair4.jpg" alt="latest chair img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/chairs/chair4.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/chairs/chair4.jpg">Chair</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/chairs/chair4.jpg" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/chairs/chair4.jpg" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/chairs/chair4.jpg" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" to="#">HOT!</span>
                    </li> 
                    {/* start single product item */}
                    <li>
                      <figure>
                        <Link className="aa-product-img" to="Detail/stools/stool2.JPG"><img src="img/stools/stool2.JPG" alt="latest stool img" /></Link>
                        <Link className="aa-add-card-btn"to="Detail/stools/stool2.JPG"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                         <figcaption>
                          <h4 className="aa-product-title"><Link to="Detail/stools/stool2.JPG">Stool</Link></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <Link to="Detail/stools/stool2.JPG" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                        <Link to="Detail/stools/stool2.JPG" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                        <Link to="Detail/stools/stool2.JPG" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" to="#">SALE!</span>
                    </li>                                                                                   
                  </ul>
                   <Link className="aa-browse-btn" to="/Canopies">Browse all Tents <span className="fa fa-long-arrow-right"></span></Link>
                </div>
                {/* / latest product category */}              
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </section>
  {/* / popular section */}
  {/* Support section */}
  <section id="aa-support">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-support-area">
            {/* single support */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="aa-support-single">
                <span className="fa fa-truck"></span>
                <h4>SHIPPING AVALIABLE</h4>
                <p>Personel avaliable to transport rental equipment to and from destination.</p>
              </div>
            </div>
            {/* single support */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="aa-support-single">
                <span className="fa fa-clock-o"></span>
                <h4>PROFESSIONAL SERVICE</h4>
                <p>Professional etiquette and communication throughtout the business process.</p>
              </div>
            </div>
            {/* single support */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="aa-support-single">
                <span className="fa fa-phone"></span>
                <h4>24/7 SUPPORT </h4>
                <p>Personel avaliable 24/7 to assist with all transactional needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* / Support section */}
  {/* Testimonial *
  <section id="aa-testimonial">  
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-testimonial-area">
            <ul className="aa-testimonial-slider">
              {/* single slide *
              <li>
                <div className="aa-testimonial-single">
                <img className="aa-testimonial-img" src="img/testimonial-img-2.jpg" alt="testimonial img" />
                  <span className="fa fa-quote-left aa-testimonial-quote"></span>
                  <p>Great service, I highly recommend!</p>
                  <div className="aa-testimonial-info">
                    <p>George</p>
                    <span>Customer</span>
                    
                  </div>
                </div>
              </li>
              {/* single slide *
              <li>
                <div className="aa-testimonial-single">
                <img className="aa-testimonial-img" src="img/testimonial-img-1.jpg" alt="testimonial img" />
                  <span className="fa fa-quote-left aa-testimonial-quote"></span>
                  <p>Very happy with the service, they treated me well.</p>
                  <div className="aa-testimonial-info">
                    <p>John</p>
                    <span>Customer</span>
                    
                  </div>
                </div>
              </li>
               {/* single slide *
              <li>
                <div className="aa-testimonial-single">
                <img className="aa-testimonial-img" src="img/testimonial-img-3.jpg" alt="testimonial img" />
                  <span className="fa fa-quote-left aa-testimonial-quote"></span>
                  <p>La the people I can rent from, they can do good job.</p>
                  <div className="aa-testimonial-info">
                    <p>Mary</p>
                    <span>Customer</span>
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
   * Testimonial */}

 



  {/* Subscribe section */}
  <section id="aa-subscribe">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-subscribe-area">
            <h3>Subscribe to our newsletter </h3>
            <p>Get notified as soon as we get new items for rent.</p>
            <form action="" className="aa-subscribe-form">
              <input type="email" name="" id="" placeholder="Enter your Email" />
              <input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* / Subscribe section */}


  {/* / footer */}


    </>
  )
}

export default Home