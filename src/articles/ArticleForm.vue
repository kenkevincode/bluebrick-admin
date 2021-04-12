<template>
	<div class="article-form" v-show="isVisible">
		<div class="wrap__article-form">
			<div class="button-af-main">
				<button class="button-af article-form__close" @click="onCloseClick">Close</button>
				<button class="button-af article-form__save" @click="onCloseClick">Save</button>
			</div>
			<div class="text">
				<h1>Здеся будет ArticleForm</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArticleForm',
	components: {},
	props: ['save'],
	data() {
		return {
			id: null,
			name: '',
			description: '',
			content: '',
			group: '',
			createdDate: null,
			updatedDate: null,
			published: true,
			isVisible: false
		}
	},
	methods: {
		show(flag) {
			this.isVisible = flag
		},
		onCloseClick() {
			this.show(false)
		},
		init(article) {
			if (article) {
				this.id = article.id
				this.name = article.name
				this.description = article.description
				this.content = article.content
				this.group = article.group
				this.createdDate = article.createdDate
			} else {
				this.id = ''
				this.name = ''
				this.description = ''
				this.content = ''
				this.group = ''
				this.createdDate = null
			}
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
}
.wrap__article-form {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 94%;
	width: 94%;
	border-radius: 0.5rem;
	background-color: var(--article-form-wrap-bg);
	box-shadow: var(--article-form-wrap-box-shadow);
}

.button-af {
	display: inline-block;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-weight: bold;
	padding: 0.3rem;
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
	margin: auto;
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

.text {
	text-align: center;
	height: 100%;
	width: 100%;
	color: #b12aff;
	flex-grow: 1;
}
</style>
