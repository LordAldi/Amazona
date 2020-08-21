import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";

export default function ProductsScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: sucessSave,
    error: errorSave,
  } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
        rating,
        numReviews,
      })
    );
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Product</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              name="rating"
              id="rating"
              onChange={(e) => setRating(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="numReviews">Num Reviews</label>
            <input
              type="text"
              name="numReviews"
              id="numReviews"
              onChange={(e) => setNumReviews(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Create
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
