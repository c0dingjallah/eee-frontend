import { Link } from "react-router-dom";

const Generators = () => {
 
  return (
    <>
  {/* catg header banner section */}
  <section id="aa-catg-head-banner">
   <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
   <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>Chairs </h2>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>         
          <li className="active">Chairs </li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  {/* / catg header banner section */}

  {/* product category */}
  <section id="aa-product-category">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
          <div className="aa-product-catg-content">
            <div className="aa-product-catg-head">
              <div className="aa-product-catg-head-left">
                <form action="" className="aa-sort-form">
                  <label >Sort by</label>
                  <select name="">
                    <option value="1" selected="Default">type</option>
                  </select>
                </form>
                <form action="" className="aa-show-form">
                  <label >Show</label>
                  <select name="">
                    <option value="1" selected="12">All</option>
                  </select>
                </form>
              </div>
              <div className="aa-product-catg-head-right">
                <Link id="grid-catg" to="#"><span className="fa fa-th"></span></Link>
                <Link id="list-catg" to="#"><span className="fa fa-list"></span></Link>
              </div>
            </div>
            <div className="aa-product-catg-body">
              <ul className="aa-product-catg">
                {/* start single product item */}
                <li>
                  <figure>
                    <Link className="aa-product-img" to="#"><img src="img/chairs/chair1.jpg" alt="polo shirt img" /></Link>
                    <Link className="aa-add-card-btn"to="#"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                    <figcaption>
                      <h4 className="aa-product-title"><Link to="#">Chair</Link></h4>
                      <span className="aa-product-price">$$.$$</span><span className="aa-product-price"><del>$$.$$</del></span>
                      <p className="aa-product-descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus facere iusto, autem soluta amet sapiente ratione inventore nesciunt a, maxime quasi consectetur, rerum illum.</p>
                    </figcaption>
                  </figure>                         
                  <div className="aa-product-hvr-content">
                    <Link to="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                    <Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                    <Link to="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>                            
                  </div>
                  {/* product badge */}
                  <span className="aa-badge aa-sale" to="#">SALE!</span>
                </li>
                {/* start single product item */}
                <li>
                  <figure>
                    <Link className="aa-product-img" to="#"><img src="img/chairs/chair2.jpg" alt="polo shirt img" /></Link>
                    <Link className="aa-add-card-btn"to="#"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                    <figcaption>
                      <h4 className="aa-product-title"><Link to="#">Chair</Link></h4>
                      <span className="aa-product-price">$$.$$</span>
                       <p className="aa-product-descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus facere iusto, autem soluta amet sapiente ratione inventore nesciunt a, maxime quasi consectetur, rerum illum.</p>
                    </figcaption>
                  </figure>                         
                  <div className="aa-product-hvr-content">
                    <Link to="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                    <Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                    <Link to="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                  </div>
                  {/* product badge */}
                   <span className="aa-badge aa-sold-out" to="#">Exclusive!</span>
                </li> 
                <li>
                  <figure>
                    <Link className="aa-product-img" to="#"><img src="img/chairs/chair4.jpg" alt="polo shirt img" /></Link>
                    <Link className="aa-add-card-btn"to="#"><span className="fa fa-shopping-cart"></span>Rent Now</Link>
                    <figcaption>
                      <h4 className="aa-product-title"><Link to="#">Chair</Link></h4>
                      <span className="aa-product-price">$$.$$</span>
                       <p className="aa-product-descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus facere iusto, autem soluta amet sapiente ratione inventore nesciunt a, maxime quasi consectetur, rerum illum.</p>
                    </figcaption>
                  </figure>                         
                  <div className="aa-product-hvr-content">
                    <Link to="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></Link>
                    <Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></Link>
                    <Link to="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>
                  </div>
                  {/* product badge */}
                   <span className="aa-badge aa-sold-out" to="#">Exclusive!</span>
                </li>                     
              </ul>

            
            </div>
            <div className="aa-product-catg-pagination">
              <nav>
                <ul className="pagination">
                  <li>
                    <Link to="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li><Link to="#">1</Link></li>
                  <li>
                    <Link to="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-md-pull-9">
          <aside className="aa-sidebar">
            {/* single sidebar */}
            <div className="aa-sidebar-widget">
              <h3>Category</h3>
              <ul className="aa-catg-nav">
              <li><Link to="/Canopies">Canopies</Link></li>
              <li><Link to="/Speakers">Musical Set</Link></li>            
                <li><Link to="/Generators">Generators</Link></li>
                <li><Link to="/Barrels">Barrels</Link></li>              
                <li><Link to="/Coolers">Coolers</Link></li>
                <li><Link to="/Tables">Tables</Link></li>
                <li><Link to="/Chairs">Chairs</Link></li>
                <li><Link to="/Stools">Stools</Link></li>  
              </ul>
            </div>
            {/* single sidebar */}
            <div className="aa-sidebar-widget">
              <h3>Tags</h3>
              <div className="tag-cloud">
                <Link to="#">Canopies</Link>
              </div>
            </div>
            {/* single sidebar */}
            <div className="aa-sidebar-widget">
              <h3>Shop By Price</h3>              
              {/* price range */}
              <div className="aa-sidebar-price-range">
               <form action="">
                  <div id="skipstep" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                  </div>
                  <span id="skip-value-lower" className="example-val">30.00</span>
                 <span id="skip-value-upper" className="example-val">100.00</span>
                 <button className="aa-filter-btn" type="submit">Filter</button>
               </form>
              </div>              

            </div>
            {/* single sidebar */}
            <div className="aa-sidebar-widget">
              <h3>Avaliable Colors</h3>
              <div className="aa-color-tag">
                <Link className="aa-color-green" to="#"></Link>
                <Link className="aa-color-yellow" to="#"></Link>
                <Link className="aa-color-pink" to="#"></Link>
                <Link className="aa-color-purple" to="#"></Link>
                <Link className="aa-color-blue" to="#"></Link>
                <Link className="aa-color-orange" to="#"></Link>
                <Link className="aa-color-gray" to="#"></Link>
                <Link className="aa-color-black" to="#"></Link>
                <Link className="aa-color-white" to="#"></Link>
                <Link className="aa-color-cyan" to="#"></Link>
                <Link className="aa-color-olive" to="#"></Link>
                <Link className="aa-color-orchid" to="#"></Link>
              </div>                            
            </div>
            {/* single sidebar */}
            <div className="aa-sidebar-widget">
              <h3>Top Rated Products</h3>
              <div className="aa-recently-views">
                <ul>
                  <li>
                    <Link to="#" className="aa-cartbox-img"><img alt="img" src="img/toprated1.jpg" /></Link>
                    <div className="aa-cartbox-info">
                      <h4><Link to="#">Tent</Link></h4>
                      <p>1 x $$.$$</p>
                    </div>                    
                  </li>
                  <li>
                    <Link to="#" className="aa-cartbox-img"><img alt="img" src="img/toprated2.jpg" /></Link>
                    <div className="aa-cartbox-info">
                      <h4><Link to="#">Speaker</Link></h4>
                      <p>1 x $$.$$</p>
                    </div>                    
                  </li>
                   <li>
                    <Link to="#" className="aa-cartbox-img"><img alt="img" src="img/toprated3.jpg" /></Link>
                    <div className="aa-cartbox-info">
                      <h4><Link to="#">Generator</Link></h4>
                      <p>1 x $$.$$</p>
                    </div>                    
                  </li>                                      
                </ul>
              </div>                            
            </div>
          </aside>
        </div>
       
      </div>
    </div>
  </section>
  {/* / product category */}

    </>
  )
}

export default Generators