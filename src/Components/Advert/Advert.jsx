import './Advert.css'
import yeezy from '../../Assets/yeezy.avif'
import yeezy2 from '../../Assets/yeezy2.avif'
import yeezy3 from '../../Assets/yeezy3.avif'
import arrow from '../../Assets/arrow.svg'

function Advert() {
    return(
        <div className='container6'>
            <div className='wrapper'>
                <div className='pic'>
                    <img className='yeezy' src={ yeezy } />
                    <img className='yeezy2' src={ yeezy2 } />
                    <img className='yeezy3' src={ yeezy3 } />
                </div>
                <div className='content'>
                    <div className='wrapper1'>
                        <div className='child1'>
                            <h2>YEEZY</h2>
                        </div>
                        <div className='child2'>
                            <div className='wrapper2'>
                                <a href="#">EXPLORE MORE<span><img src={ arrow } /></span></a>   
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advert;