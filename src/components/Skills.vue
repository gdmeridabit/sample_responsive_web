<template>
  <v-container mb-5>
    <v-layout text-xs-center px-3 py-3>
      <v-flex xs12>
        <span class="title-font font-weight-bold" id="skills">{{ $t('skill_title') }}</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap fill-height>
      <v-flex
              v-for="(data, index) in skills" :key="index"
              xs12
              sm6
              md4
              lg4
              pa-2
      >
        <v-card v-if="data !== null" height="100%">
          <v-card-title class="simple-font font-weight-bold">{{ data.name }}</v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for="(items, index) in data.data" :key="index">
            <v-list-tile>
              <v-layout row>
                <v-flex xs5>
                  <v-list-tile-content class="title font-weight-light">{{ items.name }}</v-list-tile-content>
                </v-flex>
                <v-flex xs2>
                  <v-list-tile-content class="simple-sm-font font-weight-light blue--text">{{ items.value }}%</v-list-tile-content>
                </v-flex>
                <v-flex xs5>
                  <v-list-tile-content>
                    <v-progress-linear
                            color="warning"
                            height="20"
                            :value="items.value"
                    >
                    </v-progress-linear>
                  </v-list-tile-content>
                </v-flex>
              </v-layout>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      skills: [
        {
          name: 'Frontend Development',
          data: [
            {
              name: 'HTML5',
              value: 90
            },
            {
              name: 'CSS',
              value: 90
            },
            {
              name: 'Vue.js',
              value: 70
            },
            {
              name: 'Reactjs',
              value: 60
            },
            {
              name: 'Angular',
              value: 60
            },
            {
              name: 'Laravel',
              value: 80
            },
            {
              name: 'Wordpress',
              value: 70
            }
          ]
        },
        {
          name: 'Backend Development',
          data: [
            {
              name: 'Node.js',
              value: 50
            },
            {
              name: 'MySQL',
              value: 50
            },
            {
              name: 'Neo4j',
              value: 40
            },
          ]
        },
        {
          name: 'Mobile Development',
          data: [
            {
              name: 'Swift',
              value: 70
            },
            {
              name: 'React Native',
              value: 50
            },
          ]
        },
        {
          name: 'Operating System',
          data: [
            {
              name: 'Mac OS',
              value: 90
            },
            {
              name: 'Ubuntu',
              value: 70
            },
            {
              name: 'Windows',
              value: 80
            },
          ]
        },
        {
          name: 'Version Control',
          data: [
            {
              name: 'Git',
              value: 90
            },
            {
              name: 'SVN',
              value: 70
            },
          ]
        },
        {
          name: 'Graphic Editing',
          data: [
            {
              name: 'Photoshop',
              value: 60
            },
            {
              name: 'Illustrator',
              value: 60
            },
            {
              name: 'Sketch',
              value: 40
            },
          ]
        },
        null,
        {
          name: 'Issue Tracker',
          data: [
            {
              name: 'Jira',
              value: 70
            },
            {
              name: 'Github',
              value: 80
            },
            {
              name: 'Redmine',
              value: 70
            },
          ]
        }
      ]
    }),
    beforeMount() {
      this.$i18n.locale = this.$route.params.lang;
    }
  };
</script>
