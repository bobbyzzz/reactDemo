import React from 'react'
export default class Respeak extends React.Component {
    constructor(props) {
        super(props)
    }
    delClick = (index) => {
        this.props.list.splice(index,1)
        //console.log(this.props.list)
        this.props.reduceData(this.props.list)
    }
    render() {
        return (
            <div>
                <h4 className="reply">评论回复：</h4>
                <ul>
                    {
                        this.props.list.map((item, index) =>
                            <li key={index}>
                                <div className="who">
                                    <p>{item.userName}说：</p>
                                    <p>{item.speakContent}</p>
                                </div>
                                <div className="del">
                                    <button onClick={this.delClick}>删除</button>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        )
    }
}