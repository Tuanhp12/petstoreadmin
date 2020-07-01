import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateOrderDetailForEmployee } from "../../actions/orderDetailAction";
import { getCustomers } from "../../actions/customerAction";
import { useHistory } from "react-router-dom";

function EmployeeConfirm({
  getCustomers,
  orderDetailProps,
  customersProps,
  updateOrderDetailForEmployee,
}) {
  const history = useHistory();

  useEffect(() => {
    getCustomers();
  }, []);

  // console.log(customersProps);
  let orderDetails = customersProps.map((customer, index) => {
    let isConfirm = 0;
    if (customer.orderDetail.status === "Not Confirm") {
      isConfirm = 1;
    }
    else if (customer.orderDetail.status === "Confirmed") {
      isConfirm = 2;
      
    }
    else{
      isConfirm = 0
    }
    const confirmOrder = (customerIdentifier) => {
      customer.orderDetail.status = "Confirmed";
      updateOrderDetailForEmployee(
        customerIdentifier,
        customer.orderDetail,
        history
      );
    };
    const confirmPayment = (customerIdentifier) => {
      customer.orderDetail.status = "Have Paid";
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
          <button
            onClick={() => {
              confirmOrder(customer.customerIdentifier);
            }}
          >
            Confirm order
          </button>
        </td>
      );
    } else if (isConfirm === 2) {
      button = (
        <td>
          <button
            onClick={() => {
              confirmPayment(customer.customerIdentifier);
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
      <tr key={index} className="product container col-md-12">
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
      <table className="table table-bordered col-md-12">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Address</th>
            <th>Customer City</th>
            <th>orderDetailIdentifier</th>
            <th>created_At</th>
            <th>totalPrice</th>
            <th>status</th>
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
})(EmployeeConfirm);
