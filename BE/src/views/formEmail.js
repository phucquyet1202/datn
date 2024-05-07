export const emailRegister = (name) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Cảm ơn bạn đã đăng ký tài khoản!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Kính gửi ${name},</p>
          <p>Chúng tôi xin gửi lời cảm ơn chân thành đến bạn vì đã đăng ký tài khoản trên trang web của chúng tôi.</p>
          <p>Việc đăng ký tài khoản sẽ giúp bạn trải nghiệm các dịch vụ và tiện ích tốt nhất mà chúng tôi cung cấp. Từ việc đặt phòng dễ dàng đến những ưu đãi và khuyến mãi hấp dẫn, chúng tôi cam kết mang đến cho bạn trải nghiệm đặt phòng khách sạn tốt nhất.</p>
          <p>Nếu bạn có bất kỳ câu hỏi hoặc cần sự hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua địa chỉ email
          <a href="mailto:support@kinghotel.com" style="color: #007bff;  text-decoration: none;" >support@kinghotel.com</a>
          hoặc số điện thoại 1800-203-203.
          </p>
          <p>Một lần nữa, chúng tôi xin chân thành cảm ơn bạn vì đã lựa chọn khách sạn của chúng tôi. Chúng tôi rất mong được phục vụ bạn trong thời gian tới.</p>
          <p>Trân trọng,</p>
          <p>King Hotel</p>
        </div>
      </div>
    </div>
  `;
};

export const emailOauthRegister = (name, password) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Chào mừng ${name} đến với chúng tôi!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Xin chân thành cảm ơn ${name} đã lựa chọn chúng tôi.</p>
          <p>Tài khoản của bạn đã được tạo thành công trên trang web của chúng tôi.</p>
          <p>Mật khẩu mặc định của bạn là: <strong>${password}</strong></p>
          <p>Bạn có thể đăng nhập bằng tài khoản này và sau đó thay đổi mật khẩu theo ý muốn.</p>
          <p>Nếu bạn có bất kỳ câu hỏi hoặc cần sự hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua địa chỉ email
          <a href="mailto:support@kinghotel.com" style="color: #007bff;  text-decoration: none;" >support@kinghotel.com</a>
          hoặc số điện thoại 1800-203-203.
          </p>
          <p>Chúng tôi rất mong được phục vụ bạn trong thời gian tới.</p>
          <p>Trân trọng,</p>
          <p>King Hotel</p>
        </div>
      </div>
    </div>
  `;
};

export const formChangePassword = (name, randomCode) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
            Xin chào, ${name}!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Chúng tôi nhận được yêu cầu thay đổi mật khẩu cho tài khoản của bạn.</p>
          <p>Mã xác nhận của bạn là: <strong>${randomCode}</strong></p>
          <p>Vui lòng sử dụng mã này để thay đổi mật khẩu của bạn theo bước tiếp theo trên trang web của chúng tôi.</p>
          <p>Đây là một mã xác nhận duy nhất và chỉ có hiệu lực trong một khoảng thời gian ngắn.</p>
          <p>Nếu bạn không thực hiện yêu cầu này, vui lòng liên hệ chúng tôi ngay lập tức qua địa chỉ email
            <a href="mailto:support@kinghotel.com" style="color: #007bff;  text-decoration: none;" >support@kinghotel.com</a>
              hoặc số điện thoại 1800-203-203.
          </p>
          <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
          <p>Trân trọng,</p>
          <p>King Hotel</p>
        </div>
      </div>
    </div>
  `;
};

export const formPasswordChanged = (name) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Xin chào, ${name}!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Mật khẩu của bạn đã được thay đổi thành công.</p>
          <p>Nếu bạn không thực hiện thay đổi này, vui lòng liên hệ chúng tôi ngay lập tức qua địa chỉ email
            <a href="mailto:support@kinghotel.com" style="color: #007bff;  text-decoration: none;" >support@kinghotel.com</a>
            hoặc số điện thoại 1800-203-203.
          </p>
          <p>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi!</p>
          <p>Trân trọng,</p>
          <p>King Hotel</p>
        </div>
      </div>
    </div>
  `;
};

export const formResetPassword = (
  name,
  email,
  randomCode,
  resetPasswordUrl
) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Xin chào, ${name}!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Chúng tôi nhận được yêu cầu quên mật khẩu cho tài khoản ${email} của bạn.</p>
          <p>Mã xác nhận của bạn là: <strong>${randomCode}</strong></p>
          <p>Vui lòng sử dụng mã này để thay đổi mật khẩu của bạn theo bước tiếp theo trên trang web của chúng tôi.</p>
          <p>Đây là một mã xác nhận duy nhất và chỉ có hiệu lực trong một khoảng thời gian ngắn.</p>
          <p>
            Để đổi mật khẩu, vui lòng nhấn vào
            <a href="${resetPasswordUrl}" style="color: #007bff; text-decoration: none;">đây</a>
          </p>
          <p>Nếu bạn không thực hiện yêu cầu này, vui lòng liên hệ chúng tôi ngay lập tức qua địa chỉ email
            <a href="mailto:support@kinghotel.com" style="color: #007bff; text-decoration: none;">support@kinghotel.com</a>
            hoặc số điện thoại 1800-203-203.
          </p>
          <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
          <p>Trân trọng,</p>
          <p>King Hotel</p>
        </div>
      </div>
    </div>
  `;
};

export const emailBooking = (name, checkInDate, checkOutDate, totalPrice) => {
  return /*html */ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
          <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
              Xin chào, ${name}!
          </div>
          <div style="font-size: 16px; color: #555555; line-height: 1.6;">
              <p>Cảm ơn bạn đã chọn SevenTeen Hotel để trải nghiệm dịch vụ của chúng tôi!</p>
              <p>Chúng tôi xác nhận rằng đơn đặt phòng của bạn đã được xử lý thành công.</p>
              <p>Chi tiết đặt phòng:</p>
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                  <li><strong>Ngày nhận phòng:</strong> ${checkInDate}</li>
                  <li><strong>Ngày trả phòng:</strong> ${checkOutDate}</li>
                  <li><strong>Tổng giá:</strong> ${totalPrice} VNĐ</li>
              </ul>
              <p>Chúng tôi đã ghi lại thông tin của bạn và sẽ đảm bảo mọi dịch vụ được chuẩn bị trước sự đến của bạn.</p>
              <p>Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu đặc biệt nào, vui lòng liên hệ với chúng tôi qua địa chỉ email
                  <a href="mailto:support@kinghotel.com" style="color: #007bff; text-decoration: none;">support@kinghotel.com</a>
                  hoặc số điện thoại 1800-203-203.</p>
              <p>Chúng tôi mong rằng bạn sẽ có một kỳ nghỉ tuyệt vời tại King Hotel!</p>
              <p>Trân trọng,</p>
              <p>King Hotel</p>
          </div>
      </div>
    </div>
  `;
};

