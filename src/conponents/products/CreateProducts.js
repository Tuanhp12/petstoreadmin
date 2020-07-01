import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryActions";
import { createProduct } from "../../actions/productActions";
import { useHistory } from "react-router-dom";

function CreateProducts({
  categoriesProps,
  getCategories,
  createProduct,
  onSubmit,
  errors,
}) {
  const [categoryType, setCategoryType] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [imageProduct, setImage] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [currentQuantityProduct, setCurrentQuantityProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
 
  useEffect(() => {
    getCategories();
  }, []);

  //   console.log(categoriesProps);
  onSubmit = (e) => {
    e.preventDefault();
    categoriesProps &&
      categoriesProps.map((category) => {
        if (categoryType === category.type) {
          const newProduct = {
            name: nameProduct,
            image: imageProduct,
            description: descriptionProduct,
            currentQuantity: currentQuantityProduct,
            price: priceProduct,
          };

          console.log(newProduct);
          createProduct(category.categoryIdentifier, newProduct, useHistory);
        }
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setNameProduct(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescriptionProduct(e.target.value)}
      />
      <input
        type="text"
        placeholder="Current Quantity"
        onChange={(e) => setCurrentQuantityProduct(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPriceProduct(e.target.value)}
      />

      <select type="text" onChange={(e) => setCategoryType(e.target.value)}>
        <option selected disabled>
          Choose here
        </option>
        {categoriesProps &&
          categoriesProps.map((category) => (
            <option key={category.categoryIdentifier}>{category.type}</option>
          ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  categoriesProps: state.category.categories,
  errors: state.errors,
});

export default connect(mapStateToProps, { getCategories, createProduct })(
  CreateProducts
);
