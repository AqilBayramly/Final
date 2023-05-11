import React from 'react'
import "./SecondSearchInput.css"
import { useState } from "react";
import SearchMenuShow from '../../SearchMenuShow/SearchMenuShow';



function SecondSearchInput(props) {
  const [searchMenuShow, setsearchMenuShow] = useState(false);

  
  return (
    <div>

          {
              searchMenuShow && <SearchMenuShow setsearchMenuShow={setsearchMenuShow} />
          }


          <div className="hamburger__menu__search__input">
              <form className="navbar__search__input2">
                  <div className="navbar__input2">
                      <div className="dropdown header__dropdown__menu2">
                          <button
                              className="btn category2"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                              <p className='header__dropdown__menu2'>
                                  All Categories
                              </p>
                              <i class="fa-solid fa-chevron-down down__icon__search__input"></i>
                          </button>
                          <ul className="dropdown-menu">
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Desktops
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Laptops & Notebooks
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Components
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Tablets
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Software
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Phones & PDAs
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      Cameras
                                  </a>
                              </li>
                              <li>
                                  <a className="dropdown-item" href="#!">
                                      MP3 Players
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="flex-fill">
                          <input
                              className="search__input2"
                              type="text"
                              name="search"
                              data-autocomplete_route="extension/maza/product/product/autocomplete"
                              placeholder="Search Products"
                              aria-label="Search Products"
                              autocomplete="off"
                          ></input>
                      </div>
                      <div className="search__icon">
                          <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                  </div>
              </form>
              <div className="hamburger__menu__search" onClick={() => setsearchMenuShow(!searchMenuShow)}>
                  <i class="fa-solid fa-bars"></i>
              </div>
          </div>
    </div>
  )
}

export default SecondSearchInput