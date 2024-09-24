import { writable, derived } from 'svelte/store';
export const trigs = writable(200);
export const hdl = writable(50);
export const ratio = derived([trigs, hdl], ([$trigs, $hdl]) => {
    return Number(($trigs / $hdl).toFixed(2));
});