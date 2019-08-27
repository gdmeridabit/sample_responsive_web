<template>
  <v-container>
    <v-layout text-xs-center mt-2 px-3 py-3>
      <v-flex xs12>
        <span class="display-2 font-weight-bold" id="career">{{ $t('career_title') }}</span>
      </v-flex>
    </v-layout>
    <v-layout px-5 py-5>
      <v-flex xs12 hidden-md-and-up>
        <v-card class="mb-3">
          <v-card-title class="orange ">
            <h2 class="headline white--text font-weight-light">Force Field Management(FFM)</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('ffm') }}
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="headline mr-3 white--text font-weight-light">Mobile Loan Saver(MLS)</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('mls') }}
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="cyan lighten-1">
            <h2 class="headline white--text font-weight-light">Aspire</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('aspire') }}
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="blue darken-4">
            <h2 class="headline white--text font-weight-light">GCash</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('gcash') }}
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="red lighten-1">
            <h2 class="headline white--text font-weight-light">Openberry</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('oberry') }}
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="teal darken-1">
            <h2 class="headline white--text font-weight-light">Babel Method</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('bmethod') }}
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex lg12 hidden-sm-and-down>
        <v-timeline>
          <v-timeline-item color="orange " fill-dot right>
            <v-card>
              <v-card-title class="orange ">
                <v-icon dark size="42" class="mr-3">mdi-magnify</v-icon>
                <h2 class="headline white--text font-weight-light">Force Field Management(FFM)</h2>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('ffm') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="amber lighten-1" fill-dot left small>
            <v-card>
              <v-card-title class="amber lighten-1">
                <h2 class="headline mr-3 white--text font-weight-light">Mobile Loan Saver(MLS)</h2>
                <v-icon dark size="42">mdi-home-outline</v-icon>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('mls') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="cyan lighten-1" fill-dot right>
            <v-card>
              <v-card-title class="cyan lighten-1">
                <v-icon class="mr-3" dark size="42">mdi-email-outline</v-icon>
                <h2 class="headline white--text font-weight-light">Aspire</h2>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('aspire') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="blue darken-4" fill-dot left small>
            <v-card>
              <v-card-title class="blue darken-4">
                <h2 class="headline mr-3 white--text font-weight-light">GCash</h2>
                <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('gcash') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="red lighten-1" fill-dot right>
            <v-card>
              <v-card-title class="red lighten-1">
                <v-icon class="mr-3" dark size="42">mdi-email-outline</v-icon>
                <h2 class="headline white--text font-weight-light">Openberry</h2>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('oberry') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="teal darken-1" fill-dot left small>
            <v-card>
              <v-card-title class="teal darken-1">
                <h2 class="headline mr-3 white--text font-weight-light">Babel Method</h2>
                <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('bmethod') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
