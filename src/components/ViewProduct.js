import React,{Component} from 'react';
import ProductService from '../services/ProductService';
class ViewProduct extends Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            pname:"",
            qty:"",
            price:""
        }
       
    }
    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     this.fetchData(id);
    //    alert(" View Comp")
        
    // } 
 

 
    
    // fetchData = (id) => {
    //     ProductService.getProductById(id).then((res) => {
    //         this.setState(res.data);
    //       });
    // }
 
    render(){
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Product Details</h2>
                    </div>
                    <div className='card-body'>
                       <table className='table table-striped'>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.id}</td>
                                <td>{this.state.pname}</td>
                                <td>{this.state.qty}</td>
                                <td>{this.state.price}</td>
                            </tr>

                        </tbody>
                        </table> 
                    </div>
                </div>
                
            </div>
        )
    }
}
export default ViewProduct;