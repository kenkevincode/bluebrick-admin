<template>
	<div class="articles">
		<div class="content">
			<ArticleForm ref="articleForm" :save="saveArticle" />
			<div class="toolbar">
				<span class="button" @click="newArticle">newArticle</span>
				<span class="button" @click="delArticle">Delete</span>
				<span class="button">Show dialog</span>
				<span class="button">Toggle admin panel</span>
			</div>
			<div class="table">
				<table class="table-articles">
					<tr>
						<th class="center-table-text">
							<Checkbox />
						</th>
						<th></th>
						<th class="center-table-text">ID</th>
						<th class="center-table-text">Author</th>
						<th class="center-table-text">Title</th>
						<th class="center-table-text">Description</th>
						<th class="center-table-text">Content</th>
						<th class="center-table-text">Group</th>
						<th class="center-table-text">CreateDate</th>
						<th class="center-table-text">UpdateDate</th>
						<th class="center-table-text">Published</th>
					</tr>
					<tbody ref="rows">
						<tr
							v-for="article in articles"
							:key="article.id"
							:style="{ opacity: article.published === false ? '0.3' : '1' }"
						>
							<td class="center-table-text center-table-text">
								<Checkbox @change="changeArticleCheckbox(article, $event)" />
							</td>
							<td class="center-table-text">
								<button class="mini-button edit" @click="editArticle(article)">Edit</button>
							</td>
							<td class="table-text-id center-table-text">{{ article.id }}</td>
							<td class="table-text center-table-text">{{ renderText(article, 'author') }}</td>
							<td class="table-text center-table-text">{{ renderText(article, 'title') }}</td>
							<td class="table-text center-table-text">{{ renderText(article, 'description') }}</td>
							<td class="table-text center-table-text">{{ renderText(article, 'content') }}</td>
							<td class="table-text center-table-text">{{ renderText(article, 'group') }}</td>
							<td class="center-table-text">{{ renderDate(article, 'createdDate') }}</td>
							<td class="center-table-text">{{ renderDate(article, 'updatedDate') }}</td>
							<td class="center-table-text">
								<button class="mini-button publish" @click="publishStateTrue(article)">on</button>
								<button class="mini-button unpublish" @click="publishStateFalse(article)">off</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="admin-panel">
			<div>DemLex.corp</div>
		</div>
	</div>
</template>

<script>
import ArticleForm from '@/articles/ArticleForm'
import service from '@/service'
import Checkbox from '@/controls/Checkbox'
import Vue from 'vue'

export default {
	name: 'Articles',
	components: { ArticleForm, Checkbox },
	data() {
		return {
			articleFormVisible: false,
			articles: [],
			selectedArticles: []
		}
	},
	methods: {
		newArticle() {
			this.$refs.articleForm.init()
			this.$refs.articleForm.show(true)
		},
		saveArticle(article) {
			if (article.id) {
				// update article
				service.article.update(article.id, article)
					.then((updatedArticle) => {
						const idx = this.articles.findIndex((idx) => idx.id === updatedArticle.id)
						Vue.set(this.articles, idx, updatedArticle)
					})
			} else {
				// create article
				service.article.create(article)
					.then((newArticle) => {
						this.articles = [newArticle, ...this.articles]
						// this.articles.push(newArticle)
					})
			}
		},
		changeArticleCheckbox(article, event) {
			console.log('article:', article)
			console.log('event:', event)
			const checked = event.target.checked
			if (checked) {
				this.selectedArticles.push(article.id)
			} else {
				const index = this.selectedArticles.findIndex((a) => a === article.id)
				if (index >= 0) {
					this.selectedArticles.splice(index, 1)
				}
			}
		},
		delArticle() {
			// седалеть
		},
		editArticle(article) {
			this.$refs.articleForm.init(article)
			this.$refs.articleForm.show(true)
		},
		renderText(article, field) {
			return article[field]
		},
		renderDate(article, field) {
			const date = article[field]
			return date ? date.toLocaleString() : ''
		},
		publishStateTrue(article) {
			article.published = true
		},
		publishStateFalse(article) {
			article.published = false
		}
	},
	created() {
		this.selectedArticles = []
	},
	mounted() {
		service.article.loadAll().then((data) => {
			this.articles = data
		})
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
	color: #000000;
}

.articles {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}

.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	background-color: var(--content-bg-color);
	padding: 1rem;
}

.toolbar {
	display: flex;
	height: var(--toolbar-height);
	width: 100%;
}

.button {
	height: var(--button-height);
	display: inline-flex;
	flex-shrink: 0;
	align-items: center;
	padding: 0 0.5rem;
	cursor: pointer;
	background-color: var(--button-bg-color);
	color: var(--color-text);
	border: 1px solid var(--button-bordrer);
}
.button:hover {
	background-color: var(--button-bg-color-hover);
	color: var(--button-text-color-hover);
	border: 1px solid var(--button-bordrer-hover);
}
.mini-button {
	display: inline-flex;
	flex-shrink: 0;
	justify-content: center;
	align-items: center;
	padding: 0 0.5rem;
	cursor: pointer;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	border-radius: 0.3rem;
	border: 1px solid white;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	font-size: 1rem;
}
.mini-button:focus {
	outline: 0;
}
.mini-button:active {
	box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
	transform: translateY(0em) scale(1);
	transition: background-color 150ms ease-out, box-shadow 150ms ease-out, transform 150ms ease-out;
}
.edit {
	height: 2rem;
	width: 2.5rem;
	background-color: hsl(239, 100%, 76%);
	margin: 0.2rem;
	color: white;
}
.publish {
	margin: 0.2rem;
	width: 2rem;
	height: 2rem;
	background-color: #00a568;
	color: white;
}
.unpublish {
	margin: 0.2rem;
	width: 2rem;
	height: 2rem;
	background-color: #ff4040;
	color: white;
}

.center-table-text {
	text-align: center;
	padding: 0 1rem;
}
.satrt-table-text {
	text-align: start;
}
.end-table-text {
	text-align: end;
}
.table {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: var(--nav-item-bg);
}
.table-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
}

.table-text-id {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100px;
}

.table-articles {
	width: 100%;
	margin: auto;
	margin-top: 20px;
	border-collapse: collapse;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-size: 1.2rem;
	background-color: var(--table-bg);
	border: var(--table-border);
	th,
	td {
		border: var(--table-border);
	}
	th {
		background-color: var(--table-th-bg);
		// :last-child {
		// 	border-right-style: none;
		// }
	}
	tr {
		background-color: var(table-tr-bg);
	}
	td {
		border-right: 1px solid #000000;
		// :last-child {
		// 	border-right-style: none;
		// }
	}
	tr:nth-child(even) {
		background-color: var(--table-tr-nth-even);
	}
}

.admin-panel {
	display: flex;
	justify-content: center;
	align-items: center;
	height: var(--admin-panel-height);
	background-color: var(--admin-panel-bg-color);
	padding: 1rem;
	color: var(--color-text);
}

/* LAYOUT */

.toolbar {
	gap: 0.5rem 1rem;
}
</style>
