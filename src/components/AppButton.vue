<template>
  <button
    :id="buttonId"
    :disabled="isDisabled"
    :class="buttonClass"
    :type="buttonType"
    :title="isDisabled ? 'Сначала заполните поля' : ''"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'app-button',
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
    },
    buttonId: {
      type: String
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
  border: none;
  padding: 15px;
  color: $light-95;
  box-shadow: 0 0 5px 0 $dark-35;
  transition-property: transform, box-shadow, opacity, width, height;
  transition-duration: 0.133s;
  transition-timing-function: ease-in-out;
  user-select: none;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: 0 2px 5px 1px $dark-35;
    transform: scale(0.99);
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  &-rounded {
    border-radius: 50%;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      transform: none;
    }
    & > i {
      font-size: $xlFontSize;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  &-send {
    width: 300px;
    border-radius: 50px;
    background-color: blue;
    font-size: 18px;
    transition: background-color 0.133s ease-in-out;
    margin: 0;
    &:hover:not(.btn:disabled) {
      background-color: green;
    }
  }

  &-outlined {
    width: 300px;
    border-radius: 50px;
    background-color: transparent;
    color: blue;
    border: 2px solid blue;
    font-size: 18px;
    font-weight: $bold;
    transition: transform 0.133s ease-in-out;
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

@media screen and (min-width: $maxWidth) {
  .btn {
    &-rounded {
      width: 75px;
      height: 75px;
      margin-right: 30px;
      box-shadow: 0 0 10px 0px $dark-35;
      opacity: 0.87;
      & > i {
        font-size: $xxlFontSize;
      }
      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        box-shadow: 0 2px 15px 3px $dark-35;
        opacity: 1;
      }
    }
  }
}
</style>
