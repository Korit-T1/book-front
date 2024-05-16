/** @jsxImportSource @emotion/react */
import { FaCaretRight, FaCaretLeft} from "react-icons/fa";
import * as s from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ADMIN_MENU } from "../../../constants/adminSideMenu";


function AdminSideBar() {
    const [ show, setShow ] = useState(true);

    return (

        <aside css={s.layout(show)}>
            
            <ul css={s.menuList}>
                {ADMIN_MENU.map(menu => 
                    <Link css={s.menuItem} to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key, value]) => key + "=" + value).join("&")}`} key={menu.id}>
                        <li>{menu.name}</li>
                    </Link>)
                }
            </ul>
        </aside>
    );
}

export default AdminSideBar;



// 1100 * 57
// 1100 * 19
// role generic
// keyboard : focusble


