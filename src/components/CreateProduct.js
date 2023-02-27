import React, { Component } from 'react';
import ProductService from '../services/ProductService';
class CreateProduct extends Component {
    state = {
        id: "",
        pname: "",
        qty: "",
        price: ""
    }
    createPro = (e) => {
        e.preventDefault();
        let product = {
            id: this.state.id,
            pname: this.state.pname,
            qty: this.state.qty,
            price: this.state.price
        }
        ProductService.createProduct(product)
           
            .then(() => {
                window.location.href = "/viewall"
            })
    }
    render() {
        return (
            <div className='container'>
                <div className="mb-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h2 style={{ color: '#20c997' }}><u>Add Product</u></h2>
                            <div className='card-body'>
                                <label className="form-label">Enter Product Id</label>
                                <input type="text" className="form-control" onChange={(e) => this.setState({ id: e.target.value })} />
                                <label className="form-label">Enter  Product Name</label>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ pname: e.target.value })} />
                                <label className="form-label">Enter  Product quantity</label>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ qty: e.target.value })} />
                                <label className="form-label">Enter  Product price</label>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ price: e.target.value })} /><br />
                                <button className="btn btn-primary" onClick={(e) => this.createPro(e)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateProduct;
