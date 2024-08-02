import al from "./messages/al.json";

type Messages = typeof al;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
