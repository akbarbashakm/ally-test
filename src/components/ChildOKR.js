import React from 'react';

const ChildOKR = ({
    childData = []
}) => {
    return (
        <div>
            <table>
                {
                    (childData || []).length ? childData.map((okr, index) => {
                        return (<tr key={index}><td>{okr.title}</td></tr>)
                    }) : <tr><td>{'No Data Found'}</td></tr>
                }
            </table>
        </div>

    )
}

export default ChildOKR;