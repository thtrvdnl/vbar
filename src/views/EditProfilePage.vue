<template>
  <profile-layout>
    <main class="main">
      <h2 class="main-title">Редактирование профиля</h2>
      <div class="main-body">
        <form @submit.prevent="onSubmit" class="main-form">
          <app-input
            v-for="input of inputArr"
            placeholder=""
            :key="input.dataPropName"
            :labelText="input.labelText"
            :inputValue="input.inputValue"
            :dataPropName="input.dataPropName"
            @input="onInput"
            @icon-click="onIconClick"
          ></app-input>
          <div class="checkboxes-wrapper">
            <h3 class="checkboxes-title">Сорта пива</h3>
            <app-checkbox
              v-for="beerGrade in beerGradesArr"
              :key="beerGrade.value"
              :checked="beerGrade.checked"
              :value="beerGrade.value"
              @change="onCheckboxChange"
              >{{ beerGrade.value }}</app-checkbox
            >
          </div>
          <div class="btns-wrapper">
            <app-button type="submit" class="btn btn-send" @change="onCheckboxChange">Сохранить</app-button>
          </div>
        </form>
      </div>
    </main>
  </profile-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import ProfileLayout from '@/components/ProfileLayout.vue'

import { getRandomHex } from '@/utils'

export default {
  name: 'edit-profile-page',
  components: { ProfileLayout, AppInput, AppButton, AppCheckbox },
  computed: {
    ...mapGetters({
      currentUser: 'USER'
    }),
    inputArr() {
      return [
        {
          dataPropName: 'email',
          labelText: 'Email',
          inputValue: this.currentUser.email,
          inputTypeProp: 'email',
          isRequired: true
        },
        {
          dataPropName: 'username',
          labelText: 'Имя пользователя',
          inputValue: this.currentUser.username,
          inputTypeProp: 'text',
          isRequired: true
        },
        {
          dataPropName: 'phone',
          labelText: 'Номер телефона',
          inputValue: this.currentUser.phone,
          inputTypeProp: 'tel'
        },
        {
          dataPropName: 'firstName',
          labelText: 'Имя',
          inputValue: this.currentUser.firstName,
          inputTypeProp: 'text',
          isRequired: true
        },
        {
          dataPropName: 'lastName',
          labelText: 'Фамилия',
          inputValue: this.currentUser.lastName,
          inputTypeProp: 'text'
        }
      ]
    }
  },
  data() {
    return {
      newUserData: {},
      beerGrades: this.currentUser.beerGrade.split(',').map(b => b.trim())
    }
  },
  methods: {
    onIconClick(propName) {
      console.log(propName)
    },
    onInput(str, propName) {
      this.newUserData[propName] = str
    },
    onCheckboxChange(_, beerGrade) {},
    async onSubmit() {
      if (Object.keys(this.newUserData).length) {
        const res = await this.$store.dispatch('UPDATE_PROFILE', this.newUserData)
        console.log(res)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/vars';

.main {
  &-title {
    text-align: center;
    font-size: $xlFontSize;
    padding: 20px 10px;
  }
  &-form {
    & > * {
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.checkboxes {
  &-title {
    text-align: left;
    font-size: $lFontSize;
  }
  &-wrapper {
    padding: 0 10px;
  }
}
</style>
