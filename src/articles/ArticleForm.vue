<template>
	<div class="article-form" v-show="isVisible">
		<div class="article-form__form">
			<div class="button-af-main">
				<button class="button-af article-form__close" @click="onCloseClick">Close</button>
				<button class="button-af article-props" @click="onProps">Props</button>
				<button class="button-af article-mark" @click="onMark">MarkDown</button>
				<button class="button-af article-form__save" @click="onSubmit">Save</button>
			</div>
			<form ref="form" class="form-main">
				<div class="props" v-show="propsVisible">
					<div class="title-group">
						<div class="form__input-block">
							<label class="form__label" for="title">title</label>
							<input class="form__input" id="title" name="title" v-model="title" type="text" required />
						</div>
						<div class="form__input-select">
							<label class="form__label" for="group">group</label>
							<select class="form__select" v-model="group" id="group" name="group" required>
								<option disabled value="">Выберите один из вариантов</option>
								<option>CSS3</option>
								<option>JS</option>
								<option>HTML5</option>
							</select>
						</div>
					</div>
					<div>
						<label class="form__label" for="description">description</label>
						<textarea
							class="form__input-textarea"
							id="description"
							name="description"
							v-model="description"
							type="text"
							required
						/>
					</div>
					<div class="form__input-block">
						<div class="form__label-date">Created date: {{ createdDate }}</div>
						<div class="form__label-date">Updated date: {{ updatedDate }}</div>
					</div>
				</div>
				<div class="mark-down">
					<div class="mark-block">
						<h4>Markdown</h4>
						<textarea class="textarea" v-model="content" placeholder="Enter here.." required />
					</div>
					<div class="preview-block">
						<h4>Preview</h4>
						<div ref="preview" class="preview-content">test</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import marked from 'marked'

export default {
	name: 'ArticleForm',
	components: {},
	props: ['article','save'],
	data() {
		return {
			id: null,
			author: '',
			title: '',
			description: '',
			content: '',
			group: '',
			createdDate: null,
			updatedDate: null,
			published: true,
			isVisible: false,
			propsVisible: true,
			markVisible: true
		}
	},
	methods: {
		show(flag) {
			this.isVisible = flag
		},
		onCloseClick() {
			this.show(false)
		},
		onProps() {
			this.propsVisible = true
		},
		onMark() {
			this.propsVisible = false
		},
		init(article) {
			if (article) {
				this.id = article.id
				this.author = article.author
				this.title = article.title
				this.description = article.description
				this.content = article.content
				this.group = article.group
				this.createdDate = article.createdDate
			} else {
				this.id = ''
				this.author = ''
				this.title = ''
				this.description = ''
				this.content = ''
				this.group = ''
				this.createdDate = null
			}
		},
		isFormValid() {
			const form = this.$refs.form
			console.log('form:', form)
			return true 
			// (
			// 	form.elements.name.validity.valid &&
			// 	form.elements.description.validity.valid &&
			// 	form.elements.content.validity.valid &&
			// 	form.elements.group.validity.valid
			// )
		},
		renderText() {
			this.$refs.preview.innerHTML = marked(this.content)
		},
		onSubmit() {
			if (!this.isFormValid()) return

			// if (!this.createdDate) this.createdDate = new Date().toISOString()
			// this.updatedDate = new Date().toISOString()
			const article = {
				id: this.id,
				author: this.author,
				title: this.title,
				description: this.description,
				content: this.content,
				group: this.group
			}
			if (this.id) article.id = this.id
			this.save(article)
			this.show(false)
		}
	},
	mounted() {
		this.renderText()
	},
	watch: {
		content() {
			this.renderText()
		}
	}
}
</script>

<style lang="scss">
@import '../style/reset';
@import '../style/theme';

body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: var(--content-bg-color);
}

.article-form {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: var(--article-form-bg);
	z-index: 100;

	&__form {
		display: flex;
		flex-direction: column;
		height: 94%;
		width: 94%;
		border-radius: 0.5rem;
		background-color: var(--article-form-bg);
		box-shadow: var(--article-form-box-shadow);
	}
}

.button-af {
	display: inline-block;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-weight: bold;
	padding: 0.3rem;
	margin: 0.3rem;
	cursor: pointer;
	border-radius: 0.3rem;
	border: 1px solid white;
	box-shadow: var(--article-form-button-box-shadow);
	font-size: 14px;
}
.button-af:focus {
	outline: 0;
}
.button-af:active {
	box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
	transform: translateY(0em) scale(1);
	transition: background-color 150ms ease-out, box-shadow 150ms ease-out, transform 150ms ease-out;
}
.button-af-main {
	padding: 1rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.article-form__save {
	background-color: #00d184;
	color: white;
}
.article-form__close {
	background-color: #ff5454;
	color: white;
}
.article-props {
	background-color: #7565ff;
	color: white;
}
.article-mark {
	background-color: #ee6eff;
	color: white;
}

.form-main {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.props {
	padding: 1rem;
	width: 100%;
	height: 30%;
}

.title-group {
	display: flex;
	justify-content: space-between;
}

.form__input-block {
	font-size: 1rem;
	color: #7d8181;
	width: 74%;
	margin: 1rem 0;
}

.form__label {
	display: block;
	color: #7d8181;
	text-align: left;
	font-size: 1.5;
	margin: 1rem 0;
}
.form__input {
	display: inline-block;
	width: 100%;
	font-size: 1.5rem;
	height: 3rem;
	border-color: white;
	background-color: #f0f0f0;
	opacity: 0.8;
	border-style: none;
	outline: 1px solid white;
	padding: 0.5rem;
}
.form__input-select {
	font-size: 1rem;
	color: #7d8181;
	width: 25%;
	margin: 1rem 0;
}
.form__select {
	display: inline-block;
	width: 100%;
	font-size: 1.5rem;
	height: 3rem;
	border-color: white;
	background-color: #f0f0f0;
	opacity: 0.8;
	border-style: none;
	outline: 1px solid white;
	padding: 0.5rem;
}

.form__input-textarea {
	min-height: 4rem;
	color: black;
	width: 100%;
	display: inline-block;
	font-size: 1.5rem;
	height: 2rem;
	border-color: white;
	background-color: #f0f0f0;
	border-style: none;
	outline: 1px solid white;
	padding: 0.5rem;
	resize: none;
}

.form__label-date {
	display: block;
	color: #7d8181;
	text-align: left;
	font-size: 1rem;
	margin: 0.5rem 0;
}

h4 {
	margin: 1rem 0;
}
.mark-down {
	flex-grow: 1;
	position: relative;
	display: flex;
	justify-content: space-between;
	text-align: left;
}
.mark-block {
	display: flex;
	flex-direction: column;
	max-height: 100%;
	min-width: 50%;
	max-width: 50%;
	margin-left: 1rem;
}
.preview-block {
	flex-grow: 1;
	padding-left: 2rem;
}
.textarea {
	outline: none;
	height: 90%;
	width: 100%;
	border-style: none;
	border-right: 2px solid rgb(88, 88, 88);
	resize: none;
	overflow: auto;
}
</style>
