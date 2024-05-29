import React,{Component} from "react";
class Body extends Component{
    render(){
        const {data}=this.props;
        return(
            <div>
        {
          data.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
        )
    }
}
export default Body;