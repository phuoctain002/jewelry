import Iframe from 'react-iframe';

function Footer() {
    return (
        <>
            <div id="footer">
                <div class="about-shop">
                    <div class="logo-footer">
                        <img src="./assets/img/GOLD-removebg.png" alt="logo" />
                    </div>
                    <div class="footer-info">
                        <span class="copyright">© Công Ty TNHH Thương Mại Tư Vấn Đầu Tư Azuretime</span>
                        <span class="address">103 Đồng Khởi, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</span>
                        <div class="contact">
                            <span>ĐT: </span>
                            <a href="#">096 904 9035</a>
                            <span> - Fax: </span>
                            <a href="#">028 3995 1702</a>
                        </div>
                    </div>

                    <div class="socials">
                        <div class="socials-heading">KẾT NỐI VỚI CHÚNG TÔI</div>
                        <div class="socials-image">
                            <img
                                class="img-lazyload"
                                data-src=""
                                alt="Facebook"
                                width="40px"
                                src="https://cdn.pnj.io/images/image-update/footer/facebook.svg"
                                style={{ opacity: 1 }}
                            />
                            <img
                                class="img-lazyload"
                                data-src=""
                                alt="Instagram"
                                width="40px"
                                src="https://cdn.pnj.io/images/image-update/footer/instagram.svg"
                                style={{ opacity: 1 }}
                            />
                            <img
                                class="img-lazyload"
                                data-src=""
                                alt="Youtube"
                                width="40px"
                                src="https://cdn.pnj.io/images/image-update/footer/youtube.svg"
                                style={{ opacity: 1 }}
                            />
                            <img
                                class="img-lazyload"
                                data-src=""
                                alt="Email"
                                width="40px"
                                src="https://cdn.pnj.io/images/image-update/footer/email.svg"
                                style={{ opacity: 1 }}
                            />
                        </div>
                    </div>
                </div>
                <div class="footer-mid">
                    <div class="payment">
                        <div class="payment-heading">PHƯƠNG THỨC THANH TOÁN</div>
                        <ul class="footer__payment-link">
                            <li class="footer__payment-item">
                                <div class="footer__payment-visa"></div>
                            </li>
                            <li class="footer__payment-item">
                                <div class="footer__payment-master"></div>
                            </li>
                            <li class="footer__payment-item">
                                <div class="footer__payment-jbc"></div>
                            </li>
                            <li class="footer__payment-item">
                                <div class="footer__payment-amex"></div>
                            </li>
                            <li class="footer__payment-item">
                                <div class="footer__payment-cod"></div>
                            </li>
                            <li class="footer__payment-item">
                                <div class="footer__payment-installment"></div>
                            </li>
                            <li class="footer__payment-item">
                                <div class="footer__payment-shopeepay"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="location">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4738143729783!2d106.70180231412763!3d10.774976262168439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46f3f6fa81%3A0xbd8152000604b486!2zMTAzIMSQ4buTbmcgS2jhu59pLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1665130676579!5m2!1svi!2s"
                        width="450"
                        height="300"
                        frameBorder="0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></Iframe>
                </div>
            </div>
        </>
    );
}

export default Footer;
