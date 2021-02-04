import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { UserContext } from '../context/User';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer() {

    const history = useHistory()
    const { userLogout, isAdmin } = React.useContext(UserContext)

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const SETTING = [
        {
            settingName: 'See your profile',
            icon: <InboxIcon />,
            onClick() {
                history.push("/profile")
            }
        },
        {
            settingName: 'Dark mode',
            icon: <MailIcon />,
            onClick(){
                console.log("coming soon");
            }
        },
        {
            settingName: 'Logout',
            icon: <InboxIcon />,
            onClick(){

                userLogout();
                history.push("/")
            }
        }
    ]

    const DASHBOARD = [
        {
            manage: 'Manage Articles',
            icon: <InboxIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/articles')
            }
        },
        {
            manage: 'Manage Workshops',
            icon: <MailIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/workshops')
            }
        },
        {
            manage: 'Manage Events',
            icon: <InboxIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/events')
            }
        },
        {
            manage: 'Manage Forms',
            icon: <MailIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/forms')
            }
        },
        {
            manage: 'Manage Team',
            icon: <InboxIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/team')
            }
        },
        {
            manage: 'Manage Videos',
            icon: <MailIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/videos')
            }
        },
        {
            manage: 'Manage Sponsor',
            icon: <InboxIcon />,
            privilage: [''],
            onClick() {
                history.push('/manage/sponsors')
            }
        }
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            }) + " d-block mt-5"}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {SETTING.map((item, index) => (
                    <ListItem button key={index} onClick={item.onClick}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.settingName} />
                    </ListItem>
                ))}
            </List>
            <Divider />

            {
                isAdmin && 
                <>
                    <List>
                        {DASHBOARD.map((item, index) => (
                            <ListItem button key={index} onClick={item.onClick}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.manage} />
                            </ListItem>
                        ))}
                    </List>
                </>
            }
        </div>
    );

    return (
        <div >
            <span
                onClick={toggleDrawer('right', true)} 
                className="setting"
            >
                Settings
            </span>
            <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {list('right')}
            </SwipeableDrawer>
        </div>
    );
}