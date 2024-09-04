import { useNavigate } from 'react-router-dom';

function ProductCard (props){
  const navigate = useNavigate();
  
  function showDetail (){
    navigate(`/product/${props.item.id}`)
  }
  
  return (
    <div className='card-item' onClick={showDetail}>
      <img src={props.item && props.item.img} className='card-img' />
      <div>
        <div className='card-choice'>{props.item && props.item.choice == true ? "Conscious choice" : ""}</div>
        <div className='card-title'>{props.item && props.item.title}</div>
        <div className='card-price'>₩ {props.item && props.item.price}</div>
        <div className='card-new'>{props.item && props.item.new == true ? "신제품" : ""}</div>
      </div>
    </div>
  );
}

export default ProductCard;