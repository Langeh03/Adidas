import './Main.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import data from "../../DB/Main"

function Main (){
    return data.map(({img1, img2, img3, title, description}) =>(
        <div className="container5">
            <div className="wrapper">
                <div className="pic">
                    <img className='mainSub2' src={ img3 } />
                    <img className='mainSub' src={ img2 } />
                    <img className='main' src={ img1 }  />
                </div>
                <div className='content'>
                    <div className='wrapper1'>
                        <div className='child1'>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div className='child2'>
                            <a href="#">SHOP MEN <span>< HiOutlineArrowNarrowRight /></span></a>
                            <a href="#">SHOP WOMEN <span>< HiOutlineArrowNarrowRight /></span></a>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Main;