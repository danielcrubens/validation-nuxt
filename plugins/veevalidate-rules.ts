import { defineRule, configure } from "vee-validate";
import * as rules from "@vee-validate/rules";
import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(rules)
    .filter((k) => k !== "default")
    .forEach((rule) => {
      defineRule(rule, rules[rule]);
    });

  defineRule('required', rules.required);
  defineRule('email', rules.email);

  configure({
    // Gera mensagens de localização em inglês
    generateMessage: localize('en', {
      messages: {
        required: 'Este campo é obrigatório',
        email: 'Este campo deve ser um e-mail válido',
      },

    }),
  });
});


/* required: 'Este campo é obrigatório',
        email: 'Este campo deve ser um e-mail válido',
      }, */

