<template>
  <div id="addSmoothies">
    <div class="container">
      <h2 class="center-align indigo-text">Add Smoothies</h2>

      <form @submit.prevent="addSmoothies" class="col s12">
        <div class="row">
          <div class="input-field">
            <label for="title">Title</label>
            <input id="title" type="text" v-model="title" />
          </div>
        </div>

        <div class="input-field" v-for="(ing,index) in Ingredients" :key="ing">
          <!-- active class for not to overlap  -->
          <label for="ing" class="active">Ingredient {{index + 1}}</label>
          <!-- Notice How to use Index  -->
          <input id="ing" name="ing" type="text" v-model="Ingredients[index]" />
        </div>

        <div class="row">
          <div class="input-field">
            <label for="ingredient">Add Ingredient</label>
            <input
              id="ingredient"
              type="text"
              @keydown.tab.prevent="AddIngredient"
              v-model="Ingredient"
            />
            <small v-if="NoIngredientMsg" class="red-text">{{NoIngredientMsg}}</small>
          </div>
        </div>
        <div class="center-align">
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Add Smoothie
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firestore/init";
import slugify from "slugify";
export default {
  data() {
    return {
      title: null,
      Ingredient: null,
      Ingredients: [],
      NoIngredientMsg: null,
      slug: null
    };
  },
  methods: {
    addSmoothies() {
      //   console.log(this.title);
      this.slug = slugify(this.title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
      });
      //   console.log(this.slug);
      db.collection("smoothies")
        .add({
          ingredients: this.Ingredients,
          slug: this.slug,
          title: this.title
        })
        .then(() => {
          this.$router.push("/");
        });
    },
    AddIngredient() {
      if (this.Ingredient) {
        this.Ingredients.push(this.Ingredient);

        console.log(this.Ingredients);
        this.Ingredient = null;
        this.NoIngredientMsg = null;
      } else {
        this.NoIngredientMsg = "You need to Add at least one Ingredient";
      }
    }
  }
};
</script>

<style>
</style>