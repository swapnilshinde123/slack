import React ,{useState} from 'react'
import "./sidebar.css";
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from "./SidebarOption";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase"
function siderbar() {
    const [Channels , setChannels] = useState([])


    useEffect(() => {
       //run thid code  once when  the  sidebar component  loads
       db.callection("rooms").onSnapshot(sanpshot =>(
           setChannels(
               sanpshot.docs.map(doc=>({
                   id:doc.id
                   name:doc.data().name
               }))

           )
       ))

    }, [])
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
            <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user group" />
            <SidebarOption Icon={AppsIcon} title="App" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add  Channels" />
        </div>
    )
}

export default siderbar
