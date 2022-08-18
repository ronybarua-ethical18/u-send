import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { FiClipboard } from "react-icons/fi";

export const SidebarItems = [
  {
    key: 1,
    text: "Homepage",
    link: "dashboard",
    icon: <Icon icon="bx:home-alt-2" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 2,
    text: "Products",
    link: "product",
    icon: <Icon icon="gridicons:product" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 3,
    text: "Orders",
    link: "order",
    icon: <FiClipboard fontSize="20px" />,
    isOpen: <ExpandMore />,
    isClose: <ExpandLess />,
    nestedItem: [
      {
        key: 100,
        text: "Dispute List",
        link: "disputlist",
        icon: "",
        isOpen: false,
        nestedItem: null,
      },
    ],
  },
  {
    key: 4,
    text: "Bulk Purchase",
    link: "bulkpurchase",
    icon: <Icon icon="akar-icons:shipping-box-v1" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 5,
    text: "Payments",
    link: "payment",
    icon: <Icon icon="fluent:payment-24-regular" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 5,
    text: "Notification",
    link: "notification",
    icon: <Icon icon="carbon:notification" width="20" height="20" />,
    nestedItem: null,
  },
];
