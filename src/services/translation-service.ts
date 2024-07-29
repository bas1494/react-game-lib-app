import rawTranslations from '../assets/translations.json';
import { Localization, Translation } from '../types/localizations';

const translations: Localization = rawTranslations as Localization;

class TranslationService {
    
    private readonly KEY_LANGUAGE_COMBINATION_NOT_FOUND: string = 'translation not found';

    private language: string = 'en';

    constructor() {
        console.log("Initialized translationService");   
    }

    translateString(key: string, args: any[] = []): string {
        const translation: Translation = translations[key];
        if(translation == null) {
            console.warn("Translation for key " + key + " not found!");
            return this.KEY_LANGUAGE_COMBINATION_NOT_FOUND;
        }

        let translatedValue = translation[this.language];
        if(translatedValue == null) {
            console.warn("Language translation for key " + key + " not found!");
            return this.KEY_LANGUAGE_COMBINATION_NOT_FOUND;
        }

        if(args.length === 0) {
            return translatedValue;
        }

        args.forEach(arg => {
            translatedValue = translatedValue.replace('%s', arg);
        });

        return translatedValue;
    }
}

export default new TranslationService();