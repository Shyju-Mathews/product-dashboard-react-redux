import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const disPatch = useDispatch()

  console.log(cartProducts)

  const removeFromCart = (id) => {
    disPatch(remove(id))
  }

  const cards = cartProducts.map((product) => (
    <div className="col-md-12" style={{marginBottom: "10px"}} key={product.id}>
    <Card  className="h-100">
      <div className="text-center" style={{marginTop: "10px"}}>
      <Card.Img variant="top" src={product.image} style={{width: "100px", height: "130px"}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>INR : {product.price}</Card.Text>
      </Card.Body>

      <Card.Footer style={{ backgroundColor: "white"}}>
      <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove From Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ))
  return (
    <>
      <h1>My Cart</h1>
      <div className="row">
        {cartProducts.length ? (
          <>
          {cards}
          </>
        ) : (
          <div style={{height: "50vh",display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p>No products in the cart</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
