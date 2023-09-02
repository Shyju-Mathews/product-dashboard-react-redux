import React, {  useEffect } from "react";
// import axios from "axios";
import  Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import  {getProducts}  from "../redux/productSlice";
import  Alert  from "react-bootstrap/Alert";
import StatusCode from "../errorCode/StatusCode";

const Product = () => {
  // const [products, setProducts] = useState([]);
  const {data: products, status} = useSelector((state) => state.products)
  const disPatch = useDispatch();

  // const getItems = async () => {
  //     const res = await axios.get('https://fakestoreapi.com/products')
  //     const data = res.data;
  //     console.log(data);
  //     setProducts(data)
  // }

  useEffect(() => {
    // dispatch an action for fetchProducts
    disPatch(getProducts());
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (status === StatusCode.LOADING) {
    return <p>loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <Alert key='danger' variant="danger">Something went wrong! try again Later</Alert>
  }

  // useEffect(() => {
  //   const res = fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((result) => setProducts(result));

  // }, []);

  const addToCart = (product) => {
    disPatch(add(product))
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{marginBottom: "10px"}} key={product.id}>
    <Card  className="h-100">
      <div className="text-center" style={{marginTop: "10px"}}>
      <Card.Img variant="top" src={product.image} style={{width: "100px", height: "130px"}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Card.Text>INR : {product.price}</Card.Text>
      </Card.Body>

      <Card.Footer style={{ backgroundColor: "white"}}>
      <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ))

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        { cards }
      </div>
    </>
  );
};

export default Product;
