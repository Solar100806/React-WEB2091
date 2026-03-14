import React from 'react';
import { Form, Input, InputNumber, Button, Card } from 'antd';

const ProductForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Console log dữ liệu theo yêu cầu
    console.log('Product Data:', values);
    form.resetFields(); // Xóa sạch form sau khi submit
  };

  return (
    <Card title="Bài 3: Thêm Sản Phẩm" style={{ maxWidth: 600, margin: '20px auto' }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Tên sản phẩm" name="productName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Giá" name="price">
          <InputNumber style={{ width: '100%' }} formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} />
        </Form.Item>

        <Form.Item label="Số lượng" name="quantity">
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductForm;