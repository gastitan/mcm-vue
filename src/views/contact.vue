<template>
  <div class="wrapper-form  paddingtb15">
    <div class="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
        <h3 class="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title">Contactanos</h3>
    </div>
    Ponete en contacto con nosotros y te llamaremos a la brevedad
    <form v-if="!isSubmitted" @submit.prevent="submit" novalidate class="offset-md-3 col-md-6 col-sm-3 col-lg-6">
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
    <section class="section contact-info">
      <ul class="blocks-list">
        <li class="contact-item">
            <span class="icon" style="font-size:32px;line-height:normal;">
                <i class="fas fa-store"></i>
            </span>
            <h4>HORARIO DE ATENCIÓN</h4>
            <p>Lunes a Sábados de 9 a 18</p>
        </li>
        <li class="contact-item">
           <span class="icon" style="font-size:32px;line-height:normal;">
                <i class="fas fa-mobile-alt"></i>
            </span>
            <h4>LLAMANOS</h4>
            <p>4612-4234</p>
        </li>
        <li class="contact-item">
           <span class="icon" style="font-size:32px;line-height:normal;">
                <i class="fas fa-envelope"></i>
            </span>
            <h4>ESCRIBINOS</h4>
            <p><a href="mailto: matafuegos.mcm@gmail.com">matafuegos.mcm@gmail.com</a></p>
        </li>
        <li class="contact-item">
            <span class="icon" style="font-size:32px;line-height:normal;">
                <i class="fas fa-map-marked-alt"></i>
            </span>
            <h4>NUESTRA UBICACIÓN</h4>
            <p>Condarco 364<br>Flores, CABA</p>
        </li>
      </ul>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0978067860356!2d-58.470476684232295!3d-34.6269685662368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98bfbeaaa45%3A0x273598b33ca66760!2sMatafuegos+MCM!5e0!3m2!1ses!2sar!4v1559138815007!5m2!1ses!2sar" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
.blocks-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    margin: 0 -15px;
}
.contact-info .blocks-list {
    align-items: flex-start;
}
.section {
    margin-bottom: 60px;
}
.section.contact-info {
    border-top: 1px solid #ddd;
    margin-top: 30px;
    padding-top: 60px;
}
.contact-item {
    box-sizing: border-box;
    color: #1d1d1d;
    display: flex;
    flex: 1 0 340px;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 30px;
    max-width: 100%;
    text-align: center;
}
</style>
