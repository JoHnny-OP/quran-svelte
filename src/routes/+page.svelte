<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold text-center mb-8">Quran Chapters</h1>
	
	{#if data.error}
		<div class="text-center text-red-600">Error: {data.error}</div>
	{:else if data.chapters.length === 0}
		<div class="text-center text-gray-600">No chapters found</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each data.chapters as chapter}
				<a href="/surah/{chapter.id}" class="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:bg-gray-50">
					<div class="flex justify-between items-start mb-4">
						<span class="text-lg font-semibold text-gray-800">#{chapter.id}</span>
					</div>
					<h3 class="text-xl font-bold mb-2 text-gray-900">{chapter.name_simple}</h3>
					<p class="text-2xl text-right text-gray-700 font-arabic">{chapter.name_arabic}</p>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.font-arabic {
		font-family: 'Noto Sans Arabic', 'Arial', sans-serif;
		direction: rtl;
	}
</style>

