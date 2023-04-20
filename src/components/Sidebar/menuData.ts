import Users from "../../assets/sidenavIcons/user-friends.svg";
import Guarantors from "../../assets/sidenavIcons/Guarantors.svg";
import Sack from "../../assets/sidenavIcons/sack.svg";
import HandshakeRegular from "../../assets/sidenavIcons/handshake-regular.svg";
import Savings from "../../assets/sidenavIcons/piggy-bank.svg";
import LoanRequests from "../../assets/sidenavIcons/hand-holding.svg";
import Whitelist from "../../assets/sidenavIcons/user-check.svg";
import Karma from "../../assets/sidenavIcons/user-times.svg";
import Organization from "../../assets/sidenavIcons/briefcase.svg";
import LoanProducts from "../../assets/sidenavIcons/hand-holding.svg";
import SavingProducts from "../../assets/sidenavIcons/np_bank.svg";
import Coins from "../../assets/sidenavIcons/coins-solid.svg";
import Transaction from "../../assets/sidenavIcons/transaction.svg";
import Services from "../../assets/sidenavIcons/galaxy.svg";
import Cog from "../../assets/sidenavIcons/user-cog.svg";
import Scroll from "../../assets/sidenavIcons/scroll.svg";
import ChartBar from "../../assets/sidenavIcons/chart-bar.svg";
import Sliders from "../../assets/sidenavIcons/sliders.svg";
import BadgePercent from "../../assets/sidenavIcons/badge-percent.svg";
import ClipboardList from "../../assets/sidenavIcons/clipboard-list.svg";
import SystemsMessages from "../../assets/sidenavIcons/tire.svg";

export const customerMenuData = [
  {
    id: 1,
    icon: Users,
    title: "Users",
    path: "/users",
  },
  {
    id: 2,
    icon: Guarantors,
    title: "Guarantors",
    path: "/guarantors",
  },
  {
    id: 3,
    icon: Sack,
    title: "Loans",
    path: "/loans",
  },
  {
    id: 4,
    icon: HandshakeRegular,
    title: "Decision Models",
    path: "/decision-models",
  },
  {
    id: 5,
    icon: Savings,
    title: "Savings",
    path: "/savings",
  },
  {
    id: 6,
    icon: LoanRequests,
    title: "Loan Requests",
    path: "/loan-requests",
  },
  {
    id: 7,
    icon: Whitelist,
    title: "Whitelist",
    path: "/whitelist",
  },
  {
    id: 8,
    icon: Karma,
    title: "Karma",
    path: "/karma",
  },
];

export const businessesMenuData = [
  {
    id: 1,
    icon: Organization,
    title: "Organization",
    path: "/organization",
  },
  {
    id: 2,
    icon: LoanProducts,
    title: "Loan Products",
    path: "/loan-products",
  },
  {
    id: 3,
    icon: SavingProducts,
    title: "Saving Products",
    path: "/saving-products",
  },
  {
    id: 4,
    icon: Coins,
    title: "Fees and Charges",
    path: "/fees-and-charges",
  },
  {
    id: 5,
    icon: Transaction,
    title: "Transactions",
    path: "/transactions",
  },
  {
    id: 6,
    icon: Services,
    title: "Services",
    path: "/services",
  },
  {
    id: 7,
    icon: Cog,
    title: "Service Account",
    path: "/service-account",
  },
  {
    id: 8,
    icon: Scroll,
    title: "Settlements",
    path: "/settlements",
  },
  {
    id: 9,
    icon: ChartBar,
    title: "Reports",
    path: "/reports",
  },
];
export const settingsMenuData = [
  {
    id: 1,
    icon: Sliders,
    title: "Preferences",
    path: "/preferences",
  },
  {
    id: 2,
    icon: BadgePercent,
    title: "Fees and Pricing",
    path: "/fees-and-pricing",
  },
  {
    id: 3,
    icon: ClipboardList,
    title: "Audit Logs",
    path: "/audit-logs",
  },
  {
    id: 4,
    icon: SystemsMessages,
    title: "Systems Messages",
    path: "/systems-messages",
  },
];
