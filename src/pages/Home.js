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
    <a className="scrollToTop" href="#"><i className="fa fa-chevron-up"></i></a>
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
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
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
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
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
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
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
                <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
              </div>
            </li>                   
          </ul>
        </div>
        
        <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
          <a type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left"></span></a>
          <a type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right"></span></a>
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
                      <h4><a href="#">Speakers</a></h4>                      
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
                        <h4><a href="#">Generators</a></h4>                        
                      </div>
                    </div>
                  </div>
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/chairs/chair4.jpg" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>Sale Off</span>
                        <h4><a href="#">On Chairs</a></h4>                        
                      </div>
                    </div>
                  </div>
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/barrels/barrel1.png" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>New Arrivals</span>
                        <h4><a href="#">For Barrelss</a></h4>                        
                      </div>
                    </div>
                  </div>
                  <div className="aa-single-promo-right">
                    <div className="aa-promo-banner">                      
                      <img src="img/coolers/cooler1.jpg" alt="img" />                      
                      <div className="aa-prom-content">
                        <span>25% Off</span>
                        <h4><a href="#">For Coolers</a></h4>                        
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
                  <li className="active"><a href="#men" data-toggle="tab">Tents</a></li>
                  <li><a href="#women" data-toggle="tab">Speakers</a></li>
                  <li><a href="#sports" data-toggle="tab">Barrels</a></li>
                  <li><a href="#electronics" data-toggle="tab">enerators</a></li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    {/* Start men product category */}
                    <div className="tab-pane fade in active" id="men">
                      <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent4.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                              <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$$$</del></span>
                            </figcaption>
                          </figure>                        
                          <div className="aa-product-hvr-content">
                            <Link to="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                          
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent2.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                             <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent3.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                             <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent6.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent8.jpg" alt="polo shirt img" /></a>
                            <Link className="aa-add-card-btn"to="/Detail/canopies/tent8.jpg"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                           <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent9.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent10.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                           <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/canopies/tent18.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                        </li>                        
                      </ul>
                      <a className="aa-browse-btn" href="#">Browse all Tents <span className="fa fa-long-arrow-right"></span></a>
                    </div>
                    {/* / men product category */}
                    {/* start women product category */}
                    <div className="tab-pane fade" id="women">
                      <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/musicalset/speakers1.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Speaker</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/musicalset/speakers2.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Speaker</a></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-hot" href="#">HOT!</span>
                        </li>
                     
                      </ul>
                      <a className="aa-browse-btn" href="#">Browse all Speakers <span className="fa fa-long-arrow-right"></span></a>
                    </div>
                    {/* / women product category */}
                    
                    
                    {/* start sports product category */}
                    <div className="tab-pane fade" id="sports">
                      <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/barrels/barrel0.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Barrel</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                          
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/barrels/barrel1.png" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Barrel</a></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/barrels/barrel2.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Barrel</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                       
                      </ul>
                      <a className="aa-browse-btn" href="#">Browse all Barrels <span className="fa fa-long-arrow-right"></span></a>
                    </div>
                    {/* / sports product category */}
                    {/* start electronic product category */}
                    <div className="tab-pane fade" id="electronics">
                       <ul className="aa-product-catg">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/generators/generator1.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Generator</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/generators/generator2.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Generator</a></h4>
                              <span className="aa-product-price">$$.$$</span>
                            </figcaption>
                          </figure>                         
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                          {/* product badge */}
                           <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#"><img src="img/generators/generator3.jpg" alt="polo shirt img" /></a>
                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                            <figcaption>
                              <h4 className="aa-product-title"><a href="#">Generator</a></h4>
                              <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                            </figcaption>
                          </figure>                          
                          <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                          </div>
                        </li>
                           
                      </ul>
                      <a className="aa-browse-btn" href="#">Browse all Generators <span className="fa fa-long-arrow-right"></span></a>
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
            <a href="#"><img src="img/fashion-banner.jpg" alt="fashion banner img" /></a>
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
                <li className="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                <li><a href="#featured" data-toggle="tab">Featured</a></li>
                <li><a href="#latest" data-toggle="tab">Latest</a></li>                    
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* Start men popular category */}
                <div className="tab-pane fade in active" id="popular">
                  <ul className="aa-product-catg aa-popular-slider">
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent16.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>
                     {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/generators/generator2.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Generator</a></h4>
                          <span className="aa-product-price">$$.$$</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/barrels/barrel1.png" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><a href="#">Barrel</a></h4>
                        <span className="aa-product-price">$$.$$</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/chairs/chair4.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Chair</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/tables/table2.JPG" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Table</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent20.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" href="#">HOT!</span>
                    </li>    
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/stools/stool2.JPG" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">stool</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" href="#">HOT!</span>
                    </li> 
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/coolers/cooler1.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Cooler</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>                                                                                   
                  </ul>
                  <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                </div>
                {/* / popular product category */}
                
                {/* start featured product category */}
                <div className="tab-pane fade" id="featured">
                 <ul className="aa-product-catg aa-featured-slider">
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent14.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>
                     {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/musicalset/speakers1.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Speaker</a></h4>
                          <span className="aa-product-price">$$.$$</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent17.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                        <span className="aa-product-price">$$.$$</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent19.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/barrels/barrel1.png" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent9.jpg" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" href="#">HOT!</span>
                    </li>    
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/stools/stool3.JPG" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" href="#">HOT!</span>
                    </li> 
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/tables/table1.JPG" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>                                                                                   
                  </ul>
                  <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                </div>
                {/* / featured product category */}

                {/* start latest product category */}
                <div className="tab-pane fade" id="latest">
                  <ul className="aa-product-catg aa-latest-slider">
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent16.jpg" alt="latest tent img 2432" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>
                     {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent12.jpg" alt="latest tent img 24332" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/musicalset/speakers2.jpg" alt="satest Speaker img 243" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><a href="#">Speaker</a></h4>
                        <span className="aa-product-price">$$.$$</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/barrels/barrel0.jpg" alt="latest barrel img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Barrel</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/coolers/cooler1.jpg" alt="latest cooler img 2" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Cooler</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/canopies/tent23.jpg" alt="Latest Tent img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Tent</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" href="#">HOT!</span>
                    </li>    
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/chairs/chair4.jpg" alt="latest chair img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Chair</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-hot" href="#">HOT!</span>
                    </li> 
                    {/* start single product item */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src="img/stools/stool2.JPG" alt="latest stool img" /></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Rent Now</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Stool</a></h4>
                          <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* product badge */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>                                                                                   
                  </ul>
                   <a className="aa-browse-btn" href="#">Browse all Tents <span className="fa fa-long-arrow-right"></span></a>
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