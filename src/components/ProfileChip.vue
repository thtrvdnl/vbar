<template>
  <li :style="chipStyle" class="person-item person-item-tags">
    <span class="person-item-text">{{ chipText }}</span>
  </li>
</template>

<script>
import { getRandomColor } from '@/utils'

export default {
  name: 'profile-chip',
  props: {
    chipText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chipStyle: `background-color: ${getRandomColor()}80;`
    }
  }
}
</script>

<style></style>
