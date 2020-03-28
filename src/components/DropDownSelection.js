import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select';

const DropDownSelection = ({
    splitOkr
}) => {
    const handleChange = (selectedOption) => {
        const { value } = selectedOption;
        splitOkr(value);
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

const mapDispatchToProps = dispatch => {
    return {
        splitOkr: (category) => dispatch({
            type: 'SPLIT_OKR',
            category
        })
    };
};

export default connect(null, mapDispatchToProps)(DropDownSelection);