export const emailCancelBooking = (name, check_in, check_out) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Xin chào, ${name}!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Chào mừng bạn đến với King Hotel!</p>
          <p>Chúng tôi xác nhận rằng yêu cầu hủy đặt phòng của bạn cho đơn hàng từ ngày ${check_in} đến ngày ${check_out} đã được xử lý thành công.</p>
          <p>Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ thêm, đừng ngần ngại liên hệ với chúng tôi:</p>
          <ul style="list-style: none; padding: 0;">
            <li>Email: <a href="mailto:support@kinghotel.com" style="color: #007bff;  text-decoration: none;">support@kinghotel.com</a></li>
            <li>Số điện thoại: 1800-203-203</li>
          </ul>
          <p>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi. Chúng tôi rất mong được phục vụ bạn trong tương lai.</p>
          <p>Trân trọng,</p>
          <p>Đội ngũ hỗ trợ của King Hotel</p>
        </div>
      </div>
    </div>
  `;
};

export const emailSuccessBooking = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Xin chào, ${name}!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Lời đầu tiên, Khách sạn King Hotel xin gửi lời cám ơn chân thành và sâu sắc nhất đến Quý khách hàng đã tin tưởng hợp tác và sử dụng dịch vụ của chúng tôi. Sự tin tưởng của quý vị đã góp phần lớn quyết định sự phát triển và thành công của khách sạn trong thời gian qua.</p>
          <p>Với phương châm “Vì sự hài lòng cao nhất của khách hàng”, trong những năm qua, Khách sạn chúng tôi đã và đang không ngừng phấn đấu, nâng cao chất lượng dịch vụ để mang lại nhiều lợi ích hơn và có thể đáp ứng mọi yêu cầu của khách hàng.</p>
          <p>Chúng tôi luôn biết rằng, sự ủng hộ và sự tin yêu của Quý khách hàng là tài sản vô giá với Khách sạn chúng tôi, để đạt được điều này chúng tôi luôn nỗ lực không ngừng, hướng tới mục tiêu phát triển bền vững, chú trọng xây dựng các chính sách chăm sóc khách hàng,mang lại những giá trị thiết thực để luôn làm hài lòng khách hàng ở mức cao nhất nhằm đáp lại tình cảm và sự tin yêu của Quý khách.</p>
          <p>Một lần nữa, Khách sạn chúng tôi xin được gửi lời cảm ơn chân thành đến Quý khách hàng đã không ngừng quan tâm và luôn đồng hành cùng Khách sạn chúng tôi trong suốt thời gian qua. Chúng tôi cũng hy vọng trong thời gian tới sẽ tiếp tục nhận được sự quan tâm và tín nhiệm của Quý khách.</p>
          <p>Xin chúc quý khách hàng sức khỏe, may mắn và thành công</p>
          <p>Trân trọng,</p>
        </div>
      </div>
    </div>
  `;
};

export const checkEmailRegister = (name, code) => {
  return /*html*/ `
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 10px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <div style="font-size: 24px; font-weight: bold; color: #333333; margin-bottom: 10px;">
          Cảm ơn bạn đã đăng ký tài khoản!
        </div>
        <div style="font-size: 16px; color: #555555; line-height: 1.6;">
          <p>Kính gửi ${name},</p>
          <p>Chúng tôi xin gửi lời cảm ơn chân thành đến bạn vì đã đăng ký tài khoản trên trang web của chúng tôi.</p>
          <p>Mã xác nhận của bạn là (Chỉ có tác dụng trong 3 phút): <strong>${code}</strong></p>
          <p>Việc đăng ký tài khoản sẽ giúp bạn trải nghiệm các dịch vụ và tiện ích tốt nhất mà chúng tôi cung cấp. Từ việc đặt phòng dễ dàng đến những ưu đãi và khuyến mãi hấp dẫn, chúng tôi cam kết mang đến cho bạn trải nghiệm đặt phòng khách sạn tốt nhất.</p>
          <p>Nếu bạn có bất kỳ câu hỏi hoặc cần sự hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua địa chỉ email
          <a href="mailto:support@kinghotel.com" style="color: #007bff;  text-decoration: none;" >support@kinghotel.com</a>
          hoặc số điện thoại 1800-203-203.
          </p>
          <p>Một lần nữa, chúng tôi xin chân thành cảm ơn bạn vì đã lựa chọn khách sạn của chúng tôi. Chúng tôi rất mong được phục vụ bạn trong thời gian tới.</p>
          <p>Trân trọng,</p>
          <p>King Hotel</p>
        </div>
      </div>
    </div>
  `;
};
