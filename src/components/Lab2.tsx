import { Button, Card, Form, Input } from "antd";

function Lab2() {
  const onFinish = (value: any) => {
    console.log(value);
  };

  return (
    <Card
      title="Đăng nhập"
      style={{ maxWidth: 400, margin: "20px auto" }}
    >
      <Form name="login" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Lab2;
