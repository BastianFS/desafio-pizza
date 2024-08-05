import Container from 'react-bootstrap/Container'

function HeaderPizza() {

    return(
        <div fluid className="position-relative">
            <div className="overlay-header position-absolute top-50 start-50 translate-middle text-white">
                <h1>¡Pizzeria Mamma!</h1>
                <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
            </div>
            <div className='img-header'/>
            <div/>
        </div>
    ); 
}
export default HeaderPizza;