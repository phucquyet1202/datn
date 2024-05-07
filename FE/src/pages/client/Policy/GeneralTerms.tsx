import { Container } from "../../../components";

const GeneralTerms = () => {
  const url = "http://localhost:5173/";

  return (
    <div className="p-10">
      <Container>
        <h1 className="text-center text-3xl font-semibold text-textLight dark:text-textDark">
          ĐIỀU KHOẢN CHUNG
        </h1>

        <hr className="my-6 border-divideLight sm:mx-auto dark:border-divideDark lg:my-8" />

        <div className="d-content-news text-textLight dark:text-textDark2nd">
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "0in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            Điều Khoản Chung&nbsp;<strong>(“ĐKC”)</strong>&nbsp;này áp dụng cho
            các Khách và Đối Tác sử dụng hoặc đặt dịch vụ tại khách sạn
            MeliaHanoi, và các thương hiệu khác thuộc quyền sở hữu, quản lý
            và/hoặc khai thác của MeliaHanoi (nếu có) trong tương lai{" "}
            <strong>(“Khách Sạn”)</strong>. Khách/ Đối tác và MeliaHanoi được
            gọi riêng là <strong>“Bên” </strong>
            và gọi chung là <strong>“Các Bên”</strong>.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "0in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            Khách/ Đối tác đồng ý và thừa nhận rằng bằng việc gửi cho Khách Sạn
            yêu cầu đặt phòng, yêu cầu sự kiện và/hoặc các dịch vụ&nbsp;bổ
            sung&nbsp; (gọi chung là “Yêu Cầu Dịch Vụ”) và được MeliaHanoi xác
            nhận&nbsp;dịch vụ&nbsp;là Khách và Đối Tác đã đọc và chấp
            nhận&nbsp;ĐKC, Quy Định Chung
            <strong>&nbsp;(“QĐC”)&nbsp;</strong>và những thay đổi&nbsp;ĐKC,
            QĐC&nbsp;tại từng thời điểm được đăng tải trên Trang Web chính thức
            của MeliaHanoi tại địa chỉ&nbsp;
            <a
              href={url}
              style={{
                color: "#0563c1",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>
            &nbsp;<strong>(“Trang Web”)</strong> cũng như các chính sách cung
            cấp dịch vụ, báo giá dịch vụ được MeliaHanoi thông báo, cung cấp.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "0in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            ĐKC&nbsp;là một phần không thể tách rời của hợp đồng, thỏa thuận
            cung cấp, sử dụng dịch vụ hoặc Yêu Cầu Dịch Vụ được xác nhận giữa
            MeliaHanoi và Khách /Đối Tác <strong>(“Hợp Đồng”)</strong>.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "0in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            <strong>
              Điều 1. Định nghĩa chung về dịch vụ phòng nghỉ, Doanh nghiệp,
              Khách, các thuật ngữ sử dụng trong thỏa thuận về giao dịch giữa
              Khách và doanh nghiệp
            </strong>
          </p>
          <ol className="ml-10">
            <li
              style={{
                listStyleType: "none",
              }}
            >
              <ol
                style={{
                  listStyleType: "lower-alpha",
                }}
              >
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“MeliaHanoi” </strong>có nghĩa là Công ty cổ phần Tập
                  đoàn MeliaHanoi, các công&nbsp;ty&nbsp;liên kết của Công ty cổ
                  phần Tập đoàn MeliaHanoi và các chi nhánh, văn phòng đại diện,
                  địa điểm kinh doanh của Công ty cổ phần Tập đoàn MeliaHanoi
                  và&nbsp;các công&nbsp;ty&nbsp;liên kết của Công ty cổ phần Tập
                  đoàn MeliaHanoi được thành lập trên toàn quốc tại từng thời
                  điểm.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Đối Tác”</strong> là đại lý du lịch/hãng lữ
                  hành/doanh nghiệp/tổ chức, cá nhân giao kết Hợp Đồng với
                  MeliaHanoi.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Khách”</strong> là cá nhân sử dụng dịch vụ của
                  MeliaHanoi với mục đích tiêu dùng trực tiếp, không dùng để bán
                  lại cho cá nhân, tổ chức khác.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“A” </strong>được hiểu là Người lớn.{" "}
                  <strong>“C”</strong> được hiểu là Trẻ em.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  &nbsp;<strong>“Giá Công Bố”</strong>&nbsp;là giá phòng, giá
                  dịch vụ được niêm yết tại Khách Sạn và tại website của
                  MeliaHanoi&nbsp;
                  <a
                    href={url}
                    style={{
                      color: "#0563c1",
                      textDecoration: "underline",
                    }}
                  >
                    {url}
                  </a>
                  . Giá phòng có thể thay đổi từng ngày.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Giá Gói Phòng”</strong> là giá dành cho đêm nghỉ kèm
                  theo các dịch vụ được liệt kê trong Gói Phòng tương ứng.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Dịch Vụ”</strong> bao gồm dịch vụ lưu trú, tiệc sự
                  kiện, hoặc dịch vụ bổ sung khác mà MeliaHanoi cung
                  cấp&nbsp;tại từng thời điểm như&nbsp;vận chuyển, bữa ăn, dịch
                  vụ vui chơi giải trí…
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Ngày Làm Việc”</strong>&nbsp;là ngày từ thứ 2 đến thứ
                  6 hàng tuần, trừ ngày nghỉ, ngày lễ theo quy định pháp luật.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“No-Show”</strong>&nbsp;là trường hợp Khách không đến
                  nhận phòng cho đến 23 giờ 59 phút ngày nhận phòng hoặc thời
                  điểm khác trong thời gian lưu trú theo thông báo của Khách/
                  Đối tác và MeliaHanoi sẽ trả phòng về quỹ phòng trống để bán
                  sau thời hạn này mà không cần thông báo cho Khách/ Đối tác nếu
                  Khách không có mặt và làm thủ tục nhận phòng.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“QĐC”</strong> là các quy định mà Khách cần phải tuân
                  thủ trong thời gian lưu trú và sử dụng Dịch Vụ tại Khách Sạn
                  và có thể được sửa đổi, bổ sung theo quyết định của MeliaHanoi
                  tại từng thời điểm và đăng tải trên Trang Web của MeliaHanoi.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Tổng Giá” </strong>bao gồm tổng Giá Gói Phòng cho
                  toàn bộ thời gian lưu trú và các dịch vụ bổ sung khác ngoài
                  các dịch vụ liệt kê trong Gói Phòng.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Voucher”</strong> là thẻ/phiếu mua Dịch Vụ trả tiền
                  trước tồn tại dưới dạng vật lý hoặc dữ liệu điện tử do
                  MeliaHanoi phát hành để ghi nhận quyền sử dụng Gói Phòng cho
                  người sở hữu Voucher. Việc sử dụng Voucher phải tuân
                  thủ&nbsp;QĐC, ĐKC&nbsp;và quy định chi tiết tại mỗi Voucher.
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Trang Web” </strong>là website chính thức của
                  MeliaHanoi tại địa chỉ&nbsp;
                  <a
                    href={url}
                    style={{
                      color: "#0563c1",
                      textDecoration: "underline",
                    }}
                  >
                    {url}
                  </a>
                </li>
                <li
                  style={{
                    marginTop: "6.0pt",
                    marginRight: "0in",
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    margin: "0in 0in 10pt",
                  }}
                >
                  <strong>“Cổng thanh toán” </strong>là hệ thống thanh toán trực
                  tiếp của website{" "}
                  <a
                    href={url}
                    style={{
                      color: "#0563c1",
                      textDecoration: "underline",
                    }}
                  >
                    {url}
                  </a>
                  , qua đó Khách/ Đối tác có thể thực hiện thanh toán cho các
                  phòng và dịch vụ đã lựa chọn trên Trang Web.
                </li>
              </ol>
            </li>
          </ol>
          <p
            style={{
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            <strong>
              Điều 2. Quy định về voucher và sử dụng Voucher (nếu có sử dụng)
            </strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: ".5in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            Trừ khi có thỏa thuận khác hoặc MeliaHanoi có chính sách khác, Khách
            sử dụng Voucher phải tuân thủ các quy định tại&nbsp;ĐKC, QĐC, các
            điều kiện khác quy định trên Voucher và/hoặc chính sách cung cấp
            Dịch Vụ tương ứng với loại Voucher được MeliaHanoi phát hành tại
            thời điểm mà Khách sử dụng.&nbsp;Voucher gốc phải được xuất trình và
            thu hồi tại thời điểm nhận phòng, trong trường hợp không xuất trình
            được Voucher đủ điều kiện sử dụng thì Khách phải thanh toán trực
            tiếp theo Giá Công Bố tại thời điểm nhận phòng. Voucher không có giá
            trị quy đổi sang tiền mặt hoặc các dịch vụ khác và chỉ được sử dụng
            1 lần không hoàn lại. Không trả lại tiền thừa nếu không dùng hết giá
            trị Voucher. Voucher không được áp dụng đồng thời cùng các chương
            trình khuyến mãi khác &amp; không được sử dụng để tích điểm vào thẻ
            hội viên. Voucher khi sử dụng phải còn nguyên vẹn, không tẩy xóa
            hoặc rách rời chắp vá. Voucher không được phát hành đổi trong trường
            hợp bị mất hoặc hư hỏng. Áp dụng 01 Voucher/01 hóa đơn. Voucher
            không có giá trị quy đổi thành tiền mặt hoặc Voucher có giá trị nhỏ
            hơn. Nếu giá trị dịch vụ nhỏ hơn giá trị Voucher, Khách không được
            hoàn lại khoản tiền dư.
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            <strong>Điều 3. Quy định về nhận và trả phòng</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "35.45pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            Trừ khi có thông báo và/hoặc xác nhận khác từ Khách Sạn, quy định
            về&nbsp;nhận và trả phòng&nbsp;được áp dụng&nbsp;như sau:
          </p>
          <table
            border={1}
            className="MsoTableGrid"
            style={{
              borderCollapse: "collapse",
              border: "1.0pt solid text",
              marginLeft: "40.85pt",
            }}
          >
            <tbody>
              <tr>
                <td
                  className="border-[1px] w-[278.35pt] border-divideLight dark:border-divideDark"
                  colSpan={2}
                  style={{
                    padding: "0in 5.4pt",
                  }}
                  width="371"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "center",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    <strong>Chính sách</strong>
                  </p>
                </td>
                <td
                  rowSpan={2}
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "159.6pt",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="213"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "center",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    <strong>Phụ thu</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "134.65pt",
                    borderTop: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="180"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "center",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    <strong>Nhận phòng sớm</strong>
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    width: "143.7pt",
                    borderWidth: "1px",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="192"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "center",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    <strong>Trả phòng muộn</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "134.65pt",
                    borderTop: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="180"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Trước 6:00 giờ
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "143.7pt",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="192"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Sau 18:00 giờ
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "159.6pt",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="213"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Phụ thu 01 đêm tiền phòng
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "134.65pt",
                    borderTop: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="180"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Từ 6:00 giờ tới trước 9:00 giờ
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "143.7pt",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="192"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Từ 15:00 giờ tới trước 18:00 giờ
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "159.6pt",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="213"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Phụ thu 50% phí của 01 đêm tiền phòng
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "134.65pt",
                    borderTop: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="180"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Từ 9:00 giờ tới trước 14:00 giờ
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "143.7pt",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="192"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Từ 12:00 giờ tới trước 15:00 giờ
                  </p>
                </td>
                <td
                  className="border-divideLight dark:border-divideDark"
                  style={{
                    borderWidth: "1px",
                    width: "159.6pt",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="213"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "justify",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Phụ thu 30% phí của 01 đêm tiền phòng
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  className="border-divideLight dark:border-divideDark"
                  colSpan={3}
                  style={{
                    borderWidth: "1px",
                    width: "437.95pt",
                    borderTop: "none",
                    padding: "0in 5.4pt",
                  }}
                  width="584"
                >
                  <p
                    style={{
                      marginTop: "6.0pt",
                      marginRight: "0in",
                      marginBottom: "6.0pt",
                      marginLeft: "0in",
                      textAlign: "center",
                      margin: "0in 0in 10pt",
                    }}
                  >
                    Tùy thuộc vào tình trạng phòng sẵn có và xác nhận đồng ý của
                    Khách sạn.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "35.45pt",
              textAlign: "justify",
            }}
          >
            Các khoản phí nhận phòng sớm/trả phòng muộn nêu trên sẽ được tính
            theo Giá Công Bố của Khách sạn&nbsp;(bao gồm giá chương trình khuyến
            mại nếu đang áp dụng tại thời điểm thanh toán)&nbsp;khi Khách trực
            tiếp thanh toán cho Khách sạn.
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            <strong>Điều 4. Chính sách đặt phòng và nhận phòng</strong>
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            4.1. Tất cả các Yêu Cầu Dịch Vụ của Khách/ Đối Tác phải được gửi cho
            MeliaHanoi dưới hình thức qua yêu cầu từ Trang Web{" "}
            <a
              href={url}
              style={{
                color: "#0563c1",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>
            , qua email hoặc văn bản trước khi Khách làm thủ tục nhận phòng.
            MeliaHanoi sẽ xác nhận đặt phòng/ dịch vụ được gửi qua email đăng ký
            của Khách hàng.
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            4.2. Quy định về lưu trú: Số lượng Khách tối đa trên một phòng Khách
            Sạn&nbsp;(ngoại trừ các trường hợp đặc biệt được nói rõ)&nbsp;được
            áp dụng như sau:
          </p>
          <ul>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Tối đa 04 người trong 01 phòng ngủ bao gồm cả trẻ em dưới 12 tuổi:
              03A &amp; 01C hoặc 02A &amp; 02C.
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Mỗi phòng chỉ được đặt thêm 01 giường phụ tùy theo chính sách áp
              dụng tại từng Khách sạn.
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Áp dụng phụ thu trẻ em từ 06&nbsp;tuổi đến&nbsp;dưới 12 tuổi và
              phụ thu người lớn dành cho khách từ 12 tuổi
            </li>
          </ul>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            &nbsp;4.3. Trường hợp đặc biệt:&nbsp;Trong một số trường hợp đặc
            biệt (bao gồm nhưng không giới hạn: sự kiện bất khả kháng, hoạt động
            nâng cấp, sửa chữa Khách Sạn v.v...), MeliaHanoi có quyền di dời
            Khách sang loại phòng/ Khách Sạn khác có tiêu chuẩn tương đương loại
            phòng/ Khách Sạn mà Khách/ Đối Tác đã đặt và được MeliaHanoi xác
            nhận.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            4.4. Thông tin cung cấp cho Khách sạn trước ngày đến: Để Khách nhận
            được chất lượng dịch vụ tốt nhất từ Khách Sạn và đảm bảo an ninh cho
            Khách, Khách/ Đối Tác cần cung cấp cho bộ phận đặt phòng của Khách
            Sạn:
          </p>
          <ul>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Thông tin chuyến bay và thời gian tới Khách Sạn dự kiến cần được
              cung cấp cho Khách Sạn ít nhất 05 ngày trước ngày Khách đến trong
              trường hợp Khách yêu cầu dịch vụ đón, tiễn.
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Nếu Khách/ Đối Tác không cung cấp thông tin đúng hạn, MeliaHanoi
              có quyền hủy đặt phòng khỏi hệ thống, từ chối áp dụng giá ưu đãi
              theo Voucher, xác nhận Yêu Cầu Dịch Vụ, thỏa thuận, hợp đồng đã ký
              kết giữa Khách/ Đối Tác và MeliaHanoi. Trong trường hợp đó,
              MeliaHanoi sẽ áp dụng Giá Công Bố tại Khách Sạn vào ngày Khách làm
              thủ tục nhận phòng nếu còn phòng trống, và Đối Tác sẽ chịu hoàn
              toàn trách nhiệm giải quyết các khiếu nại của Khách phát sinh do
              việc cung cấp thông tin muộn.
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Các yêu cầu đặc biệt khác như phòng ở tầng cao, phòng liền kề…, sẽ
              được cung cấp tùy thuộc vào khả năng sẵn có của Khách Sạn tại thời
              điểm nhận phòng.
            </li>
          </ul>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            4.5. Thay đổi thông tin:
          </p>
          <ul>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Đối với các Yêu Cầu Dịch Vụ được phép hủy hoặc thay đổi: Bất cứ sự
              thay đổi nào về thông tin, bữa ăn, dịch vụ phát sinh so với Yêu
              Cầu Dịch Vụ ban đầu cần được gửi cho bộ phận đặt phòng của Khách
              Sạn trước số ngày tối thiểu để điều chỉnh Yêu Cầu Dịch Vụ theo quy
              định ghi trong Xác nhận đặt phòng và được xác nhận của Bộ phận đặt
              phòng của Khách sạn. Nếu sự thay đổi không được xác nhận trước,
              MeliaHanoi có quyền áp dụng Giá Công Bố tại Khách Sạn vào ngày
              Khách làm thủ tục nhận phòng và Đối Tác sẽ chịu hoàn toàn trách
              nhiệm giải quyết các khiếu nại của Khách phát sinh do việc cung
              cấp thông tin muộn. Trong trường hợp có thêm Khách (bao gồm cả trẻ
              em) không có xác nhận trước, Khách/ Đối Tác sẽ phải trả một khoản
              phụ thu tương ứng theo bảng Giá Công Bố của Khách Sạn tại thời
              điểm nhận phòng.
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Đối với các Yêu Cầu Dịch Vụ không hoàn hủy: Những Yêu Cầu Dịch Vụ
              có ghi chú “Không hoàn hủy” trong Xác nhận đặt phòng được coi là
              không hoàn phí và không thể điều chỉnh thông tin. Nếu Khách không
              đến sử dụng dịch vụ theo thời gian ghi trong Yêu Cầu Dịch Vụ, Đặt
              phòng sẽ được coi là “No-Show” và Khách sạn không chịu trách nhiệm
              hoàn tiền cho Yêu Cầu Dịch Vụ này.
            </li>
          </ul>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            4.6.Thủ tục nhận phòng
          </p>
          <ul>
            <li
              style={{
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Khách cần xuất trình một trong những giấy tờ pháp lý thể hiện
              thông tin về số định danh cá nhân theo quy định của pháp luật khi
              làm thủ tục nhận phòng để phục vụ mục đích đăng ký, Khách Sạn sẽ
              giữ một bản sao của những giấy tờ này.
            </li>
            <li
              style={{
                textAlign: "justify",
                margin: "0in 0in 10pt",
              }}
            >
              Khách cần xuất trình Xác nhận đặt phòng hoặc Mã đặt phòng của Yêu
              Cầu Dịch Vụ đã thanh toán thành công trên Trang Web{" "}
              <a
                href={url}
                style={{
                  color: "#0563c1",
                  textDecoration: "underline",
                }}
              >
                {url}
              </a>
              . Trong trường hợp Khách không xuất trình được Xác nhận đặt phòng
              hay Mã đặt phòng của Yêu Cầu Dịch Vụ đã thanh toán thành công,
              Khách cần cung cấp thông tin đặt phòng bao gồm tên người đặt
              phòng, số điện thoại, số lượng phòng đặt… để Lễ tân kiểm tra thông
              tin trên Hệ thống. Trong trường hợp Lễ tân không xác nhận được
              thông tin của Khách, Khách sạn có quyền từ chối Yêu Cầu Dịch Vụ
              của Khách.
            </li>
          </ul>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            4.7. Bằng việc đồng ý mua và sử dụng các dịch vụ của MeliaHanoi,
            Khách đồng ý cho phép MeliaHanoi chụp ảnh và sử dụng hình ảnh của
            Khách để phục vụ mục đích thống kê, quản lý lưu trú. MeliaHanoi cam
            kết không sử dụng/cung cấp hình ảnh của Khách cho bên thứ ba (không
            thuộc Tập đoàn MeliaHanoi) vì mục đích khác trừ trường hợp thực hiện
            theo yêu cầu của cơ quan nhà nước có thẩm quyền hoặc được sự đồng ý
            trước của Khách.
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            <strong>Điều 5. Chính sách hoàn/hủy phòng</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            5.1. Khi lựa chọn dịch vụ qua Trang Web{" "}
            <a
              href={url}
              style={{
                color: "#0563c1",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>
            , trên Trang Web ghi rõ chính sách hoàn/hủy phòng áp dụng với từng
            mức giá và chương trình khuyến mãi.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            5.2. Nếu Trang Web ghi “Không hoàn trả phí khi hủy phòng”, nghĩa là
            Gói Phòng đó không áp dụng chính sách hoàn tiền nếu Khách yêu cầu
            hủy/thay đổi thông tin trên Yêu Cầu Dịch Vụ.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            5.3. Nếu Trang Web ghi “Hủy miễn phí trước ngày …”, nghĩa là Khách
            có quyền thay đổi thông tin hoặc hủy Yêu Cầu Dịch Vụ trước ngày ghi
            chú.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            <strong>Điều 6. Điều khoản thanh toán và hoàn tiền (nếu có)</strong>
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            6.1. Khách/ Đối tác sau khi lựa chọn dịch vụ qua Trang Web{" "}
            <a
              href={url}
              style={{
                color: "#0563c1",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>{" "}
            sẽ thực hiện điền thông tin người đặt phòng và thanh toán trực tiếp
            toàn bộ Tổng Giá của Yêu Cầu Dịch Vụ qua Cổng thanh toán của Trang
            Web. Sau khi thanh toán thành công, Khách/ Đối tác sẽ nhận được
            email Xác nhận đặt phòng gửi tới email của người đặt phòng kèm theo
            thông tin chi tiết về Yêu Cầu Dịch Vụ đã được xác nhận.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            6.2. Chính sách hoàn tiền áp dụng cho yêu cầu hủy Yêu Cầu Dịch Vụ
            của Khách được ghi chú trong email Xác nhận đặt phòng được gửi tới
            email của người đặt phòng sau khi thanh toán thành công.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            6.3. Trong trường hợp Khách phát sinh yêu cầu hủy Yêu Cầu Dịch Vụ và
            hoàn tiền, Khách cần liên hệ trực tiếp tới Bộ phận đặt phòng của
            Khách sạn để được hỗ trợ.
          </p>
          <p
            style={{
              listStyleType: "none",
            }}
          >
            <strong>Điều 7. Lỗi kỹ thuật của Website</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            7.1. MeliaHanoi sẽ nỗ lực trong phạm vi hợp lý để duy trì hoạt động
            bình thường của Trang Web{" "}
            <a
              href={url}
              style={{
                color: "#0563c1",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>
            . Tuy nhiên, MeliaHanoi không bảo đảm rằng (i) các chức năng, công
            cụ hỗ trợ được cung cấp tại Trang Web sẽ không bị gián đoạn hoặc
            lỗi, (ii) Trang Web không bị nhiễm virus, phần mềm độc hại (malware)
            hoặc các thành phần gây hại khác, và/hoặc (iii) mọi dữ liệu được
            cung cấp trên Trang Web đều chính xác và không có các sai sót về kỹ
            thuật trong quá trình tạo lập dữ liệu.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            7.2. Trong trường hợp phát sinh các sự cố về kỹ thuật như sự cố về
            máy móc, lỗi phần mềm, lỗi hệ thống đường truyền internet, Trang Web
            bị nhiễm virus (“Lỗi Kỹ Thuật”) hoặc trường hợp xảy ra sai sót về dữ
            liệu đăng tải trên Trang Web như sai sót về giá (“Lỗi Dữ Liệu”),
            MeliaHanoi sẽ nỗ lực trong phạm vi hợp lý để khắc phục Lỗi Kỹ Thuật
            hoặc điều chỉnh Lỗi Dữ Liệu trong thời gian sớm nhất.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            7.3. MeliaHanoi có quyền từ chối thực hiện các giao dịch được xác
            lập:
          </p>
          <ul>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
              }}
            >
              Do Lỗi Kỹ Thuật,
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
              }}
            >
              Trên cơ sở Lỗi Dữ Liệu, và/hoặc
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
              }}
            >
              Bị ảnh hưởng bởi Lỗi Kỹ Thuật và/hoặc Lỗi Dữ Liệu không phụ thuộc
              vào nguồn gốc của các lỗi đó. Để cho rõ ràng, một lỗi dữ liệu là
              một lỗi trên Trang Web (ví dụ về giá cả, điều kiện) mà một người
              lý trí sẽ không coi là bình thường.
            </li>
          </ul>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            7.4.Trong trường hợp từ chối thực hiện thực giao dịch, MeliaHanoi sẽ
            thông báo cho quý khách qua thư điện tử mà quý khách đã cung cấp khi
            đặt dịch vụ, đồng thời hoàn lại khoản thanh toán liên quan đến giao
            dịch bị từ chối mà quý khách đã thanh toán cho MeliaHanoi trong vòng
            tối đa 45 ngày làm việc.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
            }}
          >
            7.5. Ngoài nghĩa vụ hoàn lại khoản thanh toán đã nhận theo quy định
            tại Điều 7.4, MeliaHanoi không chịu trách nhiệm cho bất cứ tổn thất
            hoặc thiệt hại nào mà Khách phải gánh chịu, dù trực tiếp hoặc gián
            tiếp, phát sinh từ hoặc liên quan đến Lỗi Kỹ Thuật và/hoặc Lỗi Dữ
            Liệu.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            <strong>Điều 8. Sửa chữa cải tạo</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            8.1. MeliaHanoi có quyền tiến hành sửa chữa, cải tạo hoặc nâng cấp/
            thực hiện các chương trình bảo dưỡng định kỳ phù hợp với mục đích
            duy trì điều kiện tốt nhất cho Khách Sạn. MeliaHanoi có toàn quyền
            tự đưa ra các quyết định sửa chữa, nâng cấp, nhưng phải có thông báo
            bằng văn bản đến Đối Tác/ Khách trước khi bắt đầu các công trình
            nâng cấp lớn và kéo dài mà có thể ảnh hưởng đến sự hài lòng của Đối
            Tác/ Khách.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            8.2. MeliaHanoi sẽ không chịu trách nhiệm với bất kỳ khiếu nại, yêu
            cầu đối với các tổn thất và/hoặc thiệt hại mà Đối Tác/ Khách sẽ gặp
            phải do cải tạo/nâng cấp sau khi đã thông báo trước với Đối Tác/
            Khách.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            <strong>Điều 9. Sự kiện Bất khả kháng</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "0in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            MeliaHanoi và/ hoặc Đối Tác/ Khách sẽ không phải chịu trách nhiệm về
            việc chậm trễ, không thực hiện Hợp Đồng/thỏa thuận cung cấp và sử
            dụng dịch vụ (trừ nghĩa vụ thanh toán) hoặc các quyền và nghĩa vụ
            của mỗi Bên quy định tại Điều khoản chung, Quy định chung nếu việc
            chậm trễ, không thực hiện đó có nguyên nhân là do Sự kiện Bất khả
            kháng. Sự kiện Bất khả kháng bao gồm nhưng không hạn chế: Bão lụt,
            động đất, chiến tranh, hoả hoạn, sự thay đổi của chính sách, pháp
            luật của nhà nước hoặc các sự kiện khách quan khác.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: ".25in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            <u>
              <strong>Với điều kiện:</strong>
            </u>
          </p>
          <ol>
            <li
              style={{
                listStyleType: "none",
              }}
            >
              a. Sự kiện Bất khả kháng đó hoàn toàn nằm ngoài sự kiểm soát hợp
              lý hoặc không do lỗi hoặc sơ suất của Bên bị ảnh hưởng bởi Sự kiện
              Bất khả kháng, mặc dù Bên đó đã áp dụng mọi biện pháp cần thiết và
              trong khả năng cho phép để đề phòng, khắc phục hoặc giảm bớt thiệt
              hại, gây ra việc chậm trễ hoặc gián đoạn, đình trệ việc thực hiện
              nghĩa vụ.
            </li>
            <li
              style={{
                listStyleType: "none",
              }}
            >
              b. Trừ khi có ý kiến khác của MeliaHanoi bằng văn bản, Đối Tác/
              Khách vẫn phải thực hiện các nghĩa vụ của mình một cách phù hợp
              với hoàn cảnh thực tế cho phép và phải tiến hành mọi biện pháp hợp
              lý để thực hiện các phần việc không bị Sự kiện Bất khả kháng gây
              trở ngại.
            </li>
            <li
              style={{
                listStyleType: "none",
              }}
            >
              c. Trong thời hạn 03 (ba) ngày kể từ ngày xảy ra Sự kiện Bất khả
              kháng, Bên bị ảnh hưởng bởi Sự kiện Bất khả kháng phải thông báo
              văn bản cho Bên kia, trong đó nêu chi tiết về Sự kiện Bất khả
              kháng, các biện pháp đã tiến hành để đề phòng, khắc phục thiệt
              hại, dự kiến kế hoạch khắc phục và biện pháp giải quyết.
            </li>
          </ol>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            <strong>Điều 10. Bảo mật thông tin</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            10.1. Đối Tác/ Khách và MeliaHanoi cam kết rằng, trong thời gian
            hiệu lực của Hợp Đồng và sau khi Hợp Đồng giữa Đối Tác/ Khách và
            MeliaHanoi chấm dứt, Bên được tiết lộ sẽ tuyệt đối bảo mật các thông
            tin mật (“Thông Tin Mật”) của Bên tiết lộ. Theo đó, Bên được tiết lộ
            không được tiết lộ Thông Tin Mật cho bất kỳ bên thứ ba nào, dù là
            trực tiếp hay gián tiếp, trong bất kỳ tình huống nào, khi không có
            sự đồng ý bằng văn bản của của Bên tiết lộ trừ trường hợp quy định
            dưới đây. Cho mục đích quy định tại điều này, Thông Tin Mật được
            hiểu là các thông tin bao gồm nhưng không giới hạn các điều khoản
            của Hợp Đồng ký giữa MeliaHanoi và Đối Tác/ Khách, và/hoặc các thông
            tin, dữ liệu, văn bản được tạo ra do liên quan đến hoặc phát sinh từ
            việc thực hiện Hợp Đồng, các thông tin, dữ liệu, văn bản được Bên
            tiết lộ cung cấp cho Bên được tiết lộ cho dù dưới bất kỳ hình thức
            nào để thực hiện Hợp Đồng. Ngoài ra, Thông Tin Mật còn bao gồm nhưng
            không giới hạn các thông tin liên quan đến bí mật kinh doanh, bí mật
            công nghệ, bí quyết thương mại, kiến thức hoặc các thông tin khác về
            hoặc phục vụ cho tiếp thị tài chính, kinh doanh của Bên tiết lộ.
          </p>
          <p
            style={{
              marginTop: "10pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "0in 0in 10pt 0.5in",
            }}
          >
            10.2. Nghĩa Vụ Bảo Mật sẽ được loại trừ nếu Thông Tin Mật:
          </p>
          <ol
            style={{
              listStyleType: "lower-alpha",
            }}
          >
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                marginLeft: "0.5in",
                margin: "0in 0in 5pt 0.5in",
              }}
            >
              Đã được phổ biến rộng rãi trong công chúng bởi Bên tiết lộ;
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                marginLeft: "0.5in",
                margin: "0in 0in 5pt 0.5in",
              }}
            >
              Do Bên được tiết lộ cung cấp cho nhân viên, chuyên gia tư vấn tài
              chính, pháp lý hoặc nhà thầu của Bên được tiết lộ vì mục đích thực
              hiện các nghĩa vụ của Bên được tiết lộ theo Hợp Đồng này, với điều
              kiện là Bên được tiết lộ phải chịu trách nhiệm và đảm bảo các đối
              tượng được tiết lộ Thông Tin Mật phải tuân thủ quy định bảo mật
              như nội dung nêu trên;
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                marginLeft: "0.5in",
                margin: "0in 0in 5pt 0.5in",
              }}
            >
              Do Bên được tiết lộ nhận được từ một bên thứ ba độc lập với việc
              thực hiện Hợp Đồng này mà không chịu bất kỳ nghĩa vụ bảo mật nào;
              hoặc
            </li>
            <li
              style={{
                marginTop: "6.0pt",
                marginRight: "0in",
                marginBottom: "6.0pt",
                textAlign: "justify",
                marginLeft: "0.5in",
                margin: "0in 0in 5pt 0.5in",
              }}
            >
              Được yêu cầu tiết lộ bởi cơ quan chức năng hoặc bất kỳ toà án có
              thẩm quyền xét xử thích hợp nào đối với Bên được tiết lộ.
            </li>
          </ol>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              marginLeft: "0.5in",
              margin: "0in 0in 10pt 0.5in",
            }}
          >
            10.3. Bên được tiết lộ đồng ý rằng bất cứ vi phạm nào đối với Nghĩa
            Vụ Bảo Mật thông tin này có thể gây ra những tổn hại không thể khôi
            phục được với Bên tiết lộ, theo đó Bên tiết lộ sẽ có quyền tìm kiếm
            các biện pháp để giảm nhẹ thiệt hại và buộc Bên được tiết lộ bồi
            thường toàn bộ thiệt hại là một khoản tiền không thấp hơn giá trị
            Hợp Đồng.
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              marginLeft: "0.5in",
              margin: "0in 0in 10pt 0.5in",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              textAlign: "justify",
              margin: "12pt 0in 0in",
            }}
          >
            <strong>Điều 11. Giải quyết tranh chấp</strong>
          </p>
          <p
            style={{
              marginTop: "6.0pt",
              marginRight: "0in",
              marginBottom: "6.0pt",
              marginLeft: "0in",
              textAlign: "justify",
              margin: "0in 0in 10pt",
            }}
          >
            Các quy định tại Điều khoản chung, Quy định chung sẽ được điều chỉnh
            bởi pháp luật Việt Nam. Tất cả các tranh chấp phát sinh liên quan
            đến việc yêu cầu, sử dụng Dịch Vụ của Đối Tác/ Khách theo quy định
            tại Hợp Đồng và Điều khoản chung, Quy định chung sẽ được cố gắng
            giải quyết thông qua thương lượng. Trường hợp thương lượng, đàm phán
            không thành công trong vòng 30 (ba mươi) ngày kể từ ngày phát sinh
            tranh chấp, Các Bên sẽ có quyền đưa tranh chấp ra giải quyết tại Tòa
            án có thẩm quyền tại Việt Nam theo quy định của pháp luật.
          </p>
          <ol>
            <li
              style={{
                listStyleType: "none",
              }}
            >
              &nbsp;
            </li>
          </ol>
        </div>
      </Container>
    </div>
  );
};

