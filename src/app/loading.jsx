import React from "react";
import { Spinner } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="lg" color="success" />
    </div>
  );
};

export default LoadingPage;