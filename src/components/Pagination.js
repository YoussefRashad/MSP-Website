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

export default function BasicPagination( { page, setPage, count }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
    console.log(page);
  };
  
  return (
    <div className="mb-4 pagination">
      <div className={classes.root}>
        <Pagination
          count={(+count)+1}
          color="secondary"
          siblingCount={0}
          boundaryCount={1}
          size="large"
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}