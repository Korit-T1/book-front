/** @jsxImportSource @emotion/react */
import { FaCaretRight, FaCaretLeft} from "react-icons/fa";
import * as s from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SIDE_MENU } from "../../../constants/mypageSideMenu";

function AdminSideBar() {
    const [ show, setShow ] = useState(false);

    return (
        
        <aside css={s.layout(show)}>
            <button css={s.toggleButton} onClick={() => setShow(prevValue => !prevValue)}>
                {show ? < FaCaretLeft /> : < FaCaretRight />}
            </button>
            <ul css={s.menuList}>
                {SIDE_MENU.map(menu => 
                    <Link css={s.menuItem} to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key, value]) => key + "=" + value).join("&")}`} key={menu.id} onClick={() => setShow(false)}>
                        <li>{menu.name}</li>
                    </Link>)
                }
            </ul>
        </aside>
    );
}

export default AdminSideBar;