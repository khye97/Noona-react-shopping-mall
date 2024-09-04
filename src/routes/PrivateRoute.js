import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';

function PrivateRoute (props){
  return (
    <div>
      {props.authenticate == true ? <ProductDetail /> : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRoute;