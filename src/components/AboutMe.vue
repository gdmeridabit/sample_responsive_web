<template>
  <v-container fluid>
    <v-layout row wrap align-content justify-center fill-height id="about" style="height: 100vh;">
      <v-flex text-xs-center xs12>
        <span class="font-weight-bold title-font">{{ $t('about_title') }}</span>
      </v-flex>
      <v-flex text-xs-center xs12>
        <v-avatar size="250" color="grey lighten-4" data-aos="flip-right">
          <img
                  :src="avatar"
                  alt="avatar"
          >
        </v-avatar>
        <p class="title font-weight-thin mt-3" v-html="$t('intro')"></p>
      </v-flex>
      <v-flex text-xs-center xs12 mb-5 hidden-sm-and-down>
        <a href="#percentage">
          <v-img src="https://media0.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif" width="3%" style="left: 50%"></v-img>
        </a>
      </v-flex>
      <v-flex text-xs-center xs12 hidden-md-and-up>
        <a href="#percentage">
          <v-img src="https://media0.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif" width="15%" style="left: 50%"></v-img>
        </a>
      </v-flex>
    </v-layout>
    <v-layout align-content justify-center fill-height row wrap class="mb-5" data-aos="fade-up">
      <v-flex xs12 text-xs-center hidden-sm-and-down mb-5 id="percentage">
        <p class="simple-font font-weight-light">{{ $t('skill') }}</p>
        <v-layout>
          <v-flex lg4 xs12>
            <v-progress-circular
                    :value="80"
                    :size="200"
                    :width="30"
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
                    :width="30"
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
                    :width="30"
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
      <v-flex xs12 text-xs-center hidden-md-and-up mb-5>
        <p class="simple-font font-weight-light">{{ $t('skill') }}</p>
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
      <v-flex xs12 text-xs-center hidden-sm-and-down mt-5>
        <p class="simple-font">{{ $t('otherworks') }}</p>
        <a href="https://github.com/gdmeridabit" target="_blank" class="mx-5">
          <i class="fab fa-github" style="font-size: 5em"></i>
        </a>
        <a href="https://qiita.com/gwenmerida" target="_blank" class="mx-5">
          <i class="fas fa-i-cursor" style="font-size: 5em"></i>
        </a>
        <a href="https://medium.com/@gdmerida.bit" target="_blank" class="mx-5">
          <i class="fab fa-medium-m" style="font-size: 5em"></i>
        </a>
      </v-flex>
      <v-flex xs12 text-xs-center hidden-md-and-up mt-5>
        <p class="simple-font">{{ $t('otherworks') }}</p>
        <a href="https://github.com/gdmeridabit" target="_blank" class="mx-4">
          <i class="fab fa-github" style="font-size: 4em"></i>
        </a>
        <a href="https://qiita.com/gwenmerida" target="_blank" class="mx-4">
          <i class="fas fa-i-cursor grey--text" style="font-size: 4em"></i>
        </a>
        <a href="https://medium.com/@gdmerida.bit" target="_blank" class="mx-4">
          <i class="fab fa-medium-m grey--text" style="font-size: 4em"></i>
        </a>
      </v-flex>
    </v-layout>
    <v-divider class="mb-5"></v-divider>
    <v-layout align-content justify-center fill-height row wrap class="my-5" data-aos="fade-up">
      <v-flex xs12 text-xs-center mb-5>
        <span class="simple-font">{{ $t('contactme') }}</span><br/>
        <span class="title font-weight-light">{{ $t('contact') }}</span>
      </v-flex>
      <v-flex xs12 text-xs-center mb-1>
        <i class="fas fa-envelope" style="font-size: 1.5em"></i>
        <span class="simple-sm-font"> gwen.merida02@gmail.com</span><br/>
      </v-flex>
      <v-flex xs12 text-xs-center mb-1>
        <i class="fab fa-twitter" style="font-size: 1.5em"></i>
        <span class="simple-sm-font"> @gwenskiesHere</span><br/>
      </v-flex>
      <v-flex xs12 text-xs-center mb-1>
        <i class="fab fa-linkedin-in" style="font-size: 1.5em"></i>
        <span class="simple-sm-font"> https://www.linkedin.com/in/gwenmerida/</span><br/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      avatar: require("../assets/me.jpg"),
    }),
    beforeMount() {
      this.$i18n.locale = this.$route.params.lang;
    }
  };
</script>
