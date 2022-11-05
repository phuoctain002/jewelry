import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'antd/dist/antd.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function HomeContent() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <div className="hot-product">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 1</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/photo-1414438992182-69e404046f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 2</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 3</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 4</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 5</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="gem-product">
                <h2>TRANG SỨC ĐÁ QUÝ</h2>
                <Slider {...settings}>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 1</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/photo-1414438992182-69e404046f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 2</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 3</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 4</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 5</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="fengshui-product">
                <h2>ĐÁ PHONG THỦY</h2>
                <Slider {...settings}>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 1</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/photo-1414438992182-69e404046f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 2</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 3</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 4</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        'https://images.unsplash.com/uploads/1411115362846f0257a48/3f4eb74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <span className="product-item-title">Product 5</span>
                                <span className="product-item-price">23.500.000đ</span>
                                <div className="product-status">
                                    <span className="product-sold-counter">25</span>
                                    <span className="status-label"> đã bán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default HomeContent;
