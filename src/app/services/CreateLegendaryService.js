const model = require('../models/LegendaryModel');
const { v4 } = require('uuid');
const LegendaryModel = require('../models/LegendaryModel');

const CreateLegendaryService = {
    createLegendary: (
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense
    ) => {
        const newLegendary = new LegendaryModel(
            v4(),
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        );
            
        return newLegendary;
    }
}

module.exports = CreateLegendaryService;