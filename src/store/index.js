// store/index.js
import { createLogger, createStore, storeKey } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    characters: [],
    url: [],
    charactersFilter: null,
    planets: [],
    planetsUrl: [],
    planet: null,
    baseUrl: "https://swapi.dev/api/people/?page=1",
    nextPeople: null,
    prevPeople: null,
    isLoading: true,
  },

  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setNextPeople(state, url) {
      state.nextPeople = url;
    },
    setPrevPeople(state, url) {
      state.prevPeople = url;
    },
    setCharactersByFilter(state, charactersFilter) {
      state.charactersFilter = charactersFilter;
    },
    setCharactersFilter(state, charactersFilter) {
      state.charactersFilter = charactersFilter;
    },
    setBaseUrl(state, url) {
      state.baseUrl = url;
    },
    setIsLoading(state, loading) {
      state.isLoading = loading;
    },
    setUrl(state, url) {
      state.url.push(url);
    },
  },
  actions: {
    async getCharacters({ commit, state }, url) {
      try {
        let currentUrl = state.baseUrl;
        if (url) {
          currentUrl = url;
        }
        const response = await axios.get(currentUrl);
        const characters = response.data.results;
        const fullData = response.data;
        commit("setCharactersFilter", characters);
        commit("setCharacters", fullData);
        store.dispatch("getPlanet");
        commit("setNextPeople", fullData.next);
        commit("setPrevPeople", fullData.previous);
      } catch (error) {
        console.log(error);
      }
    },

    async getPlanet({ commit, state }) {
      const person = state.charactersFilter;
      for (const character of person) {
        const data = await axios.get(character.homeworld);
        character.planet = { ...data.data };
      }
      commit("setCharactersFilter", person);
      setTimeout(() => {
        commit("setIsLoading", false);
      }, 3000);
    },
    filterByname({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.results.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) {
          return character;
        }
      });
      commit("setCharactersByFilter", results);
    },

    setLoading({ commit }) {
       commit("setIsLoading", true);
    },
  },
});

export default store;
