"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { clearMessage } from "@/redux/messageSlice";
import { useEffect } from "react";

export default function MessageBar() {
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.message.text);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-500">
    {message}
    </div>

  );
}