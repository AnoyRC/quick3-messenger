"use client";

import { setChats, setRequests } from "@/redux/slice/pushSlice";
import { useDispatch, useSelector } from "react-redux";

export default function usePush() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.push.user);

  const fetchChats = async () => {
    const chat = await user.chat.list("CHATS");
    dispatch(setChats(chat));
  };

  const fetchRequests = async () => {
    const requests = await user.chat.list("REQUESTS");
    console.log(requests);
    dispatch(setRequests(requests));
  };

  const acceptRequest = async (walletAddress) => {
    await user.chat.accept(walletAddress);
    fetchChats();
    fetchRequests();
  };

  const rejectRequest = async (walletAddress) => {
    await user.chat.reject(walletAddress);
    fetchChats();
    fetchRequests();
  };

  return { fetchChats, fetchRequests, acceptRequest, rejectRequest };
}
