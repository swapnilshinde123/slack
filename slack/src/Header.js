import React from 'react';
import "./Header.css"
import { Avatar } from '@material-ui/core';
import { useStateValue } from "./stateprovider";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className="header">

            <div className="header_left">
                <Avatar
                    className="header_avatar" alt="slack" src=""
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="Search " />
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
