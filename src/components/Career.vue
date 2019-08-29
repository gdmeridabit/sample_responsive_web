<template>
  <v-container>
    <v-layout text-xs-center mt-2 px-3 py-3>
      <v-flex xs12>
        <span class="title-font font-weight-bold" id="career">{{ $t('career_title') }}</span>
      </v-flex>
    </v-layout>
    <v-layout px-5 py-5>
      <v-flex xs12 hidden-md-and-up>
        <span class="simple-sm-font">{{ $t('ffmdate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
          <v-card-title class="orange ">
            <h2 class="headline white--text font-weight-light">Force Field Management(FFM)</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('ffm') }}
            </v-flex>
          </v-layout>
        </v-card>
        <span class="simple-sm-font">{{ $t('mlsdate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
          <v-card-title class="amber lighten-1">
            <h2 class="headline mr-3 white--text font-weight-light">Mobile Loan Saver(MLS)</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('mls') }}
            </v-flex>
          </v-layout>
        </v-card>
        <span class="simple-sm-font">{{ $t('c2pdate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
          <v-card-title class="lime lighten-1">
            <h2 class="headline mr-3 white--text font-weight-light">Charge-2-phone</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('c2p') }}
            </v-flex>
          </v-layout>
        </v-card>
        <span class="simple-sm-font">{{ $t('aspiredate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
          <v-card-title class="cyan lighten-1">
            <h2 class="headline white--text font-weight-light">Aspire</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('aspire') }}
            </v-flex>
          </v-layout>
        </v-card>
        <span class="simple-sm-font">{{ $t('gcashdate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
          <v-card-title class="blue darken-4">
            <h2 class="headline white--text font-weight-light">GCash</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('gcash') }}
            </v-flex>
          </v-layout>
        </v-card>
        <span class="simple-sm-font">{{ $t('oberrydate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
          <v-card-title class="red lighten-1">
            <h2 class="headline white--text font-weight-light">Openberry</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              {{ $t('oberry') }}
            </v-flex>
          </v-layout>
        </v-card>
        <span class="simple-sm-font">{{ $t('bmethoddate') }}</span>
        <v-card class="mb-3" data-aos="flip-down">
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
          <v-timeline-item color="orange " fill-dot right small>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('ffmdate') }}</span>
            </template>
            <v-card data-aos="flip-down">
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
          <v-timeline-item color="amber lighten-1" fill-dot right>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('mlsdate') }}</span>
            </template>
            <v-card data-aos="flip-down">
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
          <v-timeline-item color="lime lighten-1" fill-dot left small>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('c2pdate') }}</span>
            </template>
            <v-card data-aos="flip-down">
              <v-card-title class="lime lighten-1">
                <h2 class="headline mr-3 white--text font-weight-light">Charge-2-Phone</h2>
                <v-icon dark size="42">mdi-home-outline</v-icon>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  {{ $t('c2p') }}
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="cyan lighten-1" fill-dot left small>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('aspiredate') }}</span>
            </template>
            <v-card data-aos="flip-down">
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
          <v-timeline-item color="blue darken-4" fill-dot right>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('gcashdate') }}</span>
            </template>
            <v-card data-aos="flip-down">
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
          <v-timeline-item color="red lighten-1" fill-dot left small>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('oberrydate') }}</span>
            </template>
            <v-card data-aos="flip-down">
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
          <v-timeline-item color="teal darken-1" fill-dot left>
            <template v-slot:opposite>
              <span class="simple-font">{{ $t('bmethoddate') }}</span>
            </template>
            <v-card data-aos="flip-down">
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
