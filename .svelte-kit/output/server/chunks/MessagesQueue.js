import { c as create_ssr_component, a as subscribe, v as validate_component, f as add_attribute, e as escape, h as createEventDispatcher, j as compute_slots, k as each } from "./index3.js";
import { p as page } from "./stores.js";
import { B as Button, I as Icon } from "./Button.js";
import { m as messages, r as resetMessages } from "./utilities.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const app = "";
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"sm:px-4 w-full"}"><div class="${"navbar bg-base-100 drop-shadow-xl sm:rounded-xl mx-auto container max-w-6xl sm:mt-4 w-full"}"><div class="${"navbar-start"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      ghost: true,
      link: "/",
      class: "text-xl text-gradient font-bold",
      normalCase: true
    },
    {},
    {
      default: () => {
        return `<img src="${"logo.png"}" alt="${"PhotosBro"}" class="${"w-48"}">
				`;
      }
    }
  )}</div>
		<div class="${"navbar-end gap-2"}">${$page.data.session ? `<div class="${"dropdown dropdown-end"}"><div class="${"tooltip tooltip-left"}"${add_attribute("data-tip", $page.data.session.user.email, 0)}><label tabindex="${"0"}" class="${"btn btn-ghost btn-circle"}">${validate_component(Icon, "Icon").$$render($$result, { name: "person" }, {}, {})}</label></div>
					<ul tabindex="${"0"}" class="${"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"}"><li>${validate_component(Button, "Button").$$render(
    $$result,
    {
      link: "/logout",
      ghost: true,
      "data-sveltekit-preload-data": "off"
    },
    {},
    {
      default: () => {
        return `Logout`;
      }
    }
  )}</li></ul></div>
				${!$page.url.pathname.startsWith("/app") ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      link: "/app",
      ghost: true
    },
    {},
    {
      default: () => {
        return `Launch`;
      }
    }
  )}` : ``}` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      link: "/login",
      ghost: true
    },
    {},
    {
      default: () => {
        return `Start now`;
      }
    }
  )}`}
			</div></div></div>`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"fill-current"}"><path d="${"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}"></path></svg>`;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" width="${"24px"}" height="${"24px"}" class="${"fill-current"}"><path d="${"M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"}"></path></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer footer-center p-10 bg-neutral text-neutral-content rounded"}"><div class="${"grid grid-flow-col gap-4"}"><a class="${"link link-hover"}" href="${"/"}">Home</a>
		<a class="${"link link-hover"}" href="${"/contacts"}">Contacts</a></div>
	<div><div class="${"grid grid-flow-col gap-4"}"><a href="${"https://twitter.com/rishi_kesav_9"}" target="${"_blank"}" rel="${"noreferrer"}">${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}</a>
			<a href="${"https://www.instagram.com/photosbro_official"}" target="${"_blank"}" rel="${"noreferrer"}">${validate_component(Instagram, "Instagram").$$render($$result, {}, {}, {})}</a></div></div>
	<div><p>Copyright © ${escape(new Date().getFullYear())} - All Rights Reserved</p></div></footer>`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { type = "info" } = $$props;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="${["alert shadow-lg", type == "error" ? "alert-error" : ""].join(" ").trim()}"><div>${type == "error" ? `<span class="${"material-symbols-outlined text-lg"}">error </span>` : `${type == "info" ? `<span class="${"material-symbols-outlined text-lg"}">info </span>` : ``}`}
		<div>${$$slots.title ? `<h3 class="${"font-bold"}">${slots.title ? slots.title({}) : ``}</h3>` : ``}
			<div class="${"text-sm"}">${slots.default ? slots.default({}) : ``}</div></div>
		<button class="${"btn btn-ghost btn-xs gap-1"}" type="${"button"}"><span class="${"material-symbols-outlined text-sm"}">close </span></button></div></div>`;
});
const MessagesQueue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $messages, $$unsubscribe_messages;
  $$unsubscribe_messages = subscribe(messages, (value) => $messages = value);
  beforeNavigate(() => {
    resetMessages();
  });
  $$unsubscribe_messages();
  return `${$messages.length > 0 ? `<div class="${"toast toast-end"}">${each($messages.reverse(), (message) => {
    return `${validate_component(Alert, "Alert").$$render($$result, { type: message.type }, {}, {
      default: () => {
        return `${escape(message.message)}
			`;
      }
    })}`;
  })}</div>` : ``}`;
});
export {
  Footer as F,
  Header as H,
  MessagesQueue as M
};
