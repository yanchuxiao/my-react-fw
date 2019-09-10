import React, { Component } from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";
import { apiTest } from "../../api/workApi";

class Work extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: '加载中...'
        }
    }
    componentDidMount() {
        const data = {
            username: '15574828914',
            id: 1
        }
        apiTest(data).then(res => {
            this.setState({
                data: res.data.msg
            })
        })
    }

    render() {
        return (
            <div>
                <p className="works">Less自适应测试</p>
                <p>接口状态：{this.state.data}</p>
                <Button type='primary'>
                    <Link to='/work/view'>详情</Link>
                </Button>
            </div>
        )
    }
}

export default Work
