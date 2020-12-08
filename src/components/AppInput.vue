<template>
  <div class="input-wrapper">
    <input
      :placeholder="placeholder"
      class="input-field"
      autocomplete="on"
      :inputValue="inputValue"
      :required="isRequired"
      :id="labelId"
      :type="inputType"
      :disabled="isDisabled"
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
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
      @click="onIconClick"
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ' '
    },
    dataPropName: {
      type: String
    }
  },
  model: {
    prop: 'inputValue',
    event: 'input'
  },
  data() {
    return {
      inputType: this.inputTypeProp,
      isDisabled: this.disabled
    }
  },
  methods: {
    onIconClick() {
      this.$emit('icon-click', this.dataPropName)
      this.isDisabled = !this.isDisabled
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';

.input {
  font-size: 16px;

  &-wrapper {
    position: relative;
    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: center;
    justify-content: center;
    width: $inputWidth;
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

    &:disabled ~ .input-label-wrapper .input-label {
      font-weight: $bold;
      color: $textDark;
    }

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
    &-after-out {
      right: -48px;
      top: 4px;
      background: transparent;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      transition-property: background-color, transform;
      transition-duration: 0.133s;
      transition-timing-function: ease;
      transform: scale(1);
      &:hover,
      &:focus {
        transform: scale(1.1);
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
