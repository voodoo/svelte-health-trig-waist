import { writable, derived } from 'svelte/store';

export const height = writable(68);
export const waist = writable(34);
export const ratio = derived([height, waist], ([$height, $waist]) => {
    return Number(($height / $waist).toFixed(2));
});