<script setup lang="ts">
import Card from './card.vue';

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

</script>

<template>
  <div class="sort-card-list">
    <!-- 今天 -->
    <card
      icon="date"
      :count="10"
      type="今天"
    />
    <card
      icon="date"
      :count="10"
      type="今天"
    />
    <card
      icon="date"
      :count="10"
      type="今天"
    />
    <card
      icon="date"
      :count="10"
      type="今天"
    />
    <card
      icon="date"
      :count="10"
      type="今天"
    />
  </div>
</template>

<style scoped lang="less">
.sort-card-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
}

</style>
