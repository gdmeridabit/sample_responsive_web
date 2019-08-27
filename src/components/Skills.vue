<template>
  <v-container class="my-5">
    <v-layout text-xs-center px-3 py-3>
      <v-flex xs12>
        <span class="display-2 font-weight-bold" id="skills">{{ $t('skill_title') }}</span>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center px-3 py-3 row wrap>
      <v-flex xs12 mb-2>
        <v-card class="text-xs-center">
          <v-card-title class="headline">
            {{ $t('webdev') }}
          </v-card-title>
          <v-layout text-xs-center px-3 py-3 row wrap>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                     alt="avatar">
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Vue.js</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="avatar">
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Reactjs</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                        alt="avatar"
                >
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Angular 7</p>
            </v-flex>
          </v-layout>
          <v-layout text-xs-center px-3 py-3 row wrap>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img
                        src="https://miro.medium.com/max/1200/1*O68LbDvD5Dcsnez73M7v4Q.png"
                        alt="avatar"
                >
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Spring Boot</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img
                        src="https://www.stickpng.com/assets/images/58480e35cef1014c0b5e4920.png"
                        alt="avatar"
                >
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Laravel</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                        alt="avatar"
                >
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">HTML5</p>
            </v-flex>
          </v-layout>
          <v-layout text-xs-center px-3 py-3 row wrap>
            <v-flex lg4 sm12 xs12>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img
                        src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"
                        alt="avatar"
                >
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">CSS</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 mb-2>
        <v-card class="text-xs-center">
          <v-card-title class="headline">
            {{ $t('backdev') }}
          </v-card-title>
          <v-layout text-xs-center px-3 py-3 row wrap>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img src="https://tutorialedge.net/images/node.png" alt="avatar">
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Node.js</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img
                        src="https://cdn.freebiesupply.com/logos/large/2x/mysql-6-logo-png-transparent.png"
                        alt="avatar"
                >
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">MySQL</p>
            </v-flex>
            <v-flex lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <img src="https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo_globe.png" alt="avatar">
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Neo4j</p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 mb-2>
        <v-card class="text-xs-center">
          <v-card-title class="headline">
            {{ $t('mobdev') }}
          </v-card-title>
          <v-layout text-xs-center px-3 py-3 row wrap>
            <v-flex lg4 offset-lg4 sm12 xs12>
              <v-avatar size="150" color="grey lighten-4">
                <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1138px-Swift_logo.svg.png"
                        alt="avatar"
                        width="10%"
                ></v-img>
              </v-avatar>
              <p class="subheading font-weight mt-2 black--text">Swift</p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({}),
    beforeMount() {
      this.$i18n.locale = this.$route.params.lang;
    }
  };
</script>
