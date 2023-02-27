import React,{Component} from 'react';
import ProductService from '../services/ProductService';
class Viewallcust extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            pname:'',
            qty:'',
            price:'',
            products:[]
        }
    }
    componentDidMount(){
        ProductService.getProducts().then((res)=>{
            this.setState({products:res.data});
        });
    }
    render(){
        return(
            <div className="container">
                <div className='card'>
                    <div className='card-header'>
                        <h2 style={{color:'#0dcaf0'}}>Products List</h2>
                    </div>
                    <div className='card-body'>
                        <table className="table table-striped-columns">
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Product Quantity</th>
                                    <th>Product price</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {
                                       this.state.products.map((pro,index)=>
                                        
                                        <tr key={index}>
                                            <td>{pro.id}</td>
                                            <td>{pro.pname}</td>
                                            <td>{pro.qty}</td>
                                            <td>{pro.price}</td>
                                            </tr>
                                            
                                        )
                                    }
                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
export default Viewallcust;