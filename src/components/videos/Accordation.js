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

export default function SimpleAccordion({ titles, techCommittees, operationalCommittes, marketingCommittes, setPage }) {
    const { setCommitteesVideos } = React.useContext(VideosContext)
    const classes = useStyles();

    const [selectedItemSection, setSelectedItemSection] = React.useState({
        technical: false,
        operational: false,
        marketing: false
    })
    const [selectedItemCommittee, setSelectedItemCommittee] = React.useState({
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
    }, [selectedItemCommittee])
    
    const clickedItemSection = (section) => {
        if (section === 'technical') {
            setSelectedItemSection({
                ...selectedItemSection,
                technical: !selectedItemSection.technical
            })
        } else if (section === 'operational') {
            setSelectedItemSection({
                ...selectedItemSection,
                operational: !selectedItemSection.operational
            })
        } else if (section === 'marketing') {
            setSelectedItemSection({
                ...selectedItemSection,
                marketing: !selectedItemSection.marketing
            })
        }
    }

    const clickedItemCommittee = (committee) => {
        if ( committee === 0 ){
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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
            setSelectedItemCommittee({
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

    return(
        <ul className="iteamP webList">
            {/* Tech */}
            <li
                className={`iteam ${selectedItemSection.technical ? 'parent' : ''}`}
                style={{ padding: '12px 10px' }}
            >
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={() => clickedItemSection('technical')}
                        >
                            <Typography className={classes.heading}>{titles[0]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="d-block">
                            <Typography>
                                {
                                    techCommittees.map((committee) => {
                                        return (
                                            <span
                                                className={`iteam ${selectedItemCommittee[committee.name] ? 'parent' : ''}`}
                                                key={committee.id}
                                                onClick={() => {
                                                    setCommitteesVideos(committee.title);
                                                    clickedItemCommittee(committee.id)
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
            </li>


            {/* Operational */}
            <li
                className={`iteam ${selectedItemSection.operational ? 'parent' : ''}`}
                style={{ padding: '12px 10px' }}
            >
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={() => clickedItemSection('operational')}
                        >
                            <Typography className={classes.heading}>{titles[1]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="d-block">
                            <Typography>
                                {
                                    operationalCommittes.map((committee) => {
                                        return (
                                            <span
                                                className={`iteam ${selectedItemCommittee[committee.name] ? 'parent' : ''}`}
                                                key={committee.id}
                                                onClick={() => {
                                                    setCommitteesVideos(committee.title);
                                                    clickedItemCommittee(committee.id)
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
            </li>


            {/* Marketing */}
            <li
                className={`iteam ${selectedItemSection.marketing ? 'parent' : ''}`}
                style={{ padding: '12px 10px' }}
            >
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={() => clickedItemSection('marketing')}
                        >
                            <Typography className={classes.heading}>{titles[2]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="d-block">
                            <Typography>
                                {
                                    marketingCommittes.map((committee) => {
                                        return (
                                            <span
                                                className={`iteam ${selectedItemCommittee[committee.name] ? 'parent' : ''}`}
                                                key={committee.id}
                                                onClick={() => {
                                                    setCommitteesVideos(committee.title);
                                                    clickedItemCommittee(committee.id)
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
            </li>
        </ul>
    );
}