export default GeneralTerms;

// import { Container } from "../../../components";

// const GeneralTerms = () => {
//   const url = "http://localhost:5173/";

//   return (
//     <div className="p-10">
//       <Container>
//         <h1 className="text-center text-3xl font-semibold text-textLight dark:text-textDark">
//           ĐIỀU KHOẢN CHUNG
//         </h1>

//         <hr className="my-6 border-divideLight sm:mx-auto dark:border-divideDark lg:my-8" />

//         <div className="d-content-news text-textLight dark:text-textDark2nd">
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Điều Khoản Chung&nbsp;<strong>(“ĐKC”)</strong>&nbsp;này áp dụng cho
//             các Khách và Đối Tác sử dụng hoặc đặt dịch vụ tại khách sạn
//             MeliaHanoi, và các thương hiệu khác thuộc quyền sở hữu, quản lý
//             và/hoặc khai thác của MeliaHanoi (nếu có) trong tương lai{" "}
//             <strong>(“Khách Sạn”)</strong>. Khách/ Đối tác và MeliaHanoi được
//             gọi riêng là <strong>“Bên” </strong>
//             và gọi chung là <strong>“Các Bên”</strong>.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Khách/ Đối tác đồng ý và thừa nhận rằng bằng việc gửi cho Khách Sạn
//             yêu cầu đặt phòng, yêu cầu sự kiện và/hoặc các dịch vụ&nbsp;bổ
//             sung&nbsp; (gọi chung là “Yêu Cầu Dịch Vụ”) và được MeliaHanoi xác
//             nhận&nbsp;dịch vụ&nbsp;là Khách và Đối Tác đã đọc và chấp
//             nhận&nbsp;ĐKC, Quy Định Chung
//             <strong>&nbsp;(“QĐC”)&nbsp;</strong>và những thay đổi&nbsp;ĐKC,
//             QĐC&nbsp;tại từng thời điểm được đăng tải trên Trang Web chính thức
//             của MeliaHanoi tại địa chỉ&nbsp;
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             &nbsp;<strong>(“Trang Web”)</strong> cũng như các chính sách cung
//             cấp dịch vụ, báo giá dịch vụ được MeliaHanoi thông báo, cung cấp.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             ĐKC&nbsp;là một phần không thể tách rời của hợp đồng, thỏa thuận
//             cung cấp, sử dụng dịch vụ hoặc Yêu Cầu Dịch Vụ được xác nhận giữa
//             MeliaHanoi và Khách /Đối Tác <strong>(“Hợp Đồng”)</strong>.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <strong>
//               Điều 1. Định nghĩa chung về dịch vụ phòng nghỉ, Doanh nghiệp,
//               Khách, các thuật ngữ sử dụng trong thỏa thuận về giao dịch giữa
//               Khách và doanh nghiệp
//             </strong>
//           </p>
//           <ol className="ml-10">
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               <ol
//                 style={{
//                   listStyleType: "lower-alpha",
//                 }}
//               >
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“MeliaHanoi” </strong>có nghĩa là Công ty cổ phần Tập
//                   đoàn MeliaHanoi, các công&nbsp;ty&nbsp;liên kết của Công ty cổ
//                   phần Tập đoàn MeliaHanoi và các chi nhánh, văn phòng đại diện,
//                   địa điểm kinh doanh của Công ty cổ phần Tập đoàn MeliaHanoi
//                   và&nbsp;các công&nbsp;ty&nbsp;liên kết của Công ty cổ phần Tập
//                   đoàn MeliaHanoi được thành lập trên toàn quốc tại từng thời
//                   điểm.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Đối Tác”</strong> là đại lý du lịch/hãng lữ
//                   hành/doanh nghiệp/tổ chức, cá nhân giao kết Hợp Đồng với
//                   MeliaHanoi.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Khách”</strong> là cá nhân sử dụng dịch vụ của
//                   MeliaHanoi với mục đích tiêu dùng trực tiếp, không dùng để bán
//                   lại cho cá nhân, tổ chức khác.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“A” </strong>được hiểu là Người lớn.{" "}
//                   <strong>“C”</strong> được hiểu là Trẻ em.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   &nbsp;<strong>“Giá Công Bố”</strong>&nbsp;là giá phòng, giá
//                   dịch vụ được niêm yết tại Khách Sạn và tại website của
//                   MeliaHanoi&nbsp;
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                   . Giá phòng có thể thay đổi từng ngày.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Giá Gói Phòng”</strong> là giá dành cho đêm nghỉ kèm
//                   theo các dịch vụ được liệt kê trong Gói Phòng tương ứng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Dịch Vụ”</strong> bao gồm dịch vụ lưu trú, tiệc sự
//                   kiện, hoặc dịch vụ bổ sung khác mà MeliaHanoi cung
//                   cấp&nbsp;tại từng thời điểm như&nbsp;vận chuyển, bữa ăn, dịch
//                   vụ vui chơi giải trí…
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Ngày Làm Việc”</strong>&nbsp;là ngày từ thứ 2 đến thứ
//                   6 hàng tuần, trừ ngày nghỉ, ngày lễ theo quy định pháp luật.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“No-Show”</strong>&nbsp;là trường hợp Khách không đến
//                   nhận phòng cho đến 23 giờ 59 phút ngày nhận phòng hoặc thời
//                   điểm khác trong thời gian lưu trú theo thông báo của Khách/
//                   Đối tác và MeliaHanoi sẽ trả phòng về quỹ phòng trống để bán
//                   sau thời hạn này mà không cần thông báo cho Khách/ Đối tác nếu
//                   Khách không có mặt và làm thủ tục nhận phòng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“QĐC”</strong> là các quy định mà Khách cần phải tuân
//                   thủ trong thời gian lưu trú và sử dụng Dịch Vụ tại Khách Sạn
//                   và có thể được sửa đổi, bổ sung theo quyết định của MeliaHanoi
//                   tại từng thời điểm và đăng tải trên Trang Web của MeliaHanoi.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Tổng Giá” </strong>bao gồm tổng Giá Gói Phòng cho
//                   toàn bộ thời gian lưu trú và các dịch vụ bổ sung khác ngoài
//                   các dịch vụ liệt kê trong Gói Phòng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Voucher”</strong> là thẻ/phiếu mua Dịch Vụ trả tiền
//                   trước tồn tại dưới dạng vật lý hoặc dữ liệu điện tử do
//                   MeliaHanoi phát hành để ghi nhận quyền sử dụng Gói Phòng cho
//                   người sở hữu Voucher. Việc sử dụng Voucher phải tuân
//                   thủ&nbsp;QĐC, ĐKC&nbsp;và quy định chi tiết tại mỗi Voucher.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Trang Web” </strong>là website chính thức của
//                   MeliaHanoi tại địa chỉ&nbsp;
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Cổng thanh toán” </strong>là hệ thống thanh toán trực
//                   tiếp của website{" "}
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                   , qua đó Khách/ Đối tác có thể thực hiện thanh toán cho các
//                   phòng và dịch vụ đã lựa chọn trên Trang Web.
//                 </li>
//               </ol>
//             </li>
//           </ol>
//           <p
//             style={{
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <strong>
//               Điều 2. Quy định về voucher và sử dụng Voucher (nếu có sử dụng)
//             </strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: ".5in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Trừ khi có thỏa thuận khác hoặc MeliaHanoi có chính sách khác, Khách
//             sử dụng Voucher phải tuân thủ các quy định tại&nbsp;ĐKC, QĐC, các
//             điều kiện khác quy định trên Voucher và/hoặc chính sách cung cấp
//             Dịch Vụ tương ứng với loại Voucher được MeliaHanoi phát hành tại
//             thời điểm mà Khách sử dụng.&nbsp;Voucher gốc phải được xuất trình và
//             thu hồi tại thời điểm nhận phòng, trong trường hợp không xuất trình
//             được Voucher đủ điều kiện sử dụng thì Khách phải thanh toán trực
//             tiếp theo Giá Công Bố tại thời điểm nhận phòng. Voucher không có giá
//             trị quy đổi sang tiền mặt hoặc các dịch vụ khác và chỉ được sử dụng
//             1 lần không hoàn lại. Không trả lại tiền thừa nếu không dùng hết giá
//             trị Voucher. Voucher không được áp dụng đồng thời cùng các chương
//             trình khuyến mãi khác &amp; không được sử dụng để tích điểm vào thẻ
//             hội viên. Voucher khi sử dụng phải còn nguyên vẹn, không tẩy xóa
//             hoặc rách rời chắp vá. Voucher không được phát hành đổi trong trường
//             hợp bị mất hoặc hư hỏng. Áp dụng 01 Voucher/01 hóa đơn. Voucher
//             không có giá trị quy đổi thành tiền mặt hoặc Voucher có giá trị nhỏ
//             hơn. Nếu giá trị dịch vụ nhỏ hơn giá trị Voucher, Khách không được
//             hoàn lại khoản tiền dư.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 3. Quy định về nhận và trả phòng</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "35.45pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Trừ khi có thông báo và/hoặc xác nhận khác từ Khách Sạn, quy định
//             về&nbsp;nhận và trả phòng&nbsp;được áp dụng&nbsp;như sau:
//           </p>
//           <table
//             border={1}
//             className="MsoTableGrid"
//             style={{
//               borderCollapse: "collapse",
//               border: "1.0pt solid text",
//               marginLeft: "40.85pt",
//             }}
//           >
//             <tbody>
//               <tr>
//                 <td
//                   className="border-[1px] w-[278.35pt] border-divideLight dark:border-divideDark"
//                   colSpan={2}
//                   style={{
//                     padding: "0in 5.4pt",
//                   }}
//                   width="371"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Chính sách</strong>
//                   </p>
//                 </td>
//                 <td
//                   rowSpan={2}
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Phụ thu</strong>
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Nhận phòng sớm</strong>
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     width: "143.7pt",
//                     borderWidth: "1px",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Trả phòng muộn</strong>
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Trước 6:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "143.7pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Sau 18:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Phụ thu 01 đêm tiền phòng
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 6:00 giờ tới trước 9:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "143.7pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 15:00 giờ tới trước 18:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Phụ thu 50% phí của 01 đêm tiền phòng
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 9:00 giờ tới trước 14:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "143.7pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 12:00 giờ tới trước 15:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Phụ thu 30% phí của 01 đêm tiền phòng
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   colSpan={3}
//                   style={{
//                     borderWidth: "1px",
//                     width: "437.95pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="584"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Tùy thuộc vào tình trạng phòng sẵn có và xác nhận đồng ý của
//                     Khách sạn.
//                   </p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "35.45pt",
//               textAlign: "justify",
//             }}
//           >
//             Các khoản phí nhận phòng sớm/trả phòng muộn nêu trên sẽ được tính
//             theo Giá Công Bố của Khách sạn&nbsp;(bao gồm giá chương trình khuyến
//             mại nếu đang áp dụng tại thời điểm thanh toán)&nbsp;khi Khách trực
//             tiếp thanh toán cho Khách sạn.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 4. Chính sách đặt phòng và nhận phòng</strong>
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             4.1. Tất cả các Yêu Cầu Dịch Vụ của Khách/ Đối Tác phải được gửi cho
//             MeliaHanoi dưới hình thức qua yêu cầu từ Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             , qua email hoặc văn bản trước khi Khách làm thủ tục nhận phòng.
//             MeliaHanoi sẽ xác nhận đặt phòng/ dịch vụ được gửi qua email đăng ký
//             của Khách hàng.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             4.2. Quy định về lưu trú: Số lượng Khách tối đa trên một phòng Khách
//             Sạn&nbsp;(ngoại trừ các trường hợp đặc biệt được nói rõ)&nbsp;được
//             áp dụng như sau:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Tối đa 04 người trong 01 phòng ngủ bao gồm cả trẻ em dưới 12 tuổi:
//               03A &amp; 01C hoặc 02A &amp; 02C.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Mỗi phòng chỉ được đặt thêm 01 giường phụ tùy theo chính sách áp
//               dụng tại từng Khách sạn.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Áp dụng phụ thu trẻ em từ 06&nbsp;tuổi đến&nbsp;dưới 12 tuổi và
//               phụ thu người lớn dành cho khách từ 12 tuổi
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             &nbsp;4.3. Trường hợp đặc biệt:&nbsp;Trong một số trường hợp đặc
//             biệt (bao gồm nhưng không giới hạn: sự kiện bất khả kháng, hoạt động
//             nâng cấp, sửa chữa Khách Sạn v.v...), MeliaHanoi có quyền di dời
//             Khách sang loại phòng/ Khách Sạn khác có tiêu chuẩn tương đương loại
//             phòng/ Khách Sạn mà Khách/ Đối Tác đã đặt và được MeliaHanoi xác
//             nhận.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.4. Thông tin cung cấp cho Khách sạn trước ngày đến: Để Khách nhận
//             được chất lượng dịch vụ tốt nhất từ Khách Sạn và đảm bảo an ninh cho
//             Khách, Khách/ Đối Tác cần cung cấp cho bộ phận đặt phòng của Khách
//             Sạn:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Thông tin chuyến bay và thời gian tới Khách Sạn dự kiến cần được
//               cung cấp cho Khách Sạn ít nhất 05 ngày trước ngày Khách đến trong
//               trường hợp Khách yêu cầu dịch vụ đón, tiễn.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Nếu Khách/ Đối Tác không cung cấp thông tin đúng hạn, MeliaHanoi
//               có quyền hủy đặt phòng khỏi hệ thống, từ chối áp dụng giá ưu đãi
//               theo Voucher, xác nhận Yêu Cầu Dịch Vụ, thỏa thuận, hợp đồng đã ký
//               kết giữa Khách/ Đối Tác và MeliaHanoi. Trong trường hợp đó,
//               MeliaHanoi sẽ áp dụng Giá Công Bố tại Khách Sạn vào ngày Khách làm
//               thủ tục nhận phòng nếu còn phòng trống, và Đối Tác sẽ chịu hoàn
//               toàn trách nhiệm giải quyết các khiếu nại của Khách phát sinh do
//               việc cung cấp thông tin muộn.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Các yêu cầu đặc biệt khác như phòng ở tầng cao, phòng liền kề…, sẽ
//               được cung cấp tùy thuộc vào khả năng sẵn có của Khách Sạn tại thời
//               điểm nhận phòng.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.5. Thay đổi thông tin:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Đối với các Yêu Cầu Dịch Vụ được phép hủy hoặc thay đổi: Bất cứ sự
//               thay đổi nào về thông tin, bữa ăn, dịch vụ phát sinh so với Yêu
//               Cầu Dịch Vụ ban đầu cần được gửi cho bộ phận đặt phòng của Khách
//               Sạn trước số ngày tối thiểu để điều chỉnh Yêu Cầu Dịch Vụ theo quy
//               định ghi trong Xác nhận đặt phòng và được xác nhận của Bộ phận đặt
//               phòng của Khách sạn. Nếu sự thay đổi không được xác nhận trước,
//               MeliaHanoi có quyền áp dụng Giá Công Bố tại Khách Sạn vào ngày
//               Khách làm thủ tục nhận phòng và Đối Tác sẽ chịu hoàn toàn trách
//               nhiệm giải quyết các khiếu nại của Khách phát sinh do việc cung
//               cấp thông tin muộn. Trong trường hợp có thêm Khách (bao gồm cả trẻ
//               em) không có xác nhận trước, Khách/ Đối Tác sẽ phải trả một khoản
//               phụ thu tương ứng theo bảng Giá Công Bố của Khách Sạn tại thời
//               điểm nhận phòng.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Đối với các Yêu Cầu Dịch Vụ không hoàn hủy: Những Yêu Cầu Dịch Vụ
//               có ghi chú “Không hoàn hủy” trong Xác nhận đặt phòng được coi là
//               không hoàn phí và không thể điều chỉnh thông tin. Nếu Khách không
//               đến sử dụng dịch vụ theo thời gian ghi trong Yêu Cầu Dịch Vụ, Đặt
//               phòng sẽ được coi là “No-Show” và Khách sạn không chịu trách nhiệm
//               hoàn tiền cho Yêu Cầu Dịch Vụ này.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.6.Thủ tục nhận phòng
//           </p>
//           <ul>
//             <li
//               style={{
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Khách cần xuất trình một trong những giấy tờ pháp lý thể hiện
//               thông tin về số định danh cá nhân theo quy định của pháp luật khi
//               làm thủ tục nhận phòng để phục vụ mục đích đăng ký, Khách Sạn sẽ
//               giữ một bản sao của những giấy tờ này.
//             </li>
//             <li
//               style={{
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Khách cần xuất trình Xác nhận đặt phòng hoặc Mã đặt phòng của Yêu
//               Cầu Dịch Vụ đã thanh toán thành công trên Trang Web{" "}
//               <a
//                 href={url}
//                 style={{
//                   color: "#0563c1",
//                   textDecoration: "underline",
//                 }}
//               >
//                 {url}
//               </a>
//               . Trong trường hợp Khách không xuất trình được Xác nhận đặt phòng
//               hay Mã đặt phòng của Yêu Cầu Dịch Vụ đã thanh toán thành công,
//               Khách cần cung cấp thông tin đặt phòng bao gồm tên người đặt
//               phòng, số điện thoại, số lượng phòng đặt… để Lễ tân kiểm tra thông
//               tin trên Hệ thống. Trong trường hợp Lễ tân không xác nhận được
//               thông tin của Khách, Khách sạn có quyền từ chối Yêu Cầu Dịch Vụ
//               của Khách.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.7. Bằng việc đồng ý mua và sử dụng các dịch vụ của MeliaHanoi,
//             Khách đồng ý cho phép MeliaHanoi chụp ảnh và sử dụng hình ảnh của
//             Khách để phục vụ mục đích thống kê, quản lý lưu trú. MeliaHanoi cam
//             kết không sử dụng/cung cấp hình ảnh của Khách cho bên thứ ba (không
//             thuộc Tập đoàn MeliaHanoi) vì mục đích khác trừ trường hợp thực hiện
//             theo yêu cầu của cơ quan nhà nước có thẩm quyền hoặc được sự đồng ý
//             trước của Khách.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 5. Chính sách hoàn/hủy phòng</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             5.1. Khi lựa chọn dịch vụ qua Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             , trên Trang Web ghi rõ chính sách hoàn/hủy phòng áp dụng với từng
//             mức giá và chương trình khuyến mãi.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             5.2. Nếu Trang Web ghi “Không hoàn trả phí khi hủy phòng”, nghĩa là
//             Gói Phòng đó không áp dụng chính sách hoàn tiền nếu Khách yêu cầu
//             hủy/thay đổi thông tin trên Yêu Cầu Dịch Vụ.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             5.3. Nếu Trang Web ghi “Hủy miễn phí trước ngày …”, nghĩa là Khách
//             có quyền thay đổi thông tin hoặc hủy Yêu Cầu Dịch Vụ trước ngày ghi
//             chú.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 6. Điều khoản thanh toán và hoàn tiền (nếu có)</strong>
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             6.1. Khách/ Đối tác sau khi lựa chọn dịch vụ qua Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>{" "}
//             sẽ thực hiện điền thông tin người đặt phòng và thanh toán trực tiếp
//             toàn bộ Tổng Giá của Yêu Cầu Dịch Vụ qua Cổng thanh toán của Trang
//             Web. Sau khi thanh toán thành công, Khách/ Đối tác sẽ nhận được
//             email Xác nhận đặt phòng gửi tới email của người đặt phòng kèm theo
//             thông tin chi tiết về Yêu Cầu Dịch Vụ đã được xác nhận.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             6.2. Chính sách hoàn tiền áp dụng cho yêu cầu hủy Yêu Cầu Dịch Vụ
//             của Khách được ghi chú trong email Xác nhận đặt phòng được gửi tới
//             email của người đặt phòng sau khi thanh toán thành công.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             6.3. Trong trường hợp Khách phát sinh yêu cầu hủy Yêu Cầu Dịch Vụ và
//             hoàn tiền, Khách cần liên hệ trực tiếp tới Bộ phận đặt phòng của
//             Khách sạn để được hỗ trợ.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 7. Lỗi kỹ thuật của Website</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.1. MeliaHanoi sẽ nỗ lực trong phạm vi hợp lý để duy trì hoạt động
//             bình thường của Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             . Tuy nhiên, MeliaHanoi không bảo đảm rằng (i) các chức năng, công
//             cụ hỗ trợ được cung cấp tại Trang Web sẽ không bị gián đoạn hoặc
//             lỗi, (ii) Trang Web không bị nhiễm virus, phần mềm độc hại (malware)
//             hoặc các thành phần gây hại khác, và/hoặc (iii) mọi dữ liệu được
//             cung cấp trên Trang Web đều chính xác và không có các sai sót về kỹ
//             thuật trong quá trình tạo lập dữ liệu.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.2. Trong trường hợp phát sinh các sự cố về kỹ thuật như sự cố về
//             máy móc, lỗi phần mềm, lỗi hệ thống đường truyền internet, Trang Web
//             bị nhiễm virus (“Lỗi Kỹ Thuật”) hoặc trường hợp xảy ra sai sót về dữ
//             liệu đăng tải trên Trang Web như sai sót về giá (“Lỗi Dữ Liệu”),
//             MeliaHanoi sẽ nỗ lực trong phạm vi hợp lý để khắc phục Lỗi Kỹ Thuật
//             hoặc điều chỉnh Lỗi Dữ Liệu trong thời gian sớm nhất.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.3. MeliaHanoi có quyền từ chối thực hiện các giao dịch được xác
//             lập:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//               }}
//             >
//               Do Lỗi Kỹ Thuật,
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//               }}
//             >
//               Trên cơ sở Lỗi Dữ Liệu, và/hoặc
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//               }}
//             >
//               Bị ảnh hưởng bởi Lỗi Kỹ Thuật và/hoặc Lỗi Dữ Liệu không phụ thuộc
//               vào nguồn gốc của các lỗi đó. Để cho rõ ràng, một lỗi dữ liệu là
//               một lỗi trên Trang Web (ví dụ về giá cả, điều kiện) mà một người
//               lý trí sẽ không coi là bình thường.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.4.Trong trường hợp từ chối thực hiện thực giao dịch, MeliaHanoi sẽ
//             thông báo cho quý khách qua thư điện tử mà quý khách đã cung cấp khi
//             đặt dịch vụ, đồng thời hoàn lại khoản thanh toán liên quan đến giao
//             dịch bị từ chối mà quý khách đã thanh toán cho MeliaHanoi trong vòng
//             tối đa 45 ngày làm việc.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.5. Ngoài nghĩa vụ hoàn lại khoản thanh toán đã nhận theo quy định
//             tại Điều 7.4, MeliaHanoi không chịu trách nhiệm cho bất cứ tổn thất
//             hoặc thiệt hại nào mà Khách phải gánh chịu, dù trực tiếp hoặc gián
//             tiếp, phát sinh từ hoặc liên quan đến Lỗi Kỹ Thuật và/hoặc Lỗi Dữ
//             Liệu.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 8. Sửa chữa cải tạo</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             8.1. MeliaHanoi có quyền tiến hành sửa chữa, cải tạo hoặc nâng cấp/
//             thực hiện các chương trình bảo dưỡng định kỳ phù hợp với mục đích
//             duy trì điều kiện tốt nhất cho Khách Sạn. MeliaHanoi có toàn quyền
//             tự đưa ra các quyết định sửa chữa, nâng cấp, nhưng phải có thông báo
//             bằng văn bản đến Đối Tác/ Khách trước khi bắt đầu các công trình
//             nâng cấp lớn và kéo dài mà có thể ảnh hưởng đến sự hài lòng của Đối
//             Tác/ Khách.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             8.2. MeliaHanoi sẽ không chịu trách nhiệm với bất kỳ khiếu nại, yêu
//             cầu đối với các tổn thất và/hoặc thiệt hại mà Đối Tác/ Khách sẽ gặp
//             phải do cải tạo/nâng cấp sau khi đã thông báo trước với Đối Tác/
//             Khách.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 9. Sự kiện Bất khả kháng</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             MeliaHanoi và/ hoặc Đối Tác/ Khách sẽ không phải chịu trách nhiệm về
//             việc chậm trễ, không thực hiện Hợp Đồng/thỏa thuận cung cấp và sử
//             dụng dịch vụ (trừ nghĩa vụ thanh toán) hoặc các quyền và nghĩa vụ
//             của mỗi Bên quy định tại Điều khoản chung, Quy định chung nếu việc
//             chậm trễ, không thực hiện đó có nguyên nhân là do Sự kiện Bất khả
//             kháng. Sự kiện Bất khả kháng bao gồm nhưng không hạn chế: Bão lụt,
//             động đất, chiến tranh, hoả hoạn, sự thay đổi của chính sách, pháp
//             luật của nhà nước hoặc các sự kiện khách quan khác.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: ".25in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <u>
//               <strong>Với điều kiện:</strong>
//             </u>
//           </p>
//           <ol>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               a. Sự kiện Bất khả kháng đó hoàn toàn nằm ngoài sự kiểm soát hợp
//               lý hoặc không do lỗi hoặc sơ suất của Bên bị ảnh hưởng bởi Sự kiện
//               Bất khả kháng, mặc dù Bên đó đã áp dụng mọi biện pháp cần thiết và
//               trong khả năng cho phép để đề phòng, khắc phục hoặc giảm bớt thiệt
//               hại, gây ra việc chậm trễ hoặc gián đoạn, đình trệ việc thực hiện
//               nghĩa vụ.
//             </li>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               b. Trừ khi có ý kiến khác của MeliaHanoi bằng văn bản, Đối Tác/
//               Khách vẫn phải thực hiện các nghĩa vụ của mình một cách phù hợp
//               với hoàn cảnh thực tế cho phép và phải tiến hành mọi biện pháp hợp
//               lý để thực hiện các phần việc không bị Sự kiện Bất khả kháng gây
//               trở ngại.
//             </li>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               c. Trong thời hạn 03 (ba) ngày kể từ ngày xảy ra Sự kiện Bất khả
//               kháng, Bên bị ảnh hưởng bởi Sự kiện Bất khả kháng phải thông báo
//               văn bản cho Bên kia, trong đó nêu chi tiết về Sự kiện Bất khả
//               kháng, các biện pháp đã tiến hành để đề phòng, khắc phục thiệt
//               hại, dự kiến kế hoạch khắc phục và biện pháp giải quyết.
//             </li>
//           </ol>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 10. Bảo mật thông tin</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             10.1. Đối Tác/ Khách và MeliaHanoi cam kết rằng, trong thời gian
//             hiệu lực của Hợp Đồng và sau khi Hợp Đồng giữa Đối Tác/ Khách và
//             MeliaHanoi chấm dứt, Bên được tiết lộ sẽ tuyệt đối bảo mật các thông
//             tin mật (“Thông Tin Mật”) của Bên tiết lộ. Theo đó, Bên được tiết lộ
//             không được tiết lộ Thông Tin Mật cho bất kỳ bên thứ ba nào, dù là
//             trực tiếp hay gián tiếp, trong bất kỳ tình huống nào, khi không có
//             sự đồng ý bằng văn bản của của Bên tiết lộ trừ trường hợp quy định
//             dưới đây. Cho mục đích quy định tại điều này, Thông Tin Mật được
//             hiểu là các thông tin bao gồm nhưng không giới hạn các điều khoản
//             của Hợp Đồng ký giữa MeliaHanoi và Đối Tác/ Khách, và/hoặc các thông
//             tin, dữ liệu, văn bản được tạo ra do liên quan đến hoặc phát sinh từ
//             việc thực hiện Hợp Đồng, các thông tin, dữ liệu, văn bản được Bên
//             tiết lộ cung cấp cho Bên được tiết lộ cho dù dưới bất kỳ hình thức
//             nào để thực hiện Hợp Đồng. Ngoài ra, Thông Tin Mật còn bao gồm nhưng
//             không giới hạn các thông tin liên quan đến bí mật kinh doanh, bí mật
//             công nghệ, bí quyết thương mại, kiến thức hoặc các thông tin khác về
//             hoặc phục vụ cho tiếp thị tài chính, kinh doanh của Bên tiết lộ.
//           </p>
//           <p
//             style={{
//               marginTop: "10pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt 0.5in",
//             }}
//           >
//             10.2. Nghĩa Vụ Bảo Mật sẽ được loại trừ nếu Thông Tin Mật:
//           </p>
//           <ol
//             style={{
//               listStyleType: "lower-alpha",
//             }}
//           >
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Đã được phổ biến rộng rãi trong công chúng bởi Bên tiết lộ;
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Do Bên được tiết lộ cung cấp cho nhân viên, chuyên gia tư vấn tài
//               chính, pháp lý hoặc nhà thầu của Bên được tiết lộ vì mục đích thực
//               hiện các nghĩa vụ của Bên được tiết lộ theo Hợp Đồng này, với điều
//               kiện là Bên được tiết lộ phải chịu trách nhiệm và đảm bảo các đối
//               tượng được tiết lộ Thông Tin Mật phải tuân thủ quy định bảo mật
//               như nội dung nêu trên;
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Do Bên được tiết lộ nhận được từ một bên thứ ba độc lập với việc
//               thực hiện Hợp Đồng này mà không chịu bất kỳ nghĩa vụ bảo mật nào;
//               hoặc
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Được yêu cầu tiết lộ bởi cơ quan chức năng hoặc bất kỳ toà án có
//               thẩm quyền xét xử thích hợp nào đối với Bên được tiết lộ.
//             </li>
//           </ol>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               marginLeft: "0.5in",
//               margin: "0in 0in 10pt 0.5in",
//             }}
//           >
//             10.3. Bên được tiết lộ đồng ý rằng bất cứ vi phạm nào đối với Nghĩa
//             Vụ Bảo Mật thông tin này có thể gây ra những tổn hại không thể khôi
//             phục được với Bên tiết lộ, theo đó Bên tiết lộ sẽ có quyền tìm kiếm
//             các biện pháp để giảm nhẹ thiệt hại và buộc Bên được tiết lộ bồi
//             thường toàn bộ thiệt hại là một khoản tiền không thấp hơn giá trị
//             Hợp Đồng.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               marginLeft: "0.5in",
//               margin: "0in 0in 10pt 0.5in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 11. Giải quyết tranh chấp</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Các quy định tại Điều khoản chung, Quy định chung sẽ được điều chỉnh
//             bởi pháp luật Việt Nam. Tất cả các tranh chấp phát sinh liên quan
//             đến việc yêu cầu, sử dụng Dịch Vụ của Đối Tác/ Khách theo quy định
//             tại Hợp Đồng và Điều khoản chung, Quy định chung sẽ được cố gắng
//             giải quyết thông qua thương lượng. Trường hợp thương lượng, đàm phán
//             không thành công trong vòng 30 (ba mươi) ngày kể từ ngày phát sinh
//             tranh chấp, Các Bên sẽ có quyền đưa tranh chấp ra giải quyết tại Tòa
//             án có thẩm quyền tại Việt Nam theo quy định của pháp luật.
//           </p>
//           <ol>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               &nbsp;
//             </li>
//           </ol>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default GeneralTerms;

