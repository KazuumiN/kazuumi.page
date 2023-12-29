<script lang="ts">
	import '../app.pcss';
  import Header from "$components/Header.svelte";
</script>

<div class="max-w-2xl lg:max-w-5xl mx-auto">
  <Header />
  <slot />
</div>
