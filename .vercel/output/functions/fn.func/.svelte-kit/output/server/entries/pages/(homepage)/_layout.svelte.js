import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { H as Header, M as MessagesQueue, F as Footer } from "../../../chunks/MessagesQueue.js";
import "../../../chunks/db.js";
import "classnames";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"min-h-screen flex flex-col"}"><div class="${"w-full flex-1"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

		<div class="${"h-full w-full flex flex-col justify-center sm:pt-4 pb-4"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
			${slots.default ? slots.default({}) : ``}
			${validate_component(MessagesQueue, "MessagesQueue").$$render($$result, {}, {}, {})}</div></div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
