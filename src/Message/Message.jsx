import React from 'react'
class Message extends React.Component {
    ename = "Rahul Gandhi"
    esal = 45000
    eaddress = "guntur"
    mfather = "Rathnam"
    eimage = 'https://wallpaperaccess.com/full/4373735.jpg'
    render() {
        return <div>
            <h3>Employee Name:{this.ename}</h3>
            <h3>employee salory :{this.esal}</h3>
            <h4>employee adrees:{this.eaddress}</h4>
            <h3>employee father name: {this.mfather}</h3>
            <img src={this.eimage} alt="rahul Ganhi beta" height="50%" />
            <button className='btn btn-success'>Test</button>
        </div>
    }
}
export default Message