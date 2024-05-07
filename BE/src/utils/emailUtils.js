import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

import {
  formChangePassword,
  emailOauthRegister,
  emailRegister,
  formPasswordChanged,
  formResetPassword,
  emailBooking,
  emailCancelBooking,
  emailSuccessBooking,
  checkEmailRegister,
} from "../views";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

export const sendMailRegister = async (name, email) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Đăng ký tài khoản thành công",
    text: `Chào bạn, ${name}`,
    html: emailRegister(name),
  });
};

export const sendMailOauthRegister = async (name, email, password) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Đăng ký tài khoản thành công",
    text: `Chào bạn, ${name}`,
    html: emailOauthRegister(name, password),
  });
};

export const sendRestPassword = async (name, email, randomCode) => {
  await transporter.sendMail({
    from: "bavuongnganhthuongcung4@gmail.com",
    to: email,
    subject: "Thay đổi mật khẩu",
    text: `Chào bạn, ${name}`,
    html: formChangePassword(name, randomCode),
  });
};

export const sendChangedPassword = async (name, email) => {
  await transporter.sendMail({
    from: "bavuongnganhthuongcung4@gmail.com",
    to: email,
    subject: "Thay đổi mật khẩu thành công",
    text: `Chào bạn, ${name}`,
    html: formPasswordChanged(name),
  });
};

export const sendForgotPassword = async (
  name,
  email,
  randomCode,
  resetPasswordUrl
) => {
  await transporter.sendMail({
    from: "bavuongnganhthuongcung4@gmail.com",
    to: email,
    subject: "Quên mật khẩu",
    text: `Chào bạn, ${name}`,
    html: formResetPassword(name, email, randomCode, resetPasswordUrl),
  });
};

export const sendMailBooking = async (
  email,
  name,
  checkInDate,
  checkOutDate,
  totalPrice,
  nameRoom
) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Đặt phòng thành công",
    text: `Chào bạn, ${name}`,
    html: emailBooking(name, checkInDate, checkOutDate, totalPrice),
  });
};

export const sendMailCancelBooking = async (
  email,
  name,
  check_in,
  check_out
) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "Hủy đặt phòng thành công",
    text: `Chào bạn, ${name}`,
    html: emailCancelBooking(name, check_in, check_out),
  });
};

export const sendMailSuccessBooking = async (email, name) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject:
      "Cảm ơn bạn đã chọn chúng tôi - Sự hài lòng của quý khách là niềm tự hào của chúng tôi!",
    text: `Chào bạn, ${name}`,
    html: emailSuccessBooking(name),
  });
};

export const sendCheckEmailRegister = async (email, name, code) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject:
      "Cảm ơn bạn đã chọn chúng tôi - Sự hài lòng của quý khách là niềm tự hào của chúng tôi!",
    text: `Chào bạn, ${name}`,
    html: checkEmailRegister(name, code),
  });
};
