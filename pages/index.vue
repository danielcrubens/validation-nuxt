<template>
  <div class="w-11/12 lg:w-10/12  mx-auto px-2">

    <Form method="post" action="https://formsubmit.co/yoxep54515@mainmile.com" :validation-schema="defineRule">
      <input type="hidden" name="_next" value="https://www.uol.com.br/">
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

      <button
        class="inline-block bg-blue-500 w-full rounded-lg mt-6 transition duration-300 ease-in-out px-10 py-3 text-lg text-white font-bold sm:w-auto"
        type="submit">Foi</button>
    </Form>
  </div>
</template>
 

