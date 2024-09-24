<script lang="ts">
  import { height, waist, ratio } from '$lib/state/height-waist.svelte.js';

</script>

<div class="p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-xl font-bold mb-4">Height / Waist</h2>
    <div class="mb-4">
        <label for="height" class="block text-sm font-medium text-gray-700">Height (cm)</label>
        <input id="height" type="number" bind:value={$height} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    </div>
    <div class="mb-4">
        <label for="waist" class="block text-sm font-medium text-gray-700">Waist (cm)</label>
        <input id="waist" type="number" bind:value={$waist} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    </div>
    <div>
        <p class="text-lg">Ratio: {$ratio}</p>
    </div>
</div>
    <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Interpretation</h3>
        {#if $ratio}
            <p class="mb-2">Your height to waist ratio is {$ratio}.</p>
            {#if $ratio < 2}
                <p class="text-red-600">A ratio below 2 indicates increased health risks. Consider consulting a healthcare professional for advice on improving your waist circumference.</p>
            {:else if $ratio >= 2 && $ratio < 2.5}
                <p class="text-yellow-600">A ratio between 2 and 2.5 is considered acceptable, but there's room for improvement. Focus on maintaining a healthy diet and regular exercise.</p>
            {:else}
                <p class="text-green-600">A ratio of 2.5 or higher is considered ideal. Great job! Keep up your healthy lifestyle habits.</p>
            {/if}
        {:else}
            <p>Please enter valid height and waist measurements to see the interpretation.</p>
        {/if}
        <p class="mt-2 text-sm text-gray-600">Note: This ratio is a general indicator. For personalized health advice, always consult with a healthcare professional.</p>
    </div>
