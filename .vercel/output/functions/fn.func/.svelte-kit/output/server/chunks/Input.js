import { c as create_ssr_component, l as compute_rest_props, f as add_attribute, e as escape, o as spread, p as escape_attribute_value, q as escape_object, k as each, v as validate_component, j as compute_slots } from "./index3.js";
import cn from "classnames";
import { B as Button } from "./Button.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "id",
    "name",
    "label",
    "altLabel",
    "input",
    "value",
    "type",
    "options",
    "inputClass",
    "containerClass",
    "labelButton",
    "block"
  ]);
  let $$slots = compute_slots(slots);
  let { id = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { label = void 0 } = $$props;
  let { altLabel = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { options = [] } = $$props;
  let { inputClass = "" } = $$props;
  let { containerClass = "" } = $$props;
  let { labelButton = void 0 } = $$props;
  let { block = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.altLabel === void 0 && $$bindings.altLabel && altLabel !== void 0)
    $$bindings.altLabel(altLabel);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.labelButton === void 0 && $$bindings.labelButton && labelButton !== void 0)
    $$bindings.labelButton(labelButton);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  {
    {
      if (input && value && type !== "file") {
        input.value = value.toString();
      }
    }
  }
  return `<div${add_attribute("class", cn("form-control", containerClass), 0)}>${label ? `<label class="${"label"}"${add_attribute("for", id, 0)}><span class="${"label-text text-inherit"}">${escape(label)}</span></label>` : ``}

	<div class="${"relative"}">${type == "textarea" ? `<textarea${spread(
    [
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        class: escape_attribute_value(cn("textarea textarea-bordered w-full", { "max-w-xs": !block }, inputClass))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${value || ""}</textarea>` : `${type == "select" ? `<select${spread(
    [
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        class: escape_attribute_value(cn("select select-bordered capitalize w-full", { "max-w-xs": !block }, inputClass))
      },
      escape_object($$restProps)
    ],
    {}
  )}><option disabled selected value="${""}"></option>${each(options, ([key, label2]) => {
    return `<option${add_attribute("value", key, 0)} class="${"capitalize"}">${escape(label2)}</option>`;
  })}</select>` : `<input${spread(
    [
      { id: escape_attribute_value(id) },
      { type: escape_attribute_value(type) },
      { name: escape_attribute_value(name) },
      {
        class: escape_attribute_value(cn(
          "w-full",
          {
            "file-input file-input-bordered": type == "file",
            "input input-bordered": type != "file",
            "max-w-xs": !block
          },
          inputClass
        ))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", input, 0)}>`}`}

		${labelButton ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "absolute top-0 right-0 rounded-l-none",
      primary: true
    },
    {},
    {
      default: () => {
        return `${escape(labelButton)}`;
      }
    }
  )}` : ``}</div>
	${altLabel || $$slots.altLabel ? `<label class="${"label"}"><span class="${"label-text-alt"}">${slots.altLabel ? slots.altLabel({}) : `
					${escape(altLabel)}
				`}</span></label>` : ``}</div>`;
});
export {
  Input as I
};
