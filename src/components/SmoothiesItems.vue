<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s4" v-for="smoothie in smoothies" :key="smoothie.id">
          <div class="card horizontal">
            <div class="card-stacked">
              <div class="card-content">
                <i class="material-icons delete" @click="DeleteSmoothie(smoothie.id)">delete</i>
                <span class="card-title blue-text text-lighten-1">{{smoothie.title}}</span>
                <div class="chip" v-for="(ing,i) in smoothie.ingredients" :key="i">
                  {{ing}}
                  <!-- <i class="close material-icons">close</i> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firestore/init.js";

export default {
  data() {
    return {
      smoothies: []
    };
  },
  methods: {
    DeleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        console.log(smoothie.id);
        return smoothie.id != id;
      });
    }
  },
  created() {
    db.collection("smoothies")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.id);
          let smoothie = { id: doc.id, ...doc.data() };
          this.smoothies.push(smoothie);
        });
      });
  }
};
</script>

<style>
.delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: gray;
}

.delete:hover {
  color: black;
}
</style>