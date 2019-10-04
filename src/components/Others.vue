<template>
  <v-container class="mb-5">
    <v-layout row wrap text-xs-center py-3>
      <v-flex xs12 mb-3>
        <span class="font-weight-bold title-font">{{ $t('others_title') }}</span>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap text-xs-center py-3>
      <v-flex lg4 sm12 xs12 mb-3 px-2 v-for="(data, index) in items" :key="index">
        <v-card height="100%" @click="ctr = index">
          <v-card-media class="pa-2"><v-img :src="data.img" width="100%" height="100%"></v-img></v-card-media>
          <v-card-title class="simple-sm-font">{{ data.title }}</v-card-title>
          <v-card-actions>
            <v-btn @click="dialog = true" class="primary" flat>Read More</v-btn>
          </v-card-actions>
        </v-card>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card class="ma-3">
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-toolbar-title class="title-font">{{ items[ctr].title }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap align-center justify-center fill-height style="height: 85vh;">
              <v-flex lg6>
                <v-card-media class="pa-5">
                  <v-img :src="items[ctr].img"></v-img>
                </v-card-media>
              </v-flex>
              <v-flex lg6 class="pa-5">
                <v-card-title v-if="items[ctr].url !== ''">
                  URL: <a :href="items[ctr].url" target="_blank" class="font-weight-light ml-1">{{ items[ctr].url }}</a>
                </v-card-title>
                <v-card-title>Description:</v-card-title>
                <v-card-text class="font-weight-light">
                  {{ items[ctr].details }}
                </v-card-text>
                <v-card-title>Technologies:</v-card-title>
                <v-card-text class="font-weight-light">
                  {{ items[ctr].tech }}
                </v-card-text>
                <v-card-title>Learning:</v-card-title>
                <v-card-text class="font-weight-light">
                  {{ items[ctr].learning }}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      ctr: 0,
      items: [
        {
          img: require('../assets/okutara.png'),
          title: 'Okutara',
          details: 'Okutara is a blog site, to share our experience as a student who lives in Okutama.' +
            'This project aims to promote Okutama to the people from other country.',
          tech: 'PHP, Laravel, MySQL, CPanel, Github',
          learning: 'Deep learning about Laravel, especially Eloquent ORM',
          url: 'http://okutara.okutamaplus-edu.jp/',
        },
        {
          img: require('../assets/blockwallet.png'),
          title: 'Block Wallet',
          details: 'Block Wallet is a personal project while studying blockchain.' +
            'It is an Ethereum wallet where people can pass eth to other Wallet users.' +
            'Users can also create their own token.',
          tech: 'React Native, Expo, Nodejs, express, web3, Ganache, Github',
          learning: 'Learned React Native, Nodejs and things about blockchain',
          url: '',
        },
        {
          img: require('../assets/portfolio.png'),
          title: 'Portfolio',
          details: 'This portfolio is a showcase of my career, experience and skills.',
          tech: 'Vue.js, Vuetify, Heroku',
          learning: 'Learning Vue.js, Vuetify, Heroku and learning how to make a site mobile responsive in Vue.js',
          url: '',
        }
      ],
      dialog: false,
    }),
    beforeMount() {
      this.$i18n.locale = this.$route.params.lang;
    },
    methods: {
      openDialog() {
        this.dialog = true;
      }
    }
  };
</script>
