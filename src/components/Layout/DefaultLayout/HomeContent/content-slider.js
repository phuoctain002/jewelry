import React, { useState, useEffect } from 'react';
import { url } from '~/api/url';
import { getData } from '~/api/api.js';
import { urnProductByType } from '~/api/urn.js';
import Slider from 'react-slick';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function ContentSlider(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        var uri = url + urnProductByType(props.productTypeId);
        getData(uri).then((res) => {
            setProducts(res.data);
        });
    }, [props.productTypeId]);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: products ? (products.length >= 4 ? 4 : products.length) : 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        className: 'slide-content',
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <>
            <div className="hot-product" style={{ margin: '55px 0' }} data-aos="fade-up">
                <h2>{props.name}</h2>
                <h4>Tôn lên vẻ sang trọng của người phụ nữ</h4>
                <Slider {...settings}>
                    {products &&
                        products.map((item, index) => {
                            return (
                                <div key={index} className="product">
                                    <div className="product-item">
                                        <div className="product-image">
                                            <img src={item.imageName} alt="" />
                                        </div>
                                        <div className="product-description">
                                            <span className="product-item-title">{item.name}</span>
                                            <span className="product-item-price">{item.price} VND</span>
                                            <div className="product-status">
                                                {item.status === 1
                                                    ? 'Available'
                                                    : item.status === 2
                                                    ? 'Not Available'
                                                    : item.status === 3
                                                    ? 'Contact shop'
                                                    : 'Sold'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
                <Button style={{ margin: '15px', fontSize: '1.1em' }}>XEM THÊM</Button>
            </div>
        </>
    );
}

export default ContentSlider;
