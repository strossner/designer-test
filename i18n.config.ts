import enLang from '~/assets/lang/en.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    ...enLang,
  },
}));
