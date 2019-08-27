<template>
  <v-container class="mb-5">
    <v-layout row wrap text-xs-center py-3>
      <v-flex xs12 mb-3>
        <span class="font-weight-bold title-font">{{ $t('others_title') }}</span>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap text-xs-center py-3>
      <v-flex lg4 sm12 xs12 mb-3 px-2>
        <v-card>
          <v-card-media><v-img :src="img1"></v-img></v-card-media>
          <v-card-title>Okutara</v-card-title>
          <v-card-text>Okutara is blog site</v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg4 sm12 xs12 mb-3 px-2>
        <v-card>
          <v-card-media><v-img :src="img1"></v-img></v-card-media>
          <v-card-title>Block Wallet</v-card-title>
          <v-card-text>Block Wallet</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      img1: require('../assets/okutara.png')
    }),
    beforeMount() {
      this.$i18n.locale = this.$route.params.lang;
    }
  };
</script>
