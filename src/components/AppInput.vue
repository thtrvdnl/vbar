<template>
  <div class="input-wrapper">
    <input
      :inputValue="inputValue"
      @input="$emit('input', $event.target.value)"
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
        class="input-icon input-icon-password material-icons-outlined"
        >visibility</i
      >
      <i
        v-if="inputTypeProp === 'password' && inputType !== 'password'"
        @click="inputType = 'password'"
        class="input-icon input-icon-password material-icons-outlined"
        >visibility_off</i
      >
    </div>
    <i
      :class="`input-icon ${iconClass ? 'input-icon-' + iconClass : ''} material-icons${isOutlined ? '-outlined' : ''}`"
      >{{ icon }}</i
    >
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
    icon: {
      type: String
    },
    isOutlined: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: 'input-icon'
    },
    inputValue: {
      type: String
    }
  },
  model: {
    prop: 'inputValue',
    event: 'input'
  },
  data() {
    return {
      inputType: this.inputTypeProp
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';
$inputHeight: 50px;
$inputWidth: 320px;
$inputTextPaddingTop: 12px;
$inputIconPaddingSide: 10px;
$labelPaddingLeft: 40px;

.input {
  font-size: 16px;

  &-wrapper {
    position: relative;
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
    left: $labelPaddingLeft;
    font-size: 20px;
    margin-bottom: 5px;
    color: gray;
    transition-property: top, left, font-size, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    user-select: none;
  }
  &-field {
    background: white;
    border: none;
    border-bottom: 3px solid gray;
    width: $inputWidth;
    height: $inputHeight;
    line-height: $inputHeight;
    font-size: 16px;
    padding: 5px $labelPaddingLeft;
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
    &:valid ~ .input-icon {
      color: green;
    }
    &:invalid:not(:placeholder-shown) ~ .input-icon {
      color: red;
    }
    &:focus:not(:placeholder-shown) ~ .input-icon {
      color: blue;
    }
  }
  &-icon {
    position: absolute;
    top: $inputTextPaddingTop;
    color: $textDark;
    user-select: none;
    background-color: #fff;
    &-password {
      right: $inputIconPaddingSide;
      cursor: pointer;
    }
    &-before {
      left: $inputIconPaddingSide;
    }
  }
}
</style>
