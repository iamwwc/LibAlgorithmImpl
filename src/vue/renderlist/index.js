! function () {
	//在 Vue 的patch方法下断点，方便调试 VDOM的比对过程
	var count = 0
	var app1
	window.app1 = app1 = new Vue({
		data() {
			return {
				todos: [{
						text: '学习JavaScript',
						count: ++count
					},
					{
						text: '学习Vue',
						count: ++count
					},
					{
						text: '学习牛项目',
						count: ++count
					}
				]
			}
		},
		methods:{
			handleClick() {
				!function() {
					var newTodos = app1.todos
					newTodos.reverse()
				}()
			}
		}
	})
	app1.$mount('#app')
}()