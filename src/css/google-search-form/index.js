! function (global) {
	let getByClass = global.getByClass = document.getElementsByClassName.bind(document)
	let getById = global.getById = document.getElementById.bind(document)
	let log = console.log.bind(console)
	let input = getById('input')
	let results = getByClass('results')[0]
	let create = document.createElement.bind(document)
	let data = [{
			name: 'a'
		},
		{
			name: 'ab'
		},
		{
			name: 'ac'
		},
		{
			name: 'b'
		},
		{
			name: 'bc'
		}
	]

	function render(value) {
		let containers = data.filter(item => {
			if (item.name.startsWith(value) && value !== '')
				return true
			return false
		})
		let els = containers.map(c => {
			let el =  create('li')
			el.innerHTML = c.name
			el.classList.add('result')
			return el
		})

		while(results.firstChild){
			results.removeChild(results.firstChild)
		}
		els.forEach(e => {
			results.appendChild(e)
		})
	}

	input.addEventListener('input', v => {
		render(input.value)
	})
}(window)