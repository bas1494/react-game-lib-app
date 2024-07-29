export interface Translation {
    nl: string,
    en: string,
    [key: string]: string;
}

export interface Localization {
    [key: string]: Translation;
}
