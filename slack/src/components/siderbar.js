import React from 'react'
import "./sidebar.css";
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from "./SidebarOption";
function siderbar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Developer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                           Swapnil Shinde
                   </h3>
                </div>
                <CreateIcon />

            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption title="YouTube" />
        </div>
    )
}

export default siderbar
