import { Carousel } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'antd/dist/antd.css';
import '~/index.css';

const styleDefaults = {
    height: 300,
    color: 'white',
    fontSize: 100,
    textAlign: 'center',
};
function Slider() {
    return (
        <Carousel dots arrows prevArrow={<ArrowLeftOutlined />} nextArrow={<ArrowRightOutlined />} effect="scrollx">
            <div className="image-slider">
                <img
                    src={
                        'https://plus.unsplash.com/premium_photo-1661657759493-f21eb0d67e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    }
                    alt=""
                />
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    );
}

export default Slider;
