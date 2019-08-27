<template>
  <v-container class="mb-5">
    <v-layout row wrap text-xs-center py-3 id="about">
      <v-flex xs12 mb-3>
        <span class="font-weight-bold title-font">{{ $t('about_title') }}</span>
      </v-flex>
      <v-flex xs12 mb-5>
        <v-avatar size="250" color="grey lighten-4">
          <img
                  src="https://portfolio-gwen.s3.amazonaws.com/50988163_10213734001079444_2817855097181044736_n.jpg"
                  alt="avatar"
          >
        </v-avatar>
        <p class="title font-weight-thin my-5" v-html="$t('intro')"></p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout mt-5 px-5 class="text-xs-center" row wrap>
      <v-flex xs12 my-5 hidden-sm-and-down>
        <p class="simple-font">{{ $t('otherworks') }}</p>
        <a href="https://github.com/gdmeridabit" target="_blank" class="mx-5 grey--text">
          <i class="fab fa-github" style="font-size: 5em"></i>
        </a>
        <a href="https://www.linkedin.com/in/gwenmerida/" target="_blank" class="mx-5 grey--text">
          <i class="fab fa-linkedin-in grey--text" style="font-size: 5em"></i>
        </a>
        <a href="https://qiita.com/gwenmerida" target="_blank" class="mx-5 grey--text">
          <i class="fas fa-i-cursor grey--text" style="font-size: 5em"></i>
        </a>
        <a href="https://medium.com/@gdmerida.bit" target="_blank" class="mx-5 grey--text">
          <i class="fab fa-medium-m grey--text" style="font-size: 5em"></i>
        </a>
      </v-flex>
      <v-flex xs12 mt-2 mb-5 hidden-md-and-up>
        <p class="simple-font">{{ $t('otherworks') }}</p>
        <a href="https://github.com/gdmeridabit" target="_blank" class="mx-2 grey--text">
          <i class="fab fa-github" style="font-size: 4em"></i>
        </a>
        <a href="https://www.linkedin.com/in/gwenmerida/" target="_blank" class="mx-2 grey--text">
          <i class="fab fa-linkedin-in grey--text" style="font-size: 4em"></i>
        </a>
        <a href="https://qiita.com/gwenmerida" target="_blank" class="mx-2 grey--text">
          <i class="fas fa-i-cursor grey--text" style="font-size: 4em"></i>
        </a>
        <a href="https://medium.com/@gdmerida.bit" target="_blank" class="mx-2 grey--text">
          <i class="fab fa-medium-m grey--text" style="font-size: 4em"></i>
        </a>
      </v-flex>
      <v-flex xs12 mt-4 mb-5 hidden-sm-and-down>
          <p class="title font-weight-light mb-4">The scope of my work is more focus on the frontend:<b> single pages apps(MVC,
            MVVM), coding layouts, HTML, CSS and Javascript.</b></p>
          <v-layout class="mb-5">
            <v-flex lg4 xs12>
              <v-progress-circular
                      :value="80"
                      :size="200"
                      :width="25"
                      :rotate="360"
                      color="orange darken-2"
                      class="mb-2"
              >
                <span class="headline">80%</span>
              </v-progress-circular>
              <br/>
              <span class="title">{{ $t('webdev') }}</span>
            </v-flex>
            <v-flex lg4 xs12>
              <v-progress-circular
                      :value="60"
                      :size="200"
                      :width="25"
                      :rotate="360"
                      color="teal accent-3"
                      class="mb-2"
              >
                <span class="headline">60%</span>
              </v-progress-circular>
              <br/>
              <span class="title">{{ $t('backdev') }}</span>
            </v-flex>
            <v-flex lg4 xs12>
              <v-progress-circular
                      :value="60"
                      :size="200"
                      :width="25"
                      :rotate="360"
                      color="red accent-2"
                      class="mb-2"
              >
                <span class="headline">60%</span>
              </v-progress-circular>
              <br/>
              <span class="title">{{ $t('mobdev') }}</span>
            </v-flex>
          </v-layout>
      </v-flex>
      <v-flex xs12 my-4 hidden-md-and-up>
        <p class="title font-weight-light mb-4">The scope of my work is more focus on the frontend:<b> single pages apps(MVC,
          MVVM), coding layouts, HTML, CSS and Javascript.</b></p>
        <v-layout row wrap>
          <v-flex xs12>
            <v-progress-circular
                    :value="80"
                    :size="200"
                    :width="25"
                    color="orange darken-2"
                    class="mb-2"
            >80
            </v-progress-circular>
            <br/>
            <span class="title font-weight-light">{{ $t('webdev') }}</span>
          </v-flex>
          <v-flex xs12>
            <v-progress-circular
                    :value="60"
                    :size="200"
                    :width="25"
                    color="teal accent-3"
                    class="mb-2"
            >60
            </v-progress-circular>
            <br/>
            <span class="title font-weight-light">{{ $t('backdev') }}</span>
          </v-flex>
          <v-flex xs12>
            <v-progress-circular
                    :value="60"
                    :size="200"
                    :width="25"
                    color="red accent-2"
                    class="mb-2"
            >60
            </v-progress-circular>
            <br/>
            <span class="title font-weight-light">{{ $t('mobdev') }}</span>
          </v-flex>
        </v-layout>
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
