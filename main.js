const app = Vue.createApp({
  data() {
		return {
			newTodo: '',
			todos: [
				{ id: '123', title: '待辦事項1', completed: true }
			]
		}
	},
	methods: {
		addTodo() {
			var value = this.newTodo.trim(); //trim為消除前後空白
			var timeStamp = Math.floor(Date.now());
			if (!value) {
				return;
			}
			this.todos.push({
				id: timeStamp,
				title: value,
				completed: false
			});
			this.newTodo = '';
		},
		removeTodo(key) {
			this.todos.splice(key, 1);
		 }
	}
})