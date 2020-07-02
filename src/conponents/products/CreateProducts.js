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
    // <form onSubmit={onSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Product Name"
    //     onChange={(e) => setNameProduct(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Image"
    //     onChange={(e) => setImage(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Description"
    //     onChange={(e) => setDescriptionProduct(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Current Quantity"
    //     onChange={(e) => setCurrentQuantityProduct(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Price"
    //     onChange={(e) => setPriceProduct(e.target.value)}
    //   />

    //   <select type="text" onChange={(e) => setCategoryType(e.target.value)}>
    //     <option selected disabled>
    //       Choose here
    //     </option>
    //     {categoriesProps &&
    //       categoriesProps.map((category) => (
    //         <option key={category.categoryIdentifier}>{category.type}</option>
    //       ))}
    //   </select>
    //   <button type="submit">Submit</button>
    // </form>
    <div
      class="container col-md-4 card card-body"
      style={{ marginTop: "20px", backgroundColor: '#fcfafa' }}
    >
      <h2>Thêm mới sản phẩm</h2>
      <hr />
      <form onSubmit={onSubmit} class="was-validated">
        <div class="form-group">
          <label for="productname">Tên sản phẩm:</label>
          <input
            type="text"
            class="form-control"
            id="productname"
            placeholder="Tên sản phẩm"
            name="productname"
            required
            onChange={(e) => setNameProduct(e.target.value)}
          />
          <div class="invalid-feedback">Chưa nhập thông tin.</div>
        </div>
        <div class="form-group">
          <label for="img">Hình ảnh:</label>
          <input
            type="text"
            class="form-control"
            id="img"
            placeholder="Ảnh"
            name="img"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <div class="invalid-feedback">Chưa nhập thông tin.</div>
        </div>
        <div class="form-group">
          <label for="des">Mô tả:</label>
          <input
            type="text"
            class="form-control"
            id="des"
            placeholder="Mô tả"
            name="des"
            required
            onChange={(e) => setDescriptionProduct(e.target.value)}
          />
          <div class="invalid-feedback">Chưa nhập thông tin.</div>
        </div>
        <div class="form-group">
          <label for="qty">Số lượng:</label>
          <input
            type="number"
            class="form-control"
            id="qty"
            placeholder="Số lượng"
            name="qty"
            required
            onChange={(e) => setCurrentQuantityProduct(e.target.value)}
          />
          <div class="invalid-feedback">Chưa nhập thông tin.</div>
        </div>
        <div class="form-group">
          <label for="price">Giá sản phẩm:</label>
          <input
            type="number"
            class="form-control"
            id="price"
            placeholder="Giá"
            name="price"
            required
            onChange={(e) => setPriceProduct(e.target.value)}
          />
          <div class="invalid-feedback">Chưa nhập thông tin.</div>
        </div>
        <div class="form-group">
          <label for="price">Loại sản phẩm: </label>
          <select style={{height:'35px', marginLeft:'10px'}} type="text" onChange={(e) => setCategoryType(e.target.value)}>
            <option selected disabled>
              Loại sản phẩm
            </option>
            {categoriesProps &&
              categoriesProps.map((category) => (
                <option key={category.categoryIdentifier}>
                  {category.type}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categoriesProps: state.category.categories,
  errors: state.errors,
});

export default connect(mapStateToProps, { getCategories, createProduct })(
  CreateProducts
);
