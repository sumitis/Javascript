import React,{Component} from 'react'

class App extends Component{
    state={
        title:[
            {value:'MR',display:'MR'},
            {value:'MRS',display:'MRS'},
            {value:'MISS',display:'MISS'},
    ],
    gender:''
    }
    handleChange=(event)=>{
        this.setState({ value: event.target.value });
        if(event.target.value=='MR'){
            this.setState({gender:'male'})
        }else{
            this.setState({gender:'female'})
        }
    }
    
    render(){
        const {title,value,gender}=this.state
        return(
            <div>
                <h1>Hello {value}</h1>
                <select onChange={this.handleChange} value={value} >
                    {this.state.title.map(item=> 
                    
                    <option key={item.value} value={item.value}>{item.display}</option>
                   
                    )}
                    </select>
                    Gender:
        <div>
          <input type="radio" checked={gender == "male"} 
          value="male" /> Male
          <input type="radio" checked={gender == "female"} 
              value="female"  /> Female
        </div>
               { "Select Gender: " } {gender}
      
            </div>
        )
    }
}
export default App