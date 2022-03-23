import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card"
import ItemCount from "../ItemCount/ItemCount"





function ItemDetail ({products}) {
   
    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
          
        <Container>
            
            <Row>
                <Col>
                <Card body border="danger" style={{ width: '50rem' }}>
                <img src={products.img} width='30%'/>
                <h5>{products.name}</h5>
                <p>{products.description}</p>
                <p>Price: {products.price}€</p>
                <ItemCount initial={1} stock={ products.stock } onAdd= { onAdd } />
                </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default ItemDetail 