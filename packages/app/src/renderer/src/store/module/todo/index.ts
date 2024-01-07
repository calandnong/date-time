import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface ToDoDetail {
  name: string;
  count: number;
}

export const useTodoStore = defineStore('todo', () => {
  const todoDetail = ref<ToDoDetail>({
    name: '无',
    count: 0,
  });

  function changeToDoDetail(data: Partial<ToDoDetail>) {
    Object.assign(todoDetail.value, data);
  }

  return {
    todoDetail,
    changeToDoDetail,
  };
});
