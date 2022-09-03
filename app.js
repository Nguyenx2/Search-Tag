const ul = document.querySelector('ul')
const input = document.querySelector('input')
const removeBtn = document.querySelector('.btn-removeAll')

let tags = ['Nodejs', 'Reactjs']
createTag()

function createTag() {
    ul.innerHTML = '',
    tags.forEach((tag, index) => {
        let liTag = `
        <li>
            ${tag}
            <i class="fa-solid fa-xmark" onclick ="removeTag(this, '${index}')"></i>
        </li>
        `
        ul.innerHTML += liTag
    })
    ul.appendChild(input)
    input.focus()
}

function removeTag(element, index) {
    tags.splice(index, 1)
    element.parentElement.remove()
    input.focus()
}

function addTag(e) {
	if (e.key == 'Enter') {
		let tag = e.target.value.trim()
		if (tag != '' && !tags.includes(tag)) {
			tags.push(tag)
			createTag()
		}
		e.target.value = ''
	}
}

input.addEventListener('keyup', addTag),

removeBtn.addEventListener('click', () => {
	tags.length = 0
	createTag()
})

