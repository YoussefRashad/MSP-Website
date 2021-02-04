import React from 'react'

// Tabs on material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

// Components
import ShowComments from './ShowComments'
import CommentsForm from './CommentsForm'
import Pagination from '../Pagination';

const Comments = ({ id, comments, submitComment, type }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState('1');
    const [page, setPage] = React.useState(1);
    const noOfItemsInPage = 4;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const showData = () => {
        let start = (page - 1) * noOfItemsInPage;
        let returnedData = [];

        for (let iteration = start; iteration < comments.length && iteration < start + noOfItemsInPage; iteration++){
            returnedData.push(
                <ShowComments comment={comments[iteration]} key={iteration} />
            )
        }
        return returnedData;
    }

    const noItmes = ()=>{
        return(
            <div className="card user-profile o-hidden mb-4">
                <div className="user-info">
                    <p className="m-0 text-24" style={{ paddingTop: "30px" }}></p>
                    <p className="text-muted m-0" style={{ paddingTop: "30px" }}></p>
                </div>
                <div className="card-body">
                    <div className="row ml-4">
                        <div className="mb-4 col-lg-10 col-md-9 col-12">
                            <p className="text-primary mb-1 text-22">No comments yet to display</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const getPagination = ()=> {
        return(
            <div className="row">
                <Pagination page={page} setPage={setPage} count={comments.length / noOfItemsInPage > 1 ? Math.floor(comments.length / noOfItemsInPage) : 0} />
            </div>
        );
    }
    
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
                        {
                            !comments.length ? noItmes() :
                            <div>
                                { getPagination() }
                                { showData() }
                                { getPagination() }
                            </div>
                        }
                    </TabPanel>

                    <TabPanel value="2">
                        <CommentsForm 
                            id={id} 
                            submitComment={submitComment} 
                            type={type}
                        />
                    </TabPanel>

                </TabContext>
            </div>

        </div>
    );
}

export default Comments