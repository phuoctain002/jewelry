import '~/admin/components/Content/Products/product.css';
import { Button, Image, message, Table, Form } from 'antd';
import Upload from 'antd/lib/upload/Upload';
import { AiOutlineUpload } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';

function Products() {
    const [data, setData] = useState([]);
    const [upStatus, setUpStatus] = useState(true);
    useEffect(() => {}, [data, upStatus]);

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const handleClickRadio = (selectedRows) => {
        console.log('selectedRows: ', selectedRows[0]);
    };

    //table
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
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
    };
    const columns = [
        {
            title: 'Image',
            dataIndex: 'url',
            render: (url) => (
                <Image
                    preview={{
                        objectFit: 'content',
                        height: '500',
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
                    DEL
                </Button>
            ),
        },
    ];

    const components = {
        body: {
            row: EditableRow,
        },
    };
    return (
        <div className="wrap-content-admin">
            <div className="heading-product-type">Chỉnh sửa sản phẩm</div>
            <div className="form">
                <div className="form-product-type">
                    <span className="input-label">Loại sản phẩm</span>
                    <input className="form-input" />
                </div>
            </div>
            <Upload
                maxCount={6}
                showUploadList={false}
                multiple={true}
                beforeUpload={(file) => {
                    const typeImg = ['image/png', 'image/jpeg', 'image/jpg'];
                    if (!typeImg.includes(file.type)) {
                        setUpStatus(false);
                        message.error(`${file.name} is not a png, jpeg file`);
                    } else if (typeImg.includes(file.type)) {
                        setUpStatus(true);
                    }
                    if (data.length === 6) {
                        message.error(`Chỉ chọn tối đa 6 hình`);
                    }
                    return typeImg.includes(file.type) ? true : Upload.LIST_IGNORE;
                }}
                onChange={(info) => {
                    // Up false thì không setData
                    if (upStatus) {
                        if (info.file.percent === 100) {
                            getBase64(info.file.originFileObj, (url) => {
                                setData((outData) => [...outData, { key: info.file.uid, url }]);
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
            {/* <img src={src} width="100" /> */}
            <Table
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
                dataSource={data}
            />
            <Button type="primary">Save</Button>
        </div>
    );
}

export default Products;
