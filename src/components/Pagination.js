import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
  return (
    <div className={classes.root + " mt-3 mb-4 pagination"}>
      <Pagination count={10} color="secondary" siblingCount={0} boundaryCount={1} size="large" />
    </div>
  );
}
