<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /**
   * icon名称
   */
  name: string;
  /**
   * 尺寸
   */
  size: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'date',
  size: '16px',
});

const iconStyle = computed(() => {
  return {
    fontSize: props.size,
    width: props.size,
    height: props.size,
  };
});

const iconName = computed(() => {
  return `tips-icon-${props.name}`;
});

</script>

<template>
  <div
    class="tips-iconfont inline-block"
    :class="iconName"
    :style="iconStyle"
  />
</template>

<style scoped lang="less">
@import url('./libs/iconfont.css');

</style>
