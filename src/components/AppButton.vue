<template>
  <button :disabled="isDisabled" :class="buttonClass" :type="buttonType"><slot /></button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    buttonType: {
      type: String,
      default: 'button'
    },
    buttonClass: {
      type: String,
      default: 'btn'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/vars';

.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  border: none;
  padding: 15px;
  color: $light-95;
  margin-top: 40px;
  box-shadow: 0 0 5px 0 $dark-35;
  transition-property: background-color, box-shadow, opacity, width, height;
  transition-duration: 0.133s;
  transition-timing-function: ease-in-out;
  border-radius: 50px;
  font-size: 18px;
  &-send {
    background: blue;
    &:hover {
      background-color: green;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
}
</style>
