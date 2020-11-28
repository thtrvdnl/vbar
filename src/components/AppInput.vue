<template>
  <div class="input-wrapper">
    <input
      @input="inputChange"
      placeholder=" "
      class="input-field"
      :required="isRequired"
      :id="labelId"
      :type="inputType"
      autocomplete="on"
    />
    <div class="input-label-wrapper">
      <label class="input-label" :for="labelId">{{ labelText }}</label>
      <i
        v-if="inputTypeProp === 'password' && inputType === 'password'"
        @click="inputType = 'text'"
        class="input-icon material-icons-outlined"
        >visibility</i
      >
      <i
        v-if="inputTypeProp === 'password' && inputType !== 'password'"
        @click="inputType = 'password'"
        class="input-icon material-icons-outlined"
        >visibility_off</i
      >
    </div>
  </div>
</template>

<script>
import { getRandomHex } from '@/utils'

export default {
  props: {
    labelId: {
      type: String,
      default: () => {
        const rndHex = getRandomHex(0, 2 ** 32)
        return `id-${rndHex}`
      }
    },
    labelText: {
      type: String,
      default: 'Fill a field'
    },
    inputTypeProp: {
      type: String,
      default: 'text'
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    dataPropName: {
      type: String
    }
  },
  data() {
    return {
      inputType: this.inputTypeProp
    }
  },
  methods: {
    inputChange(e) {
      this.$emit('input-change', e.target.value, this.dataPropName)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/vars';
$inputHeight: 50px;
$inputWidth: 300px;
$inputTextPaddingTop: 12px;

.input {
  font-size: 18px;

  &-wrapper {
    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  &-label {
    &-wrapper {
      position: relative;
      width: $inputWidth;
    }
    position: absolute;
    top: $inputTextPaddingTop;
    left: 15px;
    font-size: 20px;
    margin-bottom: 5px;
    color: gray;
    transition-property: top, left, font-size, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
  &-field {
    background: white;
    border: none;
    border-bottom: 3px solid gray;
    width: $inputWidth;
    height: $inputHeight;
    line-height: $inputHeight;
    font-size: 20px;
    padding: 5px 15px;
    transition: border-bottom 0.2s ease-in-out;
    border-radius: 0;

    &:not(:placeholder-shown) ~ .input-label-wrapper .input-label {
      top: -20px;
      left: 0px;
      font-size: 14px;
    }

    &:valid {
      border-bottom: 3px solid green;
    }
    &:invalid:not(:placeholder-shown) {
      border-bottom: 3px solid red;
    }
    &:focus {
      border-bottom: 3px solid blue;
    }
    &:valid ~ .input-label-wrapper .input-label {
      color: green;
    }
    &:invalid:not(:placeholder-shown) ~ .input-label-wrapper .input-label {
      color: red;
    }
    &:focus:not(:placeholder-shown) ~ .input-label-wrapper .input-label {
      color: blue;
    }
  }
  &-icon {
    color: $textDark;
    position: absolute;
    right: 10px;
    top: $inputTextPaddingTop;
    cursor: pointer;
    user-select: none;
    background-color: #fff;
  }
}
</style>
