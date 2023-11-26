import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { B as Button } from "../../../../chunks/Button.js";
import "classnames";
import { T as Title } from "../../../../chunks/Title.js";
import "../../../../chunks/db.js";
const Google = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 48 48"}" width="${"18"}" height="${"18"}" class="${"mr-2"}"><defs><path id="${"a"}" d="${"M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"}"></path></defs><clipPath id="${"b"}"><use xlink:href="${"#a"}" overflow="${"visible"}"></use></clipPath><path clip-path="${"url(#b)"}" fill="${"#FBBC05"}" d="${"M0 37V11l17 13z"}"></path><path clip-path="${"url(#b)"}" fill="${"#EA4335"}" d="${"M0 11l17 13 7-6.1L48 14V0H0z"}"></path><path clip-path="${"url(#b)"}" fill="${"#34A853"}" d="${"M0 37l30-23 7.9 1L48 0v48H0z"}"></path><path clip-path="${"url(#b)"}" fill="${"#4285F4"}" d="${"M48 48L17 24l-4-3 35-10z"}"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loadingGoogle = false;
  return `<div class="${"w-full max-w-sm mx-auto my-16 px-2"}"><div class="${"w-full bg-black shadow rounded-lg divide-y divide-gray-200"}" style="${"background-color: #191b1c;"}"><form class="${"px-5 py-7 flex flex-col gap-4"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Sign in`;
    }
  })}
			<p class="${"italic text-center"}">Sign in now to create personalized avatars that represents you.
			</p>
			${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      normalCase: true,
      block: true,
      loading: loadingGoogle,
      disabled: loadingGoogle,
      animated: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Google, "Google").$$render($$result, {}, {}, {})}
				Sign in with Google
			`;
      }
    }
  )}</form>
		<div class="${"py-5"}"><div class="${"flex flex-row justify-between px-4"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      startIcon: "arrow_back",
      ghost: true,
      size: "tiny",
      link: "/",
      normalCase: true
    },
    {},
    {
      default: () => {
        return `Back to photosbro.com`;
      }
    }
  )}
				${validate_component(Button, "Button").$$render(
    $$result,
    {
      startIcon: "contact_support",
      ghost: true,
      size: "tiny",
      link: "/contacts",
      normalCase: true
    },
    {},
    {
      default: () => {
        return `Help`;
      }
    }
  )}</div></div></div></div>`;
});
export {
  Page as default
};
