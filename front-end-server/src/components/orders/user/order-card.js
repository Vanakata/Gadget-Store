import React, { Component } from "react";

class OrderCard extends Component {

    orderDetails = (event) => {

        event.preventDefault();
        const { order } = this.props;
        this.props.orderDetails(order);

    }
    render() {

        const { order } = this.props;
        const orderPrice = order.products.reduce(function (accumulator, product) {
            return accumulator + product.price;
        }, 0) || 0;

        return (
            <tr>
                <th>#{order._id}</th>
                <td>$ {orderPrice}</td>
                <td><span className="label label-info">
                    {
                        order.status === "Approved"
                            ? <strong>{order.status}</strong>
                            : order.status
                    }
                </span></td>
                <td><a className="btn btn-outline-warning btn-sm" href="/orders" onClick={this.orderDetails}>View</a></td>
            </tr>
        )
    }
}
export default OrderCard;