<template>
  <div>

    <div class="w-11/12 lg:w-10/12  mx-auto px-2">
      <Form>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-7">
          <div class="">
            <Field name="name" type="text"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Seu nome" rules="required" />
            <ErrorMessage name="name" class="text-red-500 text-sm" />
          </div>

          <div class="">
            <Field name="email" type="email"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Seu e-mail" rules="required|email" />
            <ErrorMessage name="email" class="text-red-500 text-sm" />
          </div>

          <div class="">
            <Field name="assunto" type="text"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Assunto" rules="required" />
            <ErrorMessage name="assunto" class="text-red-500 text-sm" />
          </div>

          <div class="">
            <Field type="tel" name="phone" id="phone"
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Seu número de telefone" rules="required|phone" />
            <ErrorMessage name="phone" class="text-red-500 text-sm" />
          </div>
        </div>
        <div class="py-6">
          <Field as="textarea" name="message" id="message"
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Sua mensagem" rows="6" rules="required" />
          <ErrorMessage name="message" class="text-red-500 text-sm" />
        </div>

        <button type="submit"
          class="inline-block w-full rounded-lg mt-6 bg-blue-500 hover:brightness-95 transition duration-300 ease-in-out px-10 py-3 text-lg text-white font-bold sm:w-auto">
          Enviar
        </button>
      </Form>

      <!-- <Form action="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-7">


          <Field
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-blue"
            type="text" placeholder="Nome completo" />
          <Field
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-blue"
            type="email" placeholder="Seu melhor e-mail" />
          <Field
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-blue"
            type="text" placeholder="Assunto" />
          <Field
            class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-blue"
            type="tel" placeholder="00 0 0000-0000" />
        </div>
        <Field
          class="appearance-none block  w-full bg-gray-200 text-gray border border-gray-200 mt-6 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue"
          placeholder="Mensagem" rows="6" />
        <div class="lg:flex flex items-baseline mt-2">
          <Field type="checkbox" class="accent-blue lowercase ">
            <p class="pl-3 text-base text-gray"> Ao clicar em ''enviar'' você concorda com nossos termos e políticas.
            </p>
          </Field>
        </div>
        <button type="submit"
          class="inline-block w-full rounded-lg mt-6 bg-blue-500 hover:brightness-95 transition duration-300 ease-in-out px-10 py-3 text-lg text-white font-bold sm:w-auto">
          Enviar
        </button>
      </Form> -->
    </div>
  </div>
</template>

<script setup>

</script>

<style></style>