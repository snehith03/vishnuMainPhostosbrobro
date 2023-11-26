import { c as create_ssr_component, f as add_attribute, a as subscribe, e as escape, v as validate_component, k as each } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import "compressorjs";
import { B as Button } from "../../../../chunks/Button.js";
import { I as Input } from "../../../../chunks/Input.js";
import { T as Title } from "../../../../chunks/Title.js";
import { b as getUserInfo, a as handleErrorAndGetData, s as supabaseClient } from "../../../../chunks/db.js";
import "../../../../chunks/themes.js";
import { s as showError } from "../../../../chunks/utilities.js";
import "watermarkjs";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { s as store } from "../../../../chunks/index2.js";
import "@svelte-put/clickoutside";
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `${message ? `<div class="${"tooltip"}"${add_attribute("data-tip", message, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const en = {
  common: {
    uploadYourPhotos: "Upload your photos",
    payment: "Payment",
    trainTheAI: "Train the AI"
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f, args);
        return new Ctor();
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var svelteI18next = {};
var i18n$1 = {};
var translationStore = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(store);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.I18NextTranslationStore = exports.isLoading = void 0;
  const store_1 = require$$0;
  exports.isLoading = (0, store_1.writable)(true);
  class I18NextTranslationStore {
    constructor(i18n2) {
      this.i18n = this.createInstance(i18n2);
      this.isLoading = this.createLoadingInstance(i18n2);
    }
    createInstance(i18n2) {
      const i18nWritable = (0, store_1.writable)(i18n2);
      i18n2.on("initialized", () => {
        i18nWritable.set(i18n2);
      });
      i18n2.on("loaded", () => {
        i18nWritable.set(i18n2);
      });
      i18n2.on("added", () => i18nWritable.set(i18n2));
      i18n2.on("languageChanged", () => {
        i18nWritable.set(i18n2);
      });
      return i18nWritable;
    }
    createLoadingInstance(i18n2) {
      i18n2.on("loaded", (resources2) => {
        Object.keys(resources2).length !== 0 && exports.isLoading.set(false);
      });
      i18n2.on("failedLoading", () => {
        exports.isLoading.set(true);
      });
      return exports.isLoading;
    }
  }
  exports.I18NextTranslationStore = I18NextTranslationStore;
})(translationStore);
Object.defineProperty(i18n$1, "__esModule", { value: true });
i18n$1.createI18nStore = void 0;
const translation_store_1 = translationStore;
const createI18nStore = (i18n2) => {
  const i18nStore = new translation_store_1.I18NextTranslationStore(i18n2);
  return i18nStore.i18n;
};
i18n$1.createI18nStore = createI18nStore;
(function(exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(i18n$1, exports);
  __exportStar(translationStore, exports);
})(svelteI18next);
const resources = {
  en
};
i18next.use(LanguageDetector).init({
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ["querystring", "localStorage", "navigator"],
    caches: ["localStorage"],
    lookupQuerystring: "lng",
    lookupLocalStorage: "locale"
  },
  resources,
  defaultNS: "common",
  fallbackLng: "en"
});
const i18n = svelteI18next.createI18nStore(i18next);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-control.svelte-kxza70{z-index:10}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let userInfo = null;
  async function updateUserInfo() {
    userInfo = await getUserInfo();
    if (typeof spoilerOpen == "undefined") {
      spoilerOpen = !userInfo.in_training && !userInfo.trained;
    }
    if (userInfo.instance_class) {
      userInfo.instance_class;
    }
  }
  updateUserInfo();
  let uploadLoading = false;
  let inputFiles;
  let trainingPhotosLoading = false;
  let generating = false;
  let photosForTrain = void 0;
  let photosGenerated = [];
  let spoilerOpen = void 0;
  async function getSignedUrl(bucket, filename, thumbnail = true) {
    return handleErrorAndGetData(await supabaseClient.storage.from(bucket).createSignedUrl($page.data.session?.user.id + "/" + filename, 86400, thumbnail ? {
      transform: { height: 96, width: 96, resize: "cover" }
    } : {}))?.signedUrl;
  }
  async function loadPhotosForTraining() {
    trainingPhotosLoading = true;
    try {
      photosForTrain = await Promise.all(handleErrorAndGetData(await supabaseClient.storage.from("photos-for-training").list($page.data.session?.user.id, {
        sortBy: { column: "created_at", order: "asc" }
      })).map(async (file) => ({
        url: await getSignedUrl("photos-for-training", file.name),
        name: file.name
      })));
    } catch (error) {
      showError(error);
    } finally {
      trainingPhotosLoading = false;
    }
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (spoilerOpen && typeof photosForTrain === "undefined") {
          loadPhotosForTraining();
        }
      }
    }
    $$rendered = `<div class="${"w-full color-white max-w-2xl mx-auto my-16 px-2 gap-4 flex flex-col items-center"}">${userInfo ? `<ul class="${"steps text-xs sm:text-base"}"><li class="${[
      "step",
      photosForTrain && photosForTrain.length > 0 || userInfo.in_training || userInfo.trained ? "step-primary" : ""
    ].join(" ").trim()}">${escape($i18n.t("uploadYourPhotos"))}</li>
			<li class="${["step", !!userInfo.paid ? "step-primary" : ""].join(" ").trim()}">${escape($i18n.t("payment"))}</li>
			<li class="${[
      "step",
      !!userInfo.paid && photosGenerated.length > 0 ? "step-primary" : ""
    ].join(" ").trim()}">Generate your avatars
			</li></ul>

		<div tabindex="${"0"}" role="${"button"}" class="${[
      "collapse collapse-arrow w-full bg-black shadow rounded-lg p-6 flex flex-col items-center gap-4",
      (spoilerOpen ? "collapse-open" : "") + " " + (!spoilerOpen ? "collapse-close" : "")
    ].join(" ").trim()}" style="${"background-color: #191b1c;"}">${!userInfo.trained && !userInfo.in_training ? `${validate_component(Title, "Title").$$render($$result, { class: "collapse-title" }, {}, {
      default: () => {
        return `Upload your photos`;
      }
    })}` : `${validate_component(Title, "Title").$$render($$result, { class: "collapse-title" }, {}, {
      default: () => {
        return `Photos for training`;
      }
    })}`}
			<div class="${"collapse-content flex flex-col items-center gap-4 overflow-hidden"}">${!userInfo.trained && !userInfo.in_training ? `<img class="${"h-40 rounded-lg object-cover"}" src="${"1.jpeg"}" alt="${"Style Avatar"}">
