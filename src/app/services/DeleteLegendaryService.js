const ListLegendariesService = require('./ListLegendariesService');

const DeleteLegendaryService = {
    delete: (id) => {
        const pokemons = ListLegendariesService.listLegendariesService()

        const pokemonIndice = pokemons.findIndex(item => item.id === id)

        if(pokemonIndice === -1) {
            return { erro: "Pokémon não encontrado!" }
        }

        pokemons.splice(pokemonIndice, 1)

        return { mensagem: "Pokémon deletado com sucesso!" }
    }
}

module.exports = DeleteLegendaryService;
