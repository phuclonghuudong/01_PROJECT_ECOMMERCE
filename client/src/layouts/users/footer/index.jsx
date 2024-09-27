import React from "react";
import { Row, Col } from "antd";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" style={{ bottom: "0" }}>
      {/* position: "fixed", */}
      <Row style={{ padding: "20px 10px 10px 10px" }}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "10px" }}>
          <p className="title-footer">Thông tin chung</p>
          <div className="des_foo">
            <p>
              <b>VNB Sports</b> là hệ thống cửa hàng cầu lông với hơn 50 chi nhánh trên toàn quốc, cung cấp sỉ và lẻ các
              mặt hàng dụng cụ cầu lông từ phong trào tới chuyên nghiệp
            </p>
            <p>
              <b>Với sứ mệnh:</b>{" "}
              <em>
                "VNB cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho người chơi thể thao để
                nâng cao sức khỏe của chính mình."
              </em>
            </p>
            <p>
              <b>Tầm nhìn:</b> <em>"Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam"</em>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "10px" }}>
          <p className="title-footer">Thông tin liên hệ</p>
          <div className="list-foo">
            <p>
              <b>Hệ thống cửa hàng:</b> <em>5 shop Premium và 63 cửa hàng</em> trên toàn quốc
            </p>
          </div>
          <div className="list-foo">
            <em>Xem tất cả các cửa hàng</em>
          </div>
          <div className="list-foo">
            <p>
              <b>Hotline:</b> <em>0347781024 || 0763036308</em>
            </p>
          </div>
          <div className="list-foo">
            <p>
              <b>Email:</b> <em>phucpham.241099@gmail.com</em>
            </p>
          </div>
          <div className="list-foo">
            <p style={{ fontSize: "30px" }}>
              <FaFacebookSquare className="button-header" style={{ marginRight: "10px" }} />
              <FaYoutube className="button-header" />
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "10px" }}>
          <p className="title-footer">Chính sách</p>
          <div className="des_foo">
            <p>Chính sách đổi trả, hoàn tiền</p>
            <p>Chính sách bảo hành</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ padding: "10px" }}>
          <p className="title-footer">Hướng dẫn</p>
          <div className="des_foo">
            <p>Tìm hiểu công việc tập huấn tennis trước khi tổ chức giải dấu</p>
            <p>Hướng dẫn cách chọn vợt cầu lông cho người mới chơi</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
