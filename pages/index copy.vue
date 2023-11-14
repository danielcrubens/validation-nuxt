<template>
  <div>
    <div v-if="isFormSubmittedSuccessfully && isFormValid" class="mt-4 p-3 bg-green-200 text-green-800 rounded">
      Formulário enviado com sucesso!
    </div>
    <div class="w-11/12 lg:w-10/12  mx-auto px-2">
      <Form action="#" @submit="submitForm" ref="form">
        <!--  <form action="https://formsubmit.co/dawace5148@mainmile.com" method="POST"> -->
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
            <Field v-maska data-maska="(##) #####-####" type="tel" name="phone"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="(XX) XXXX-XXXX" rules="required" />
            <ErrorMessage name="phone" class="text-red-500 text-sm" />
          </div>
        </div>

        <div class="py-6">
          <Field as="textarea" name="message" id="message"
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Sua mensagem" rows="6" rules="required" />
          <ErrorMessage name="message" class="text-red-500 text-sm" />
        </div>

        <button @click="submitForm" type="submit"
          class="inline-block bg-blue-500 w-full rounded-lg mt-6 transition duration-300 ease-in-out px-10 py-3 text-lg text-white font-bold sm:w-auto">
          Enviar
        </button>
        <!-- </form> -->
      </Form>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {


      // Assuming the form submission is successful, show an alert
      alert("Dados enviados com sucesso!");

      // Reset the form after successful submission (if needed)
      this.$refs.form.reset();

    },

  }
}
</script>



















