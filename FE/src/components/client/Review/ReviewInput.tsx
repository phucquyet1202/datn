import { Rate, message } from "antd";
import moment from "moment";
import { useDeleteReviewMutation } from "../../../api";
import toast from "react-hot-toast";
import { useState } from "react";

const ReviewInput = ({ data, userData }: any) => {
  const [deleteReview] = useDeleteReviewMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const [visibleReviews, setVisibleReviews] = useState(5);

  const removeReview = async (id: string) => {
    deleteReview(id)
      .unwrap()
      .then(() => {
        toast.success("xóa thành công");
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  const handleLoadMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5);
  };
  return (
    <>
      {data?.slice(0, visibleReviews).map((comment: any, index: number) => {
        return (
          <div className="border-b py-4" key={index}>
            {contextHolder}
            <div className="flex gap-4">
              <span className="font-bold">{comment?.id_user?.email}</span>
              <span>{moment(comment?.createdAt).format("DD-MM-YYYY")}</span>
            </div>

            <div className="">
              <Rate disabled defaultValue={comment?.rating} />
              <p className="mx-1"> {comment?.comment}</p>
            </div>

            {/* {userData?.data && userData?.data?._id == comment?.id_user?._id ? (
                <button
                  className="bg-blue-500 p-1 px-2 text-[white] rounded-md mt-2"
                  onClick={() => removeReview(comment?._id)}
                >
                  xóa bình luận
                </button>
              ) : (
                ""
              )} */}
          </div>
        );
      })}
      {data && data.length > visibleReviews && (
        <div
          className="cursor-pointer text-white mt-4 py-2 max-w-[200px] text-center mx-auto rounded-2xl"
          style={{ background: "linear-gradient(45deg, #00bfff, #0077cc)" }}
          onClick={handleLoadMore}
        >
          Xem thêm
        </div>
      )}
    </>
  );
};

export default ReviewInput;
