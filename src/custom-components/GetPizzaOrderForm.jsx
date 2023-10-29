import * as React from "react";

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
    event.preventDefault();
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

