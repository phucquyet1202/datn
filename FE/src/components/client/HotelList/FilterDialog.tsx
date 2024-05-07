type FilterDialogProps = {
  isShowRate: boolean;
  isShowDialog: boolean;
  onShowRate: () => void;
  onShowDialog: () => void;
};

const FilterDialog = ({ isShowDialog, onShowDialog }: FilterDialogProps) => {
  if (!isShowDialog) {
    return null;
  }

  return (
    <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-neutral-800/70 bg-opacity-25"></div>

      <div className="fixed inset-0 z-40 flex">
        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-dark py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-textLight dark:text-textDark">
              Lọc
            </h2>
            <div
              onClick={onShowDialog}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-textLight dark:text-textDark hover:text-primary dark:hover:text-primary cursor-pointer"
            >
              <span className="sr-only">Đóng lọc</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <form className="mt-4 border-t border-divideLight dark:border-divideDark">
            <h3 className="sr-only">Danh sách</h3>
            <ul
              role="list"
              className="px-2 py-3 font-medium text-textLight2nd dark:text-textDark2nd"
            >
              <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
                <span className="block px-2 py-3">Totes</span>
              </li>
              <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
                <span className="block px-2 py-3">Backpacks</span>
              </li>
              <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
                <span className="block px-2 py-3">Travel Bags</span>
              </li>
              <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
                <span className="block px-2 py-3">Hip Bags</span>
              </li>
              <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
                <span className="block px-2 py-3">Laptop Sleeves</span>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterDialog;
