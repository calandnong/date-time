<script setup lang="ts">
import TipsIcon from '../../../components/tips/icon/index.vue';

interface Props {
  icon: string;
  count: number;
  type: string;
}

withDefaults(defineProps<Props>(), {
  icon: 'date',
  count: 0,
  type: '今天',
});

</script>

<template>
  <div class="w-116px h-60px box-border pt-8px pb-8px pl-10px pr-10px bg-#4c4a48 border-rd-6px flex flex-col justify-between cursor-pointer">
    <div class="flex justify-between">
      <div class="w-22px h-22px bg-#636366 border-rd-50% color-#ffffff flex justify-center items-center">
        <tips-icon
          :name="icon"
          size="16px"
        />
      </div>
      <div class="color-#c8c6c4 font-600">
        {{ count }}
      </div>
    </div>
    <div class="color-#c8c6c4 font-size-12px">
      {{ type }}
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
