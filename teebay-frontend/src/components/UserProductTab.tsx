import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import LentProducts from "./LentProducts";
import BoughtProducts from "./BoughtProducts";
import SoldProducts from "./SoldProducts";
import BorrowProducts from "./BorrowProducts";

function UserProductTab() {
  return (
    <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-between">
      <Tabs.Item active title="Bought">
        <BoughtProducts/>
      </Tabs.Item>
      <Tabs.Item active title="Sold">
        <SoldProducts/>
      </Tabs.Item>
      <Tabs.Item active title="Borrowed">
        <BorrowProducts/>
      </Tabs.Item>        
      <Tabs.Item active title="Lent">
        <LentProducts/>
      </Tabs.Item>
      {/* <Tabs.Item title="Dashboard" icon={MdDashboard}>
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item> */}
    </Tabs>
  );
}
export default UserProductTab
