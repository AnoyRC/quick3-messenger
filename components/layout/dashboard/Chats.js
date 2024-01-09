"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setChats } from "@/redux/slice/pushSlice";
import ChatBox from "./ChatBox";
import { Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Poppins } from "next/font/google";
import usePush from "@/hooks/usePush";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Chats() {
  const user = useSelector((state) => state.push.user);
  const chats = useSelector((state) => state.push.chats);
  const { fetchChats } = usePush();

  useEffect(() => {
    if (user) {
      fetchChats();
    }
  }, [user]);

  return (
    chats && (
      <div className="w-full h-full flex flex-col items-center gap-3">
        {chats.map((chat) => (
          <ChatBox key={chat.chatId} chat={chat} />
        ))}
        <Button
          size="lg"
          className={
            "flex items-center justify-center w-full rounded-2xl normal-case " +
            poppins.className
          }
        >
          Add Contact
          <PlusIcon className="h-5 w-5" />
        </Button>
      </div>
    )
  );
}
