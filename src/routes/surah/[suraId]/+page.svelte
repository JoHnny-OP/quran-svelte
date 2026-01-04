<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container mx-auto px-4 py-8">
	{#if data.error}
		<div class="text-center text-red-600">Error: {data.error}</div>
	{:else if !data.chapter}
		<div class="text-center text-gray-600">Surah not found</div>
	{:else}
		<!-- Surah Header -->
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold mb-2 text-gray-900">{data.chapter.name_simple}</h1>
			<p class="text-4xl text-gray-800 font-arabic mb-4">{data.chapter.name_arabic}</p>
			<div class="text-sm text-gray-600">Surah #{data.chapter.id}</div>
		</div>

		<!-- Verses -->
		<div class="max-w-4xl mx-auto space-y-6">
			{#each data.verses as verse}
				<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
					<div class="flex items-start justify-between mb-4">
						<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
							{verse.ayah}
						</span>
					</div>
					<p class="text-2xl leading-relaxed text-right text-gray-800 font-arabic">
						{verse.text}
					</p>
				</div>
			{/each}
		</div>

		<!-- Navigation -->
		<div class="mt-12 flex justify-between items-center">
			<a href="/" class="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors">
				← Back to Chapters
			</a>
			<div class="text-sm text-gray-600">
				{data.verses.length} verses
			</div>
		</div>
	{/if}
</div>

<style>
	.font-arabic {
		font-family: 'Noto Sans Arabic', 'Arial', sans-serif;
		direction: rtl;
		line-height: 2.5;
	}
</style>