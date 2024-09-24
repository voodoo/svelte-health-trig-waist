<script lang="ts">

   import { ratio as hwRatio } from '$lib/state/height-waist.svelte.js';
   import { ratio } from '$lib/state/trigs-hdl.svelte.js';
   //imp
</script>
		
<h1 class="text-2xl font-bold mb-4">Welcome to Health Metrics</h1>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold mb-2">Trigs/HDL Ratio ({$ratio})</h2>
        <p>Calculate and analyze your Triglycerides to HDL ratio.</p>
        <a href="/trigs-hdl" class="text-blue-600 hover:underline">Go to Trigs/HDL Calculator</a>
    </div>

    <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold mb-2">Height/Waist Ratio ({$hwRatio})</h2>
        <p>Measure your height to waist ratio and get health insights.</p>
        <a href="/height-waist" class="text-blue-600 hover:underline">Go to Height/Waist Calculator</a>
    </div>
</div>
