<script setup lang="ts">
import AppHeader from './components/app-header.vue';
import SideBar from './components/side-bar.vue';
import ContentContainer from './components/content-container.vue';

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

</script>

<template>
  <div class="flex flex-col h-100vh relative">
    <div class="absolute w-full top-0 left-0">
      <app-header />
    </div>
    <div class="flex flex-1">
      <div class="w-280px pt-42px bg-#262524">
        <side-bar />
      </div>
      <div class="w-1px bg-#000000" />
      <div class="flex-1 pt-42px bg-#21201d">
        <content-container />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
