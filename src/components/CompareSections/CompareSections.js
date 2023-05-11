import React from 'react'
import "./CompareSections.css"

function CompareSections() {
    return (
        <div className='compare__content'>
            <div className='account_top__text'>
                <span className='account__page__home__icon'>
                    <a href='/'>
                        <i class="fa-solid fa-house"></i>&nbsp;
                    </a>
                </span>
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <span>Product Comparison</span>
                <hr></hr>
            </div>

            <div id="content" class="col-md-12"> <h1 className="h4">Product Comparison</h1> <table className="table table-responsive table-bordered"> <thead> <tr> <td colspan="4"><strong>Product Details</strong></td> </tr> </thead> <tbody> <tr> <td>Product</td> <td><a class="text-decoration-none" href="https://demo.pocotheme.com/1/htc-touch-hd"><strong>HTC Touch HD</strong></a></td> <td><a class="text-decoration-none" href="https://demo.pocotheme.com/1/nikon-d300"><strong>Nikon D300</strong></a></td> <td><a class="text-decoration-none" href="https://demo.pocotheme.com/1/ipod-nano"><strong>iPod Nano</strong></a></td> </tr> <tr> <td>Image</td> <td class="text-center"> <img src="https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/2-90x101.webp" alt="HTC Touch HD" title="HTC Touch HD" class="img-thumbnail"></img> </td> <td class="text-center"> <img src="https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/3-90x101.webp" alt="Nikon D300" title="Nikon D300" class="img-thumbnail"></img> </td> <td class="text-center"> <img src="https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/7-90x101.webp" alt="iPod Nano" title="iPod Nano" class="img-thumbnail"></img> </td> </tr> <tr> <td>Price</td> <td> <strike>$120.00</strike> $80.00
            </td> <td> <strike>$80.00</strike> $49.00
                </td> <td> <strike>$100.00</strike> $80.00
                </td> </tr> <tr> <td>Model</td> <td>Product 1</td> <td>Product 4</td> <td>Product 9</td> </tr> <tr> <td>Brand</td> <td>HTC</td> <td>Nikon</td> <td>Apple</td> </tr> <tr> <td>Availability</td> <td>In Stock</td> <td>In Stock</td> <td>In Stock</td> </tr> <tr> <td>Rating</td> <td class="rating"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <br /> Based on 3 reviews.</td> <td class="rating"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <br /> Based on 3 reviews.</td> <td class="rating"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> <i class="far fa-star"></i> <br /> Based on 3 reviews.</td> </tr> <tr> <td>Summary</td> <td class="description">HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sleek, the HTC Touc..</td> <td class="description">Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikon's newly announced D3 profes..</td> <td class="description">Video in your pocket.
                    Its the small iPod with one very big idea: video. The worlds most popular music player now lets you enjoy movies, TV shows, and more on a two-inch display thats 65% ..</td> </tr> <tr> <td>Weight</td> <td>146.40g</td> <td>0.00kg</td> <td>5.00kg</td> </tr> <tr> <td>Dimensions (L x W x H)</td> <td>0.00cm x 0.00cm x 0.00cm</td> <td>0.00in x 0.00in x 0.00in</td> <td>0.00mm x 0.00mm x 0.00mm</td> </tr> </tbody> <thead> <tr> <td colspan="4"><strong>Memory</strong></td> </tr> </thead> <tbody> <tr> <td>colour</td> <td></td> <td></td> <td> White</td> </tr> </tbody> <tbody><tr> <td></td> <td> <div class="d-grid gap-2"> <input type="button" value="Add to Cart" class="compare__add__btn" onclick="cart.add('28', '1');"></input> <a href="https://demo.pocotheme.com/1/compare?remove=28" class="compare__remove__btn">Remove</a> </div> </td> <td> <div class="d-grid gap-2"> <input type="button" value="Add to Cart" class="compare__add__btn" onclick="cart.add('31', '1');"></input> <a href="https://demo.pocotheme.com/1/compare?remove=31" class="compare__remove__btn">Remove</a> </div> </td> <td> <div class="d-grid gap-2"> <input type="button" value="Add to Cart" class="compare__add__btn" onclick="cart.add('36', '1');"></input> <a href="https://demo.pocotheme.com/1/compare?remove=36" class="compare__remove__btn">Remove</a> </div> </td> </tr> </tbody></table> </div>




            {/* <h4>Product Comparison</h4>
            <div className='compare_details'>
                <h6>Product Details</h6>
            </div>
            <div className='product__compare__box'>
                <div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Product</div>
                    <div className='compare__product__name'>
                        <a href='#!'>Samsung Galaxy Tab 10.1</a>
                        </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Image</div>
                    <div className='compare__product__info'>
                        <img className='compare__product__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/13-90x101.webp' alt='...'></img>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Price</div>
                    <div className='compare__product__info'>$199.99</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Model</div>
                    <div className='compare__product__info'>SAM1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Brand</div>
                    <div className='compare__product__info'>Hewlett-Packard</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Availability</div>
                    <div className='compare__product__info'>In Stock</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Rating</div>
                    <div className='compare__product__info'>
                    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<div>Based on 3 reviews.</div>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Summary</div>
                    <div className='compare__product__info'>Samsung Galaxy Tab 10.1, is the world’s thinnest tablet, measuring 8.6 mm thickness, running with Android 3.0 Honeycomb OS on a 1GHz dual-core Tegra 2 processor, similar to its younger brothe..</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Weight</div>
                    <div className='compare__product__info'>0.00kg</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Dimensions (L x W x H)</div>
                    <div className='compare__product__info'>0.00cm x 0.00cm x 0.00cm</div>
                </div>
                <div className='compare_details technical'>
                <h6>Technical</h6>
            </div>
            <div className='compare__boxes__info'>
                    <div className='specifications'>Color</div>
                    <div className='compare__product__info'>Black</div>
                </div>
                <div className='compare_details technical'>
                <h6>Memory</h6>
            </div>
            <div className='compare__boxes__info'>
                    <div className='specifications'>Test</div>
                    <div className='compare__product__info'>TEST 1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'>Size</div>
                    <div className='compare__product__info'>16GB</div>
                </div>
                <div className='compare_details technical'>
                <h6>Processor</h6>
            </div>
            <div className='compare__boxes__info'>
                    <div className='specifications'>No. of Cores</div>
                    <div className='compare__product__info'>5</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='specifications'></div>
                    <div className='compare__boxes__btns'>
                        <button className='compare__add__btn' type='button'>Add To Cart</button>
                        <button className='compare__remove__btn' type='button'>Remove</button>
                    </div>
                </div>
                </div>

                <div>
            <div className='compare__boxes__info'>
            <div className='compare__product__name'>
                        <a href='#!'>iPod Classic</a>
                        </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>
                        <img className='compare__product__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/18-90x101.webp' alt='...'></img>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>$199.99</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>SAM1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Hewlett-Packard</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>In Stock</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>
                    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<div>Based on 3 reviews.</div>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combi..</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>0.00kg</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>0.00cm x 0.00cm x 0.00cm</div>
                </div>
  
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Black</div>
                </div>
       
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>TEST 1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>16GB</div>
                </div>
           
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>5</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__boxes__btns'>
                        <button className='compare__add__btn' type='button'>Add To Cart</button>
                        <button className='compare__remove__btn' type='button'>Remove</button>
                    </div>
                </div>
            </div>

            <div>
            <div className='compare__boxes__info'>
            <div className='compare__product__name'>
                        <a href='#!'>HP LP3065</a>
                        </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>
                        <img className='compare__product__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/11-90x101.webp' alt='...'></img>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>$199.99</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>SAM1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Hewlett-Packard</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>In Stock</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>
                    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<div>Based on 3 reviews.</div>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Samsung Galaxy Tab 10.1, is the world’s thinnest tablet, measuring 8.6 mm thickness, running with Android 3.0 Honeycomb OS on a 1GHz dual-core Tegra 2 processor, similar to its younger brothe..</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>0.00kg</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>0.00cm x 0.00cm x 0.00cm</div>
                </div>
      
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Black</div>
                </div>
      
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>TEST 1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>16GB</div>
                </div>
  
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>5</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__boxes__btns'>
                        <button className='compare__add__btn' type='button'>Add To Cart</button>
                        <button className='compare__remove__btn' type='button'>Remove</button>
                    </div>
                </div>
            </div>

               <div>
            <div className='compare__boxes__info'>
                    <div className='compare__product__name'>
                        <a href='#!'>Sony VAIO</a>
                        </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>
                        <img className='compare__product__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/6-90x101.webp' alt='...'></img>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>$199.99</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>SAM1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Hewlett-Packard</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>In Stock</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>
                    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<div>Based on 3 reviews.</div>
                    </div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Samsung Galaxy Tab 10.1, is the world’s thinnest tablet, measuring 8.6 mm thickness, running with Android 3.0 Honeycomb OS on a 1GHz dual-core Tegra 2 processor, similar to its younger brothe..</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>0.00kg</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>0.00cm x 0.00cm x 0.00cm</div>
                </div>
        
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>Black</div>
                </div>
     
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>TEST 1</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__product__info'>16GB</div>
                </div>
    
            <div className='compare__boxes__info'>
                    <div className='compare__product__info'>5</div>
                </div>
                <div className='compare__boxes__info'>
                    <div className='compare__boxes__btns'>
                        <button className='compare__add__btn' type='button'>Add To Cart</button>
                        <button className='compare__remove__btn' type='button'>Remove</button>
                    </div>
                </div>
            </div>

            
            </div> */}








        </div>
    )
}

export default CompareSections