<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '@renderer/store/module/todo/index';
import TipsIcon from '../../../components/tips/icon/index.vue';

interface Props {
  example: string;
}

withDefaults(defineProps<Props>(), {
  example: '',
});

const { changeToDoDetail } = useTodoStore();

interface TodoItem {
  name: string;
  count: number;
}

const list = ref<TodoItem[]>([
  {
    name: '最后的数据',
    count: 1,
  },
  {
    name: '测试表单',
    count: 0,
  },
  {
    name: '什么？',
    count: 10,
  },
]);

const currentTodoItem = ref(0);

function selectTodoItem(index: number) {
  currentTodoItem.value = index;
  const data = list.value[index];
  changeToDoDetail({
    name: data.name,
    count: data.count,
  });
}

selectTodoItem(0);

</script>

<template>
  <div class="">
    <div class="color-#686867 font-size-10px font-600 pl-10px mb-6px">
      我的列表
    </div>
    <div>
      <div
        v-for="(item, index) in list"
        :key="index"
        class="h-32px flex items-center justify-between cursor-pointer"
        :class="{
          'todo-selected': currentTodoItem === index,
        }"
        @click="selectTodoItem(index)"
      >
        <div class="flex items-center">
          <div class="ml-10px mr-10px w-22px h-22px flex justify-center items-center border-rd-50% bg-#3a84f7 color-#ffffff">
            <tips-icon
              name="menu"
              size="12px"
            />
          </div>
          <div class="font-size-12px color-#ffffff">
            {{ item.name }}
          </div>
        </div>
        <div class="todo-count mr-16px font-size-14px color-#686867">
          {{ item.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.todo-selected {
  background-color: #2f65b5;
  border-radius: 6px;
  .todo-count {
    color: #7799ce;
  }
}
</style>
