import './Promotion.css'
import arrow from '../../Assets/arrow.svg'

function Promotion() {
    return (
        <div className="container3">
            <span>JOIN OUR ADICLUB &amp; GET 15% OFF</span>
            <button>
                <span>SIGN UP FOR FREE</span>
                <span><img src={ arrow } /></span>
            </button>
        </div>
    );
}

export default Promotion;