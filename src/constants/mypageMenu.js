import LoanAndReturn from "../pages/LoanAndReturn/LoanAndReturn2";
import Overdue from "../pages/Overdue/Overdue";
import UserInfoModification from "../pages/UserInfoModification/UserInfoModification";
import WishList from "../pages/WishList/WishList";

export const MENUS = [
    {
        id: 1,
        path: "/mypage/info",
        name: "개인정보수정",
        element: <UserInfoModification />
    },
    {
        id: 2,
        path: "/mypage/wishlist",
        name: "위시리스트",
        element: <WishList />
    },
    {
        id: 3,
        path: "/mypage/loan",
        name: "대출 및 반납 내역",
        element: <LoanAndReturn />
    },
    {
        id: 4,
        path: "/mypage/overdue",
        name: "연체 내역",
        element: <Overdue />
    }
]