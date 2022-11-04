import React, { Component } from 'react';
import Slider from 'react-slick';
import 'antd/dist/antd.css';
// import '~/slick-carousel/slick/slick.css';
// import '~/slick-carousel/slick/slick-theme.css';

// import '~/index.css';

export default class HomeContent1 extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <div className="product">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div className="product-item">
                        <div className="product-image">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1635423759863-4ce5e848b8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                    <div className="product-item">
                        <div className="product-image">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1635423759863-4ce5e848b8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                    <div className="product-item">
                        <div className="product-image">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1635423759863-4ce5e848b8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                    <div className="product-item">
                        <div className="product-image">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1635423759863-4ce5e848b8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                    <div className="product-item">
                        <div className="product-image">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1635423759863-4ce5e848b8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
                </Slider>
            </div>
        );
    }
}
// function HomeContent() {
//     return (
//         <div id="content">
//             {/* HOT */}
//             <div className="product hot">
//                 <div className="product-video">
//                     {/* <iframe
//                         src={
//                             'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FTrangSucThietKe.KimJewelry%2Fvideos%2F466816561462024%2F&show_text=false&width=476&t=0'
//                         }
//                         width="476"
//                         height="476"
//                         style="border:none;overflow:hidden"
//                         scrolling="no"
//                         frameborder="0"
//                         allowfullscreen="true"
//                         data-autoplay="true"
//                         allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
//                         allowFullScreen="true"
//                     ></iframe> */}
//                 </div>
//                 <div className="product-show">
//                     <div className="product-header">
//                         <span className="product-heading">BÁN CHẠY NHẤT</span>
//                         <span href="" clspanssName="product-more">
//                             Xem thêm
//                         </span>
//                     </div>
//                     <Carousel
//                         arrows
//                         prevArrow={<ArrowLeftOutlined />}
//                         nextArrow={<ArrowRightOutlined />}
//                         effect="scrollx"
//                     >
//                         <div className="product-slider hot">
//                             <div className="product-item">
//                                 <div className="product-image">
//                                     <img src="./assets/img/products/sp1.jpg" alt="" />
//                                     <div className="product-description">
//                                         <span className="product-item-title">Product 1</span>
//                                         <span className="product-item-price">23.500.000đ</span>
//                                         <div className="product-status">
//                                             <span className="product-sold-counter">25</span>
//                                             <span className="status-label"> đã bán</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="product-item">
//                                 <div className="product-image">
//                                     <img src="./assets/img/products/sp2.jpg" alt="" />
//                                     <div className="product-description">
//                                         <span className="product-item-title">Product 2</span>
//                                         <span className="product-item-price">23.500.000đ</span>
//                                         <div className="product-status">
//                                             <span className="product-sold-counter">25</span>
//                                             <span className="status-label"> đã bán</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="product-item">
//                                 <div className="product-image">
//                                     <img src="./assets/img/products/sp6.jpg" alt="" />
//                                     <div className="product-description">
//                                         <span className="product-item-title">Product 3</span>
//                                         <span className="product-item-price">23.500.000đ</span>
//                                         <div className="product-status">
//                                             <span className="product-sold-counter">25</span>
//                                             <span className="status-label"> đã bán</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="product-item">
//                                 <div className="product-image">
//                                     <img src="./assets/img/products/sp4.jpg" alt="" />
//                                     <div className="product-description">
//                                         <span className="product-item-title">Product 4</span>
//                                         <span className="product-item-price">23.500.000đ</span>
//                                         <div className="product-status">
//                                             <span className="product-sold-counter">25</span>
//                                             <span className="status-label"> đã bán</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="product-item">
//                                 <div className="product-image">
//                                     <img src="./assets/img/products/sp5.jpg" alt="" />
//                                     <div className="product-description">
//                                         <span className="product-item-title">Product 5</span>
//                                         <span className="product-item-price">23.500.000đ</span>
//                                         <div className="product-status">
//                                             <span className="product-sold-counter">25</span>
//                                             <span className="status-label"> đã bán</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Carousel>
//                 </div>
//             </div>
//             {/* <!-- NEW --> */}
//             <div className="product new" data-aos="fade-up">
//                 <div className="product-header">
//                     <span className="product-heading">SẢN PHẨM MỚI NHẤT</span>
//                     <span href="" clspanssName="product-more">
//                         Xem thêm
//                     </span>
//                 </div>
//                 <div className="product-slider new">
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp1.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 1</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="image-new">
//                             <img
//                                 src="./assets/img/92-923830_minimalist-new-banner-new-sticker-png-removebg-preview.png"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp2.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 2</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="image-new">
//                             <img
//                                 src="./assets/img/92-923830_minimalist-new-banner-new-sticker-png-removebg-preview.png"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp6.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 3</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="image-new">
//                             <img
//                                 src="./assets/img/92-923830_minimalist-new-banner-new-sticker-png-removebg-preview.png"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp4.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 4</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="image-new">
//                             <img
//                                 src="./assets/img/92-923830_minimalist-new-banner-new-sticker-png-removebg-preview.png"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp5.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 5</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="image-new">
//                             <img
//                                 src="./assets/img/92-923830_minimalist-new-banner-new-sticker-png-removebg-preview.png"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- GEMSTONE --> */}
//             <div className="product gem">
//                 <div className="product-header">
//                     <span className="product-heading">TRANG SỨC ĐÁ QUÝ</span>
//                     <span href="" clspanssName="product-more">
//                         Xem thêm
//                     </span>
//                 </div>
//                 <div className="product-slider gem">
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp1.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 1</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp2.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 2</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp6.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 3</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp4.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 4</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp5.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 5</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- Feng shui stones --> */}
//             <div className="product fengshui">
//                 <div className="product-header">
//                     <span className="product-heading">TRANG SỨC PHONG THỦY</span>
//                     <span href="" clspanssName="product-more">
//                         Xem thêm
//                     </span>
//                 </div>
//                 <div className="product-slider fengshui">
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp1.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 1</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp2.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 2</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp6.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 3</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp4.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 4</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-item">
//                         <div className="product-image">
//                             <img src="./assets/img/products/sp5.jpg" alt="" />
//                             <div className="product-description">
//                                 <span className="product-item-title">Product 5</span>
//                                 <span className="product-item-price">23.500.000đ</span>
//                                 <div className="product-status">
//                                     <span className="product-sold-counter">25</span>
//                                     <span className="status-label"> đã bán</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomeContent;
