import '~/admin/components/Content/Products/product.css';
import {
    Button,
    Image,
    message,
    Table,
    Form,
    Select,
    Input,
    InputNumber,
    Col,
    Row,
    Slider,
    Alert,
    notification,
} from 'antd';
import Upload from 'antd/lib/upload/Upload';
import { AiOutlineUpload } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { storage } from '~/configFireBase';
import axios from 'axios';
import { url } from '~/api/url';
import { urnImageByProductId, urnProduct, urnProductTypes } from '~/api/urn';

function Products() {
    const { TextArea } = Input;

    // SP: Save IMG PRODUCT
    const [dataSubmitImgFir, setDataSubmitImgFir] = useState([]);
    const [upStatus, setUpStatus] = useState(true);
    const [avaId, setAvaId] = useState(null);
    // const [imageFail, setImageFail] = useState([]);

    // SP: PRODUCT
    const [dataPType, setDataPType] = useState([]);
    const [product, setProduct] = useState({ status: 1, percentDiscount: 0 });
    const [visibleDiscount, setVisibleDiscount] = useState(false);

    useEffect(() => {
        axios.get(url + urnProductTypes).then((res) => {
            setDataPType(res.data);
        });
    }, []);

    //product type
    const handleSelect = (value) => {
        setProduct({ ...product, productTypeId: value });
    };

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    //#region ---TABLE---
    const EditableContext = React.createContext(null);
    const EditableRow = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };
    // handelDelete image
    const handleDelete = (key) => {
        const newData = dataSubmitImgFir.filter((item) => item.key !== key);
        setDataSubmitImgFir(newData);
    };
    const columns = [
        {
            title: 'TT',
            width: '50',
            dataIndex: 'id=1',
            render: (id, record, index) => {
                ++index;
                return index;
            },
        },
        {
            title: 'Image',
            dataIndex: 'url',
            render: (url) => (
                <Image
                    preview={{
                        objectFit: 'content',
                        height: '100px',
                        display: 'inline',
                        verticalAlign: 'middle',
                    }}
                    width={200}
                    src={url}
                />
            ),
        },
        {
            title: 'Action',
            // render: () => <Button danger>DEL</Button>,
            render: (_, record) => (
                <Button danger onClick={() => handleDelete(record.key)}>
                    Delete
                </Button>
            ),
        },
    ];

    const components = {
        body: {
            row: EditableRow,
        },
    };

    const handleClickRadio = (selectedRows) => {
        setAvaId(selectedRows[0].file.uid);
        console.log('selectedRows: ', selectedRows[0].file.uid);
    };
    //#endregion

    const handleSubmitImage = (dataSubmitImgBe, imageFail) => {
        // axios.post(url + urnImageByProductId, dataSubmitImgBe).catch((err) => {
        //     imageFail.push({
        //         name: dataSubmitImgBe.fileName,
        //         urlFir: dataSubmitImgBe.name,
        //     });
        //     // var a = .name.join(' ,');
        //     console.log('aaaa', imageFail);
        //     // notification.warning({
        //     //     message: `???? th??m s???n ph???m`,
        //     //     description: 'C?? l???i khi th??m ???nh ' + dataSubmitImgBe.fileName,
        //     //     duration: 30,
        //     // });
        // });
        // console.log('SO 1', imageFail);
        // console.log(dataSubmitImgBe);
    };

    const isValidator = () => {
        // if()
        return true;
    };

    const handleSubmit = async () => {
        if (isValidator) {
            let imageFail = [];
            let dataSubmitImgBe = [];

            //#region ---How to catch error: resultSuccess vs resultFail---
            // Tuy th???t ch???t c?? b???n dataSubmitImgFir.map ko c?? b??? b???t ?????ng b???,
            // nh??ng trong TH n??y l???i sd k??m vs fir d???n ?????n
            // khi ch???y th?? c??c h??nh ???nh s??? ch???y c??ng l??c,
            // n???u ??i???m x??t: th??? t??? ch??nh n?? v?? sl dataSubmitImgFir
            // th?? k???t qu??? ??i???m x??t s??? ko ????ng ch??nh x??c n???u h??nh cu???i (ko nh???t ?????nh: cu???i) ??c k???t th??c trc
            //
            // S?? ?????:
            // kq    sl img: 4;            var
            // then  img1 -------->        +1 resultSuccess
            // catch img2 ---->            +1 resultFail
            // then  img3 ------------>    +1 resultSuccess
            // catch img4 -->              +1 resultFail
            //
            // Th??? t??? x???y ra: async
            //      TH sd resS, resF v?? so s??nh vs dataSubmitImgFir
            // img4 resS + resF = 1 != 4 -> ch??a s???n s??ng hi???n th??ng b??o, x??? l??
            // img2 resS + resF = 2 != 4 -> ch??a s???n s??ng hi???n th??ng b??o, x??? l??
            // img1 resS + resF = 3 != 4 -> ch??a s???n s??ng hi???n th??ng b??o, x??? l??
            // img3 resS + resF = 4 == 4 -> s???n s??ng hi???n th??ng b??o, x??? l??
            //#endregion
            let resultSuccess = 0;
            let resultFail = 0;

            if (dataSubmitImgFir.length > 0) {
                if (avaId === null) {
                    notification.warning({
                        message: `Ch??a ch???n ???nh ?????i di???n cho s???n ph???m`,
                        duration: 10,
                    });
                } else {
                    await axios
                        .post(url + urnProduct, product)
                        .then((res) => {
                            if (res.data) {
                                const productId = res.data;
                                dataSubmitImgFir.map(async (item, index) => {
                                    var newNameFile = Date.now() + '_' + item.file.name;
                                    var child = newNameFile;
                                    const uploadTask = storage.ref(`Product-Image`).child(child).put(item.file);

                                    await uploadTask.on(
                                        'state_changed',
                                        (snapshot) => {},
                                        (error) => {
                                            console.log(error);
                                        },
                                        async () => {
                                            await storage
                                                .ref(`Product-Image`)
                                                .child(child)
                                                .getDownloadURL()
                                                .then((uriImage) => {
                                                    dataSubmitImgBe = {
                                                        fileName: item.file.name,
                                                        name: uriImage,
                                                        isAvatar: item.file.uid === avaId,
                                                        productId,
                                                    };
                                                    return dataSubmitImgBe;
                                                })
                                                .then((dataSubmitImgBe) => {
                                                    axios
                                                        .post(url + urnImageByProductId, dataSubmitImgBe)
                                                        .then((result) => {
                                                            resultSuccess += 1;
                                                            if (resultSuccess === dataSubmitImgFir.length - 1) {
                                                                notification.success({
                                                                    message: `Th??m s???n ph???m th??nh c??ng`,
                                                                    duration: 4,
                                                                });
                                                            }
                                                        })
                                                        .catch((err) => {
                                                            resultFail += 1;
                                                            imageFail.push({
                                                                name: dataSubmitImgBe.fileName,
                                                                urlFir: dataSubmitImgBe.name,
                                                            });

                                                            if (
                                                                resultFail + resultSuccess ===
                                                                dataSubmitImgFir.length
                                                            ) {
                                                                // console.log('resultSuccess', resultSuccess);
                                                                // console.log('resultFail', resultFail);
                                                                // console.log('dataSubmitImgFir', dataSubmitImgFir.length);

                                                                const pluck = (key, array) =>
                                                                    array.reduce((values, current) => {
                                                                        values.push(current[key]);

                                                                        return values;
                                                                    }, []);

                                                                var result = pluck('name', imageFail).join(', ');
                                                                console.log('SO 2', pluck('name', imageFail));
                                                                notification.warning({
                                                                    message: `???? th??m s???n ph???m`,
                                                                    description: 'C?? l???i khi th??m ???nh ' + result,
                                                                    duration: 10,
                                                                });
                                                            }
                                                        });
                                                    // return imageFail;
                                                });
                                        },
                                    );
                                });
                            }

                            // return imageFail;
                        })
                        // .then(async (imageFail) => {
                        //     // var result = imageFail.map((item) => item.name);
                        //     await console.log('SO 2', imageFail);
                        //     // handleSubmitImage(dataSubmitImgBe).catch((err) => {
                        //     //     notification.warning({
                        //     //         message: `???? th??m s???n ph???m`,
                        //     //         description: 'C?? l???i khi th??m ???nh ' + dataSubmitImgBe.fileName,
                        //     //         duration: 30,
                        //     //     });
                        //     // });
                        // })
                        .catch((err) => {
                            throw err;
                        });

                    // Promise.all(
                    //     dataSubmitImgBe.map((item) => {
                    //         handleSubmitImage(item).catch((err) => {
                    //             imageFail.push({ name: item.fileName, urlFir: item.name });
                    //         });
                    //     }),
                    // ).then((arrayOfResults) => {
                    //     var a = imageFail.join(', ');
                    //     console.log(arrayOfResults);
                    //     notification.warning({
                    //         message: `???? th??m s???n ph???m`,
                    //         description: 'C?? l???i khi th??m ???nh' + a.toString(),
                    //         duration: 30,
                    //     });
                    // });
                }
            } else {
                notification.warning({
                    message: `Ch??a ch???n h??nh ???nh cho s???n ph???m`,
                    duration: 0,
                });
            }
        }
    };

    const ResetData = () => {};

    // console.log(product);

    return (
        <div className="wrap-content-admin">
            <div className="heading-product-type">
                <h1>Ch???nh s???a s???n ph???m</h1>
            </div>
            <Row>
                <Col span={12}>
                    <div className="form">
                        <label className="input-label">T??n s???n ph???m</label>
                        <Input
                            type="text"
                            className="form-input"
                            placeholder="-- Nh???p t??n s???n ph???m"
                            onBlur={(e) => setProduct({ ...product, name: e.target.value })}
                        />
                        <label className="input-label">Lo???i s???n ph???m</label>
                        <Select
                            className="form-input select"
                            placeholder="-- Lo???i s???n ph???m"
                            optionFilterProp="children"
                            onChange={handleSelect}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            {dataPType &&
                                dataPType.map((values, index) => (
                                    <Select.Option key={index} value={values.productTypeId}>
                                        {values.name}
                                    </Select.Option>
                                ))}
                        </Select>
                        <label className="input-label">M?? t??? s???n ph???m</label>
                        <TextArea
                            type="textArea"
                            className="form-input"
                            rows={3}
                            placeholder="-- M?? t??? s???n ph???m"
                            onBlur={(e) => setProduct({ ...product, description: e.target.value })}
                        />
                        <label className="input-label">??i???m n???i b???t</label>
                        <Input
                            type="text"
                            className="form-input"
                            placeholder="-- ??i???m n???i b???t (n???u c??)"
                            onBlur={(e) => setProduct({ ...product, special: e.target.value })}
                        />
                        <label className="input-label">Gi??</label>
                        <InputNumber
                            className="form-input"
                            min={1}
                            max={1000000000}
                            type="number"
                            defaultValue={0}
                            placeholder="-- Nh???p gi?? s???n ph???m"
                            onBlur={(e) => {
                                setProduct({ ...product, price: e.target.value });
                                setVisibleDiscount(e.target.value !== 0);
                            }}
                        />
                        {visibleDiscount ? (
                            <Row>
                                <Col span={4}>Discount {product.percentDiscount}%</Col>
                                <Col span={20}>
                                    <Slider
                                        defaultValue={0}
                                        onChange={(e) =>
                                            setProduct({
                                                ...product,
                                                percentDiscount: e,
                                                discountPrice: (product.price * e) / 100,
                                            })
                                        }
                                    />
                                </Col>
                            </Row>
                        ) : (
                            <div style={{ height: '36px' }}></div>
                        )}
                    </div>
                </Col>
                <Col span={12}>
                    <label className="input-label input-label-image">
                        ???nh s???n ph???m{' '}
                        <label style={{ fontWeight: 'normal', fontSize: 14, color: '#000', opacity: 0.8 }}>
                            (*B???m v??o ?? tr??n ????? ch???n ???nh ?????i di???n cho s???n ph???m){' '}
                        </label>
                    </label>
                    <Table
                        pagination={false}
                        scroll={{ y: 300 }}
                        lineHeight="30"
                        tableLayout="-"
                        className="table"
                        components={components}
                        rowClassName={() => 'editable-row'}
                        rowSelection={{
                            type: 'radio',
                            onChange: (selectedRowKeys, selectedRows) => handleClickRadio(selectedRows),
                        }}
                        bordered
                        columns={columns}
                        dataSource={dataSubmitImgFir}
                    />
                </Col>
            </Row>
            <Row className="row-bottom">
                <Col span={12}>
                    <Button type="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Col>
                <Col span={12}>
                    <Upload
                        showUploadList={false}
                        multiple={true}
                        beforeUpload={(file) => {
                            const typeImg = ['image/png', 'image/jpeg', 'image/jpg'];
                            if (!typeImg.includes(file.type)) {
                                setUpStatus(false);
                                notification.error({
                                    message: `"${file.name}" is not a png, jpeg file`,
                                    duration: 5,
                                });
                            } else if (typeImg.includes(file.type)) {
                                setUpStatus(true);
                            }
                            if (dataSubmitImgFir.length === 6) {
                                notification.error({
                                    message: `Ch??? ch???n t???i ??a 6 h??nh`,
                                    duration: 5,
                                });
                            }
                            return typeImg.includes(file.type) ? true : Upload.LIST_IGNORE;
                        }}
                        onChange={(info) => {
                            // Up false th?? kh??ng setData
                            if (upStatus) {
                                if (info.file.percent === 100) {
                                    getBase64(info.file.originFileObj, (url) => {
                                        setDataSubmitImgFir((oldData) => [
                                            ...oldData,
                                            { key: info.file.uid, url, file: info.file.originFileObj },
                                        ]);
                                    });
                                }
                            }
                        }}
                    >
                        <Button style={{ width: '225px' }} icon={<AiOutlineUpload style={{ fontSize: '20px' }} />}>
                            {' '}
                            <span
                                style={{
                                    lineHeight: '25px',
                                    fontSize: '15px',
                                    position: 'relative',
                                    top: '-3px',
                                    paddingLeft: '5px',
                                }}
                            >
                                Upload image
                            </span>
                        </Button>
                    </Upload>
                </Col>
            </Row>
        </div>
    );
}

export default Products;
