<script>
	import Form from './form.svelte';
	import ResultV1 from './ResultV1.svelte';
	import ResultV2 from './ResultV2.svelte';
	import { page } from './store';
</script>

<svelte:head>
	<title>Signup</title>
	<meta name="description" content="Signup" />
</svelte:head>

{#if $page === 'form'}
	<Form />
{/if}

{#if $page === 'ResultV1'}
	<ResultV1 />
{/if}

{#if $page === 'ResultV2'}
	<ResultV2 />
{/if}

<style>
	@import './style.scss';
</style>
