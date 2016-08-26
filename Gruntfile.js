module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
        },
        files: {
          'client/stylesheet.css':'stylesheet.scss'
        }
      }
    },
    watch: {
      css: {
        files: '*.scss',
        tasks: ['sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};
