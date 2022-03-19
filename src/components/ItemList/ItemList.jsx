import Item from "../Item/Item";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function ItemList ({ prods }) {
    return (
        <>
        <Container>
        <Row>
            {prods.map((prod) => <Item prod={prod} key={prod.id} /> )}
        </Row>
        </Container>
        </>
    )
}

export default ItemList