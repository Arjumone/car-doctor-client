import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const {_id,img,title,price}= service
  return (
   <div>
     <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src=
          {img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <p>Price:{price}</p>
        <div className="card-actions">
         <Link to={`/book/${_id}`}>
         <button className="btn btn-primary">Book Now</button>
         </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Service;
