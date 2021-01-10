import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { MdClose } from 'react-icons/md'

import { UserContext } from '../context/User' 
import { scrollAutoFromBackToTop } from './ScrollButton';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function DescriptionAlerts() {
    const { alert, hideAlert } = React.useContext(UserContext)

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])

    const classes = useStyles();
    const typeEdit = alert.type === 'success' ? 'success' : 'error'
    return (
        <div className={`${classes.root}  w-40 m-auto`}>
            <Alert severity={typeEdit} style={{ width: 'fit-content'}}>
                <button className="close" onClick={() => hideAlert()}>
                    <MdClose />
                </button>
                <AlertTitle>{typeEdit === 'success' ? 'Success' : 'Error'}</AlertTitle>
                {alert.msg} — <strong>check it out!</strong>
            </Alert>
        </div>
    );
}