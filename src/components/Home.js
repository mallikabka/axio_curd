import React,{Component} from 'react';
class Home extends Component{
    state={
        image:'http://enthavende.com/wp-content/uploads/2020/05/electronics.jpg',
        image1:"https://www.pngitem.com/pimgs/m/111-1112830_fruit-png-image-with-transparent-background-transparent-background.png",
        image3:'https://w7.pngwing.com/pngs/370/703/png-transparent-makeup-cosmetics-makeup-cosmetics-lipstick-brush.png'
    }
    render(){
        return(
            <div>
                <h2>Product Management System</h2>
                <marquee><img src={this.state.image}/>
                
            </marquee>
            </div>
        )
    }
}
export default Home;