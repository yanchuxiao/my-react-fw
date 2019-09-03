import React, { Component } from 'react';
import { Result, Button } from 'antd';
import {Link} from "react-router-dom";

class NotFound extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="对不起，您访问的页面不存在"
                extra={<Button type="primary"><Link to='/work'>Back Home</Link></Button>}
            >
            </Result>
        )
    }
}

export default NotFound
