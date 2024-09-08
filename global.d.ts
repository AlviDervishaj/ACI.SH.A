import en from "./messages/en.json";

type Messages = typeof en;
type InferElementType<A> = A extends readonly (infer T)[] ? T : never

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages { }
}
