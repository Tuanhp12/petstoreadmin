import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateOrderDetailForEmployee } from "../../actions/orderDetailAction";
import { getCustomers } from "../../actions/customerAction";
import { useHistory } from "react-router-dom";
import { sendEmail } from "../../actions/emailAction";

function EmployeeConfirm({
  getCustomers,
  orderDetailProps,
  customersProps,
  updateOrderDetailForEmployee,
  sendEmail,
}) {
  const history = useHistory();

  useEffect(() => {
    getCustomers();
  }, []);

  const [feedback, setFeedback] = useState("");
  // console.log(customersProps);
  let orderDetails = customersProps.map((customer, index) => {
    let isConfirm = 0;
    if (customer.orderDetail.status === "Not Confirm") {
      isConfirm = 1;
    } else if (customer.orderDetail.status === "Confirmed") {
      isConfirm = 2;
    }
    const confirmOrder = (customerIdentifier, customerEmail) => {
      customer.orderDetail.status = "Confirmed";
      setFeedback(
        'Your order has been confirmed, we will ship the item as soon as possible'
      );
      console.log(feedback)
      sendEmail(customerEmail, feedback);
      updateOrderDetailForEmployee(
        customerIdentifier,
        customer.orderDetail,
        history
      );
    };
    const confirmPayment = (customerIdentifier, customerEmail) => {
      customer.orderDetail.status = "Have Paid";
      setFeedback('Payment confirmed, thanks for using our service');
      console.log(feedback)
      sendEmail(customerEmail, feedback);
      updateOrderDetailForEmployee(
        customerIdentifier,
        customer.orderDetail,
        history
      );
    };

    let button;
    if (isConfirm === 1) {
      button = (
        <td>
          <button className="btn btn-success"
            onClick={() => {
              confirmOrder(customer.customerIdentifier, customer.email);
            }}
          >
            Confirm order
          </button>
        </td>
      );
    } else if (isConfirm === 2) {
      button = (
        <td>
          <button className="btn btn-primary"
            onClick={() => {
              confirmPayment(customer.customerIdentifier, customer.email);
            }}
          >
            Confirm Payment
          </button>
        </td>
      );
    } else {
      button = <td></td>;
    }

    return (
      <tr key={index} className="product container col-md-10">
        <td>{customer.nameCustomer}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
        <td>{customer.address}</td>
        <td>{customer.city}</td>
        <td>{customer.orderDetail.orderDetailIdentifier}</td>
        <td>{customer.orderDetail.created_At}</td>
        <td>{customer.orderDetail.totalPrice}</td>
        <td>{customer.orderDetail.status}</td>
        {button}
      </tr>
    );
  });

  return (
    <div>
      <div className="text-center">
      <hr/>
        <h2>Quản lý đơn hàng</h2>
      </div>
      <hr/>
      <table className="table table-bordered table table-hover col-md-12">
        <thead>
          <tr>
            <th>Tên khách hàng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Thành phố</th>
            <th>Id chi tiết đơn hàng</th>
            <th>Ngày đặt hàng</th>
            <th>Tổng giá</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{orderDetails}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  customersProps: state.customerState.customers,
});

export default connect(mapStateToProps, {
  getCustomers,
  updateOrderDetailForEmployee,
  sendEmail,
})(EmployeeConfirm);
