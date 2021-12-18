import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heros: [
      {
        id: "1",
        nombre: 'BATMAN',
        poderes: [],
        uri: "https://img2.freepng.es/20180331/xgw/kisspng-x-logo-symbol-wiki-x-5abf56bb424f96.3240323915224890192716.jpg"
      },
      {
        id: "2",
        nombre: 'BOMBASTO',
        poderes: [],
        uri: "https://img2.freepng.es/20180331/xgw/kisspng-x-logo-symbol-wiki-x-5abf56bb424f96.3240323915224890192716.jpg"
      },
      {
        id: "3",
        nombre: 'MAGNETA',
        poderes: [],
        uri: "https://img2.freepng.es/20180331/xgw/kisspng-x-logo-symbol-wiki-x-5abf56bb424f96.3240323915224890192716.jpg"
      },
      {
        id: "4",
        nombre: 'SUPERMAN',
        poderes: ['VOLAR'],
        uri: "https://img2.freepng.es/20180331/xgw/kisspng-x-logo-symbol-wiki-x-5abf56bb424f96.3240323915224890192716.jpg"
      }
    ]
  },
  getters: {
    heros: (state) => (power = null) => {
      if(power){
        return state.heros.filter(item => {
          if(!item.poderes.length)
            return false;
          for (let index = 0; index < item.poderes.length; index++) {
            if(item.poderes[index].toLowerCase() == power){
              return true; 
            }
          }
          return false;
        });
      }else{
        return state.heros;
      }
    },
    countHeros: state => state.heros.length
  },
  mutations: {
    SET_HERO (state,hero) {
      if(hero.index != undefined){
        state.heros[hero.index] = hero;
      }else{
        state.heros.push(hero);
      }
    },
    DELETE_HERO (state,index) {
      state.heros.splice(index,1);
    }
  },
  actions: {
    setHero ({commit},hero) {
      commit('SET_HERO',hero);
    },
    deleteHero ({commit},index) {
      commit('DELETE_HERO',index);
    }
  },
});
