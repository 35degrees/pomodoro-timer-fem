import { writable } from 'svelte/store';

export const navIndex = writable(0);
export const slideIndex = writable(0);
export const startState = writable(false);

export const fontIndex = writable(0);
export const soundIndex = writable(0);
export const colorIndex = writable(0);

export const pomodoroMin = writable(24);
export const shortMin = writable(5);
export const longMin = writable(12);
