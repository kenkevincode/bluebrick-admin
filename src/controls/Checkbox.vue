<template>
	<input class="checkbox" type="checkbox"  v-model="checked" />
</template>

<script>
export default {
	name: 'Checkbox',
	data() {
		return {
			checked: false
		}
	}
}
</script>

<style lang="scss">
.checkbox {
	position: relative;
	width: 2rem;
	height: 2rem;
}
.checkbox:hover {
  box-shadow: var(--checkbox-box-shadow);
}

.checkbox::after {
	display: inline-flex;
	align-items: center;
	user-select: none;
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background: var(--checkbox-bg-disabled) center center / 75% 75% no-repeat;
}

.checkbox:checked::after {
	background-color: var(--checkbox-checked-bg);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
