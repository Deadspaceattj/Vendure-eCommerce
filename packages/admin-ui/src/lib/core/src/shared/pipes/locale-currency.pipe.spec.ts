import { CurrencyCode, LanguageCode } from '../../common/generated-types';

import { LocaleCurrencyPipe } from './locale-currency.pipe';

describe('LocaleCurrencyPipe', () => {
    it('GBP in English', () => {
        const pipe = new LocaleCurrencyPipe();
        expect(pipe.transform(1, CurrencyCode.GBP, LanguageCode.en)).toBe('£0.01');
        expect(pipe.transform(123, CurrencyCode.GBP, LanguageCode.en)).toBe('£1.23');
        expect(pipe.transform(4200000, CurrencyCode.GBP, LanguageCode.en)).toBe('£42,000.00');
    });

    it('EUR in German', () => {
        const pipe = new LocaleCurrencyPipe();
        expect(pipe.transform(1, CurrencyCode.EUR, LanguageCode.de)).toBe('0,01 €');
        expect(pipe.transform(123, CurrencyCode.EUR, LanguageCode.de)).toBe('1,23 €');
        expect(pipe.transform(4200000, CurrencyCode.EUR, LanguageCode.de)).toBe('42.000,00 €');
    });

    // https://github.com/vendure-ecommerce/vendure/issues/1768
    it('Custom currency code in English', () => {
        const pipe = new LocaleCurrencyPipe();
        const customCurrencyCode = 'FLTH';
        expect(pipe.transform(1, customCurrencyCode, LanguageCode.en)).toBe('0.01');
        expect(pipe.transform(123, customCurrencyCode, LanguageCode.en)).toBe('1.23');
        expect(pipe.transform(4200000, customCurrencyCode, LanguageCode.en)).toBe('42000.00');
    });
});
