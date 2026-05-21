import React from "react";
import { Spinner } from "@heroui/react";
import { HashLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <HashLoader/>
    </div>
  );
};

export default LoadingPage;