import React from 'react'
export default class User extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        if (this.userName.value == "" || this.speakContent.value == "") {
            return
        }
        this.props.list.unshift({
            userName: this.userName.value,
            speakContent: this.speakContent.value
        })
        // console.log(this.props.list)
        this.props.addData(this.props.list)
        this.userName.value = ""
        this.speakContent.value = ""
    }

    render() {
        return (
            <div>
                <h4>用户名</h4>
                <p><input ref={input => this.userName = input} type="text" /></p>
                <h4>评论内容</h4>
                <p><textarea ref={input => this.speakContent = input} name="content" id="" cols="30" rows="10"></textarea></p>
                <p><button onClick={this.handleClick}>提交</button></p>
            </div>
        )
    }
}