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

    // Redo button as Object
    // Change profile button to app button in profilepage
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
  width: 60px;
  height: 60px;
  border: none;
  padding: 15px;
  margin-right: 20px;
  color: $light-95;
  box-shadow: 0 0 5px 0 $dark-35;
  transition-property: box-shadow, opacity, width, height;
  transition-duration: 0.133s;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 2px 5px 1px $dark-35;
  }

  & > i {
    font-size: $xlFontSize;
  }

  &:last-child {
    margin-right: 0;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  &-rounded {
    border-radius: 50%;
  }
  &-send {
    width: 300px;
    border-radius: 50px;
    background-color: blue;
    font-size: 18px;
    transition: background-color 0.133s ease-in-out;
    &:hover:not(.btn:disabled) {
      background-color: green;
    }
  }
}

#block {
  background: #ed213a;
  background: linear-gradient(to right, #93291e, #ed213a);
}

#like {
  background: #ff512f;
  background: linear-gradient(to right, #dd2476, #ff512f);
}

#message {
  background: #2193b0;
  background: linear-gradient(to right, #2193b0, #6dd5ed);
}

#skip {
  background: #232526;
  background: linear-gradient(to right, #414345, #232526);
}
</style>
