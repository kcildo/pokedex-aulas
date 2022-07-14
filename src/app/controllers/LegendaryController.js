const ListLegendariesService = require('../services/ListLegendariesService');
const CreateLegendaryService = require('../services/CreateLegendaryService');
const UpdateLegendaryService = require('../services/UpdateLegendaryService');
const DeleteLegendaryService = require('../services/DeleteLegendaryService');

const controller = {
    index: (req, res) => {
        const listLegendaries = ListLegendariesService.listLegendariesService()
    res.json(listLegendaries)
    },
    ListData: (req, res) => {
        const { name } = req.query;

        if(!name){
            return res.status(400).json({ "erro": "Você não passou o nome do pokemon!"})
        }

        const legendary = ListLegendariesService.listPokemonData(name);

        return res.json(legendary)
    },
    create: (req, res) => {
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        } = req.body;

        const legendary = CreateLegendaryService.createLegendary(
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        )
        
        return res.json(legendary)
    },
    update: (req,res) => {
        const { id } = req.params
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        } = req.body;

        const updatedLegendary = UpdateLegendaryService.update(
            id,
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        )
        res.json(updatedLegendary)
    },
    delete: (req, res) => {
        const { id } = req.params;

       const resultado = DeleteLegendaryService.delete(Number(id))

       res.send(resultado)
    }
}

module.exports = controller;