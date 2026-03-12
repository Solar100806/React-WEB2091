import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Form, Button, Input, Layout, Modal } from "antd";
import { useState } from "react";
import StudentTable from "./components/StudentTable";
import InfoTable from "./components/InfoTable";

const { Header, Content, Footer } = Layout;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log("Dữ liệu từ Form:", values);
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">WEB2091 App</Link>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-gray-200">Trang chủ</Link>
            <Link to="/add" className="hover:text-gray-200" onClick={() => setIsModalOpen(true)}>Thêm mới</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Layout className="bg-white p-6 shadow-lg rounded-xl">
          <Header className="bg-blue-500 text-white text-center text-lg rounded-t-xl">
            DANH SÁCH SINH VIÊN
          </Header>
          
          <Content style={{ padding: "24px 0" }}>
            <StudentTable />
          </Content>

          <Content style={{ padding: "24px 0" }}>
            <InfoTable />
          </Content>

          <Footer className="text-center text-gray-400">
            ©2026 - WEB2091 - FPT Polytechnic
          </Footer>
        </Layout>
      </div>

      <Modal 
        title="Thêm sinh viên mới" 
        open={isModalOpen} 
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Tên" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Chuyên ngành" name="major">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>Lưu</Button>
        </Form>
      </Modal>

      <Toaster />
    </div>
  );
}

export default App;