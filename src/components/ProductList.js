import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import CreateProduct from './CreateProduct';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pname: '',
            qty: '',
            price: '',
            products: [],
            product: {}
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data });
        });
    }
addProduct=(e)=>{
    alert("hiii")
   window.location.href="/addproduct"
   

}

    deleteProduct(id) {
        ProductService.deleteProduct(id).then(res => {
            this.setState({
                products:
                    this.state.products.filter(pro => pro.id !== id)
            })
            .then(window.location.href="/viewall")
        });

    }
    editProduct(id) {

        ProductService.getProductById(id).then((res) => {
            this.setState({ product: res.data })


        })
    }
    updateProduct=(id, e)=> {
       
        if (this.state.id === "") {
            this.state.id = this.state.product.id;
        }
        if (this.state.pname === "") {
            this.state.pname = this.state.product.pname;
        }
        if (this.state.qty === "") {
            this.state.qty = this.state.product.qty;
        }
        if (this.state.price === "") {
            this.state.price = this.state.product.price;
        }
        let pro = {
            id: this.state.id,
            pname: this.state.pname,
            qty: this.state.qty,
            price: this.state.price
        }
        ProductService.updateProduct(pro, id)
            .then((res) => {
                this.setState({ product: res.data });
            }).then(()=>{
                window.location.href = "/viewall"
            }).catch((error)=>{
                console.log(error);
            })

    }
    viewProduct=(id)=>{
        alert("viewProduct...")
        window.location.href="view-product"+id;

        
    }
    render() {
        return (
            <div className='container'>
                <h2 className="text-center" style={{color:'green'}}><u>Product List</u></h2>
               
                <br></br>
                <div className="row"></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>ProductName</th>
                            <th>Product Qty</th>
                            <th>Product Price</th>
                            <th colSpan={2}>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((pros, index) =>
                                <tr key={index}>
                                    <td>{pros.id}</td>
                                    <td>{pros.pname}</td>
                                    <td>{pros.qty}</td>
                                    <td>{pros.price}</td>
                                    <td><button type="button" className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => this.editProduct(pros.id)}>Edit</button></td>
                                    <td><button type="button" className='btn btn-warning' onClick={(e)=>this.viewProduct(pros.id)}>view</button></td>
                                    <td><button type="button" className='btn btn-danger' onClick={(e) => this.deleteProduct(pros.id)}>Delete</button></td>
                                </tr>


                            )
                        }
                    </tbody>
                </table>
                <div className="container">
                    <button className="btn btn-primary"
                        onClick={(e)=>this.addProduct()}> Add Product</button>
                </div>
                {/*......modal......*/}
                <div className="modal" id="exampleModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ color: 'blue' }}>Update</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p><u style={{ color: 'blue' }}>Update Product Information</u></p>
                                <div>
                                    <label className='form-label'>Product Id</label>
                                    <input type="form-control" value={this.state.product.id} readOnly onChange={(e) => this.setState({ id: e.target.value })} />
                                </div>
                                <div>
                                    <label className='form-label'>Product Name</label>
                                    <input type="form-control" defaultValue={this.state.product.pname} onChange={(e) => this.setState({ pname: e.target.value })} />
                                </div>
                                <div>
                                    <label className='form-label'>Product quantity</label>
                                    <input type="form-control" defaultValue={this.state.product.qty} onChange={(e) => this.setState({ qty: e.target.value })} />
                                </div>
                                <div>
                                    <label className='form-label'>Product Price</label>
                                    <input type="form-control" defaultValue={this.state.product.price} onChange={(e) => this.setState({ price: e.target.value })} /><br />
                                </div>
                                <div>
                                    <button type="button" className="btn btn-secondary" style={{ marginInline: 10 }} data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"onClick={(e) => this.updateProduct(this.state.product.id, e)}>Save changes</button>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProductList;
