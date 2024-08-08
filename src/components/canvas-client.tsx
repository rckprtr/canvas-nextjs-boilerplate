"use client";

import React from "react";
import UserInfo from "./user-info";
import { useCanvasClient } from "../hooks/useCanvasClient";
import { useResizeObserver } from "../hooks/useResizeObserver";

function CanvasClientComponent() {
  const { client, user, content, isReady } = useCanvasClient();
  useResizeObserver(client);

  const openUserProfile = () => {
    if (!client || !user) return;
    const url = `https://dscvr.one/u/${user.username}`;
    client.openLink(url);
  };

  if (!isReady) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 gap-3">
        {user && <UserInfo user={user} onOpen={openUserProfile} />}
        <HeightButtons />
      </div>
    </>
  );
}

function HeightButtons() {
  const setBodyHeight = (height: number) => {
    document.body.style.height = height ? `${height}px` : "";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1000, 1500, 0].map((height) => (
        <button
          key={height}
          type="button"
          className="text-white font-bold py-2 px-4 rounded bg-gray-500 hover:bg-gray-400 hover:border-gray-500"
          onClick={() => setBodyHeight(height)}
        >
          {height ? `Set height to ${height}px` : "Reset height"}
        </button>
      ))}
    </div>
  );
}

export default function CanvasClientWrapper() {
  return <CanvasClientComponent />;
}
