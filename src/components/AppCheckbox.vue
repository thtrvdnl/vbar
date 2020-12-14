<template>
  <div class="checkbox-wrapper">
    <input :id="id" type="checkbox" class="checkbox" />
    <label :for="id" class="checkbox-label"><slot></slot></label>
  </div>
</template>

<script>
import { getRandomHex } from '@/utils'

export default {
  props: {
    id: {
      type: String,
      default: () => `id-${getRandomHex()}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';

.checkbox {
  display: none;
  &:checked ~ &-label::before {
    background: red;
  }

  &-wrapper {
  }
  &-label {
    position: relative;
    font-size: $lFontSize;
    &::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 7px;
      width: $sFontSize;
      height: $sFontSize;
      background: blue;
    }
  }
}
</style>
