import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { VideosContext } from '../../context/Videos'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion({ title, committes, setPage }) {
    
    const { setCommitteesVideos } = React.useContext(VideosContext)

    const [selectedItem, setSelectedItem] = React.useState({
        preparation : true,
        flutter : false,
        gameDevelopment : false,
        dataScience : false,
        humanResources : false,
        qualityAssurance : false,
        logistics : false,
        graphicDesign : false,
        PV : false,
        digitalMarketing : false
    });

    React.useEffect(() => {
        setPage(1)
    }, [selectedItem])

    const clickedItem = (committee) => {
        console.log(committee);
        if ( committee === 0 ){
            setSelectedItem({
                preparation: true,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 1) {
            setSelectedItem({
                preparation: false,
                flutter: true,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 2) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: true,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 3) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: true,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 4) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: true,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 5) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: true,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 6) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: true,
                graphicDesign: false,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 7) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: true,
                PV: false,
                digitalMarketing: false
            })
        } else if (committee === 8) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: true,
                digitalMarketing: false
            })
        } else if (committee === 9) {
            setSelectedItem({
                preparation: false,
                flutter: false,
                gameDevelopment: false,
                dataScience: false,
                humanResources: false,
                qualityAssurance: false,
                logistics: false,
                graphicDesign: false,
                PV: false,
                digitalMarketing: true
            })
        }
    }


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="d-block">
                    <Typography>
                        {
                            committes.map((committee)=>{
                                return(
                                    <span 
                                        className={`iteam ${selectedItem[committee.name] ? 'parent' : ''}`}
                                        key={committee.id}
                                        onClick={()=>{
                                            setCommitteesVideos(committee.title);
                                            clickedItem(committee.id)
                                        }}
                                    >
                                        {committee.title}
                                    </span>
                                );
                            })
                        }
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
