import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { scrollAutoFromBackToTop } from '../../components/ScrollButton'

import Add from '../../components/Dashboards/ManageEvents/Add';
import Update from '../../components/Dashboards/ManageEvents/Update';
import Delete from '../../components/Dashboards/ManageEvents/Delete';

const ManageEvents = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])

    return (
        <div className={`${classes.root} d-flex flex-column msContant`}>
            <div className="msMain">
                <div className="breadcrumb">
                    <h1 style={{ fontSize: "xx-large" }}>Dashboard - Manage Events</h1>
                </div>
                <div className="separator-breadcrumb border-top"></div>

                <div className="card-body msContant">
                    <TabContext value={value}>

                        <AppBar position="static">
                            <TabList
                                onChange={handleChange}
                                aria-label="simple tabs example" className="m-auto"
                            >
                                <Tab label="Add Event" value="1" />
                                <Tab label="Update Event" value="2" />
                                <Tab label="Delete Event" value="3" />
                            </TabList>
                        </AppBar>
                        <TabPanel value="1">
                            <Add />
                        </TabPanel>
                        <TabPanel value="2">
                            <Update />
                        </TabPanel>
                        <TabPanel value="3">
                            <Delete />
                        </TabPanel>

                    </TabContext>
                </div>

            </div>
        </div>
    );
}

export default ManageEvents
