import React, { useState, useEffect } from 'react';
import { url } from '~/api/url';
import { getData } from '~/api/api.js';
import { urnProductTypes } from '~/api/urn.js';
import Slider from 'react-slick';
import 'antd/dist/antd.css';
import ContentSlider from './content-slider';

function HomeContent() {
    const [productTypes, setproductTypes] = useState([]);
    useEffect(() => {
        var uri = url + urnProductTypes;
        getData(uri).then((res) => {
            setproductTypes(res.data);
        });
    }, []);

    return (
        <>
            {productTypes.map((item, index) => {
                return <ContentSlider name={item.name} productTypeId={item.productTypeId} />;
            })}
        </>
    );
}

export default HomeContent;
