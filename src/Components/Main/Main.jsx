import './Main.css'
import main from '../../Assets/Main.avif'
import mainSub from '../../Assets/MainSub.avif'
import mainSub2 from '../../Assets/MainSub2.avif'
import arrow from '../../Assets/arrowB.svg'

function Main (){
    return(
        <div className="container5">
            <div className="wrapper">
                <div className="pic">
                    <img className='mainSub2' src={ mainSub2 } />
                    <img className='mainSub' src={ mainSub } />
                    <img className='main' src={ main }  />
                </div>
                <div className='content'>
                    <div className='wrapper1'>
                        <div className='child1'>
                            <h2>SAMBA</h2>
                            <p>Iconic for a reason.</p>
                        </div>
                        <div className='child2'>
                            <a href="#">SHOP MEN <span><img src={ arrow } /></span></a>
                            <a href="#">SHOP WOMEN <span><img src={ arrow } /></span></a>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;