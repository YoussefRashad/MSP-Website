import React from 'react'
import BannerAlert from './BannerAlert'

export const Banner = () => {
    const [alert, setAlert] = React.useState({ 
        show: false,
        type: "info",
        title: "MSP - Microsoft Student Partner",
        desc: "Microsoft Student Tech Club at Helwan University is a student community program that promotes advanced technology through education, practice, and innovation. It also provides students with both technical and non-technical sessions needed which is packing their lives with high level of skills and supporting their careers with opportunities."
    });
    
    const hideAlert = ()=>{
        setAlert({...alert, show: false})
    }
    return (
        <div className="msContent2">
            {alert.show && <BannerAlert {...alert} hideAlert={hideAlert}/>}
            <div className="msText">
                <h1 className="msHeaderText msHeaderText1">When technology</h1>
                <h1 className="msHeaderText msHeaderText2">becomes an absolute</h1>
                <h1 className="msHeaderText msHeaderText3">Passion.</h1>
            </div>
            <div className="msButton">
                <button 
                    className="msHeaderButton btn btn-lg btn-outline-primary m-1"
                    onClick={()=>{
                        setAlert({ ...alert, show: true })
                    }}
                    style={{color: "#fff", borderColor: "#fff"}}
                >
                    Who are we ? 
                </button>
            </div>
        </div>
    )
}