import React from 'react';
import { withLastLocation } from "react-router-last-location";

/**
 * Return the child okr detail
 * @param {*} childData 
 */
const ChildOKR = ({
    childData = [],
    parentData,
    history
}) => {
    return (
        <div>
            <table>
                {
                    (childData || []).length ? childData.map((okr, index) => {
                        return (<tr key={index}><td onClick={(e) => {
                            e && e.preventDefault();
                            history.push('/okr-detail', {
                                parentData,
                                childData: okr
                            })
                        }}>{okr.title}</td></tr>)
                    }) : <tr><td>{'No Data Found'}</td></tr>
                }
            </table>
        </div>

    )
}

export default withLastLocation(ChildOKR);