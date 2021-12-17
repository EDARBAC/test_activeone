<template>
  <div class="container">
    <div class="w-50">
      <h2 v-text="`Tour de heroes (${countHeros})`"></h2>
      <buscador @search="filterHerosByPower"></buscador>
      <div class="d-flex justify-content-end">
        <button type="button" @click="showForm = true" class="btn">AGREGAR HEROE</button>
      </div>
      <div class="d-flex">
        <heroe :hero="item" :index="index" v-for="(item,index) in heros" :key="index" @removeHero="removeHero"></heroe>
      </div>
    </div>
    <form-hero v-if="showForm" @addHero="addHero"></form-hero>
  </div>
</template>

<style>
  .d-flex{
    display: flex;
  }

  .d-inline{
    display: inline;
  }

  .wrap{
    flex-wrap: wrap;
  }

  .column{
    flex-direction: column;
  }

  .container{
    width: 100%;
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
  }

  .w-auto{
    width: auto;
  }

  .w-100{
    width: 100%;
  }

  .w-50{
    width: 50%;
  }

  .justify-content-center{
    justify-content: center;
  }

  .justify-content-end{
    justify-content: end;
  }

  .m-2{
    margin: 10px;
  }

  .btn{
    height: 25px;
  }

  input{
    height: 22px;
    width: 100%;
  }

</style>

<script>

import Heroe from '@/components/Heroe';
import FormHero from '@/components/FormHero';
import Buscador from '@/components/Buscador';

export default {
  name: "Smart",
  components: { Heroe, FormHero, Buscador },
  data(){
    return {
      showForm: false,
      power: null
    }
  },
  methods: {
    filterHerosByPower(value){
      this.power = value;
    },
    addHero(hero){
      this.showForm = false;
      this.$store.dispatch('setHero',hero);
    },
    removeHero(index){
      this.showForm = false;
      this.$store.dispatch('deleteHero',index);
    }
  },
  computed: {
    countHeros(){
      return this.$store.getters.countHeros;
    },
    heros(){
      return this.$store.getters.heros(this.power);
    }
  }
};
</script>

