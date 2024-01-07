<script setup lang="ts">
import { WinStatus, setWinStatus } from './app-header-helper';

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

</script>

<template>
  <div class="win-drag h-42px flex flex-col justify-center">
    <div class="win-no-drag w-56px pl-20px">
      <i
        class="inline-block border-rd-50% w-12px h-12px bg-#ed695f mr-10px"
        title="关闭"
        @click="setWinStatus(WinStatus.CLOSE)"
      />
      <i
        class="inline-block border-rd-50% w-12px h-12px bg-#f3be4f"
        title="最小化"
        @click="setWinStatus(WinStatus.MIN)"
      />
      <i
        class="inline-block border-rd-50% w-12px h-12px bg-#62c454 ml-10px"
        title="最大化"
        @click="setWinStatus(WinStatus.MAX)"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.win-drag {
  -webkit-app-region: drag;
}

.win-no-drag {
  -webkit-app-region: no-drag;
}

</style>
