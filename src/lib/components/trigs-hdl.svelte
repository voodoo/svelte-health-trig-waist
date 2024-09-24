<script lang="ts">
  import { trigs, hdl, ratio } from '$lib/state/trigs-hdl.svelte.js';
</script>
  
  <div class="p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-xl font-bold mb-4">Triglycerides / HDL</h2>
    <div class="mb-4">
      <label for="trigs" class="block text-sm font-medium text-gray-700">Triglycerides</label>
      <input id="trigs" type="number" bind:value={$trigs} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    </div>
    <div class="mb-4">
      <label for="hdl" class="block text-sm font-medium text-gray-700">HDL</label>
      <input id="hdl" type="number" bind:value={$hdl} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    </div>
    <div>
      <p class="text-lg">Ratio: {$ratio}</p>
    </div>
  </div>

  <div class="mt-4">
    <h3 class="text-lg font-semibold mb-2">Interpretation</h3>
    {#if $ratio}
      <p class="mb-2">Your triglycerides to HDL ratio is {$ratio}.</p>
      {#if $ratio < 2}
        <p class="text-green-600">A ratio below 2 is considered ideal. Great job! This suggests a lower risk for cardiovascular disease.</p>
      {:else if $ratio >= 2 && $ratio < 4}
        <p class="text-yellow-600">A ratio between 2 and 4 is considered acceptable, but there's room for improvement. Focus on a heart-healthy diet and regular exercise.</p>
      {:else}
        <p class="text-red-600">A ratio of 4 or higher indicates increased cardiovascular risk. Consider consulting a healthcare professional for advice on improving your lipid profile.</p>
      {/if}
    {:else}
      <p>Please enter valid triglycerides and HDL measurements to see the interpretation.</p>
    {/if}
    <p class="mt-2 text-sm text-gray-600">Note: This ratio is a general indicator. For personalized health advice, always consult with a healthcare professional.</p>
  </div>