<script setup lang="ts">
import Search from '../../components/business/search/index.vue';
import SortCard from '../../components/business/sort-card/index.vue';
import TodoTabulation from '../../components/business/todo-tabulation/index.vue';

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

</script>

<template>
  <div class="ml-12px mr-12px ">
    <search />
    <div class="mt-18px">
      <sort-card />
    </div>
    <div class="mt-18px">
      <todo-tabulation />
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
