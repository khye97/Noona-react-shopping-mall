import { useEffect } from 'react';
import ProductCard from '../component/ProductCard'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';

function ProductAll (){
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  async function getDate (){
    let searchQuery = query.get('q') || "";
    let url = new URL(`https://my-json-server.typicode.com/khye97/Noona-react-shopping-mall/products?q=${searchQuery}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log("productAll에서 출력한 데이터", data);
    setProductList(data);
  }

  useEffect(() => {
    getDate();
  }, [query]);


  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, index) => {
            return <Col lg={3} md={6} sm={12} key={index}><ProductCard item={item} /></Col>
          })}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll;