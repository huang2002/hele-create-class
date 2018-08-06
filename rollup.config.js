import rollupPluginBabel from "rollup-plugin-babel";

export default {
    input: 'dist/hele-create-class.js',
    plugins: [
        rollupPluginBabel()
    ],
    output: {
        format: 'umd',
        name: 'HEle',
        file: 'dist/hele-create-class.umd.js',
        extend: true
    },
    globals: {
        hele: 'HEle'
    }
};
