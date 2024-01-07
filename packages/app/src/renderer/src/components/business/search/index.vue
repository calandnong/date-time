<script setup lang="ts">
import TipsInput from '../../tips/input/index.vue';
import TipsIcon from '../../../components/tips/icon/index.vue';

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

</script>

<template>
  <div class="relative">
    <div class="absolute z-1 left-5px absolute-center color-#ffffff">
      <tips-icon
        name="search"
        size="14px"
      />
    </div>
    <tips-input class="pl-26px bg-#363432" />
  </div>
</template>

<style scoped lang="less">
.absolute-center {
  top: 50%;
  transform: translateY(-50%);
}
</style>
