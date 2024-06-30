<script lang="ts">
	import { Facebook, Github, Instagram, X } from 'lucide-svelte';
	import * as Dialog from '$components/ui/dialog';
	const socials = [
		{
			title: 'Facebook',
			href: 'https://www.facebook.com/kazuumin',
			icon: Facebook
		},
		{
			title: 'Instagram',
			href: 'https://www.instagram.com/kazuumi_nishimura',
			icon: Instagram
		},
		{
			title: 'GitHub',
			href: 'https://github.com/kazuumin',
			icon: Github
		},
		{
			title: 'X',
			href: 'https://twitter.com/kazuumi_n',
			icon: X
		}
	];
	export let data;
</script>

<main>
	<div class="mt-9 max-w-2xl" style="word-break: auto-phrase;">
		<h1 class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
			Webエンジニア、ライブ配信ディレクター
		</h1>
		<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
			西村和海です。長崎県島原半島出身で、今は鎌倉に住んでいます。
		</p>
		<p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
			高校時代、地元の伝統産業のドキュメンタリーを制作したことをきっかけに、<br/>
			映像・情報技術を通じて何らかの形で「地域」に貢献したいという思いが固まりました。
		</p>
		<p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
			数社でソフトウェアエンジニア・ライブ配信ディレクターなどの経験を経て、<br/>
			現在は株式会社Liquitousにて<br/>
			市民参加型合意形成プラットフォーム「Liqlid」の開発に従事しています。
		</p>
		<!-- SNS -->
		<div class="mt-6 flex gap-6">
			{#each socials as social}
				<a
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					class="-m-1 p-1"
					aria-label={social.title}
				>
					<svelte:component this={social.icon} class="h-6 w-6" />
				</a>
			{/each}
		</div>
	</div>
	<!-- Portfolio -->
	<div
		class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each data.portfolios.data as portfolio}
			<Dialog.Root>
				<Dialog.Trigger
					class="group relative isolate flex aspect-video w-auto flex-col justify-end overflow-hidden rounded-2xl bg-gray-900"
				>
					<img
						src={portfolio.thumbnail.url}
						alt={portfolio.thumbnail.alt}
						class="inset-0 -z-10 h-full w-full object-cover transition group-hover:brightness-50"
					/>
					<h3
						class="absolute m-4 hidden text-lg font-semibold leading-6 text-gray-200 transition-all group-hover:block"
					>
						{portfolio.title}
					</h3>
				</Dialog.Trigger>
				<Dialog.Content class="max-w-2xl">
					<Dialog.Header>
						<Dialog.Title>{portfolio.title}</Dialog.Title>
					</Dialog.Header>
					<article class="">
						{#if portfolio.iframe}
							{@html portfolio.iframe}
						{/if}
						{@html portfolio.content}
					</article>
				</Dialog.Content>
			</Dialog.Root>
		{/each}
	</div>
</main>

<style>
	:global(iframe) {
		width: 100%;
	}
</style>
