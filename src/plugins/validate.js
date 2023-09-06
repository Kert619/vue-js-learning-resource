import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";

import { required, alpha_spaces, url } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("alphaSpaces", alpha_spaces);
    defineRule("url", url);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} is required`,
          alphaSpaces: `The ${ctx.field} can only contain alphabetic characters or spaces. `,
          url: `The ${ctx.field} must be a url`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The ${ctx.field} is invalid`;

        return message;
      },
    });
  },
};
