import axios from 'axios';
import { OKR_JSON_URL } from './apiURL';

/**
 * Api Action for axios
 */
export default function getOKR() {
    return dispatch =>
        new Promise((res, rej) => {
            axios.get(OKR_JSON_URL).then(response => {
                
                dispatch({
                    type: 'SET_OKR',
                    payload: {
                        ...splitData(response.data.data)
                    }
                });
                res(response.data.data)
            }).catch(err => {
                rej(err)
            });
        });
}

const splitData = (okrData) => {
    const keys = Object.keys(okrData);
    const returnData = {};
    let okr;
    keys.map((key) => {
        okr = okrData[key];
        if (okr.parent_objective_id === '') {
            returnData[`${okr.id}`] = {
                ...returnData[`${okr.id}`] || {},
                ...okr
            }
        } else {
            if (!Object.keys(returnData[`${okr.parent_objective_id}`] || {}).length) {
                returnData[`${okr.parent_objective_id}`] = {
                    children: []
                }
            }
            if (!returnData[`${okr.parent_objective_id}`].children) {
                returnData[`${okr.parent_objective_id}`].children = [];
            }
            returnData[`${okr.parent_objective_id}`].children.push({
                ...okr
            })
        }
    })
    return returnData;
}