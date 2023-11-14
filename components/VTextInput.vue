<template>
  <div class="field">
    <div class="label is-normal">
      <label class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <VField :name="name" v-slot="{ field, meta, errors }">
            <input v-bind="field" class="input" :class="{
              'is-success': meta.valid && meta.touched,
              'is-danger': !meta.valid && meta.touched,
            }" :placeholder="placeholder" :type="type" />
            <span class="icon is-small is-left">
              <i class="fas" :class="leftIcon"></i>
            </span>
            <span class="icon is-small is-right" v-if="meta.valid && meta.touched">
              <i class="fas fa-check has-text-success"></i>
            </span>
            <span class="icon is-small is-right" v-else-if="!meta.valid && meta.touched">
              <i class="fas fa-x has-text-danger"></i>
            </span>
            <!-- <template v-if="Object.keys(errors).length">
                <ul>
                  <li
                    v-for="(message, field) in errors"
                    :key="field"
                    class="help is-danger"
                  >
                    {{ message }}
                  </li>
                </ul>
              </template> -->
            <VErrorMessage :name="name" as="div" class="help is-danger" />
            <div class="debug" v-if="debug">
              <pre>{{ errors }}</pre>
              <pre>{{ meta }}</pre>
            </div>
          </VField>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: String,
    default: "",
  },
  debug: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
    <!--  <Form v-slot="{ meta }">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-7">
          <div class="">
            <Field name="name" type="text"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Seu nome" rules="required" />
            <ErrorMessage name="name" class="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="email" type="email"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Seu e-mail" rules="required|email" />
            <ErrorMessage name="email" class="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="assunto" type="text"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Assunto" rules="required" />
            <ErrorMessage name="assunto" class="text-red-500 text-sm" />
          </div>

          <div>
            <Field v-maska data-maska="(##) #####-####" type="tel" name="phone" id="phone"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="(XX) XXXX-XXXX" rules="required|phone" />
            <ErrorMessage name="phone" class="text-red-500 text-sm" />
          </div>
        </div>

        <div class="py-6">
          <Field as="textarea" name="message" id="message"
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Sua mensagem" rows="6" rules="required" />
          <ErrorMessage name="message" class="text-red-500 text-sm" />
        </div>

        <button type="submit" :class="{
          'bg-red-500 hover:brightness-95': !meta.valid || meta.$pending,
          'bg-blue-500 hover:brightness-95': meta.valid && !meta.$pending
        }" :disabled="!meta.valid || meta.$pending"
          class="inline-block w-full rounded-lg mt-6 transition duration-300 ease-in-out px-10 py-3 text-lg text-white font-bold sm:w-auto">
          Enviar
        </button>

      </Form> -->
  