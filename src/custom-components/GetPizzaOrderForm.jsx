import * as React from "react";
import { API } from "aws-amplify";

export class GetPizzaOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {orderStatus: 'Unchecked', orderId: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event)
    this.setState({orderId: event.target.value, orderStatus: this.state.orderStatus});
  }

  handleSubmit(event) {
    alert('A orderId was checked: ' + this.state.orderId);
    this.queryOrder(this.state.orderId);
    event.preventDefault();
  }

  setOrderStatus(orderStatus) {
    this.setState({
      orderStatus: orderStatus,
      orderId: this.state.orderId
    });
  }

  queryOrder(orderId) {
    const queryData = async () => {
      const record = orderId
        ? (
            await API.graphql({
              query: "query GetPizzaOrder($id: String!) { listPizzaOrders(filter: {orderId: {eq: $id}}) { items { orderStatus } } }  ",
              variables: { id: orderId },
            })
          )
        : "Error";
      console.log(record);
      let orderStatus = "";
      if (record === "Error") {
        orderStatus = record;
      } else {
        orderStatus = record.data.listPizzaOrders.items[0].orderStatus;
      }
      this.setOrderStatus(orderStatus);
    };
    queryData();
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Order Id:
            <input type="text" value={this.state.orderId} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>
          Order Status: {this.state.orderStatus} 
        </p>
      </div>
    );
  }
}

