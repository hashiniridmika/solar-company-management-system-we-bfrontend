import React from "react";
import StatItem from "./StatisticItems/StatItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const items = [
  {
    icon: <ShoppingCartOutlinedIcon fontSize="large" />,
    name: "Product Orders",
    value: "445",
  },
  {
    icon: <StarBorderOutlinedIcon fontSize="large" />,
    name: "Satisfaction Rating",
    value: "98.6%",
  },
  {
    icon: <AccountBalanceWalletOutlinedIcon fontSize="large" />,
    name: "Balance",
    value: "LKR 5000.00",
  },
];

export default function StatisticItems() {
  return (
    <div>
      {items.map((val, key) => {
        return (
          <div key={key} style={{ padding: 20 }}>
            <StatItem info={val} />
          </div>
        );
      })}
    </div>
  );
}
