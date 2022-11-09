import { AiOutlineGold } from 'react-icons/ai';
import { CgRing } from 'react-icons/cg';
import { BsCardImage } from 'react-icons/bs';
import { TfiLayoutSlider } from 'react-icons/tfi';
import '~/admin/components/Sidebar/sidebar.css';
function SidebarAdmin() {
    return (
        <>
            <div className="sidebar">
                <div className="company-name">
                    <span className="company-name-label">KIM JEWELRY</span>
                </div>
                <div className="function">
                    <div className="product-type-btn">
                        <AiOutlineGold />
                        <span className="product-type-label"></span>
                    </div>
                    <div className="product-btn">
                        <CgRing />
                        <span className="product-label"></span>
                    </div>
                    <div className="library-btn">
                        <BsCardImage />
                        <span className="library-label"></span>
                    </div>
                    <div className="slider-btn">
                        <TfiLayoutSlider />
                        <span className="slider-label"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarAdmin;
