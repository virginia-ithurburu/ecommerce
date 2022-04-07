import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import { useCartContext } from "../../Context/CartContext"






function ItemDetail ({products}) {
    
    const [ onButton, setonButton ] = useState ('button')

    const {addToCart} = useCartContext()

    const onAdd = (cant) => {
        console.log(cant)
        setonButton('on')
        addToCart({... products, Lot: cant, Total: cant * products.price })

    }

    
    const GoHome = () => {
        return (
            <Link to='/'>
                <Button  variant="danger">
                    Keep buying
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="currentColor" className="m-1 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </Button>
                </Link>

)
}

const GotoCart = () => {

    return (
    <Link to='/Cart'>
        <Button variant="danger" onClick={()=>console.log('Cart')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="currentColor" className="bi bi-cart4 m-1" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            Go to Cart
        </Button>
    </Link>
    )
}

return (
    
    <Container>
              <Row  className="justify-content-center mt-5">
                <Col md="auto" className="align-self-center ">
                <img className="rounded-pill" src={products.img} style= {{ width:'20rem'}}/>
                </Col>
                <Col md={6} className="align-self-center ">
                <Card border="light" className="shadow p-3 mb-5 rounded" style={{  width: '35rem', background: '#F2F2F0' }}>
                <Card.Header className="fw-bold">{products.name}</Card.Header>
                <Card.Body style={{ width: '33rem' }}>
                <p>{products.description}</p>
                <p>Features:</p>
                <p>- Material: Primary: 68% Polyester, 24% Nylon, 8% Elastane; Secondary: 90% Polyester, 10% Elastane;</p>
                <p>- Made from BlackMilk’s ‘Burned Velvet’ fabric with a custom design in a shiny silver print.</p>
                <p>Price: {products.price}€</p>
                
                {
                    onButton === 'button' ?
                    <ItemCount initial={1} stock={ products.stock } onAdd= { onAdd } />

                    :

                    <GotoCart />
                }
                <div className="p-2">
                <GoHome />
                </div>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default ItemDetail