// import { Container } from "../../../components";

// const GeneralTerms = () => {
//   const url = "http://localhost:5173/";

//   return (
//     <div className="p-10">
//       <Container>
//         <h1 className="text-center text-3xl font-semibold text-textLight dark:text-textDark">
//           ĐIỀU KHOẢN CHUNG
//         </h1>

//         <hr className="my-6 border-divideLight sm:mx-auto dark:border-divideDark lg:my-8" />

//         <div className="d-content-news text-textLight dark:text-textDark2nd">
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Điều Khoản Chung&nbsp;<strong>(“ĐKC”)</strong>&nbsp;này áp dụng cho
//             các Khách và Đối Tác sử dụng hoặc đặt dịch vụ tại khách sạn
//             MeliaHanoi, và các thương hiệu khác thuộc quyền sở hữu, quản lý
//             và/hoặc khai thác của MeliaHanoi (nếu có) trong tương lai{" "}
//             <strong>(“Khách Sạn”)</strong>. Khách/ Đối tác và MeliaHanoi được
//             gọi riêng là <strong>“Bên” </strong>
//             và gọi chung là <strong>“Các Bên”</strong>.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Khách/ Đối tác đồng ý và thừa nhận rằng bằng việc gửi cho Khách Sạn
//             yêu cầu đặt phòng, yêu cầu sự kiện và/hoặc các dịch vụ&nbsp;bổ
//             sung&nbsp; (gọi chung là “Yêu Cầu Dịch Vụ”) và được MeliaHanoi xác
//             nhận&nbsp;dịch vụ&nbsp;là Khách và Đối Tác đã đọc và chấp
//             nhận&nbsp;ĐKC, Quy Định Chung
//             <strong>&nbsp;(“QĐC”)&nbsp;</strong>và những thay đổi&nbsp;ĐKC,
//             QĐC&nbsp;tại từng thời điểm được đăng tải trên Trang Web chính thức
//             của MeliaHanoi tại địa chỉ&nbsp;
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             &nbsp;<strong>(“Trang Web”)</strong> cũng như các chính sách cung
//             cấp dịch vụ, báo giá dịch vụ được MeliaHanoi thông báo, cung cấp.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             ĐKC&nbsp;là một phần không thể tách rời của hợp đồng, thỏa thuận
//             cung cấp, sử dụng dịch vụ hoặc Yêu Cầu Dịch Vụ được xác nhận giữa
//             MeliaHanoi và Khách /Đối Tác <strong>(“Hợp Đồng”)</strong>.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <strong>
//               Điều 1. Định nghĩa chung về dịch vụ phòng nghỉ, Doanh nghiệp,
//               Khách, các thuật ngữ sử dụng trong thỏa thuận về giao dịch giữa
//               Khách và doanh nghiệp
//             </strong>
//           </p>
//           <ol className="ml-10">
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               <ol
//                 style={{
//                   listStyleType: "lower-alpha",
//                 }}
//               >
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“MeliaHanoi” </strong>có nghĩa là Công ty cổ phần Tập
//                   đoàn MeliaHanoi, các công&nbsp;ty&nbsp;liên kết của Công ty cổ
//                   phần Tập đoàn MeliaHanoi và các chi nhánh, văn phòng đại diện,
//                   địa điểm kinh doanh của Công ty cổ phần Tập đoàn MeliaHanoi
//                   và&nbsp;các công&nbsp;ty&nbsp;liên kết của Công ty cổ phần Tập
//                   đoàn MeliaHanoi được thành lập trên toàn quốc tại từng thời
//                   điểm.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Đối Tác”</strong> là đại lý du lịch/hãng lữ
//                   hành/doanh nghiệp/tổ chức, cá nhân giao kết Hợp Đồng với
//                   MeliaHanoi.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Khách”</strong> là cá nhân sử dụng dịch vụ của
//                   MeliaHanoi với mục đích tiêu dùng trực tiếp, không dùng để bán
//                   lại cho cá nhân, tổ chức khác.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“A” </strong>được hiểu là Người lớn.{" "}
//                   <strong>“C”</strong> được hiểu là Trẻ em.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   &nbsp;<strong>“Giá Công Bố”</strong>&nbsp;là giá phòng, giá
//                   dịch vụ được niêm yết tại Khách Sạn và tại website của
//                   MeliaHanoi&nbsp;
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                   . Giá phòng có thể thay đổi từng ngày.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Giá Gói Phòng”</strong> là giá dành cho đêm nghỉ kèm
//                   theo các dịch vụ được liệt kê trong Gói Phòng tương ứng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Dịch Vụ”</strong> bao gồm dịch vụ lưu trú, tiệc sự
//                   kiện, hoặc dịch vụ bổ sung khác mà MeliaHanoi cung
//                   cấp&nbsp;tại từng thời điểm như&nbsp;vận chuyển, bữa ăn, dịch
//                   vụ vui chơi giải trí…
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Ngày Làm Việc”</strong>&nbsp;là ngày từ thứ 2 đến thứ
//                   6 hàng tuần, trừ ngày nghỉ, ngày lễ theo quy định pháp luật.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“No-Show”</strong>&nbsp;là trường hợp Khách không đến
//                   nhận phòng cho đến 23 giờ 59 phút ngày nhận phòng hoặc thời
//                   điểm khác trong thời gian lưu trú theo thông báo của Khách/
//                   Đối tác và MeliaHanoi sẽ trả phòng về quỹ phòng trống để bán
//                   sau thời hạn này mà không cần thông báo cho Khách/ Đối tác nếu
//                   Khách không có mặt và làm thủ tục nhận phòng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“QĐC”</strong> là các quy định mà Khách cần phải tuân
//                   thủ trong thời gian lưu trú và sử dụng Dịch Vụ tại Khách Sạn
//                   và có thể được sửa đổi, bổ sung theo quyết định của MeliaHanoi
//                   tại từng thời điểm và đăng tải trên Trang Web của MeliaHanoi.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Tổng Giá” </strong>bao gồm tổng Giá Gói Phòng cho
//                   toàn bộ thời gian lưu trú và các dịch vụ bổ sung khác ngoài
//                   các dịch vụ liệt kê trong Gói Phòng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Voucher”</strong> là thẻ/phiếu mua Dịch Vụ trả tiền
//                   trước tồn tại dưới dạng vật lý hoặc dữ liệu điện tử do
//                   MeliaHanoi phát hành để ghi nhận quyền sử dụng Gói Phòng cho
//                   người sở hữu Voucher. Việc sử dụng Voucher phải tuân
//                   thủ&nbsp;QĐC, ĐKC&nbsp;và quy định chi tiết tại mỗi Voucher.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Trang Web” </strong>là website chính thức của
//                   MeliaHanoi tại địa chỉ&nbsp;
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Cổng thanh toán” </strong>là hệ thống thanh toán trực
//                   tiếp của website{" "}
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                   , qua đó Khách/ Đối tác có thể thực hiện thanh toán cho các
//                   phòng và dịch vụ đã lựa chọn trên Trang Web.
//                 </li>
//               </ol>
//             </li>
//           </ol>
//           <p
//             style={{
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <strong>
//               Điều 2. Quy định về voucher và sử dụng Voucher (nếu có sử dụng)
//             </strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: ".5in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Trừ khi có thỏa thuận khác hoặc MeliaHanoi có chính sách khác, Khách
//             sử dụng Voucher phải tuân thủ các quy định tại&nbsp;ĐKC, QĐC, các
//             điều kiện khác quy định trên Voucher và/hoặc chính sách cung cấp
//             Dịch Vụ tương ứng với loại Voucher được MeliaHanoi phát hành tại
//             thời điểm mà Khách sử dụng.&nbsp;Voucher gốc phải được xuất trình và
//             thu hồi tại thời điểm nhận phòng, trong trường hợp không xuất trình
//             được Voucher đủ điều kiện sử dụng thì Khách phải thanh toán trực
//             tiếp theo Giá Công Bố tại thời điểm nhận phòng. Voucher không có giá
//             trị quy đổi sang tiền mặt hoặc các dịch vụ khác và chỉ được sử dụng
//             1 lần không hoàn lại. Không trả lại tiền thừa nếu không dùng hết giá
//             trị Voucher. Voucher không được áp dụng đồng thời cùng các chương
//             trình khuyến mãi khác &amp; không được sử dụng để tích điểm vào thẻ
//             hội viên. Voucher khi sử dụng phải còn nguyên vẹn, không tẩy xóa
//             hoặc rách rời chắp vá. Voucher không được phát hành đổi trong trường
//             hợp bị mất hoặc hư hỏng. Áp dụng 01 Voucher/01 hóa đơn. Voucher
//             không có giá trị quy đổi thành tiền mặt hoặc Voucher có giá trị nhỏ
//             hơn. Nếu giá trị dịch vụ nhỏ hơn giá trị Voucher, Khách không được
//             hoàn lại khoản tiền dư.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 3. Quy định về nhận và trả phòng</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "35.45pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Trừ khi có thông báo và/hoặc xác nhận khác từ Khách Sạn, quy định
//             về&nbsp;nhận và trả phòng&nbsp;được áp dụng&nbsp;như sau:
//           </p>
//           <table
//             border={1}
//             className="MsoTableGrid"
//             style={{
//               borderCollapse: "collapse",
//               border: "1.0pt solid text",
//               marginLeft: "40.85pt",
//             }}
//           >
//             <tbody>
//               <tr>
//                 <td
//                   className="border-[1px] w-[278.35pt] border-divideLight dark:border-divideDark"
//                   colSpan={2}
//                   style={{
//                     padding: "0in 5.4pt",
//                   }}
//                   width="371"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Chính sách</strong>
//                   </p>
//                 </td>
//                 <td
//                   rowSpan={2}
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Phụ thu</strong>
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Nhận phòng sớm</strong>
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     width: "143.7pt",
//                     borderWidth: "1px",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     <strong>Trả phòng muộn</strong>
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Trước 6:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "143.7pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Sau 18:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Phụ thu 01 đêm tiền phòng
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 6:00 giờ tới trước 9:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "143.7pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 15:00 giờ tới trước 18:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Phụ thu 50% phí của 01 đêm tiền phòng
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "134.65pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="180"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 9:00 giờ tới trước 14:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "143.7pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="192"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Từ 12:00 giờ tới trước 15:00 giờ
//                   </p>
//                 </td>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   style={{
//                     borderWidth: "1px",
//                     width: "159.6pt",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="213"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "justify",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Phụ thu 30% phí của 01 đêm tiền phòng
//                   </p>
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   className="border-divideLight dark:border-divideDark"
//                   colSpan={3}
//                   style={{
//                     borderWidth: "1px",
//                     width: "437.95pt",
//                     borderTop: "none",
//                     padding: "0in 5.4pt",
//                   }}
//                   width="584"
//                 >
//                   <p
//                     style={{
//                       marginTop: "6.0pt",
//                       marginRight: "0in",
//                       marginBottom: "6.0pt",
//                       marginLeft: "0in",
//                       textAlign: "center",
//                       margin: "0in 0in 10pt",
//                     }}
//                   >
//                     Tùy thuộc vào tình trạng phòng sẵn có và xác nhận đồng ý của
//                     Khách sạn.
//                   </p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "35.45pt",
//               textAlign: "justify",
//             }}
//           >
//             Các khoản phí nhận phòng sớm/trả phòng muộn nêu trên sẽ được tính
//             theo Giá Công Bố của Khách sạn&nbsp;(bao gồm giá chương trình khuyến
//             mại nếu đang áp dụng tại thời điểm thanh toán)&nbsp;khi Khách trực
//             tiếp thanh toán cho Khách sạn.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 4. Chính sách đặt phòng và nhận phòng</strong>
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             4.1. Tất cả các Yêu Cầu Dịch Vụ của Khách/ Đối Tác phải được gửi cho
//             MeliaHanoi dưới hình thức qua yêu cầu từ Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             , qua email hoặc văn bản trước khi Khách làm thủ tục nhận phòng.
//             MeliaHanoi sẽ xác nhận đặt phòng/ dịch vụ được gửi qua email đăng ký
//             của Khách hàng.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             4.2. Quy định về lưu trú: Số lượng Khách tối đa trên một phòng Khách
//             Sạn&nbsp;(ngoại trừ các trường hợp đặc biệt được nói rõ)&nbsp;được
//             áp dụng như sau:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Tối đa 04 người trong 01 phòng ngủ bao gồm cả trẻ em dưới 12 tuổi:
//               03A &amp; 01C hoặc 02A &amp; 02C.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Mỗi phòng chỉ được đặt thêm 01 giường phụ tùy theo chính sách áp
//               dụng tại từng Khách sạn.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Áp dụng phụ thu trẻ em từ 06&nbsp;tuổi đến&nbsp;dưới 12 tuổi và
//               phụ thu người lớn dành cho khách từ 12 tuổi
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             &nbsp;4.3. Trường hợp đặc biệt:&nbsp;Trong một số trường hợp đặc
//             biệt (bao gồm nhưng không giới hạn: sự kiện bất khả kháng, hoạt động
//             nâng cấp, sửa chữa Khách Sạn v.v...), MeliaHanoi có quyền di dời
//             Khách sang loại phòng/ Khách Sạn khác có tiêu chuẩn tương đương loại
//             phòng/ Khách Sạn mà Khách/ Đối Tác đã đặt và được MeliaHanoi xác
//             nhận.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.4. Thông tin cung cấp cho Khách sạn trước ngày đến: Để Khách nhận
//             được chất lượng dịch vụ tốt nhất từ Khách Sạn và đảm bảo an ninh cho
//             Khách, Khách/ Đối Tác cần cung cấp cho bộ phận đặt phòng của Khách
//             Sạn:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Thông tin chuyến bay và thời gian tới Khách Sạn dự kiến cần được
//               cung cấp cho Khách Sạn ít nhất 05 ngày trước ngày Khách đến trong
//               trường hợp Khách yêu cầu dịch vụ đón, tiễn.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Nếu Khách/ Đối Tác không cung cấp thông tin đúng hạn, MeliaHanoi
//               có quyền hủy đặt phòng khỏi hệ thống, từ chối áp dụng giá ưu đãi
//               theo Voucher, xác nhận Yêu Cầu Dịch Vụ, thỏa thuận, hợp đồng đã ký
//               kết giữa Khách/ Đối Tác và MeliaHanoi. Trong trường hợp đó,
//               MeliaHanoi sẽ áp dụng Giá Công Bố tại Khách Sạn vào ngày Khách làm
//               thủ tục nhận phòng nếu còn phòng trống, và Đối Tác sẽ chịu hoàn
//               toàn trách nhiệm giải quyết các khiếu nại của Khách phát sinh do
//               việc cung cấp thông tin muộn.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Các yêu cầu đặc biệt khác như phòng ở tầng cao, phòng liền kề…, sẽ
//               được cung cấp tùy thuộc vào khả năng sẵn có của Khách Sạn tại thời
//               điểm nhận phòng.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.5. Thay đổi thông tin:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Đối với các Yêu Cầu Dịch Vụ được phép hủy hoặc thay đổi: Bất cứ sự
//               thay đổi nào về thông tin, bữa ăn, dịch vụ phát sinh so với Yêu
//               Cầu Dịch Vụ ban đầu cần được gửi cho bộ phận đặt phòng của Khách
//               Sạn trước số ngày tối thiểu để điều chỉnh Yêu Cầu Dịch Vụ theo quy
//               định ghi trong Xác nhận đặt phòng và được xác nhận của Bộ phận đặt
//               phòng của Khách sạn. Nếu sự thay đổi không được xác nhận trước,
//               MeliaHanoi có quyền áp dụng Giá Công Bố tại Khách Sạn vào ngày
//               Khách làm thủ tục nhận phòng và Đối Tác sẽ chịu hoàn toàn trách
//               nhiệm giải quyết các khiếu nại của Khách phát sinh do việc cung
//               cấp thông tin muộn. Trong trường hợp có thêm Khách (bao gồm cả trẻ
//               em) không có xác nhận trước, Khách/ Đối Tác sẽ phải trả một khoản
//               phụ thu tương ứng theo bảng Giá Công Bố của Khách Sạn tại thời
//               điểm nhận phòng.
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Đối với các Yêu Cầu Dịch Vụ không hoàn hủy: Những Yêu Cầu Dịch Vụ
//               có ghi chú “Không hoàn hủy” trong Xác nhận đặt phòng được coi là
//               không hoàn phí và không thể điều chỉnh thông tin. Nếu Khách không
//               đến sử dụng dịch vụ theo thời gian ghi trong Yêu Cầu Dịch Vụ, Đặt
//               phòng sẽ được coi là “No-Show” và Khách sạn không chịu trách nhiệm
//               hoàn tiền cho Yêu Cầu Dịch Vụ này.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.6.Thủ tục nhận phòng
//           </p>
//           <ul>
//             <li
//               style={{
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Khách cần xuất trình một trong những giấy tờ pháp lý thể hiện
//               thông tin về số định danh cá nhân theo quy định của pháp luật khi
//               làm thủ tục nhận phòng để phục vụ mục đích đăng ký, Khách Sạn sẽ
//               giữ một bản sao của những giấy tờ này.
//             </li>
//             <li
//               style={{
//                 textAlign: "justify",
//                 margin: "0in 0in 10pt",
//               }}
//             >
//               Khách cần xuất trình Xác nhận đặt phòng hoặc Mã đặt phòng của Yêu
//               Cầu Dịch Vụ đã thanh toán thành công trên Trang Web{" "}
//               <a
//                 href={url}
//                 style={{
//                   color: "#0563c1",
//                   textDecoration: "underline",
//                 }}
//               >
//                 {url}
//               </a>
//               . Trong trường hợp Khách không xuất trình được Xác nhận đặt phòng
//               hay Mã đặt phòng của Yêu Cầu Dịch Vụ đã thanh toán thành công,
//               Khách cần cung cấp thông tin đặt phòng bao gồm tên người đặt
//               phòng, số điện thoại, số lượng phòng đặt… để Lễ tân kiểm tra thông
//               tin trên Hệ thống. Trong trường hợp Lễ tân không xác nhận được
//               thông tin của Khách, Khách sạn có quyền từ chối Yêu Cầu Dịch Vụ
//               của Khách.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             4.7. Bằng việc đồng ý mua và sử dụng các dịch vụ của MeliaHanoi,
//             Khách đồng ý cho phép MeliaHanoi chụp ảnh và sử dụng hình ảnh của
//             Khách để phục vụ mục đích thống kê, quản lý lưu trú. MeliaHanoi cam
//             kết không sử dụng/cung cấp hình ảnh của Khách cho bên thứ ba (không
//             thuộc Tập đoàn MeliaHanoi) vì mục đích khác trừ trường hợp thực hiện
//             theo yêu cầu của cơ quan nhà nước có thẩm quyền hoặc được sự đồng ý
//             trước của Khách.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 5. Chính sách hoàn/hủy phòng</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             5.1. Khi lựa chọn dịch vụ qua Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             , trên Trang Web ghi rõ chính sách hoàn/hủy phòng áp dụng với từng
//             mức giá và chương trình khuyến mãi.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             5.2. Nếu Trang Web ghi “Không hoàn trả phí khi hủy phòng”, nghĩa là
//             Gói Phòng đó không áp dụng chính sách hoàn tiền nếu Khách yêu cầu
//             hủy/thay đổi thông tin trên Yêu Cầu Dịch Vụ.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             5.3. Nếu Trang Web ghi “Hủy miễn phí trước ngày …”, nghĩa là Khách
//             có quyền thay đổi thông tin hoặc hủy Yêu Cầu Dịch Vụ trước ngày ghi
//             chú.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 6. Điều khoản thanh toán và hoàn tiền (nếu có)</strong>
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             6.1. Khách/ Đối tác sau khi lựa chọn dịch vụ qua Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>{" "}
//             sẽ thực hiện điền thông tin người đặt phòng và thanh toán trực tiếp
//             toàn bộ Tổng Giá của Yêu Cầu Dịch Vụ qua Cổng thanh toán của Trang
//             Web. Sau khi thanh toán thành công, Khách/ Đối tác sẽ nhận được
//             email Xác nhận đặt phòng gửi tới email của người đặt phòng kèm theo
//             thông tin chi tiết về Yêu Cầu Dịch Vụ đã được xác nhận.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             6.2. Chính sách hoàn tiền áp dụng cho yêu cầu hủy Yêu Cầu Dịch Vụ
//             của Khách được ghi chú trong email Xác nhận đặt phòng được gửi tới
//             email của người đặt phòng sau khi thanh toán thành công.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             6.3. Trong trường hợp Khách phát sinh yêu cầu hủy Yêu Cầu Dịch Vụ và
//             hoàn tiền, Khách cần liên hệ trực tiếp tới Bộ phận đặt phòng của
//             Khách sạn để được hỗ trợ.
//           </p>
//           <p
//             style={{
//               listStyleType: "none",
//             }}
//           >
//             <strong>Điều 7. Lỗi kỹ thuật của Website</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.1. MeliaHanoi sẽ nỗ lực trong phạm vi hợp lý để duy trì hoạt động
//             bình thường của Trang Web{" "}
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             . Tuy nhiên, MeliaHanoi không bảo đảm rằng (i) các chức năng, công
//             cụ hỗ trợ được cung cấp tại Trang Web sẽ không bị gián đoạn hoặc
//             lỗi, (ii) Trang Web không bị nhiễm virus, phần mềm độc hại (malware)
//             hoặc các thành phần gây hại khác, và/hoặc (iii) mọi dữ liệu được
//             cung cấp trên Trang Web đều chính xác và không có các sai sót về kỹ
//             thuật trong quá trình tạo lập dữ liệu.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.2. Trong trường hợp phát sinh các sự cố về kỹ thuật như sự cố về
//             máy móc, lỗi phần mềm, lỗi hệ thống đường truyền internet, Trang Web
//             bị nhiễm virus (“Lỗi Kỹ Thuật”) hoặc trường hợp xảy ra sai sót về dữ
//             liệu đăng tải trên Trang Web như sai sót về giá (“Lỗi Dữ Liệu”),
//             MeliaHanoi sẽ nỗ lực trong phạm vi hợp lý để khắc phục Lỗi Kỹ Thuật
//             hoặc điều chỉnh Lỗi Dữ Liệu trong thời gian sớm nhất.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.3. MeliaHanoi có quyền từ chối thực hiện các giao dịch được xác
//             lập:
//           </p>
//           <ul>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//               }}
//             >
//               Do Lỗi Kỹ Thuật,
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//               }}
//             >
//               Trên cơ sở Lỗi Dữ Liệu, và/hoặc
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//               }}
//             >
//               Bị ảnh hưởng bởi Lỗi Kỹ Thuật và/hoặc Lỗi Dữ Liệu không phụ thuộc
//               vào nguồn gốc của các lỗi đó. Để cho rõ ràng, một lỗi dữ liệu là
//               một lỗi trên Trang Web (ví dụ về giá cả, điều kiện) mà một người
//               lý trí sẽ không coi là bình thường.
//             </li>
//           </ul>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.4.Trong trường hợp từ chối thực hiện thực giao dịch, MeliaHanoi sẽ
//             thông báo cho quý khách qua thư điện tử mà quý khách đã cung cấp khi
//             đặt dịch vụ, đồng thời hoàn lại khoản thanh toán liên quan đến giao
//             dịch bị từ chối mà quý khách đã thanh toán cho MeliaHanoi trong vòng
//             tối đa 45 ngày làm việc.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//             }}
//           >
//             7.5. Ngoài nghĩa vụ hoàn lại khoản thanh toán đã nhận theo quy định
//             tại Điều 7.4, MeliaHanoi không chịu trách nhiệm cho bất cứ tổn thất
//             hoặc thiệt hại nào mà Khách phải gánh chịu, dù trực tiếp hoặc gián
//             tiếp, phát sinh từ hoặc liên quan đến Lỗi Kỹ Thuật và/hoặc Lỗi Dữ
//             Liệu.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 8. Sửa chữa cải tạo</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             8.1. MeliaHanoi có quyền tiến hành sửa chữa, cải tạo hoặc nâng cấp/
//             thực hiện các chương trình bảo dưỡng định kỳ phù hợp với mục đích
//             duy trì điều kiện tốt nhất cho Khách Sạn. MeliaHanoi có toàn quyền
//             tự đưa ra các quyết định sửa chữa, nâng cấp, nhưng phải có thông báo
//             bằng văn bản đến Đối Tác/ Khách trước khi bắt đầu các công trình
//             nâng cấp lớn và kéo dài mà có thể ảnh hưởng đến sự hài lòng của Đối
//             Tác/ Khách.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             8.2. MeliaHanoi sẽ không chịu trách nhiệm với bất kỳ khiếu nại, yêu
//             cầu đối với các tổn thất và/hoặc thiệt hại mà Đối Tác/ Khách sẽ gặp
//             phải do cải tạo/nâng cấp sau khi đã thông báo trước với Đối Tác/
//             Khách.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 9. Sự kiện Bất khả kháng</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             MeliaHanoi và/ hoặc Đối Tác/ Khách sẽ không phải chịu trách nhiệm về
//             việc chậm trễ, không thực hiện Hợp Đồng/thỏa thuận cung cấp và sử
//             dụng dịch vụ (trừ nghĩa vụ thanh toán) hoặc các quyền và nghĩa vụ
//             của mỗi Bên quy định tại Điều khoản chung, Quy định chung nếu việc
//             chậm trễ, không thực hiện đó có nguyên nhân là do Sự kiện Bất khả
//             kháng. Sự kiện Bất khả kháng bao gồm nhưng không hạn chế: Bão lụt,
//             động đất, chiến tranh, hoả hoạn, sự thay đổi của chính sách, pháp
//             luật của nhà nước hoặc các sự kiện khách quan khác.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: ".25in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <u>
//               <strong>Với điều kiện:</strong>
//             </u>
//           </p>
//           <ol>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               a. Sự kiện Bất khả kháng đó hoàn toàn nằm ngoài sự kiểm soát hợp
//               lý hoặc không do lỗi hoặc sơ suất của Bên bị ảnh hưởng bởi Sự kiện
//               Bất khả kháng, mặc dù Bên đó đã áp dụng mọi biện pháp cần thiết và
//               trong khả năng cho phép để đề phòng, khắc phục hoặc giảm bớt thiệt
//               hại, gây ra việc chậm trễ hoặc gián đoạn, đình trệ việc thực hiện
//               nghĩa vụ.
//             </li>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               b. Trừ khi có ý kiến khác của MeliaHanoi bằng văn bản, Đối Tác/
//               Khách vẫn phải thực hiện các nghĩa vụ của mình một cách phù hợp
//               với hoàn cảnh thực tế cho phép và phải tiến hành mọi biện pháp hợp
//               lý để thực hiện các phần việc không bị Sự kiện Bất khả kháng gây
//               trở ngại.
//             </li>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               c. Trong thời hạn 03 (ba) ngày kể từ ngày xảy ra Sự kiện Bất khả
//               kháng, Bên bị ảnh hưởng bởi Sự kiện Bất khả kháng phải thông báo
//               văn bản cho Bên kia, trong đó nêu chi tiết về Sự kiện Bất khả
//               kháng, các biện pháp đã tiến hành để đề phòng, khắc phục thiệt
//               hại, dự kiến kế hoạch khắc phục và biện pháp giải quyết.
//             </li>
//           </ol>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 10. Bảo mật thông tin</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             10.1. Đối Tác/ Khách và MeliaHanoi cam kết rằng, trong thời gian
//             hiệu lực của Hợp Đồng và sau khi Hợp Đồng giữa Đối Tác/ Khách và
//             MeliaHanoi chấm dứt, Bên được tiết lộ sẽ tuyệt đối bảo mật các thông
//             tin mật (“Thông Tin Mật”) của Bên tiết lộ. Theo đó, Bên được tiết lộ
//             không được tiết lộ Thông Tin Mật cho bất kỳ bên thứ ba nào, dù là
//             trực tiếp hay gián tiếp, trong bất kỳ tình huống nào, khi không có
//             sự đồng ý bằng văn bản của của Bên tiết lộ trừ trường hợp quy định
//             dưới đây. Cho mục đích quy định tại điều này, Thông Tin Mật được
//             hiểu là các thông tin bao gồm nhưng không giới hạn các điều khoản
//             của Hợp Đồng ký giữa MeliaHanoi và Đối Tác/ Khách, và/hoặc các thông
//             tin, dữ liệu, văn bản được tạo ra do liên quan đến hoặc phát sinh từ
//             việc thực hiện Hợp Đồng, các thông tin, dữ liệu, văn bản được Bên
//             tiết lộ cung cấp cho Bên được tiết lộ cho dù dưới bất kỳ hình thức
//             nào để thực hiện Hợp Đồng. Ngoài ra, Thông Tin Mật còn bao gồm nhưng
//             không giới hạn các thông tin liên quan đến bí mật kinh doanh, bí mật
//             công nghệ, bí quyết thương mại, kiến thức hoặc các thông tin khác về
//             hoặc phục vụ cho tiếp thị tài chính, kinh doanh của Bên tiết lộ.
//           </p>
//           <p
//             style={{
//               marginTop: "10pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "0in 0in 10pt 0.5in",
//             }}
//           >
//             10.2. Nghĩa Vụ Bảo Mật sẽ được loại trừ nếu Thông Tin Mật:
//           </p>
//           <ol
//             style={{
//               listStyleType: "lower-alpha",
//             }}
//           >
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Đã được phổ biến rộng rãi trong công chúng bởi Bên tiết lộ;
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Do Bên được tiết lộ cung cấp cho nhân viên, chuyên gia tư vấn tài
//               chính, pháp lý hoặc nhà thầu của Bên được tiết lộ vì mục đích thực
//               hiện các nghĩa vụ của Bên được tiết lộ theo Hợp Đồng này, với điều
//               kiện là Bên được tiết lộ phải chịu trách nhiệm và đảm bảo các đối
//               tượng được tiết lộ Thông Tin Mật phải tuân thủ quy định bảo mật
//               như nội dung nêu trên;
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Do Bên được tiết lộ nhận được từ một bên thứ ba độc lập với việc
//               thực hiện Hợp Đồng này mà không chịu bất kỳ nghĩa vụ bảo mật nào;
//               hoặc
//             </li>
//             <li
//               style={{
//                 marginTop: "6.0pt",
//                 marginRight: "0in",
//                 marginBottom: "6.0pt",
//                 textAlign: "justify",
//                 marginLeft: "0.5in",
//                 margin: "0in 0in 5pt 0.5in",
//               }}
//             >
//               Được yêu cầu tiết lộ bởi cơ quan chức năng hoặc bất kỳ toà án có
//               thẩm quyền xét xử thích hợp nào đối với Bên được tiết lộ.
//             </li>
//           </ol>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               marginLeft: "0.5in",
//               margin: "0in 0in 10pt 0.5in",
//             }}
//           >
//             10.3. Bên được tiết lộ đồng ý rằng bất cứ vi phạm nào đối với Nghĩa
//             Vụ Bảo Mật thông tin này có thể gây ra những tổn hại không thể khôi
//             phục được với Bên tiết lộ, theo đó Bên tiết lộ sẽ có quyền tìm kiếm
//             các biện pháp để giảm nhẹ thiệt hại và buộc Bên được tiết lộ bồi
//             thường toàn bộ thiệt hại là một khoản tiền không thấp hơn giá trị
//             Hợp Đồng.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               marginLeft: "0.5in",
//               margin: "0in 0in 10pt 0.5in",
//             }}
//           >
//             &nbsp;
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               textAlign: "justify",
//               margin: "12pt 0in 0in",
//             }}
//           >
//             <strong>Điều 11. Giải quyết tranh chấp</strong>
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Các quy định tại Điều khoản chung, Quy định chung sẽ được điều chỉnh
//             bởi pháp luật Việt Nam. Tất cả các tranh chấp phát sinh liên quan
//             đến việc yêu cầu, sử dụng Dịch Vụ của Đối Tác/ Khách theo quy định
//             tại Hợp Đồng và Điều khoản chung, Quy định chung sẽ được cố gắng
//             giải quyết thông qua thương lượng. Trường hợp thương lượng, đàm phán
//             không thành công trong vòng 30 (ba mươi) ngày kể từ ngày phát sinh
//             tranh chấp, Các Bên sẽ có quyền đưa tranh chấp ra giải quyết tại Tòa
//             án có thẩm quyền tại Việt Nam theo quy định của pháp luật.
//           </p>
//           <ol>
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               &nbsp;
//             </li>
//           </ol>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default GeneralTerms;

