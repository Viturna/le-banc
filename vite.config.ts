import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use '$lib/styles/base/mixins' as *;
				@use '$lib/styles/main.scss' as *;
		`
			}
		}
	}
});
