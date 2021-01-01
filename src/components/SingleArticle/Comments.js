import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import ShowComments from './ShowComments'
import CommentsForm from './CommentsForm'
import { scrollAutoFromBackToTop } from '../ScrollButton'

const Comments = () => {

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

    return (
        <div className={`${classes.root} d-flex flex-column msContant`}>
            <div className="card-body msContant">
                <TabContext value={value}>

                    <AppBar position="static">
                        <TabList
                            onChange={handleChange}
                            aria-label="simple tabs example" className="m-auto"
                        >
                            <Tab label="Comments" value="1" />
                            <Tab label="Comment Form" value="2" />
                        </TabList>
                    </AppBar>
                    <TabPanel value="1">
                        <ShowComments />
                    </TabPanel>
                    <TabPanel value="2">
                        <CommentsForm />
                    </TabPanel>

                </TabContext>
            </div>

        </div>
    );
}

export default Comments