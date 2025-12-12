"use client";

import { useEffect, useState } from "react";
import { Alert } from "antd";

function NoConnection() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div
      style={{
        marginBottom:"40px"
      }}
      >
        <Alert 
        style={{
            height: "200px",
            width: "100%",
            justifyContent:"center",
            alignItems: "center"
        }}
          title="Error"
          description="You are offline! Check your internet connection"
          type="warning"
          showIcon
        />
      </div>
    );
  }

  return null;
}

export default NoConnection;
