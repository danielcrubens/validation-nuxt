<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-11/12 lg:w-6/12 mx-auto px-2">
      <Form @submit="onFormSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-7">

          <div class="mb-5">
            <Field
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              name="name" v-model="form.name" type="text" placeholder="Seu nome" rules="required" />
            <ErrorMessage v-if="!success" name="name" class="text-red-500 text-sm" />
          </div>

          <div class="mb-5">
            <Field
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              name="email" v-model="form.email" type="email" placeholder="Seu e-mail" rules="required|email" />
            <ErrorMessage v-if="!success" name="email" class="text-red-500 text-sm" />
          </div>

          <div class="mb-5">
            <Field
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              name="subject" v-model="form.subject" type="text" placeholder="Assunto" rules="required" />
            <ErrorMessage v-if="!success" name="subject" class="text-red-500 text-sm" />
          </div>

          <div class="mb-5">
            <Field
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              v-maska data-maska="(##) #####-####" type="tel" v-model="form.phone" name="phone"
              placeholder="(XX) XXXX-XXXX" rules="required" />
            <ErrorMessage v-if="!success" name="phone" class="text-red-500 text-sm" />
          </div>
        </div>

        <div class="mb-5">
          <Field
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            as="textarea" name="message" placeholder="Sua mensagem" v-model="form.message" rows="6" rules="required" />
          <ErrorMessage v-if="!success" name="message" class="text-red-500 text-sm" />
        </div>

        <button
          class="inline-block bg-blue-500 w-full rounded-lg mt-6 transition duration-300 ease-in-out px-10 py-3 text-lg text-white font-bold sm:w-auto"
          type="submit">
          <template v-if="waiting">Enviando 📩</template>
          <template v-if="!waiting">Enviar</template>
        </button>
      </Form>

      <p v-if="showError" class="text-red-500">Falha ao enviar o formulário.</p>


    </div>
    <div v-if="success" :class="{ 'fade-out': fadeOut }"
      class="bg-teal-100 w-6/6 position absolute top-1 right-0 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert">
      <div class="flex">
        <p class="text-green-500">Formulário enviado com sucesso!</p>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script setup>
import { ref, computed } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
});

const errors = ref(false);
const success = ref(false);
const waiting = ref(false);

const showError = computed(() => errors.value && !success.value);

function onFormSubmit() {
  // Aqui o Vee Validate automaticamente valida o formulário
  if (form.value.name && form.value.email && form.value.subject && form.value.phone && form.value.message) {
    sendFormData();
  } else {
    errors.value = true;
    success.value = false;
  }
}

async function sendFormData() {
  waiting.value = true;
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      errors.value = false;
      success.value = true;
      form.value = {
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
      };
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    errors.value = true;
    success.value = false;
  } finally {
    waiting.value = false;
  }
}
</script>

<style>
.fade-out {
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.fade-out.fade-out-animation {
  opacity: 0;
}
</style>
