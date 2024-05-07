import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginAccountMutation } from "../../api";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [loginUser, resultLogin] = useLoginAccountMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    loginUser(data)
      .unwrap()
      .then((response) => {
        message.success(response.message);
        navigate("/admin");
      })
      .catch((error) => {
        if (error?.data.message.leading > 1) {
          message.error(error?.data.message[0]);
        } else {
          message.error(error?.data.message);
        }
      });
  };

  return (
    <div className="w-full">
      <nav className="absolute w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 mb-3 lg:bg-transparent bg-white">
        <div className="flex container mx-auto flex-wrap items-center justify-between px-0 lg:px-4">
          <a
            className="text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase lg:text-white text-blueGray-500"
            href="/"
          >
            <img className="rounded-full mr-2" style={{ width: "30px" }} />
            <span>Seven Teen</span>
          </a>
          <button
            className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out hidden">
            <ul className="lg:items-center flex flex-wrap pl-0 mb-0 flex-col list-none lg:flex-row">
              <li>
                {/* <a
                  href="javascript:;"
                  className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out lg:text-white text-blueGray-500"
                >
                  <i className="lg:text-blueGray-300 text-blueGray-500 far fa-file-alt text-lg leading-lg mr-2">

                  </i>
                  Docs
                </a> */}
              </li>
            </ul>
            <ul className="lg:items-center lg:ml-auto flex flex-wrap list-none pl-0 mb-0 flex-col lg:flex-row">
              <li className="relative">
                {/* <a
                  className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out lg:text-white text-blueGray-800"
                  href="javascript:;"
                >
                  Demo Pages
                  <i className="ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform "></i>
                </a> */}
                <div className="hidden  z-50">
                  <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in-out transform scale-95 opacity-0 absolute ">
                    <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                      Group 1
                    </span>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 1
                    </a>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 2
                    </a>
                    <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                      Group 2
                    </span>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 3
                    </a>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 4
                    </a>
                    <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                      Group 3
                    </span>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 5
                    </a>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 6
                    </a>
                    <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                      Group 4
                    </span>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 7
                    </a>
                    <a
                      href="javascript:;"
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      Demo Page 8
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out lg:text-white text-blueGray-500"
                  href="https://www.facebook.com/CreativeTim"
                  target="_blank"
                >
                  <i className="fab fa-facebook text-lg leading-lg opacity-75 hover:opacity-50 lg:text-white text-blueGray-500"></i>
                  <span className="lg:hidden lg:ml-0 ml-2">
                    Share on Facebook
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out lg:text-white text-blueGray-500"
                  href="https://twitter.com/CreativeTim"
                  target="_blank"
                >
                  <i className="fab fa-twitter text-lg leading-lg opacity-75 hover:opacity-50 lg:text-white text-blueGray-500"></i>
                  <span className="lg:hidden lg:ml-0 ml-2">
                    Tweet on Twitter
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out lg:text-white text-blueGray-500"
                  href="https://github.com/creativetimofficial"
                  target="_blank"
                >
                  <i className="fab fa-github text-lg leading-lg opacity-75 hover:opacity-50 lg:text-white text-blueGray-500"></i>
                  <span className="lg:hidden lg:ml-0 ml-2">Star on Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{ backgroundImage: "url(/login-bg.webp)" }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      {/* <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with
                      </h6> */}
                    </div>
                    <div className="text-center">
                      {/* <a
                        href="javascript:;"
                        className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-github-regular border-github-regular active:bg-github-active active:border-github-active text-xs px-3 py-2 shadow hover:shadow-md rounded-md"
                      >
                        <i className="mr-1 fab fa-github"></i> github
                      </a> */}
                      {/* <a
                        href="javascript:;"
                        className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-facebook-regular border-facebook-regular active:bg-facebook-active active:border-facebook-active text-xs px-3 py-2 shadow hover:shadow-md rounded-md"
                      >
                        <i className="mr-1 fab fa-facebook"></i> facebook
                      </a> */}
                      {/* <a
                        href="javascript:;"
                        className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-twitter-regular border-twitter-regular active:bg-twitter-active active:border-twitter-active text-xs px-3 py-2 shadow hover:shadow-md rounded-md"
                      >
                        <i className="mr-1 fab fa-twitter"></i> twitter
                      </a> */}
                    </div>
                    {/* <hr className="mt-6 border-b-1 border-blueGray-200" /> */}
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {/* <div className="text-blueGray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div> */}
                    <form>
                      <div className="relative w-full">
                        <label
                          htmlFor="email"
                          className={`block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1  ${
                            errors["email"]
                              ? "text-red-500 dark:text-red-500"
                              : "text-textLight dark:text-textDark"
                          }`}
                        >
                          Tài khoản
                        </label>
                        <div className="mb-3 pt-0">
                          <input
                            id="email"
                            placeholder="Nhập email của bạn"
                            type="email"
                            required
                            {...register("email", { required: true })}
                            className={`border-blueGray-300 px-3 py-2 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:border-lightBlue-500 border border-solid transition duration-200  ${
                              errors["email"]
                                ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
                                : "border-divideLight focus:border-divideLight dark:border-divideDark dark:focus:border-divideDark"
                            } `}
                          />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="password"
                          className={`block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1   ${
                            errors["password"]
                              ? "text-red-500 dark:text-red-500"
                              : "text-textLight dark:text-textDark"
                          }`}
                        >
                          Mật khẩu
                        </label>
                        <div className="mb-3 pt-0">
                          <input
                            {...register("password", { required: true })}
                            id="password"
                            placeholder="Password"
                            type="password"
                            className={`border-blueGray-300 px-3 py-2 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:border-lightBlue-500 border border-solid transition duration-200  ${
                              errors["password"]
                                ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
                                : "border-divideLight focus:border-divideLight dark:border-divideDark dark:focus:border-divideDark"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="mt-2 inline-block">
                        {/* <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="form-checkbox appearance-none ml-1 w-5 h-5 ease-linear transition-all duration-150 border border-blueGray-300 rounded checked:bg-blueGray-700 checked:border-blueGray-700 focus:border-blueGray-300"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-500">
                            Remember me
                          </span>
                        </label> */}
                      </div>
                      <div className="text-center mt-5">
                        <button
                          disabled={resultLogin.isLoading}
                          onClick={handleSubmit(onSubmit)}
                          className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-gray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md w-full text-center disabled:cursor-not-allowed"
                        >
                          Đăng nhập
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    {/* <a href="javascript:;" className="text-blueGray-500 ml-2">
                      <small>Forgot password?</small>
                    </a> */}
                  </div>
                  <div className="w-1/2 text-right">
                    {/* <a href="javascript:;" className="text-blueGray-500 mr-2">
                      <small>Create new account</small>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="w-full absolute bottom-0">
            <div className="container mx-auto px-4">
              <div className="items-center xl:justify-between flex flex-wrap -mx-4">
                <div className="px-4 relative xl:w-6/12 w-full sm:w-full">
                  <div className="text-sm text-gray-200 text-center xl:text-left py-6">
                    Copyright © 2021
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-100 font-semibold ml-1"
                    >
                      Alone
                    </a>
                    . All rights reserved.
                  </div>
                </div>
                <div className="px-4 relative xl:w-6/12 w-full sm:w-full">
                  <ul className="justify-center xl:justify-end mx-auto flex flex-wrap list-none pl-0 mb-0">
                    <li>
                      {/* <a
                        href="https://www.creative-tim.com"
                        target="_blank"
                        className="text-sm block py-2 px-4 bg-transparent no-underline text-white hover:text-blueGray-100 py-4 md:py-6 mx-auto"
                      >
                        Creative Tim
                      </a> */}
                    </li>
                    <li>
                      {/* <a
                        href="https://www.creative-tim.com/presentation"
                        target="_blank"
                        className="text-sm block py-2 px-4 bg-transparent no-underline text-white hover:text-blueGray-100 py-4 md:py-6 mx-auto"
                      >
                        About us
                      </a> */}
                    </li>
                    <li>
                      {/* <a
                        href="https://www.creative-tim.com/blog"
                        target="_blank"
                        className="text-sm block py-2 px-4 bg-transparent no-underline text-white hover:text-blueGray-100 py-4 md:py-6 mx-auto"
                      >
                        Blog
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default AdminLogin;
