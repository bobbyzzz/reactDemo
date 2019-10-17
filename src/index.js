import React from 'react'
import ReactDOM from 'react-dom'
// 子组件
import User from './component/APP'
import Respeak from './component/APP/respeak'
//  样式
import './component/APP/index.css'
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[{
                userName:"Tom",speakContent:"react 好难啊"
            },{
                userName:"Jack",speakContent:"react 还不错啊"
            }]
        }
    }
    getData=(data)=>{
        this.setState({
            list:data
        })
    }
    render(){
        return (
            <div>
                <h1>请发表对react的评论</h1>
                <div className="content">
                <User addData={this.getData} list={this.state.list}/>
                <Respeak reduceData={this.getData} list={this.state.list}/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))