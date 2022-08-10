const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllTypes = () => {
    return knex
    .column('id', 'name')
    .select()
    .from('types')
}

const getTypeById = (id) => {
    return knex('types')
    .where('id' , id)
    .select('name', 'id')
}

const createType = (body) => {
    return knex('types')
    .insert(body)
}

const updateType = (id, body) => {
    return knex('types')
    .where(id, 'id')
    .update(body)
}

const deleteType = (id) =>{
    return knex('types')
    .where('id' ,id)
    .del()
}

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
}