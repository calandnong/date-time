<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  placeholder: string;
}

withDefaults(defineProps<Props>(), {
  placeholder: '搜索',
});

const isFocused = ref(false);

function onFocused() {
  isFocused.value = true;
}

function onBlur() {
  isFocused.value = false;
}

</script>

<template>
  <div
    class="tips-input w-full h-26px box-border border-rd-4px relative"
  >
    <div
      :class="{
        'tips-input__outline': isFocused,
      }"
    />
    <input
      class="w-full h-full tips-input__input border-unset bg-transparent"
      :placeholder="placeholder"
      @focus="onFocused"
      @blur="onBlur"
    >
  </div>
</template>

<style scoped lang="less">
@tips-input-border-radius: 6px;

.tips-input {
  box-shadow: 0 1px 0px #494745;
  border-radius: @tips-input-border-radius;

  @keyframes shrinkTo {
    /* 动画开始时的高度为36px */
    0% {
      top: -2px;
      bottom: -2px;
      left: -2px;
      right: -2px;
      opacity: 0.2;
    }
    /* 动画结束时的高度为30px */
    100% {
      top: 0px;
      bottom: 0px;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }

  &__outline {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: @tips-input-border-radius;
    outline: 3px solid #3b688e;
    animation: shrinkTo 0.1s ease-in-out forwards;
  }

  &__input {
    caret-color: #337bf6;
    &:focus {
      outline: none;/*去掉默认input焦点边框*/
    }
  }
}
</style>
