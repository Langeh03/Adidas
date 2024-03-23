import './Main.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function Main (){
    return(
        <div className="container5">
            <div className="wrapper">
                <div className="pic">
                    <img className='mainSub2' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/xcat_ss24_springshoot_mw_onmodel_hp_large_mh_m_bebac3718c.jpg" />
                    <img className='mainSub' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/xcat_ss24_springshoot_mw_onmodel_hp_large_mh_t_600dfcc113.jpg" />
                    <img className='main' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/xcat_ss24_springshoot_mw_onmodel_hp_large_mh_d_09026db15c.jpg"  />
                </div>
                <div className='content'>
                    <div className='wrapper1'>
                        <div className='child1'>
                            <h2>SPRING BREAK MENTALITY</h2>
                            <p>Get instant spring vibes with fresh sneakers, easy layers, and more essentials.</p>
                        </div>
                        <div className='child2'>
                            <a href="#">SHOP MEN <span>< HiOutlineArrowNarrowRight /></span></a>
                            <a href="#">SHOP WOMEN <span>< HiOutlineArrowNarrowRight /></span></a>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;