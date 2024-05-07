import { Flex, Progress } from "antd";
import { AiFillStar } from "react-icons/ai";
import React from "react";

type Props = {
  data: any[]; // Dữ liệu đánh giá
};

const RateProps: React.FC<Props> = ({ data }) => {
  console.log("🚀 ~ data:", data);
  // Tạo một mảng mới chứa số lượt đánh giá theo mỗi mức rating
  const ratingCounts = [0, 0, 0, 0, 0];

  // Đếm số lượt đánh giá theo mỗi mức rating
  data.forEach((item: any) => {
    ratingCounts[item.rating - 1]++;
  });
  const totalRatings = ratingCounts.reduce((acc, count) => acc + count, 0);
  return (
    <div className="flex flex-col-reverse gap-2">
      {/* Hiển thị số lượt đánh giá theo thứ tự */}
      {ratingCounts.map((count, index) => (
        <div key={index} className="flex gap-2 items-cente w-[500px]">
          <p className="flex items-center gap-1">
            {index + 1} <AiFillStar className="text-amber-300 text-xl" />
          </p>
          <Flex gap="small" vertical className="w-[300px]">
            <Progress percent={(count / totalRatings) * 100} showInfo={false} />
          </Flex>
          <p className="font-bold">{count} đánh giá</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default RateProps;
