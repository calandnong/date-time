<script setup lang="ts">

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped lang="less">

</style>
