interface CardItemImage {
    smallThumbnail: string,
}

interface CardItemVolImfo {
    title: string,
    authors: string[],
    imageLinks: CardItemImage,
    categories?: string[],
    description?: string[],
}

export interface CardItemSchema {
    id: string,
    volumeInfo: CardItemVolImfo,
}

export interface CardBooksSchema {
    totalItems: number,
    items: CardItemSchema[]
}