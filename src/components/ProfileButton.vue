<template>
  <button :id="buttonId" class="btn btn-rounded">
    <i :class="`material-icons${isOutlined ? '-outlined' : ''}`">{{ buttonType }}</i>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true
    },
    buttonId: {
      type: String
    },
    isOutlined: {
      type: Boolean,
      default: false
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

  &-rounded {
    border-radius: 50%;
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
