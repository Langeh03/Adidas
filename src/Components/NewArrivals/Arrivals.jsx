import './Arrivals.css'
import Products from '../../DB/Products'
import Card from './Card';

function Arrivals(){

    function renderProducts(products){
        return Products.map(({id, img, title, category, price}) =>(
            <Card key={id}
                img = {img}
                title = {title}
                category = {category}
                price = {price}
            />
        ));
    }

    const result = renderProducts(Products)

    return(
        <div className="container7">
            <header>
                <div className="wrapper">
                    <div className="buttons">
                        <button className="child1">New Arrivals</button>
                        <button className="child2">What's Trending</button>
                    </div>
                    <a href="#">VIEW ALL</a>
                </div>
            </header>
            <ul>{result}</ul>
        </div>
    );
}

export default Arrivals;