const INITIAL_STATE = {
    OKRData: {},
    currentOKR: {},
    categories: []
}
export default (state = INITIAL_STATE, action) => {
    const { type = '', payload = {} } = action;
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
            return {
                ...state,
                currentOKR: {
                    ...payload
                }
            }
        }
        break;
        default:
            return state;
    }
};