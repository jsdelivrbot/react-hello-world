export function selectBook(book) {
    // action -> obj with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}