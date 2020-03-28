const INITIAL_STATE = {
    OKRData: {},
    currentOKR: {},
    categories: []
}
export default (state = INITIAL_STATE, action) => {
    const { type = '', payload = {}, category } = action;
    const { OKRData } = state;
    const currentOKR = {};
    switch (type) {
        case 'SET_OKR': {
            return {
                ...state,
                OKRData: {
                    ...payload
                },
                currentOKR: {
                    ...payload
                }
            }
        }
        break;
        case 'SPLIT_OKR': {
            if (category === 'All') {
                return {
                    ...state,
                    currentOKR: {
                        ...OKRData
                    }
                }
            } else {
                Object.keys(OKRData).map((key, index) => {
                    if (OKRData[key]['category'] === category) {
                        currentOKR[key] = {
                            ...OKRData[key]
                        }
                    }
                })
            }            
            return {
                ...state,
                currentOKR: {
                    ...currentOKR
                }
            }
        }
        break;
        default:
            return state;
    }
};