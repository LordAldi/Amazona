import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";

export default function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(detailsProduct());
    return () => {
      //
    };
  }, []);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Bact to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} starts ({product.numReviews} reviews)
              </li>
              <li>
                <b>Price: ${product.price}</b>
              </li>
              <li>
                Descriptions:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: ${product.price}</li>
              <li>Status: {product.status}</li>
              <li>
                Qty:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </li>
              <li>
                <button className="button primary">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
