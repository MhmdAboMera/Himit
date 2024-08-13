import { Link } from "react-router-dom";
import $404 from '../assets/images/404.png'
const PageNotFound = () => {
  return (
    <div className=" image-404 d-flex justify-content-center align-items-center flex-column" style={{height:"100vh"}}>
    <div className="gif">
      <img src={$404} alt="gif_ing" style={{width:"250px",aspectRatio:"1/1"}} />
    </div>
    <div className="px-2">
    <div className="content text-center bg-white shadow p-3 rounded mt-2">
      <h4 className="main-heading">This page is gone.</h4>
      <p> 
        ...maybe the page you're looking for is not found or never existed.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
    </div>
  </div>
  );
};

export default PageNotFound;
