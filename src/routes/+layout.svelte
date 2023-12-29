<script lang="ts">
	import '../app.pcss';
	import Header from '$components/Header.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="西村和海" description="西村和海のホームページです。" />
<div class="mx-auto max-w-2xl p-2 lg:max-w-5xl">
	<Header />
	<slot />
</div>
