import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function ProductDetail (){
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  async function getProductDetail (){
    let url = new URL (`http://localhost:5000/products/${id}`);
    let response = await fetch(url);
    let data = await response.json();
    console.log("디테일페이지", data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <div>
      <Container>
        <div className='detail-page'>
          <img src={product && product.img} />
          <div className='detail-desc'>
            <div className='detail-choice'>
              {product && product.choice == true ? "Conscious choice" : ""}
            </div>
            <div className='detail-new'>
              {product && product.new == true ? "신제품" : ""}
            </div>
            <div className='detail-title'>{product && product.title}</div>
            <div className='detail-price'>₩ {product && product.price}</div>
            <select className='detail-size'>
              <option>사이즈 선택</option>
              {product && product.size.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
            <Button variant="dark" className='add-cart'>장바구니에 추가</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetail;