<template>
  <v-card flat>
    <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            fixed
            grow
            color="white"
    >
      <v-btn
              value=""
              flat
              :to="'/' + this.$route.params.lang"
      >
        <span>{{ $t('about_title') }}</span>
        <v-icon>sentiment_very_satisfied</v-icon>
      </v-btn>

      <v-btn
              value="skill"
              flat
              :to="'/' + this.$route.params.lang + '/skill'"
      >
        <span>{{ $t('skill_title') }}</span>
        <v-icon>build</v-icon>
      </v-btn>

      <v-btn
              value="career"
              flat
              :to="'/' + this.$route.params.lang + '/career'"
      >
        <span>{{ $t('career_title') }}</span>
        <v-icon>work</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: ''
      }
    }
  }
</script>
