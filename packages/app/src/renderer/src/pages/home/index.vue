<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@renderer/store/module/todo/index';

const todoStore = useTodoStore();

const { todoDetail } = storeToRefs(todoStore);

</script>

<template>
  <div class="pl-16px">
    <div>
      <div class="flex justify-between font-size-30px font-600 color-#727e87">
        <div>
          {{ todoDetail.name }}
        </div>
        <div class="pr-18px">
          {{ todoDetail.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.example {

}
</style>
