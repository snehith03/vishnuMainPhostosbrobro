import { c as create_ssr_component, f as add_attribute } from "./index3.js";
import cn from "classnames";
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  return `<article${add_attribute("class", cn("prose px-2 lg:prose-xl text-center min-w-full", classes), 0)}><h2>${slots.default ? slots.default({}) : ``}</h2></article>`;
});
export {
  Title as T
};
