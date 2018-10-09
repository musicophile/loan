import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
import Success from './Success';
import { Drawer, Form, label, Button, Cascader,Table, Col, Select,Tabs, Input,
  } from 'antd';
  import 'antd/dist/antd.css';

export default class Testing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addAnotherBill: [],
			stateTimeStamp: Date.now(),
			notification: false,
			productOutofStock: false
		};
		this.removeNotification = this.removeNotification.bind(this);
	}

	_handleFormData = (e) => {
		e.persist();
		const _this = this;
		const { addAnotherBill } = this.state;
		const formData = {};
		const tempBill = addAnotherBill;
		for (const field in this.refs) {
			formData[field] = this.refs[field].value;
		}

		const timeStamp = Date.now();

		const tempData = Object.assign({}, {
			productID: formData.productID,
			productDesc: formData.productDesc,
			quantity: formData.quantity,
			amount: formData.amount,
			subTotal: formData.subTotal,
			discount: formData.discount,
			unitPrice: formData.unitPrice
		});
		// return
		console.log(tempData.productID, this.props.dbStock)
		_this.props.dbStock.find({ productID: tempData.productID }, function (err, docs) {
			// docs is an array containing document Earth only
			console.log(docs, err)
			if (docs.length > 0) {
				tempBill.push(tempData)
				const stateTimeStamp = _this.state.stateTimeStamp.toString();
				const finalDataToSubmit = Object.assign({}, {
					customerName: formData.customerName,
					phoneNumber: formData.phoneNumber,
					address: formData.address,
					stateTimeStamp,
					productDetails: tempBill
				});

				_this.props.dbBilling.insert(finalDataToSubmit, function (err, data) {   // Callback is optional
					// console.log("Data Inserted", data, err);
					e.target.reset();
					_this.setState({ notification: true, addAnotherBill: [] })
					setTimeout(_this.removeNotification, 3000);
				});
			} else {
				_this.setState({ productOutofStock: true })
			}

		});
	}
	removeNotification() {
		this.setState({ notification: false, productOutofStock: false })
	}
	_addAnotherBill = (e) => {
		const { state, refs } = this;
		const { addAnotherBill } = state;
		const tempBill = addAnotherBill;
		const formData = {};
		const _this = this;


		for (const field in refs) {
			formData[field] = refs[field].value;
		}
		const tempData = Object.assign({}, {
			productID: formData.productID,
			productDesc: formData.productDesc,
			quantity: formData.quantity,
			amount: formData.amount,
			unitPrice: formData.unitPrice,
			subTotal: formData.subTotal,
			discount: formData.discount
		})

		_this.props.dbStock.find({ productID: tempData.productID }, function (err, docs) {
			if (docs.length > 0) {
				tempBill.push(tempData);
				_this.setState({
					addAnotherBill: tempBill
				});
			}
			refs.productID.value = '';
			refs.productDesc.value = '';
			refs.quantity.value = '';
			refs.amount.value = '';
			refs.unitPrice.value = '';
			refs.attentionTo.value = '';
			refs.subTotal.value = '';
			refs.discount.value = '';
		})

	}

	calculateAmount = (e) => {
		let subTotal = (this.refs.unitPrice.value * this.refs.quantity.value);
		let discount = this.refs.discount.value;
		if (discount && discount > 0) {
			subTotal = (subTotal - subTotal * (discount / 100));
		}
		let totalAmount = subTotal * (18 / 100) + subTotal;
		subTotal = subTotal || 0;
		totalAmount = totalAmount || 0;
		this.refs.subTotal.value = subTotal.toFixed(2);
		this.refs.amount.value = totalAmount.toFixed(2);
	}

	render() {
		const { addAnotherBill } = this.state;
		const showTable = addAnotherBill.length > 0;
		const renderTable = addAnotherBill.map((l, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{this.state.stateTimeStamp}</td>
					<td>{l.productName}</td>
					<td>{l.quantity}</td>
					<td>{l.unitPrice}</td>
				</tr>
			);
		});

		return (
			<div className="">
				{showTable && (
					<table className="">
						<thead>
							<tr>
								<th>SlNo</th>
								<th>Bill ID</th>
								<th>Product ID</th>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{renderTable}
						</tbody>
					</table>
				)}

				<form className="" onSubmit={this._handleFormData}>
					<h3>Bill ID : {this.state.stateTimeStamp}</h3>
					<div className="">
						<label>Customer Name</label>
						<input type="text" ref="customerName" className="" placeholder="Customer Name" />
					</div>
					<div className="">
						<label>Phone Number</label>
						<input type="tel" ref="phoneNumber" className="	" placeholder="Phone Number" />
					</div>
					<div className="">
						<label>Address</label>
						<textarea type="text" ref="address" className="" placeholder="Address" />
					</div>
					<div className="">
						<label>Credit Term</label>
						<select className="" ref="creditTerm">
							<option value="cash" >Cash</option>
							<option value="card" >Card</option>
							<option value="others" >Others</option>
						</select>
					</div>
					<div className="">
						<label>Attention to</label>
						<input type="text" ref="attentionTo" className="" placeholder="Attention To" />
					</div>
					<div className="">
						<label>Product ID</label>
						<input type="text" ref="productID" className="" placeholder="Product ID" />
					</div>
					<div className="">
						<label>Description</label>
						<input type="text" ref="productDesc" className="" placeholder="Product Description" />
					</div>
					<div className="">
						<label>Quantity</label>
						<input type="text" onChange={this.calculateAmount} ref="quantity" className="" placeholder="Quantity" />
					</div>
					<div className="">
						<label>Unit Price</label>
						<input type="text" onChange={this.calculateAmount} ref="unitPrice" className="" placeholder="Amount" />
					</div>
					<div className="">
						<label>Sub Total</label>
						<input type="text" ref="subTotal" className="" placeholder="Sub Total" />
					</div>
					<div className="">
						<label>Discount (in %)</label>
						<input type="text" onChange={this.calculateAmount} ref="discount" className="" placeholder="Discount (in %)" />
					</div>
					<div className="">
						<label>GST (in %)</label>
						<input type="text" ref="gst" className="" placeholder="GST (in %)" disabled value="18" />
					</div>
					<div className="">
						<label>Amount</label>
						<input type="text" ref="amount" className="" placeholder="Total Amount" />
					</div>
					<div className="">
						<div className="" onClick={this._addAnotherBill}>Add Another</div>
						<button type="reset" className="">Reset</button>
						<input type="submit" className="" value="Submit" />
					</div>
					{this.state.notification && <Success message="Your entry added" />}
					{this.state.productOutofStock && <Success message="Product out of stock" />}
				</form>
			</div>
		);
	}
}
