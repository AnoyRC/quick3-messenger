"use client";

import Navbar from "@/components/layout/dashboard/Navbar";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Dashboard() {
  return (
    <div className="w-[1024px] flex flex-col items-center">
      <Navbar />

      <Tabs value="Chats" className="mt-5 w-full">
        <TabsHeader
          className="h-[60px] rounded-2xl bg-gray-800"
          indicatorProps={{
            className: " shadow-none rounded-2xl bg-black",
          }}
        >
          <Tab value="Chats" className={"text-white " + poppins.className}>
            Chats
          </Tab>
          <Tab value="Requests" className={"text-white " + poppins.className}>
            Requests
          </Tab>
        </TabsHeader>

        <TabsBody>
          <TabPanel value="Chats">Chats</TabPanel>
          <TabPanel value="Requests">Requests</TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
