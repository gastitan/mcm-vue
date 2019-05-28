<template>
  <div class="wrapper-form">
    <form v-if="!isSubmitted" @submit.prevent="submit" novalidate class="center-50">
      <div class="form-group">
        <label for="firstName">Nombre *</label>
        <input type="text" class="form-control" id="firstName" v-model.lazy.trim="form.firstName" @blur="onFieldBlur('firstName')" v-bind:class="getFieldClasses('firstName')">
        <div v-if="isErrorField('firstName')" class="invalid-feedback">Nombre es requerido</div>
      </div>
      <div class="form-group">
        <label for="lastName">Apellido *</label>
        <input type="text" class="form-control" id="lastName" v-model.lazy.trim="form.lastName" @blur="onFieldBlur('lastName')" v-bind:class="getFieldClasses('lastName')">
        <div v-if="isErrorField('lastName')" class="invalid-feedback">Apellido es requerido</div>
      </div>
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" class="form-control" id="email" v-model.lazy.trim="form.email" @blur="onFieldBlur('email')" v-bind:class="getFieldClasses('email')">
        <div v-if="isErrorField('email')" class="invalid-feedback">Email es requerido</div>
      </div>
      <div class="form-group">
        <label for="additionalInfo">Comentario</label>
        <textarea 
          type="additionalInfo" 
          class="form-control" 
          id="additionalInfo" 
          v-model.trim="form.additionalInfo" 
          v-bind:class="getFieldClasses('additionalInfo')" 
          v-bind:maxlength="$v.form['additionalInfo'].$params.maxLength.max" 
          @blur="onFieldBlur('additionalInfo')">
        </textarea>
        <small class="text-muted form-text">Quedan {{getCharactersLeft('additionalInfo')}} caracteres</small>
        <div v-if="isErrorField('additionalInfo')" class="invalid-feedback">Máxima cantidad de caracteres excedida</div>
      </div>
      <!--
      <div class="alert alert-danger" v-if="isError">
        <p class="mb-0">
          <strong>{{ $t(errorHeader) }}</strong>
        </p>
        <ul class="mb-0 pl-3" v-if="errors.length > 0">
          <li v-for="error in errors" v-bind:key="error.field">
            <span v-if="error.field">{{ $t('form.'+error.field) }}<span v-if="error.message">: {{ $t(error.message) }}</span></span>
            <span v-else-if="error.message">{{ $t(error.message) }}</span>
          </li>
        </ul>
      </div>
      -->
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="submitting">
          <span v-if="submitting">Enviando <img src="../assets/loader.svg" /></span>
          <span v-else>Enviando</span>
        </button>
      </div>
    </form>
    <div v-else>
      <div class="alert alert-success">
        <strong>Enviado</strong>
      </div>
      <div class="alert alert-info">
        <p><strong>Información enviada</strong></p>
        <pre>
            {{form}}
        </pre>
      </div>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload()">Volver</a>
      </p>
    </div>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
//import axios from 'axios';
//import Vue from 'vue';
//import { log } from 'util';

export default {
  name: 'contact',
  data() {
    return {
      isSubmitted: false,
      isError: false,
      errorHeader: 'error.invalidFields',
      errors: [],
      types: this.getTypes(),
      submitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        terms: false,
        type: null,
        additionalInfo: ''
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.sendFormData();
      } else {
        this.validationError();
      }
    },
    enableSubmitLoader() {
      this.submitting = true;
    },
    disableSubmitLoader() {
      this.submitting = false;
    },
    sendFormData() {
      this.enableSubmitLoader();
      /*axios.post(Vue.config.formApiUrl, this.form).then(response => {
        this.submitSuccess(response);
        this.disableSubmitLoader();
      }).catch(error => {
        this.submitError(error);
        this.disableSubmitLoader();
      });*/
      console.log('sendFormData');
    },
    submitSuccess(response) {
      if (response.data.success) {
        this.isSubmitted = true;
        this.isError = false;
      } else {
        this.errorHeader = 'error.invalidFields';
        this.errors = response.data.errors;
        this.isError = true;
      }
    },
    submitError(error) {
      this.errorHeader = 'error.general';
      this.errors = [{'field': null, 'message': 'error.generalMessage'}];
      this.isError = true;
    },
    validationError() {
      this.errorHeader = 'error.invalidFields';
      this.errors = this.getErrors();
      this.isError = true;
    },
    isErrorField(field) {
      try {
        if (this.getValidationField(field).$error) {
          return true;
        }
      } catch (error) {}

      return this.errors.some(el => el.field === field);
    },
    getErrors() {
      let errors = [];
      for (const field of Object.keys(this.form)) {
        try {
          if (this.getValidationField(field).$error) {
            errors.push({'field': field, 'message': null});
          }
        } catch (error) {}
      }
      return errors;
    },
    getFieldClasses(field) {
      return { 'is-invalid': this.isErrorField(field) }
    },
    getCharactersLeft(field) {
      try {
        return this.getValidationField(field).$params.maxLength.max - this.form[field].length;
      } catch (error) {
        return 0;
      }
    },
    getTypes() {
      return [{
        value: 'free', 
        label: 'form.types.free'
      }, {
        value: 'starter', 
        label: 'form.types.starter'
      }, {
        value: 'enterprise', 
        label: 'form.types.enterprise'
      }];
    },
    getValidationField(field) {
      if (this.$v.form[field]) {
        return this.$v.form[field];
      }
      throw Error('No validation for field ' + field);
    },
    onFieldBlur(field) {
      try {
        this.getValidationField(field).$touch();
        if (this.getValidationField(field).$error) {
          if (!this.errors.some(el => el.field === field)) {
            this.errors.push({'field': field, 'message': null});
          }
        } else {
          this.errors = this.errors.filter(el => el.field !== field);
        }
      } catch (error) {}
    },
    reload() {
      window.location = '';
    }
  },
  validations: {
    form: {
      email: { required, email },
      firstName: { required },
      lastName: { required },
      type: { required },
      terms: { required },
      additionalInfo: { maxLength: maxLength(1000) }
    }
  },
  watch: {
    errors() {
      this.isError = this.errors.length > 0 ? true : false;
    }
  }
}
</script>

<style>
pre {
    white-space: pre-line;
}

form {
    /*background: #efefef;*/
    padding: 2rem 2rem 1rem;
}

.wrapper-form{
    background: #efefef;
    padding: 2rem 2rem 1rem;
}

.center-50{
    width: 50%;
}
</style>
