<template>
  <v-container>
    <v-layout text-xs-center mt-2 px-3 py-3>
      <v-flex xs12>
        <span class="display-2 font-weight-bold" id="career">Career</span>
      </v-flex>
    </v-layout>
    <v-layout px-5 py-5>
      <v-flex xs12 hidden-md-and-up>
        <v-card class="mb-3">
          <v-card-title class="orange ">
            <h2 class="display-1 white--text font-weight-light">Force Field Management(FFM)</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
            Force Field Management (FFM)は金融機関が信用調査を通じてクライアントをより詳しく知ることができるようにするWebプラットフォーム。
              <br/>私がソフトエンジニアとして担当はプラットホームのフロントエンドです。このプロジェクトにはフロントエンドを開発することに向けてSpring MVCの技術を使いました。
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="display-1 mr-3 white--text font-weight-light">Mobile Loan Saver(MLS)</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              Mobile Loan Saverは公務員にお金を貸す金融機関のためのローンプラットフォームです。
              <br/>迅速かつ簡単なフロントエンド開発のためGroovy and Grailsの技術を使いました。また、GroovyとGrailsを使用して、データベースとフロントエンドを統合するWebサービスを作成できました。
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="cyan lighten-1">
            <h2 class="display-1 white--text font-weight-light">Aspire</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              Aspireは大学生のための授業料のクラウドファンディングプラットフォームです。このプラットフォーム作成の発注元の会社では、全てのプロジェクトでPHP言語を使用しています。だから、PHPのCodeIgniterフレームーワークを通してバックエンドとフロントエンドを開発しました。
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="mb-3">
          <v-card-title class="cyan lighten-1">
            <h2 class="display-1 white--text font-weight-light">GCash</h2>
          </v-card-title>
          <v-layout>
            <v-flex xs12 pa-3>
              モバイルワーレットなアプリです。アプリの使う人はアプリで送金することができって、プリペイドロードを買えて、別の店で支払うことができます。私がモバイル開発者として、担当はiOSモバイル開発して、Apple Storeでアプリをデプロイしました。
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
                  Force Field Management (FFM)は金融機関が信用調査を通じてクライアントをより詳しく知ることができるようにするWebプラットフォーム。
                  <br/>私がソフトエンジニアとして担当はプラットホームのフロントエンドです。このプロジェクトにはフロントエンドを開発することに向けてSpring MVCの技術を使いました。
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
                  Mobile Loan Saverは公務員にお金を貸す金融機関のためのローンプラットフォームです。
                  <br/>迅速かつ簡単なフロントエンド開発のためGroovy and Grailsの技術を使いました。また、GroovyとGrailsを使用して、データベースとフロントエンドを統合するWebサービスを作成できました。
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
                  Aspireは大学生のための授業料のクラウドファンディングプラットフォームです。このプラットフォーム作成の発注元の会社では、全てのプロジェクトでPHP言語を使用しています。だから、PHPのCodeIgniterフレームーワークを通してバックエンドとフロントエンドを開発しました。
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="blue darken-4" fill-dot left small>
            <v-card>
              <v-card-title class="blue darken-4">
                <h2 class="display-1 mr-3 white--text font-weight-light">GCash</h2>
                <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
              </v-card-title>
              <v-layout>
                <v-flex xs12 pa-3>
                  モバイルワーレットなアプリです。アプリの使う人はアプリで送金することができって、プリペイドロードを買えて、別の店で支払うことができます。私がモバイル開発者として、担当はiOSモバイル開発して、Apple Storeでアプリをデプロイしました。
                </v-flex>
              </v-layout>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>
