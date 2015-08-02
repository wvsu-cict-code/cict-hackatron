/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: 'wvsu-iict-hackatron',
    // Task configuration.
    copy: {
      main: {
        files: [{
          expand: true,
          src: ['assets/**'],
          dest: 'dist/'
        }, {
          expand: true,
          src: ['index.html'],
          dest: 'dist/'
        }, {
          expand: true,
          src: ['pages/**'],
          dest: 'dist/'
        }, ]
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      my_target: {
        files: {
          'dist/assets/js/main.min.js': ['dist/assets/js/main.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/assets/css',
          ext: '.min.css'
        }]
      }
    },
    processhtml: {
      dist : {
        files :{
          'dist/index.html' : ['index.html'],
          'dist/pages/leaderboard.html' : ['pages/leaderboard.html']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');

  // Default task.
  grunt.registerTask('default', ['copy', 'uglify', 'cssmin','processhtml']);

};
