import React from 'react'
import "./TopCategoriesMenu.css"

function TopCategoriesMenu(props) {
    const {setCategoriesMenu} = props
  return (
    <div className='top__categories__show'>
        <div className='top__categories__menu'>
            <div className='top__categories__menu__header'>
            <p>Top categories</p>
            <i onClick={() => setCategoriesMenu(false)} class="fa-solid fa-xmark top__categories__menu__x"></i>
          </div>
          <div className='top__categories__menu__content'>
            <div className='top__categories__menu__text'>
              <div className='categories__icon'>
            <i class="fa-solid fa-microchip"></i>
              </div>
            <p>Components</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-camera"></i>
            </div>
            <p>Cameras</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-mobile-screen-button"></i>
            </div>
            <p>Phone, Tablets & Ipod</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-brands fa-nfc-directional"></i>
            </div>
            <p>Software</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-music"></i>
            </div>
            <p>MP3 Players</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-laptop"></i>
            </div>
            <p>Laptops & Notebooks</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-display"></i>
            </div>
            <p>Desktops and Monitors</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-print"></i>
            </div>
            <p>Printers & Scanners</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-computer-mouse"></i>
            </div>
            <p>Mice and Trackballs</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
              <div className='categories__icon'>
            </div>
            <i class="fa-solid fa-shirt"></i>
              </div>
            <p>Fashion and Accessories</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-person-walking"></i>
            </div>
            <p>Beauty and Saloon</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-car-side"></i>
            </div>
            <p>Autoparts and Accessories</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-table-columns"></i>
            </div>
            <p>Washing machine</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-gamepad"></i>
            </div>
            <p>Gaming consoles</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-wind"></i>
            </div>
            <p>Air conditioner</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="bi bi-webcam"></i>
            </div>
            <p>Web Cameras</p>
            </div>
            <div className='top__categories__menu__text'>
            <div className='categories__icon'>
            <i class="fa-solid fa-microchip"></i>
            </div>
            <p>Components</p>
            </div>
          </div>
            </div>
        </div>

  )
}

export default TopCategoriesMenu