"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import usePush from "@/hooks/usePush";
import RequestBox from "./RequestBox";

export default function Requests() {
  const user = useSelector((state) => state.push.user);
  const requests = useSelector((state) => state.push.requests);
  const dispatch = useDispatch();
  const { fetchRequests } = usePush();

  useEffect(() => {
    if (user) {
      fetchRequests();
    }
  }, [user]);

  return (
    requests && (
      <div className="w-full h-full flex flex-col items-center gap-3">
        {requests.map((request) => (
          <RequestBox key={request.chatId} request={request} />
        ))}
      </div>
    )
  );
}
