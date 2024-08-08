import React from 'react';
import { CanvasInterface } from '@dscvr-one/canvas-client-sdk';

interface UserInfoProps {
  user: CanvasInterface.Lifecycle.User;
  onOpen: () => void;
}

export default function UserInfo({ user, onOpen }: UserInfoProps) {
  return (
    <a 
      className="flex gap-4 group hover:text-indigo-400 hover:cursor-pointer" 
      onClick={onOpen}
    >
      {user.avatar && (
        <img 
          src={user.avatar} 
          alt="User Avatar" 
          className="w-20 h-20 rounded-full"
        />
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">User Info</h1>
        <p>
          <b>User ID: </b>
          <span className="text-gray-300 group-hover:text-indigo-300">{user.id}</span>
        </p>
        <p>
          <b>User Name: </b>
          <span className="text-gray-300 group-hover:text-indigo-300">{user.username}</span>
        </p>
      </div>
    </a>
  );
}