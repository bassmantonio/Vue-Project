<template>
  <div>
    <h2>Registry Form</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Name:</label>
        <Field type="text" name="nombre" id="name" placeholder="type your name"/>
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">E-mail:</label>
        <Field type="email" name="email" placeholder="type your e-mail"/>
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Save</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit = () => {
  console.log('Se ha enviado el formulario');
}

</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
