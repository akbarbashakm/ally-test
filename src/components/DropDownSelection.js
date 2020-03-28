import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
import splitOKR from '../services/splitOKR';
import { bindActionCreators } from 'redux';

/**
 * Filter operation for OKR has been performed here
 * @param {*} splitOkr 
 */
const DropDownSelection = ({
    splitOkr,
    OKRData
}) => {
    const handleChange = (selectedOption) => {
        const { value } = selectedOption;
        splitOkr(value, OKRData);
    }
    return (
        <Select
            onChange={handleChange}
            defaultValue={{ value: 'All', label: 'All' }}
            options={[
                { value: 'All', label: 'All' },
                { value: 'Company', label: 'Company' },
                { value: 'Sales', label: 'Sales' },
                { value: 'Finance', label: 'Finance' },
                { value: 'People', label: 'People' },
                { value: 'Engineering', label: 'Engineering' },
                { value: 'Administration', label: 'Administration' },
                { value: 'Design', label: 'Design' },
                { value: 'Customer Success', label: 'Customer Success' }
            ]}
        />
    )
}

const mapStateToProp = ({ app }) => {
    const { OKRData } = app;
    return {
        OKRData: {...OKRData}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        splitOkr: bindActionCreators(
            splitOKR,
            dispatch
        )
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(DropDownSelection);