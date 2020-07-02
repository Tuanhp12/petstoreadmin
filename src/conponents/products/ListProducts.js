import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryActions";

function ListProducts({ categoriesProps, getCategories }) {
  useEffect(() => {
    getCategories();
  }, []);
  const categories = categoriesProps;

  let products = categories.map((customer, index) => {
    return (
        <tr key={index} className="product container col-md-10">
        
          
        </tr>
      )
  })
  return (
    // <div>
    // <div className="text-center">
    // <hr/>
    //   <h2>Quản lý đơn hàng</h2>
    // </div>
    // <hr/>
    // <table className="table table-bordered table table-hover col-md-12">
    //   <thead>
    //     <tr>
    //       <th>Tên khách hàng</th>
    //       <th>Email</th>
    //       <th>Số điện thoại</th>
    //       <th>Địa chỉ</th>
    //       <th>Thành phố</th>
    //       <th>Id chi tiết đơn hàng</th>
    //       <th>Ngày đặt hàng</th>
    //       <th>Tổng giá</th>
    //       <th>Trạng thái</th>
    //       <th></th>
    //     </tr>
    //   </thead>
    //   <tbody>{products}</tbody>
    // </table>
    // </div>
    <div></div>
  );
}

const mapStateToProps = (state) => ({
  categoriesProps: state.category.categories,
});

export default connect(mapStateToProps, { getCategories })(ListProducts);
