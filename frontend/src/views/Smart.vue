<template>
<div class="w-100 justify-content-center">
  <h2 v-text="`Tour de heroes (${countHeros})`" class="text-info"></h2>
    <div class="container">
    <div class="w-50">
      <buscador @search="filterHerosByPower"></buscador>
      <br>
      <div class="d-flex justify-content-end">
        <button type="button" @click="showForm = true" class="btn">AGREGAR HEROE</button>
      </div>
      <br>
      <div class="row">
        <heroe :hero="item" :index="index" v-for="(item,index) in heros" :key="index" @removeHero="removeHero"></heroe>
      </div>
    </div>
    <form-hero v-if="showForm" @addHero="addHero"></form-hero>
  </div>
</div>
</template>

<style>
  .d-flex{
    display: flex;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  .item-flex{
    flex: 0 1 1;
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
    display: flex;
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

  .w-40{
    width: 40%;
  }

  .w-30{
    width: 30%;
  }

  .text-right{
    text-align: right;
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

  .mr-2{
    margin-right: 10px;
  }

  .mt-2{
    margin-top: 10px;
  }

  .btn{
    height: 25px;
  }

  .text-danger{
    color: red;
  }

  .text-info{
    color: blue;
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

