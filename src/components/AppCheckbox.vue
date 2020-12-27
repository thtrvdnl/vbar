<template>
  <div class="checkbox-wrapper">
    <input @change="$emit('change', value)" :value="value" :id="id" type="checkbox" class="checkbox" />
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
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';

.checkbox {
  display: none;

  &:focus,
  &:hover ~ &-label::before {
    color: rgba(0, 0, 0, 0.5);
  }

  &:checked ~ &-label::before {
    background: blue;
    color: white;
  }

  &-label {
    position: relative;
    font-size: $lFontSize;
    &::before {
      content: '✓';
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: $sFontSize;
      font-weight: 700;
      color: rgba(150, 150, 150, 0.3);
      position: absolute;
      left: -26px;
      top: 5px;
      width: 20px;
      height: 20px;
      background: transparent;
      border: 1px solid blue;
      border-radius: 3px;
      transition-property: background, color;
      transition-duration: 0.133s;
      transition-timing-function: ease-in-out;
    }
  }
}
</style>
