import { c as create_ssr_component, v as validate_component, k as each, f as add_attribute } from "../../../chunks/index3.js";
import { B as Button, I as Icon } from "../../../chunks/Button.js";
const TextGradient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="${"text-gradient"}">${slots.default ? slots.default({}) : ``}</span>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--color-text:navy;--color-bg:black;--color-bg-accent:#ecdcc0;--duration:60s;--scroll-start:0;--scroll-end:calc(-100% + 100vw)}.marquee.svelte-k3nlvk.svelte-k3nlvk.svelte-k3nlvk{display:flex;overflow:hidden;user-select:none}.marquee__group.svelte-k3nlvk.svelte-k3nlvk.svelte-k3nlvk{flex-shrink:0;display:flex;align-items:center;justify-content:space-around;min-width:100%;animation:svelte-k3nlvk-scroll-x var(--duration) linear infinite}.marquee--reverse.svelte-k3nlvk .marquee__group.svelte-k3nlvk.svelte-k3nlvk{animation-direction:reverse;animation-delay:-3s}@media(prefers-reduced-motion: reduce){.marquee__group.svelte-k3nlvk.svelte-k3nlvk.svelte-k3nlvk{animation-play-state:paused}}:root{--color-text:navy;--color-bg:papayawhip;--color-bg-accent:#ecdcc0;--duration:60s;--scroll-start:0;--scroll-end:calc(-100% + 100vw)}.dark .carousel-item.svelte-k3nlvk img.svelte-k3nlvk.svelte-k3nlvk{filter:grayscale(100%) brightness(0.7)}@keyframes svelte-k3nlvk-scroll-x{from{transform:translateX(var(--scroll-start))}to{transform:translateX(var(--scroll-end))}}:root{--purple:rgb(123, 31, 162);--violet:rgb(103, 58, 183);--pink:rgb(244, 143, 177)}@keyframes svelte-k3nlvk-background-pan{from{background-position:0% center}to{background-position:-200% center}}@keyframes svelte-k3nlvk-scale{from,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes svelte-k3nlvk-rotate{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}h2.svelte-k3nlvk>.magic.svelte-k3nlvk.svelte-k3nlvk{display:inline-block;position:relative}h2.svelte-k3nlvk>.magic.svelte-k3nlvk>.magic-text.svelte-k3nlvk{animation:svelte-k3nlvk-background-pan 3s linear infinite;background:linear-gradient(\n    to right,\n    var(--purple),\n    var(--violet),\n    var(--pink),\n    var(--purple)\n  );background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}:root{--border:rgb(3, 169, 244);--g1:rgb(98, 0, 234);--g2:rgb(236, 64, 122);--g3:rgb(253, 216, 53)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const manAvatars = Array.from({ length: 10 }, (_, index) => `avatars/man (${index + 1}).png`);
  const womanAvatars = Array.from({ length: 12 }, (_, index) => `avatars/woman (${index + 1}).png`);
  $$result.css.add(css);
  return `<div class="${"prose px-2 lg:prose-xl text-center py-16 min-w-full"}"><h2></h2>
<h2 class="${"svelte-k3nlvk"}">Create
  <span class="${"magic svelte-k3nlvk"}"><span class="${"magic-text svelte-k3nlvk"}">stunning photos</span></span>
with AI-based generation
</h2>
	<p class="${"max-w-2xl mx-auto"}">Generate unique, professional-looking images tailored to your taste with our AI-based service.
		Try it now and see the possibilities.
	</p>
	${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      link: "/app",
      animated: true,
      endIcon: "arrow_forward",
      class: "text-white"
    },
    {},
    {
      default: () => {
        return `START GENERATING IMAGES`;
      }
    }
  )}</div>
<div class="${"relative pb-28"}"><div class="${"absolute bottom-0 left-[20%] -ml-12 overflow-visible w-40 aspect-square"}"><img src="${"avatars/man_from.jpeg"}" loading="${"lazy"}" alt="${"Demo source"}" class="${"absolute z-10 w-40 aspect-square rotate-12 shadow-md rounded-md"}">
		<img src="${"arrow.png"}" alt="${"Arrow"}" class="${"absolute text-black left-40 -bottom-4 z-20 rotate-[50deg]"}"></div></div>
<div class="${"marquee w-full svelte-k3nlvk"}"><div class="${"carousel carousel-center p-4 space-x-4 bg-neutral marquee__group svelte-k3nlvk"}">${each(manAvatars, (image) => {
    return `<div class="${"carousel-item svelte-k3nlvk"}"><img${add_attribute("src", image, 0)} loading="${"eager"}" alt="${"Demo avatar"}" class="${"rounded-box aspect-square h-[30vh] svelte-k3nlvk"}">
			</div>`;
  })}</div></div>
<div class="${"marquee marquee--reverse w-full -mt-4 svelte-k3nlvk"}"><div class="${"carousel carousel-center p-4 space-x-4 bg-neutral marquee__group svelte-k3nlvk"}">${each(womanAvatars, (image) => {
    return `<div class="${"carousel-item svelte-k3nlvk"}"><img${add_attribute("src", image, 0)} loading="${"eager"}" alt="${"Demo avatar"}" class="${"rounded-box aspect-square h-[30vh] svelte-k3nlvk"}">
			</div>`;
  })}</div></div>
<div class="${"relative pb-28"}"><div class="${"absolute top-0 right-[20%] -ml-12 overflow-visible w-40 aspect-square"}"><img src="${"avatars/woman_from.jpeg"}" loading="${"lazy"}" alt="${"Demo source"}" class="${"absolute z-10 w-40 aspect-square rotate-12 shadow-md rounded-md"}">
		<img src="${"arrow.png"}" alt="${"Arrow"}" class="${"absolute text-white right-44 rotate-[230deg]"}"></div></div>

<div class="${"prose px-2 lg:prose-xl text-center pt-16 min-w-full"}"><h2>What Does It Cost?</h2></div>

<div class="${"mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12 px-8"}"><div class="${"card relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12"}"><div aria-hidden="${"true"}" class="${"absolute top-0 w-full h-full rounded-2xl bg-black shadow-xl"}" style="${"background-color: #191b1c;"}"></div>
		<div class="${"relative p-6 space-y-6 lg:p-8"}"><h3 class="${"text-3xl font-semibold text-center text-white"}">50 Ai Avatars</h3>
			<div><div class="${"relative flex justify-around items-center"}"><span class="${"block text-3xl text-gray-400 font-bold line-through"}">500 INR</span>
					<div class="${"relative flex justify-around mb-2"}"><div class="${"relative flex flex-row items-end gap-1"}"><span class="${"text-7xl text-gray-100 font-bold leading-0"}">299</span>
							<span class="${"block text-sm text-blue-500 font-bold"}">INR</span></div></div></div></div>

			<div>${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      link: "/checkout",
      block: true,
      animated: true
    },
    {},
    {
      default: () => {
        return `Buy now`;
      }
    }
  )}
				<div class="${"flex flex-row gap-1 h-5 mt-3 mx-auto"}"><img src="${"mastercard-alt.svg"}" alt="${"Mastercard"}">
					<img src="${"visa.svg"}" alt="${"Visa"}">
					<img src="${"american-express.svg"}" alt="${"American Express"}">
					<img src="${"apple-pay.svg"}" alt="${"Apple Pay"}">
					<img src="${"google-pay.svg"}" alt="${"Google Pay"}"></div></div></div></div>

	<div class="${"relative group md:w-6/12 lg:w-7/12"}" style="${"background-color: #191b1c;"}"><div aria-hidden="${"true"}" class="${"absolute top-0 w-full h-full rounded-2xl bg-black shadow-lg"}" style="${"background-color: #191b1c;"}"></div>
		<div class="${"relative p-6 pt-10 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16 prose lg:prose-xl text-center"}"><p class="${"max-w-2xl mx-auto"}">Training an AI model to understand the physiognomy of a specific subject requires a lot of
				computational power, so it is quite costly to create a model that can accurately reproduce
				the specified subject.
			</p></div></div></div>

<div class="${"prose px-2 lg:prose-xl text-center pt-16 min-w-full"}"><h2>How it works</h2></div>
<ul class="${"steps steps-vertical mx-auto mt-8 pl-0 md:pl-48"}"><li class="${"step"}"><span class="${"flex flex-row items-center gap-2"}">${validate_component(Icon, "Icon").$$render($$result, { name: "how_to_reg" }, {}, {})}Sign up</span></li>
	<li class="${"step"}"><span class="${"flex flex-row items-center gap-2"}">${validate_component(Icon, "Icon").$$render($$result, { name: "cloud_upload" }, {}, {})}Upload your photos</span></li>
	<li class="${"step"}"><span class="${"flex flex-row items-center gap-2"}">${validate_component(Icon, "Icon").$$render($$result, { name: "add_shopping_cart" }, {}, {})}Complete payment</span></li>
	<li class="${"step"}"><span class="${"flex flex-row items-center gap-2"}">${validate_component(Icon, "Icon").$$render($$result, { name: "neurology" }, {}, {})}Get 50 AI Avatars</span></li></ul>

<div class="${"prose px-2 lg:prose-xl text-center pt-16 min-w-full"}"><h2>More popular than ${validate_component(TextGradient, "TextGradient").$$render($$result, {}, {}, {
    default: () => {
      return `ever`;
    }
  })}</h2>
<div class="${"stats stats-vertical lg:stats-horizontal shadow"}" style="${"background-color: #191b1c;"}"><div class="${"stat"}"><div class="${"stat-title"}">Avatars generated</div>
			<div class="${"stat-value"}">2K</div>
			<div class="${"stat-desc"}">August 1st - August 10th</div></div>

		<div class="${"stat"}"><div class="${"stat-title"}">New Users</div>
			<div class="${"stat-value"}">200</div>
			<div class="${"stat-desc"}">↗️ 22%</div></div>

		<div class="${"stat"}"><div class="${"stat-title"}">Average training time</div>
			<div class="${"stat-value"}">30min</div>
			<div class="${"stat-desc"}">↘️ 60min (50%)</div></div></div></div>

<div class="${"prose px-2 lg:prose-xl text-center py-16 min-w-full"}"><h2 class="${"max-w-2xl mx-auto"}">Create unique and personalized ${validate_component(TextGradient, "TextGradient").$$render($$result, {}, {}, {
    default: () => {
      return `Avatars`;
    }
  })} with AI assistance
	</h2>
	<div class="${"gap-4"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      link: "/app",
      animated: true,
      endIcon: "arrow_forward",
      class: "text-white"
    },
    {},
    {
      default: () => {
        return `Start now`;
      }
    }
  )}</div></div>
<div class="${"fixed bottom-4 right-4"}"></div>`;
});
export {
  Page as default
};
