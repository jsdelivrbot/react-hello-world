// state arg isnt application state,
// state = null - es6 syntax. if undefined
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state; // redux cannot return undefined - it throws an error
}