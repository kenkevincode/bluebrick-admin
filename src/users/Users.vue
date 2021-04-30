<template>
	<div class="users">
		<div class="content">
			<div class="toolbar">
				<span class="button">Create</span>
				<span class="button">Delete</span>
				<span class="button">Show dialog</span>
				<span class="button">Toggle admin panel</span>
			</div>
			<div class="table">
				<table class="table-users">
					<tr>
						<th class="center-table-text">
							<input ref="mainCheckbox" class="checkbox-user" type="checkbox" />
						</th>
						<th class="center-table-text">ID</th>
						<th class="center-table-text">Email</th>
						<th class="center-table-text">Password</th>
						<th class="center-table-text">Username</th>
						<th class="center-table-text">Groups</th>
						<th class="center-table-text">LastLoginedDate</th>
					</tr>
					<tbody ref="rows">
						<tr v-for="user in users" :key="user.id">
							<td class="center-table-text"><input class="checkbox-user" type="checkbox" /></td>
							<td class="center-table-text" @click="onUserClick(user)">{{ user.id }}</td>
							<td class="center-table-text">{{ renderText(user, 'email') }}</td>
							<td class="center-table-text">{{ renderText(user, 'password') }}</td>
							<td class="center-table-text">{{ renderText(user, 'username') }}</td>
							<td class="center-table-text">{{ renderText(user, 'groups') }}</td>
							<td class="center-table-text">{{ renderDate(user, 'lastLoginedDate') }}</td>
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
import service from '@/service'

export default {
	name: 'Users',
	data() {
		return {
			users: []
		}
	},
	methods: {
		renderText(user, field) {
			return user[field]
		},
		renderDate(user, field) {
			const date = user[field]
			return date ? date.toLocaleString() : ''
		}
	},
	created() {
		service.user.loadAll().then((data) => {
			this.users = data
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

.users {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}

.content {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	background-color: var(--content-bg-color);
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

.table-users {
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
.checkbox-user {
	width: 2rem;
	height: 2rem;
}
.checkbox-user:hover{
  box-shadow: 0 0 3px 3px  #54a3ff;
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
