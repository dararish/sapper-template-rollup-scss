const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
        postcss: {
            plugins: [
                require('autoprefixer')(),
                require('cssnano')(),
                require('postcss-font-magician')(),
                require('postcss-svgo')()
            ]
        }
    })
};