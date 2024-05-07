import { Container } from "../..";

const Service = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-8">
          <div className="group flex mx-2 md:mx-4 lg:mx-[20px] transform transition-transform duration-300 hover:scale-110">
            <svg
              className="h-12 w-12 text-neutral-600 group hover:text-gray-500 stroke-1 dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            <a className="font-normal font-sans select-none	not-italic text-xl text-center group hover:text-gray-500 dark:text-white">
              Đảm bảo giá tốt nhất
            </a>
          </div>

          <div className="group flex mx-2 md:mx-4 lg:mx-[20px] transform transition-transform duration-300 hover:scale-110">
            <svg
              className="h-20 w-20 text-neutral-600 group hover:text-gray-500 stroke-1 dark:text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="18" y1="6" x2="18" y2="6.01" />{" "}
              <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />{" "}
              <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />{" "}
              <line x1="9" y1="4" x2="9" y2="17" />{" "}
              <line x1="15" y1="15" x2="15" y2="20" />
            </svg>
            <a className="font-normal select-none	not-italic text-xl text-center group hover:text-gray-500 dark:text-white">
              Đa dạng các phòng lựa chọn tốt nhất
            </a>
          </div>

          <div className="group flex mx-2 md:mx-4 lg:mx-[20px] transform transition-transform duration-300 hover:scale-110">
            <svg
              className="h-20 w-20 text-neutral-600 group hover:text-gray-500 stroke-1 dark:text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="9" r="6" />{" "}
              <polyline
                points="9 14.2 9 21 12 19 15 21 15 14.2"
                transform="rotate(-30 12 9)"
              />
              <polyline
                points="9 14.2 9 21 12 19 15 21 15 14.2"
                transform="rotate(30 12 9)"
              />
            </svg>
            <a className="font-normal select-none	not-italic text-xl text-center group hover:text-gray-500 dark:text-white">
              Đảm bảo chất lượng phục vụ tốt nhất
            </a>
          </div>

          <div className="group flex mx-2 md:mx-4 lg:mx-[20px] transform transition-transform duration-300 hover:scale-110">
            <svg
              className="h-20 w-20 text-neutral-600 group hover:text-gray-500 stroke-1 dark:text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="13" rx="2" width="4" height="6" />{" "}
              <rect x="16" y="13" rx="2" width="4" height="6" />{" "}
              <path d="M4 15v-3a8 8 0 0 1 16 0v3" />{" "}
              <path d="M18 19a6 3 0 0 1 -6 3" />
            </svg>
            <a className="font-normal select-none	not-italic text-xl text-center group hover:text-gray-500 dark:text-white">
              Hỗ trợ khách hàng nhanh nhất
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Service;
