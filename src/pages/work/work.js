import React, { Component } from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";
// import { apiTest } from "../../api/workApi";

class Work extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        // const data = {
        //     username: '15574828914',
        //     id: 1
        // }
        // apiTest(data).then(res => {
        //     console.log(res)
        // })
    }

    render() {
        return (
            <div>
                <p>工作台</p>
                <Button type='primary'>
                    <Link to='/work/view'>详情</Link>
                </Button>
            </div>
        )
    }
}

export default Work
