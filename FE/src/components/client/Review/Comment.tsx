import { Rate } from "antd";

const Comment = (Data: any) => {
  const totalRating = Data?.data.reduce(
    (sum: number, review: any) => sum + review.rating,
    0
  );
  const averageRating =
    Data?.data.length > 0
      ? Number((totalRating / Data?.data.length).toFixed(1))
      : 0;

  return (
    <div className="flex mt-3 ml-32">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#e30019] text-4xl font-semibold leading-[56px] text-left flex items-center gap-1">
          {averageRating}/5
        </p>
        <Rate allowHalf disabled value={averageRating} />
        <span className="flex gap-1 justify-between">
          <p
            className="flex gap-1 items-center text-[
#111111] font-bold leading-5 text-left text-[14px]"
          >
            ({Data?.data.length})
          </p>
          đánh giá & nhận xét
        </span>
      </div>
    </div>
  );
};

export default Comment;
