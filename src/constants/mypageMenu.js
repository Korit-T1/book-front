import LoanAndReturn from "../pages/LoanAndReturn/LoanAndReturn";
import Overdue from "../pages/Overdue/Overdue";
import UserInfoModification from "../pages/UserInfoModification/UserInfoModification";
import WishList from "../pages/WishList/WishList";

export const MENUS = [
    {
        id: 1,
        path: "/1",
        name: "개인정보수정",
        element: <UserInfoModification />
    },
    {
        id: 2,
        path: "/2",
        name: "위시리스트",
        element: <WishList />
    },
    {
        id: 3,
        path: "/3",
        name: "대출 및 반납 내역",
        element: <LoanAndReturn />
    },
    {
        id: 4,
        path: "/4",
        name: "연체 내역",
        element: <Overdue />
    }
]