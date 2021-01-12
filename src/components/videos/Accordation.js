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
        if ( committee === 'preparation' ){
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
        } else if (committee === 'flutter') {
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
        } else if (committee === 'gameDevelopment') {
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
        } else if (committee === 'dataScience') {
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
        } else if (committee === 'humanResources') {
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
        } else if (committee === 'qualityAssurance') {
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
        } else if (committee === 'logistics') {
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
        } else if (committee === 'graphicDesign') {
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
        } else if (committee === 'PV') {
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
        } else if (committee === 'digitalMarketing') {
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

    React.useEffect(() => {
        setCommitteesVideos('preparation')
    }, [])

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
                                            clickedItem(committee.name)
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
