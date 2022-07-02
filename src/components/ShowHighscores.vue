<template>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Reaction time</th>
      </tr>
    </thead>
    <tbody>  
      <tr v-if="rows > 0">
        <td>1.</td><td>{{ topScores[0].name }}</td><td>{{ topScores[0].reaction_time }}ms</td>        
      </tr>
      <tr v-if="rows > 1">
        <td>2.</td><td>{{ topScores[1].name }}</td><td>{{ topScores[1].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 2">
        <td>3.</td><td>{{ topScores[2].name }}</td><td>{{ topScores[2].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 3">
        <td>4.</td><td>{{ topScores[3].name }}</td><td>{{ topScores[3].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 4">
        <td>5.</td><td>{{ topScores[4].name }}</td><td>{{ topScores[4].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 5">
        <td>6.</td><td>{{ topScores[5].name }}</td><td>{{ topScores[5].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 6">
        <td>7.</td><td>{{ topScores[6].name }}</td><td>{{ topScores[6].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 7">
        <td>8.</td><td>{{ topScores[7].name }}</td><td>{{ topScores[7].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 8">
        <td>9.</td><td>{{ topScores[8].name }}</td><td>{{ topScores[8].reaction_time }}ms</td>
      </tr>
      <tr v-if="rows > 9">
        <td>10.</td><td>{{ topScores[9].name }}</td><td>{{ topScores[9].reaction_time }}ms</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)

export default {
  data() {
    return {
      topScores: []
    }
  },
  computed: {
    rows() {
      return this.topScores.length  
    }
  },
  mounted() {
    this.fetchHighScores();
  },
  methods: {
    async fetchHighScores() {
      const { data: scores, error } = await supabase
      .from('scores')
      .select('*')
      console.log(scores);
      scores.sort((a, b) => {
        if (a.reaction_time < b.reaction_time) {
          return -1;
        } else if (a.reaction_time > b.reaction_time) {
          return 1;
        }
        return 0;  
      });

      let i = 0;
      while (i < (scores.length < 10 ? scores.length : 10)) {
        this.topScores.push(scores[i]);
        i++;  
      }  
    }
  }
}
</script>

<style>

</style>