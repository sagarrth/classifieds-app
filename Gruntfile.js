module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js','components/**/*.js','data/*.js','scripts/*.js']
        }
    });
};