<template>
  <v-container id="container-full">
    <v-layout>
      <v-flex xs12>
        <v-img src="https://www.symph.co/static/img/banner-illus.svg"></v-img>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 id="about">
      <v-flex xs12>
        <span class="display-2 font-weight-bold" color="blue">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img
            src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/50988163_10213734001079444_2817855097181044736_n.jpg?_nc_cat=104&_nc_ht=scontent-nrt1-1.xx&oh=d558e14acbf714985470fb4b740c35a8&oe=5D357E65"
            alt="avatar"
          >
        </v-avatar>
        <p class="headline font-weight mt-2">Gwen Danielle Merida</p>
        <p
          class="title font-weight-thin mt-3"
        >Hello I'm a Full Stack Web Developer and iOS Developer from Philippines. Have 5 years work experience in IT Industry.</p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 blue>
      <v-flex xs12>
        <span class="display-2 font-weight-bold white--text" id="skills">Skill Sets</span>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center px-3 py-3 blue row wrap>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Vue.js</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Reactjs</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Angular 7</p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center px-3 py-3 blue row wrap>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://tutorialedge.net/images/node.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Node.js</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/mysql-6-logo-png-transparent.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">MySQL</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo_globe.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Neo4j</p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3>
      <v-flex xs12>
        <span class="display-2 font-weight-bold" id="career">Career</span>
      </v-flex>
    </v-layout>
    <v-layout px-5 py-5>
      <v-flex xs12>
        <v-timeline>
          <v-timeline-item color="orange " fill-dot right>
            <v-card>
              <v-card-title class="orange ">
                <v-icon dark size="42" class="mr-3">mdi-magnify</v-icon>
                <h2 class="display-1 white--text font-weight-light">Force Field Management(FFM)</h2>
              </v-card-title>
              <v-container>
                <v-layout>
                  <v-flex
                    xs10
                  >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.</v-flex>
                  <v-flex xs2>
                    <v-icon size="64">mdi-calendar-text</v-icon>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="amber lighten-1" fill-dot left small>
            <v-card>
              <v-card-title class="amber lighten-1 justify-end">
                <h2 class="display-1 mr-3 white--text font-weight-light">Mobile Loan Saver(MLS)</h2>
                <v-icon dark size="42">mdi-home-outline</v-icon>
              </v-card-title>
              <v-container>
                <v-layout>
                  <v-flex
                    xs8
                  >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.</v-flex>
                  <v-flex xs4>Lorem ipsum dolor sit amet, no nam oblique veritus.</v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="cyan lighten-1" fill-dot right>
            <v-card>
              <v-card-title class="cyan lighten-1">
                <v-icon class="mr-3" dark size="42">mdi-email-outline</v-icon>
                <h2 class="display-1 white--text font-weight-light">Aspire</h2>
              </v-card-title>
              <v-container>
                <v-layout>
                  <v-flex
                    v-for="n in 3"
                    :key="n"
                    xs4
                  >Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.</v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="blue darken-4" fill-dot left small>
            <v-card>
              <v-card-title class="blue darken-4 justify-end">
                <h2 class="display-1 mr-3 white--text font-weight-light">GCash</h2>
                <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
              </v-card-title>
              <v-container>
                <v-layout>
                  <v-flex xs2>
                    <v-icon size="64">mdi-server-network</v-icon>
                  </v-flex>
                  <v-flex
                    xs10
                  >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.</v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
  })
};
</script>

<style>
#container-full {
  padding: 0;
  max-width: 1500px;
}
.v-carousel {
  box-shadow: 0 0 0 0;
}
</style>
