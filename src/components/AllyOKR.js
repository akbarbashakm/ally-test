import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import ChildOKR from './ChildOKR';

const AllyOKR = ({
    currentOKR = {}
}) => {
    let okrData;
    return (
        <div className="tabs">
            {
                Object.keys(currentOKR).map((okr, index) => {
                    okrData = currentOKR[okr];
                    return (
                        <div className="tab" key={index}>
                            <input type="checkbox" id={`rd${index}`} name="rd" />
                            <label className="tab-label" htmlFor={`rd${index}`}>{`${okrData.title || 'No Title'}`}</label>
                            <div className="tab-content">
                                <ChildOKR childData={okrData.children} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProp = ({ app }) => {
    const { currentOKR } = app;
    return {
        currentOKR
    }
}

export default connect(mapStateToProp, null)(AllyOKR)