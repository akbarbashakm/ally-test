import axios from 'axios';
import { OKR_JSON_URL } from './apiURL';

/**
 * Api Action for axios
 */
export default function splitOKR(category, OKRData) {
    return dispatch =>
        new Promise((res, rej) => {
            let payloadData = {};
            if (category === 'All') {
                payloadData = {
                    ...OKRData
                }
            } else {
                Object.keys(OKRData).map((key, index) => {
                    if (OKRData[key]['category'] === category) {
                        payloadData[key] = {
                            ...OKRData[key]
                        }
                    }
                })
            }
            dispatch({
                type: 'SPLIT_OKR',
                payload: {
                    ...payloadData
                }
            });
        });
}