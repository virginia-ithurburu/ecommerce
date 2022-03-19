import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card"



function ItemDetail ({products}) {
   
    
    return (
         <div> 
        <Container>
            <Row>
                <Col>
                <Card body border="danger" style={{ width: '50rem' }}>
                <img src={products.img} width="30%"></img>
                <h5>{products.name}</h5>
                <p>{products.description}</p>
                <p>Price: {products.price}€</p>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ItemDetail 