<img class="${"h-40 rounded-lg object-cover"}" src="${"2.jpeg"}" alt="${"Style Avatar"}">




					<form class="${"w-full flex flex-col items-center gap-4"}">${validate_component(Input, "Input").$$render(
      $$result,
      {
        accept: "image/*",
        type: "file",
        name: "photos",
        multiple: true,
        input: inputFiles
      },
      {
        input: ($$value) => {
          inputFiles = $$value;
          $$settled = false;
        }
      },
      {}
    )}
						

						<p class="${"italic text-xs max-w-xs"}">It is necessary to upload at least 15 photos (ideally at least a dozen) where your face
							is clearly visible from multiple angles.
						</p>
						<p class="${"italic text-xs text-red-700 max-w-xs"}">Do not upload the same photo multiple times, as the AI needs to have different photos
							to learn from.
						</p>
						${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "medium",
        type: "submit",
        disabled: userInfo.in_training,
        loading: uploadLoading,
        animated: true
      },
      {},
      {
        default: () => {
          return `Upload`;
        }
      }
    )}</form>` : ``}
				${trainingPhotosLoading ? `<progress class="${"progress"}"></progress>` : `${photosForTrain && photosForTrain.length > 0 ? `<div class="${"flex flex-col items-center"}"><div class="${"flex flex-row justify-center bg-neutral gap-2 p-2 flex-wrap max-h-[40vh] overflow-y-auto overflow-x-hidden rounded-md"}">${each(photosForTrain, (image, index) => {
      return `<div class="${"relative group"}"><img${add_attribute("src", image.url, 0)} loading="${"eager"}"${add_attribute("alt", image.name, 0)} class="${"aspect-square h-24"}">

									${!userInfo.in_training && !userInfo.trained ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "absolute -right-2 -top-2 text-white opacity-0 group-hover:opacity-100 z-10",
          icon: "close",
          size: "small",
          circle: true,
          primary: true
        },
        {},
        {}
      )}` : ``}
								</div>`;
    })}</div></div>` : ``}`}</div></div>

		<div class="${"w-full bg-black shadow rounded-lg p-6 flex flex-col items-center gap-4"}" style="${"background-color: #191b1c;"}">${validate_component(Title, "Title").$$render($$result, { class: "mb-4" }, {}, {
      default: () => {
        return `Pay with Stripe`;
      }
    })}
			<div class="${"flex flex-row justify-center w-full"}">${userInfo.paid == null ? `<progress class="${"progress"}"></progress>` : `${userInfo.paid ? `${validate_component(Button, "Button").$$render($$result, { size: "small", disabled: true }, {}, {
      default: () => {
        return `Paid`;
      }
    })}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "medium",
        link: "/checkout",
        animated: true
      },
      {},
      {
        default: () => {
          return `Pay now`;
        }
      }
    )}`}`}</div></div>

		<div class="${"w-full bg-black shadow rounded-lg p-6 flex flex-col items-center gap-4 overflow-hidden"}" style="${"background-color: #191b1c;"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
      default: () => {
        return `Generate your avatars (${escape(userInfo.counter)})`;
      }
    })}
			<div class="${"flex flex-row justify-center gap-4 flex-wrap w-full"}">${`${photosGenerated.length > 0 ? `<div class="${"carousel carousel-center w-full p-8 space-x-4 bg-neutral rounded-box"}">${each(photosGenerated, (image, index) => {
      return `<div class="${"carousel-item relative group aspect-square"}"${add_attribute("id", `photo_${index}`, 0)}>${image.complete ? `<img${add_attribute("src", image.url, 0)} loading="${"eager"}" alt="${""}" class="${"aspect-square rounded-box max-w-[60vw]"}">
									

									${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "absolute right-3 top-3 text-white opacity-0 group-hover:opacity-100",
          icon: "close",
          size: "small",
          circle: true,
          primary: true
        },
        {},
        {}
      )}

									${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "absolute right-3 bottom-3 text-white opacity-0 group-hover:opacity-100",
          icon: "download",
          size: "small",
          circle: true,
          primary: true,
          target: "_blank"
        },
        {},
        {}
      )}` : `<div class="${"aspect-square max-w-[60vw] bg-slate-300 flex items-center justify-center p-8 rounded-md"}"><progress class="${"progress w-56"}"></progress>
									</div>`}
							</div>`;
    })}</div>
					<div class="${"flex flex-col items-center"}"><div class="${"flex flex-row justify-center bg-neutral gap-2 p-2 flex-wrap max-h-[40vh] overflow-y-auto overflow-x-hidden rounded-md"}">${each(photosGenerated, (image, index) => {
      return `<div class="${"relative group"}"><a${add_attribute("href", `#photo_${index}`, 0)}>${image.complete ? `<img${add_attribute("src", image.url, 0)} loading="${"eager"}" class="${"aspect-square h-24"}">` : `<div class="${"aspect-square h-24 bg-slate-300 flex items-center justify-center p-4 rounded-sm"}"><progress class="${"progress"}"></progress>
											</div>`}</a>
									${image.complete ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "absolute -right-2 -top-2 text-white opacity-0 group-hover:opacity-100 z-10",
          icon: "close",
          size: "small",
          circle: true,
          primary: true
        },
        {},
        {}
      )}` : ``}
								</div>`;
    })}</div></div>` : `<p class="${"italic text-xs"}">There are not yet any images present.</p>`}`}</div>

			${!userInfo.trained && !userInfo.in_training ? `<div class="${"form-control w-full max-w-xs svelte-kxza70"}"><label class="${"label"}" for="${"instance_class"}"><span class="${"label-text"}">Specify the subject</span></label>
					<select class="${"select select-bordered"}" id="${"instance_class"}"><option disabled selected value="${""}"></option><option value="${"young man"}">Young Male</option><option value="${"man"}">Male</option><option value="${"young woman"}">Young Female</option><option value="${"woman"}">Female</option></select></div>` : ``}



			<div class="${"divider -mb-2"}"></div>

			${!userInfo.trained && userInfo.counter > 50 ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "small",
        type: "button",
        disabled: !userInfo.paid || !userInfo.trained || generating || userInfo.in_training,
        animated: true
      },
      {},
      {
        default: () => {
          return `Generate`;
        }
      }
    )}` : `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        message: !userInfo.paid ? "Before being able to train the AI, you must first complete the payment." : "Caution: If you continue, you will not be able to upload any more photos."
      },
      {},
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "small",
              type: "button",
              disabled: !userInfo.paid || photosForTrain && photosForTrain.length == 0 || userInfo.trained || userInfo.in_training,
              animated: true
            },
            {},
            {
              default: () => {
                return `${userInfo.in_training ? `Generating..` : `${userInfo.trained ? `Generated` : `Generate`}`}`;
              }
            }
          )}
					${userInfo.in_training ? `<p class="${"italic text-xs mt-2"}">It can take up to 2 hours to complete the AI training</p>` : ``}`;
        }
      }
    )}`}</div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_i18n();
  return $$rendered;
});
export {
  Page as default
};
