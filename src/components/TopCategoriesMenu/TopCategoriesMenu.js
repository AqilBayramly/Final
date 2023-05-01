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
            <i class="fa-solid fa-microchip"></i>
            <p>Components</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-camera"></i>
            <p>Cameras</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-mobile-screen-button"></i>
            <p>Phone, Tablets & Ipod</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-brands fa-nfc-directional"></i>
            <p>Software</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-music"></i>
            <p>MP3 Players</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-laptop"></i>
            <p>Laptops & Notebooks</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-display"></i>
            <p>Desktops and Monitors</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-print"></i>
            <p>Printers & Scanners</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-computer-mouse"></i>
            <p>Mice and Trackballs</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-shirt"></i>
            <p>Fashion and Accessories</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-person-walking"></i>
            <p>Beauty and Saloon</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-car-side"></i>
            <p>Autoparts and Accessories</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-table-columns"></i>
            <p>Washing machine</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-gamepad"></i>
            <p>Gaming consoles</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-wind"></i>
            <p>Air conditioner</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="bi bi-webcam"></i>
            <p>Web Cameras</p>
            </div>
            <div className='top__categories__menu__text'>
            <i class="fa-solid fa-microchip"></i>
            <p>Components</p>
            </div>
          </div>
            </div>
        </div>

  )
}

export default TopCategoriesMenu