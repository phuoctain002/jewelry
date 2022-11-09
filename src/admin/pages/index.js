import HeaderAdmin from '~/admin/components/Header';
import SidebarAdmin from '~/admin/components/Sidebar';
import ProductTypes from '~/admin/components/Content/ProductTypes';

import { Col, Row } from 'antd';
import React from 'react';
import Products from '../components/Content/Products';

function Admin() {
    return (
        <>
            <HeaderAdmin />
            <Row>
                <Col span={6}>
                    <SidebarAdmin />
                </Col>
                <Col span={18}>
                    <ProductTypes />
                    <Products />
                </Col>
            </Row>
        </>
    );
}

export default Admin;
