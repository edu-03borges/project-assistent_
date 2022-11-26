interface IFindPhraseDTO {
    id?: string;
    question?: string;
    answer?: string;
}

interface IRequestLangDTO {
    question: string;
    answer: string;
}

interface IRequestLangUpdateDTO {
    id: string;
    question?: string;
    answer?: string;
}

export { 
    IFindPhraseDTO,
    IRequestLangDTO,
    IRequestLangUpdateDTO
}