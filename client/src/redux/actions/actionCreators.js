// increment likes

export const increment = id => {
    return {
        type: 'INCREMENT_LIKES',
        id
    }
}

export const loadBooks = (books) => {
    return {
        type: 'LOAD_BOOKS',
        books
    }
}