// import { Container } from "../../../components";

// const GeneralTerms = () => {
//   const url = "http://localhost:5173/";

//   return (
//     <div className="p-10">
//       <Container>
//         <h1 className="text-center text-3xl font-semibold text-textLight dark:text-textDark">
//           ĐIỀU KHOẢN CHUNG
//         </h1>

//         <hr className="my-6 border-divideLight sm:mx-auto dark:border-divideDark lg:my-8" />

//         <div className="d-content-news text-textLight dark:text-textDark2nd">
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Điều Khoản Chung&nbsp;<strong>(“ĐKC”)</strong>&nbsp;này áp dụng cho
//             các Khách và Đối Tác sử dụng hoặc đặt dịch vụ tại khách sạn
//             MeliaHanoi, và các thương hiệu khác thuộc quyền sở hữu, quản lý
//             và/hoặc khai thác của MeliaHanoi (nếu có) trong tương lai{" "}
//             <strong>(“Khách Sạn”)</strong>. Khách/ Đối tác và MeliaHanoi được
//             gọi riêng là <strong>“Bên” </strong>
//             và gọi chung là <strong>“Các Bên”</strong>.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             Khách/ Đối tác đồng ý và thừa nhận rằng bằng việc gửi cho Khách Sạn
//             yêu cầu đặt phòng, yêu cầu sự kiện và/hoặc các dịch vụ&nbsp;bổ
//             sung&nbsp; (gọi chung là “Yêu Cầu Dịch Vụ”) và được MeliaHanoi xác
//             nhận&nbsp;dịch vụ&nbsp;là Khách và Đối Tác đã đọc và chấp
//             nhận&nbsp;ĐKC, Quy Định Chung
//             <strong>&nbsp;(“QĐC”)&nbsp;</strong>và những thay đổi&nbsp;ĐKC,
//             QĐC&nbsp;tại từng thời điểm được đăng tải trên Trang Web chính thức
//             của MeliaHanoi tại địa chỉ&nbsp;
//             <a
//               href={url}
//               style={{
//                 color: "#0563c1",
//                 textDecoration: "underline",
//               }}
//             >
//               {url}
//             </a>
//             &nbsp;<strong>(“Trang Web”)</strong> cũng như các chính sách cung
//             cấp dịch vụ, báo giá dịch vụ được MeliaHanoi thông báo, cung cấp.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             ĐKC&nbsp;là một phần không thể tách rời của hợp đồng, thỏa thuận
//             cung cấp, sử dụng dịch vụ hoặc Yêu Cầu Dịch Vụ được xác nhận giữa
//             MeliaHanoi và Khách /Đối Tác <strong>(“Hợp Đồng”)</strong>.
//           </p>
//           <p
//             style={{
//               marginTop: "6.0pt",
//               marginRight: "0in",
//               marginBottom: "6.0pt",
//               marginLeft: "0in",
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <strong>
//               Điều 1. Định nghĩa chung về dịch vụ phòng nghỉ, Doanh nghiệp,
//               Khách, các thuật ngữ sử dụng trong thỏa thuận về giao dịch giữa
//               Khách và doanh nghiệp
//             </strong>
//           </p>
//           <ol className="ml-10">
//             <li
//               style={{
//                 listStyleType: "none",
//               }}
//             >
//               <ol
//                 style={{
//                   listStyleType: "lower-alpha",
//                 }}
//               >
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“MeliaHanoi” </strong>có nghĩa là Công ty cổ phần Tập
//                   đoàn MeliaHanoi, các công&nbsp;ty&nbsp;liên kết của Công ty cổ
//                   phần Tập đoàn MeliaHanoi và các chi nhánh, văn phòng đại diện,
//                   địa điểm kinh doanh của Công ty cổ phần Tập đoàn MeliaHanoi
//                   và&nbsp;các công&nbsp;ty&nbsp;liên kết của Công ty cổ phần Tập
//                   đoàn MeliaHanoi được thành lập trên toàn quốc tại từng thời
//                   điểm.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Đối Tác”</strong> là đại lý du lịch/hãng lữ
//                   hành/doanh nghiệp/tổ chức, cá nhân giao kết Hợp Đồng với
//                   MeliaHanoi.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Khách”</strong> là cá nhân sử dụng dịch vụ của
//                   MeliaHanoi với mục đích tiêu dùng trực tiếp, không dùng để bán
//                   lại cho cá nhân, tổ chức khác.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“A” </strong>được hiểu là Người lớn.{" "}
//                   <strong>“C”</strong> được hiểu là Trẻ em.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   &nbsp;<strong>“Giá Công Bố”</strong>&nbsp;là giá phòng, giá
//                   dịch vụ được niêm yết tại Khách Sạn và tại website của
//                   MeliaHanoi&nbsp;
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                   . Giá phòng có thể thay đổi từng ngày.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Giá Gói Phòng”</strong> là giá dành cho đêm nghỉ kèm
//                   theo các dịch vụ được liệt kê trong Gói Phòng tương ứng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Dịch Vụ”</strong> bao gồm dịch vụ lưu trú, tiệc sự
//                   kiện, hoặc dịch vụ bổ sung khác mà MeliaHanoi cung
//                   cấp&nbsp;tại từng thời điểm như&nbsp;vận chuyển, bữa ăn, dịch
//                   vụ vui chơi giải trí…
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Ngày Làm Việc”</strong>&nbsp;là ngày từ thứ 2 đến thứ
//                   6 hàng tuần, trừ ngày nghỉ, ngày lễ theo quy định pháp luật.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“No-Show”</strong>&nbsp;là trường hợp Khách không đến
//                   nhận phòng cho đến 23 giờ 59 phút ngày nhận phòng hoặc thời
//                   điểm khác trong thời gian lưu trú theo thông báo của Khách/
//                   Đối tác và MeliaHanoi sẽ trả phòng về quỹ phòng trống để bán
//                   sau thời hạn này mà không cần thông báo cho Khách/ Đối tác nếu
//                   Khách không có mặt và làm thủ tục nhận phòng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“QĐC”</strong> là các quy định mà Khách cần phải tuân
//                   thủ trong thời gian lưu trú và sử dụng Dịch Vụ tại Khách Sạn
//                   và có thể được sửa đổi, bổ sung theo quyết định của MeliaHanoi
//                   tại từng thời điểm và đăng tải trên Trang Web của MeliaHanoi.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Tổng Giá” </strong>bao gồm tổng Giá Gói Phòng cho
//                   toàn bộ thời gian lưu trú và các dịch vụ bổ sung khác ngoài
//                   các dịch vụ liệt kê trong Gói Phòng.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Voucher”</strong> là thẻ/phiếu mua Dịch Vụ trả tiền
//                   trước tồn tại dưới dạng vật lý hoặc dữ liệu điện tử do
//                   MeliaHanoi phát hành để ghi nhận quyền sử dụng Gói Phòng cho
//                   người sở hữu Voucher. Việc sử dụng Voucher phải tuân
//                   thủ&nbsp;QĐC, ĐKC&nbsp;và quy định chi tiết tại mỗi Voucher.
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Trang Web” </strong>là website chính thức của
//                   MeliaHanoi tại địa chỉ&nbsp;
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                 </li>
//                 <li
//                   style={{
//                     marginTop: "6.0pt",
//                     marginRight: "0in",
//                     marginBottom: "6.0pt",
//                     textAlign: "justify",
//                     margin: "0in 0in 10pt",
//                   }}
//                 >
//                   <strong>“Cổng thanh toán” </strong>là hệ thống thanh toán trực
//                   tiếp của website{" "}
//                   <a
//                     href={url}
//                     style={{
//                       color: "#0563c1",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     {url}
//                   </a>
//                   , qua đó Khách/ Đối tác có thể thực hiện thanh toán cho các
//                   phòng và dịch vụ đã lựa chọn trên Trang Web.
//                 </li>
//               </ol>
//             </li>
//           </ol>
//           <p
//             style={{
//               textAlign: "justify",
//               margin: "0in 0in 10pt",
//             }}
//           >
//             <strong>
//               Điều 2. Quy định về voucher và sử dụng Voucher (nếu có sử dụng)
//             </strong>
//         