import { useState } from "react";
import {
  Service,
  Top,
  ComboPrice,
  Map,
  Between,
  Information,
  Search,
} from "../../../components";
import Review from "../Review/Review";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Top />
        <Service />
        <ComboPrice />
        <Between />

        <div className="max-w-full">
          <Review />
        </div>
        <div className=" w-full">
          <Map />
        </div>
        <Information />
      </div>
    </>
  );
};

export default HomePage;
