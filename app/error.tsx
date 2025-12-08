"use client";
import { Alert } from "antd";

const ErrorHandling = ({
  error
}: {
  error: Error;
}) => {
  return (
    <div>
      <Alert title="Error" description={error.message} type="error" showIcon />
    </div>
  );
};

export default ErrorHandling;
