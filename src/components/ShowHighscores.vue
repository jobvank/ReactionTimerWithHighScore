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
      <tr v-for="n in this.rows" :key="n.id">
        <td>{{ n }}.</td><td>{{ topScores[n - 1].name }}</td><td>{{ topScores[n - 1].reaction_time }}ms</td>        
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
        .order('reaction_time', {ascending: true})
        .range(0, 9)
      
      if (error) {
        console.log(`Supabase error: ${error}`)
      } else {
        this.topScores = scores;
      } 
    }
  }
}
</script>

<style>

</style>