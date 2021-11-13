const app = Vue.createApp({
  data() {
		return {
			newTodo: '',
			todos: [
				{ id: '123', title: '待辦事項1', completed: true }
			]
		}
	},
})