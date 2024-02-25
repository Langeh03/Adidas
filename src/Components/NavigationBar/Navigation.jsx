import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import usflg from '../../Assets/us-flg.png'
import ddIcon from '../../Assets/dd.svg'

function Nav() {
    return(
        <div className="container">
            <div className="wrapper">
                <div className="ads">
                    <div className="adsSection">
                        <div className="adswrapper">
                            <div className="holder">
                                <div>
                                    <p>FREE STANDARD SHIPPING WITH ADICLUB</p>
                                    <span><img src={ ddIcon } /></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="dropDownSection">
                        <div className="ddwrapper">
                            <div className='exitbtn'>
                                <div className='wrapper'>
                                    <span>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span>
                                </div>
                            </div>
                            <div className="content">
                                <section>
                                    <h4>FREE STANDARD SHIPPING WITH ADICLUB</h4>
                                    <p>Sign up for adiClub to enjoy free standard shipping and earn points on every order.</p>
                                    <div>
                                    <a href="#"><span>JOIN ADICLUB FOR FREE</span></a>
                                    </div>
                                    <div className='second'>
                                    <a href="#"><span>RETURNS & EXCHANGES</span></a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <ul className='min_nav'>
                        <li><a href="#">help</a></li>
                        <li><a href="#">orders and returns</a></li>
                        <li><a href="#">join adiclub</a></li>
                        <li className='target'>
                            <div>
                                <button>
                                    <img src={usflg} />
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div className='main_nav'>
                        <div className='mobile mobile-first'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" fill="white"/>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 15.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 8.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M387 1482 l-97 -97 0 -145 0 -145 355 -355 355 -355 355 355 355 355 0 145 0 145 -98 98 -97 97 -145 0 -145 0 -112 -112 -113 -113 -113 113 -112 112 -145 0 -145 0 -98 -98z m465 -209 l148 -148 148 148 147 147 75 0 74 0 53 -52 53 -52 0 -75 0 -74 -275 -276 -275 -276 -275 275 -275 276 0 74 0 74 52 53 52 53 76 0 75 0 147 -147z"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <a href="#" className='menu'>
                        <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
                        </a>
                        <ul className='menu-mid'>
                            <li className='menu-mid-wrapper'>
                                <a className='target outer' href="#">MEN</a>
                                <div className='drop-down'>
                                    <ul className='first-child child'>
                                        <li className='first-child-wrapper main-section'>
                                            <div className='holder-1'>
                                                <a href="#">
                                                    <div>
                                                        new & trending
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                New Arrivals
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Best Sellers
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Only At Adidas
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Members Exclusives
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Release Dates
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className='separator'>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Goth
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Oversized Fits
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className='separator'>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='first-child-wrapper'>
                                            <div className='holder-1'>
                                                <a href="#">
                                                    <div>
                                                        shoes
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Sneakers
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Running
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Soccer
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Walking
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Basketball
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Workout & Gym
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Slides & Sandals
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Shoes $100 & Under
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Hiking
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Golf
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Football
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='first-child-wrapper'>
                                            <div className='holder-1'>
                                                <a href="#">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Hoodies & Sweatshirts
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                T-Shirts & Tops
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Pants
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Feelce
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Jackets & Coats
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Shorts
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Tracksuits
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Matching Sets
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Jerseys
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='first-child-wrapper'>
                                            <div className='holder-1'>
                                                <a href="#">
                                                    <div>
                                                        Accessories
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Bags & Backpacks
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Balls
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Gloves
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Hats
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Headphones
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Socks
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Underwear
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Water Bottles
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='first-child-wrapper'>
                                            <div className='holder-1'>
                                                <a href="#">
                                                    <div>
                                                        shop by sports
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Baseball
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Basketball
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Cycling
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Football
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Golf
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Hiking
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Hockey
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Outdoor
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Running
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Soccer
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Tennis
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Workout & Gym
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Yoga
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='first-child-wrapper'>
                                            <div className='holder-1'>
                                                <a href="#">
                                                    <div>
                                                        Shop by collection
                                                    </div>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                adicolor clothing
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Five Ten
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Gazelle
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Samba
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Sportswear
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Supernova
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                TERREX
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Ultraboost
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div>
                                                                Y-3
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <hr />
                                    <ul className='last-child child'>
                                        <li>
                                            <a href="#">
                                                <div>Sale</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div>All Men's Shoes</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div>All Men's Clothing</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div>All Men's Accessories</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div>All Men's Sport</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div>All Men's</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='menu-mid-wrapper'><a className='target outer' href="#">WOMEN</a></li>
                            <li className='menu-mid-wrapper'><a className='target outer' href="#">KIDS</a></li>
                            <li className='menu-mid-wrapper'><a href="#" className='outer'>SALE</a></li>
                            <li className='menu-mid-wrapper'><a href="#" className='outer'>3 STRIPE LIFE</a></li>
                        </ul>
                        <div className='min-menu'>
                            <div>
                                <input type="text" placeholder="Search"/>
                                <div>
                                    <span>
                                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                            <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <a href="#" className='target'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="221.000000pt" height="228.000000pt" viewBox="0 0 221.000000 228.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M1030 2180 c-140 -18 -265 -83 -363 -189 -217 -235 -209 -600 17 -826 188 -187 466 -230 700 -107 191 99 316 308 316 527 -1 205 -100 390 -272 505 -105 70 -268 107 -398 90z m221 -266 c78 -35 159 -121 189 -201 30 -78 25 -204 -10 -278 -31 -64 -110 -144 -175 -175 -43 -21 -64 -25 -150 -25 -120 0 -171 20 -250 100 -79 79 -100 130 -100 250 0 119 17 166 92 246 108 116 261 147 404 83z"/>
                                        <path d="M235 515 c-107 -151 -195 -278 -195 -282 1 -9 177 -133 188 -133 4 0 79 101 166 225 l159 225 552 0 552 0 159 -225 c87 -124 162 -225 166 -225 12 0 187 124 188 133 0 4 -88 131 -195 282 l-196 275 -674 0 -674 0 -196 -275z"/>
                                        </g>
                                    </svg>
                                </span>
                                <span className='notification'>1</span>
                            </a>
                            <a href="#" className='target'>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                            </a>
                            <a href="#" className='target shop-bag'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M837 2186 c-59 -22 -91 -53 -114 -111 -7 -17 -12 -89 -12 -172 l-1 -141 -148 -4 c-139 -3 -151 -5 -185 -28 -20 -13 -46 -43 -59 -65 l-23 -40 -3 -685 c-2 -476 0 -699 8 -729 15 -59 43 -97 90 -121 38 -19 62 -20 731 -20 683 0 693 0 736 21 29 14 52 35 68 63 l25 43 0 711 c0 479 -3 720 -11 739 -15 40 -48 73 -94 94 -33 15 -65 19 -177 19 l-137 0 -3 164 c-3 148 -5 167 -24 192 -29 40 -65 64 -110 74 -64 15 -512 12 -557 -4z m523 -296 l0 -130 -235 0 -235 0 0 130 0 130 235 0 235 0 0 -130z m-650 -375 c0 -39 6 -78 15 -94 30 -59 120 -59 150 0 9 16 15 55 15 94 l0 65 235 0 235 0 0 -74 c0 -63 3 -79 23 -101 31 -36 86 -38 122 -5 23 21 25 31 25 102 l0 78 125 0 125 0 -2 -667 -3 -668 -652 -3 -653 -2 0 670 0 670 120 0 120 0 0 -65z"/>
                                        </g>
                                    </svg>
                                </span>
                                <div className='empty-promt'>
                                    <span>your cart is empty</span>
                                </div>
                            </a>
                        </div>
                        <div className='mobile mobile-last'>
                            <a href="#" className='target'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="221.000000pt" height="228.000000pt" viewBox="0 0 221.000000 228.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M1030 2180 c-140 -18 -265 -83 -363 -189 -217 -235 -209 -600 17 -826 188 -187 466 -230 700 -107 191 99 316 308 316 527 -1 205 -100 390 -272 505 -105 70 -268 107 -398 90z m221 -266 c78 -35 159 -121 189 -201 30 -78 25 -204 -10 -278 -31 -64 -110 -144 -175 -175 -43 -21 -64 -25 -150 -25 -120 0 -171 20 -250 100 -79 79 -100 130 -100 250 0 119 17 166 92 246 108 116 261 147 404 83z"/>
                                        <path d="M235 515 c-107 -151 -195 -278 -195 -282 1 -9 177 -133 188 -133 4 0 79 101 166 225 l159 225 552 0 552 0 159 -225 c87 -124 162 -225 166 -225 12 0 187 124 188 133 0 4 -88 131 -195 282 l-196 275 -674 0 -674 0 -196 -275z"/>
                                        </g>
                                    </svg>
                                </span>
                                <span className='notification'>1</span>
                            </a>
                            <button className='target'>
                                <span>
                                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                                    </svg>
                                </span>
                            </button>
                            <a href="#" className='target'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M837 2186 c-59 -22 -91 -53 -114 -111 -7 -17 -12 -89 -12 -172 l-1 -141 -148 -4 c-139 -3 -151 -5 -185 -28 -20 -13 -46 -43 -59 -65 l-23 -40 -3 -685 c-2 -476 0 -699 8 -729 15 -59 43 -97 90 -121 38 -19 62 -20 731 -20 683 0 693 0 736 21 29 14 52 35 68 63 l25 43 0 711 c0 479 -3 720 -11 739 -15 40 -48 73 -94 94 -33 15 -65 19 -177 19 l-137 0 -3 164 c-3 148 -5 167 -24 192 -29 40 -65 64 -110 74 -64 15 -512 12 -557 -4z m523 -296 l0 -130 -235 0 -235 0 0 130 0 130 235 0 235 0 0 -130z m-650 -375 c0 -39 6 -78 15 -94 30 -59 120 -59 150 0 9 16 15 55 15 94 l0 65 235 0 235 0 0 -74 c0 -63 3 -79 23 -101 31 -36 86 -38 122 -5 23 21 25 31 25 102 l0 78 125 0 125 0 -2 -667 -3 -668 -652 -3 -653 -2 0 670 0 670 120 0 120 0 0 -65z"/>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;