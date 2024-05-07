import { Container } from "../../../components";

const RegulationsBookingInformation = () => {
  const url = "http://localhost:5173/";

  return (
    <div className="py-10">
      <Container>
        <h1 className="text-center text-3xl font-semibold text-textLight dark:text-textDark">
          QUY ĐỊNH VỀ XÁC NHẬN THÔNG TIN ĐẶT PHÒNG
        </h1>
        <hr className="my-6 border-divideLight sm:mx-auto dark:border-divideDark lg:my-8" />

        <div className="d-content-news text-textLight dark:text-textDark2nd">
          <p
            style={{
              listStyleType: "none",
            }}
          >
            <strong>I. QUY ĐỊNH ĐẶT PHÒNG:</strong>
          </p>

          <p
            style={{
              listStyleType: "none",
            }}
          >
            1. Tất cả các Yêu Cầu Dịch Vụ của Khách hàng/ Đối tác phải được gửi
            cho MeliaHanoi dưới hình thức qua yêu cầu từ Trang Web&nbsp;
            <a
              href={url}
              style={{
                color: "#0563c1",
                textDecoration: "underline",
              }}
            >
              {url}
            </a>
            &nbsp;, qua email hoặc văn bản trước khi Khách làm thủ tục nhận
            phòng. MeliaHanoi sẽ xác nhận đặt phòng/ dịch vụ được gửi qua email
            đăng ký của Khách hàng.
          </p>

          <p
            style={{
              listStyleType: "none",
            }}
          >
            <span style={{ textAlign: "justify" }}>
              2. Quy định về lưu trú: Số lượng Khách tối đa trên một phòng Khách
              Sạn&nbsp;(ngoại trừ các trường hợp đặc biệt được nói rõ)&nbsp;được
              áp dụng như sau:
            </span>
          </p>

          <ul>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Tối đa 04 người trong 01 phòng ngủ bao gồm cả trẻ em dưới 12 tuổi:
              03A &amp; 01C hoặc 02A &amp; 02C.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Mỗi phòng chỉ được đặt thêm 01 giường phụ tùy theo chính sách áp
              dụng tại từng Khách sạn.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Áp dụng phụ thu trẻ em từ 06&nbsp;tuổi đến&nbsp;dưới 12 tuổi và
              phụ thu người lớn dành cho khách từ 12 tuổi.
            </li>
          </ul>

          <p
            style={{
              marginTop: "6pt",
              marginRight: "0in",
              marginBottom: "6pt",
              marginLeft: "0in",
              textAlign: "justify",
            }}
          >
            3. Trường hợp đặc biệt:&nbsp;trong một số trường hợp đặc biệt (bao
            gồm nhưng không giới hạn: sự kiện bất khả kháng, hoạt động nâng cấp,
            sửa chữa Khách Sạn v.v...), MeliaHanoi có quyền di dời Khách sang
            loại phòng/ Khách Sạn khác có tiêu chuẩn tương đương loại phòng/
            Khách Sạn mà Khách hàng/ Đối tác đã đặt và được MeliaHanoi xác nhận.
          </p>

          <p
            style={{
              marginTop: "6pt",
              marginRight: "0in",
              marginBottom: "6pt",
              marginLeft: "0in",
              textAlign: "justify",
            }}
          >
            4. Thông tin cung cấp cho Khách sạn trước ngày đến: Để Khách nhận
            được chất lượng dịch vụ tốt nhất từ Khách Sạn và đảm bảo an ninh cho
            Khách, Khách hàng/ Đối tác cần cung cấp cho bộ phận đặt phòng của
            Khách Sạn:
          </p>

          <ul>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Thông tin chuyến bay và thời gian tới Khách Sạn dự kiến cần được
              cung cấp cho Khách Sạn ít nhất 05 ngày trước ngày Khách đến trong
              trường hợp Khách yêu cầu dịch vụ đón, tiễn.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Nếu Khách hàng/ Đối tác không cung cấp thông tin đúng hạn,
              MeliaHanoi có quyền hủy đặt phòng khỏi hệ thống, từ chối áp dụng
              giá ưu đãi theo Voucher, xác nhận Yêu Cầu Dịch Vụ, thỏa thuận, hợp
              đồng đã ký kết giữa Khách hàng/ Đối tác và MeliaHanoi. Trong
              trường hợp đó, MeliaHanoi sẽ áp dụng Giá Công Bố tại Khách Sạn vào
              ngày Khách làm thủ tục nhận phòng nếu còn phòng trống, và Đối Tác
              sẽ chịu hoàn toàn trách nhiệm giải quyết các khiếu nại của Khách
              phát sinh do việc cung cấp thông tin muộn.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Các yêu cầu đặc biệt khác như phòng ở tầng cao, phòng liền kề…, sẽ
              được cung cấp tùy thuộc vào khả năng sẵn có của Khách Sạn tại thời
              điểm
              <br />
              nhận phòng.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
                marginLeft: "0in",
              }}
            >
              Quy định nhận, trả phòng
            </li>
          </ul>

          <p
            style={{
              marginTop: "6pt",
              marginRight: "0in",
              marginBottom: "6pt",
              marginLeft: "35.45pt",
              textAlign: "justify",
            }}
          >
            <strong>II. QUY ĐỊNH NHẬN, TRẢ PHÒNG</strong>
          </p>

          <p
            style={{
              marginTop: "6pt",
              marginRight: "0in",
              marginBottom: "6pt",
              marginLeft: "35.45pt",
              textAlign: "justify",
            }}
          >
            Trừ khi có thông báo và/hoặc xác nhận khác từ Khách Sạn, quy định
            về&nbsp;nhận và trả phòng&nbsp;được áp dụng&nbsp;như sau:
          </p>
          <style type="text/css"></style>
          <div style={{ display: "block", margin: "0 auto" }}>
            <table
              border={1}
              className="MsoTableGrid"
              style={{
                borderCollapse: "collapse",
                border: "1pt solid black",
                margin: "0 auto",
              }}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      border: "1pt solid black",
                      width: "278.35pt",
                      padding: "0in 5.4pt",
                    }}
                    width="371"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "center",
                      }}
                    >
                      Chính sách
                    </p>
                  </td>
                  <td
                    rowSpan={2}
                    style={{
                      border: "1pt solid black",
                      width: "159.6pt",
                      borderLeft: "none",
                      padding: "0in 5.4pt",
                    }}
                    width="213"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "center",
                      }}
                    >
                      Phụ thu
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1pt solid black",
                      width: "134.65pt",
                      borderTop: "none",
                      padding: "0in 5.4pt",
                    }}
                    width="180"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "center",
                      }}
                    >
                      Nhận phòng sớm
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "143.7pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="192"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "center",
                      }}
                    >
                      Trả phòng muộn
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1pt solid black",
                      width: "134.65pt",
                      borderTop: "none",
                      padding: "0in 5.4pt",
                    }}
                    width="180"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                      }}
                    >
                      Trước 6:00 giờ
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "143.7pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="192"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                      }}
                    >
                      Sau 18:00 giờ
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "159.6pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="213"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "justify",
                      }}
                    >
                      Phụ thu 01 đêm tiền phòng
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1pt solid black",
                      width: "134.65pt",
                      borderTop: "none",
                      padding: "0in 5.4pt",
                    }}
                    width="180"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                      }}
                    >
                      Từ 6:00 giờ tới trước 9:00 giờ
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "143.7pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="192"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                      }}
                    >
                      Từ 15:00 giờ tới trước 18:00 giờ
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "159.6pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="213"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "justify",
                      }}
                    >
                      Phụ thu 50% phí của 01 đêm tiền phòng
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: "1pt solid black",
                      width: "134.65pt",
                      borderTop: "none",
                      padding: "0in 5.4pt",
                    }}
                    width="180"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                      }}
                    >
                      Từ 9:00 giờ tới trước 14:00 giờ
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "143.7pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="192"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                      }}
                    >
                      Từ 12:00 giờ tới trước 15:00 giờ
                    </p>
                  </td>
                  <td
                    style={{
                      borderBottom: "1pt solid black",
                      width: "159.6pt",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "1pt solid black",
                      padding: "0in 5.4pt",
                    }}
                    width="213"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "justify",
                      }}
                    >
                      Phụ thu 30% phí của 01 đêm tiền phòng
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    style={{
                      border: "1pt solid black",
                      width: "437.95pt",
                      borderTop: "none",
                      padding: "0in 5.4pt",
                    }}
                    width="584"
                  >
                    <p
                      style={{
                        marginTop: "6pt",
                        marginRight: "0in",
                        marginBottom: "6pt",
                        marginLeft: "0in",
                        textAlign: "center",
                      }}
                    >
                      Tùy thuộc vào tình trạng phòng sẵn có và xác nhận đồng ý
                      của Khách sạn.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            style={{
              marginTop: "6pt",
              marginRight: "0in",
              marginBottom: "6pt",
              textAlign: "justify",
            }}
          >
            Các khoản phí nhận phòng sớm/trả phòng muộn nêu trên sẽ đươc tính
            theo Giá Công Bố của Khách sạn&nbsp;(bao gồm giá chương trình khuyến
            mại nếu đang áp dụng tại thời điểm thanh toán)&nbsp;khi Khách trực
            tiếp thanh toán cho Khách sạn.
          </p>

          <p
            style={{
              marginTop: "6pt",
              marginRight: "0in",
              marginBottom: "6pt",
              textAlign: "justify",
            }}
          >
            &nbsp;
          </p>

          <p
            style={{
              listStyleType: "none",
            }}
          >
            <strong>III. QUY ĐỊNH HOÀN/HỦY PHÒNG</strong>
          </p>

          <ol>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
              }}
              value="1"
            >
              Khi lựa chọn dịch vụ qua Trang Web&nbsp;
              <a
                href={url}
                style={{
                  color: "#0563c1",
                  textDecoration: "underline",
                }}
              >
                {url}
              </a>
              &nbsp;, trên Trang Web ghi rõ chính sách hoàn/hủy phòng áp dụng
              với từng mức giá và chương trình khuyến mãi.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
              }}
            >
              Nếu Trang Web ghi “Không hoàn trả phí khi hủy phòng”, nghĩa là Gói
              Phòng đó không áp dụng chính sách hoàn tiền nếu Khách yêu cầu
              hủy/thay đổi thông tin trên Yêu Cầu Dịch Vụ.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
              }}
            >
              Nếu Trang Web ghi “Hủy miễn phí trước ngày …”, nghĩa là Khách có
              quyền thay đổi thông tin hoặc hủy Yêu Cầu Dịch Vụ trước ngày ghi
              chú.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
              }}
            >
              Chính sách thay đổi thông tin/hoàn tiền áp dụng cho yêu cầu hủy
              Yêu Cầu Dịch Vụ của Khách cũng được ghi chú trong email Xác nhận
              đặt phòng được gửi tới email của người đặt phòng sau khi thanh
              toán thành công.
            </li>
            <li
              style={{
                marginTop: "6pt",
                marginRight: "0in",
                marginBottom: "6pt",
                textAlign: "justify",
              }}
            >
              Trong trường hợp Khách phát sinh yêu cầu thay đổi thông tin hoặc
              hủy Yêu Cầu Dịch Vụ và hoàn tiền, Khách cần liên hệ trực tiếp tới
              Bộ phận đặt phòng của Khách sạn theo thông tin ở Mục 2.8 để được
              hỗ trợ.
            </li>
          </ol>
        </div>
      </Container>
    </div>
  );
};

export default RegulationsBookingInformation;
