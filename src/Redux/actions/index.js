

export const CLICK_ME = 'CLICK_ME';

export function clickme (data) {
    return {
        type: CLICK_ME,
        payload: data
    }
}