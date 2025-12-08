"use client";

import React from "react";
import { Alert, Flex, Spin } from "antd";

const Loading = () => {
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Spin size="large" tip="Loading...">
        <Alert title="" description="" type="info" />
      </Spin>
    </Flex>
  );
};

export default Loading;
