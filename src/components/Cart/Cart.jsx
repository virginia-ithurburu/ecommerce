import Button from "react-bootstrap/esm/Button"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Stack from "react-bootstrap/esm/Stack"
import ListGroup from "react-bootstrap/esm/ListGroup"
import Row from "react-bootstrap/esm/Row"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import Image from "react-bootstrap/esm/Image"



function Cart() {

    const { cartList, removeListCart, removeItemCart, sumTotal } = useCartContext()


    const FullCart = () => {

      return(
        <Row className="mt-5">
              <Col className="align-self-center" md={7}>
                {cartList.map(product => 
                <ListGroup variant="flush">
                <ListGroup.Item className="my-5" key={product.id}>
                  <Row>
                    <Col md={2}>
                  <Image className="rounded-pill" src={product.img} style={{width: '5rem'}}></Image>
                    </Col>
                    <Col md={6}>
                      <h5>
                        {product.name} - at {product.price}€
                      </h5>
                      <ListGroup.Item key={product.id}>
                      Quantity: {product.Lot}              
                      </ListGroup.Item>
                    </Col>
                    <Col className="align-self-center mx-3" md="auto">
                      <span className="fw-bold">
                      Total: {product.Total.toFixed(2)}€ 
                      </span>
                    </Col>
                    <Col className="align-self-center" md="auto">
                    <Button  variant="danger" size="sm" className="px-1 m-1 mx-2" onClick={() =>removeItemCart(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
                </ListGroup>)}
              </Col>
              <Col className="align-self-center" md="auto">
                <h4 className="fw-bold">Total: {sumTotal()}€</h4>
              </Col>
              <Col className="align-self-center mx-5" md="auto">
              <Stack gap={2}>
                <Button  variant="danger" className="fw-bold" onClick={removeListCart}>
                    Clear Cart
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="p-1 bi bi-cart-x" viewBox="0 0 16 16">
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </Button>
                <Link to='/'>
                <Button  variant="danger" className="fw-bold">
                    Keep buying
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="p-1 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </Button>
                </Link>
              </Stack>
              </Col>
              </Row>
      )
    }

    const EmptyCart = () => {

      return(
        <Row className="mt-5 mx-3">
          <Col className="align-self-center mx-5" md={3}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e0ab6ce-9649-41da-af66-c61ec47a29f7/d9fed71-dd6bd79d-d892-4a16-b5cc-6bee293edcdf.png/v1/fill/w_718,h_1113,strp/the_witcher_3__wild_hunt_by_shirazihaa_d9fed71-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTg4IiwicGF0aCI6IlwvZlwvM2UwYWI2Y2UtOTY0OS00MWRhLWFmNjYtYzYxZWM0N2EyOWY3XC9kOWZlZDcxLWRkNmJkNzlkLWQ4OTItNGExNi1iNWNjLTZiZWUyOTNlZGNkZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xkXpRG5y6gPARGqnAZI5qHtfXo2o6XZyV4O9gavow6M" style={{width: '20rem'}} alt="empty cart" />
          </Col>
          <Col className="align-self-center" md={4}>
            <h4>The cart is empty, come back when you choose your product!</h4>
          </Col>
          <Col className="align-self-center mx-5" md="auto">
            <Link to='/'>
              <Button  variant="danger" className="fw-bold">
                To the store
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="p-1 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </Button>
            </Link>
          </Col>
        </Row>      
      )
    }
    

    return (
          <Container>
            {
              cartList.length > 0  ?

              <FullCart />
              
              :
              
              <EmptyCart />
                  
              } 
          </Container>
    )
}

export default Cart