const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);



const getAllUsers = () => {
    return knex
    .column('id', 'name', 'password')
    .select()
    .from('user')
}
const getUsersById = (id) => {
    return knex('user')
    .where('id', id)
    .select('name','id')
}
const createUser = (body) => {
    return knex('user')
    .insert(body)
}
const updateUser = (id, body) => {
    return knex('user')
    .where('id', id)
    .update(body)
}
const deleteUser = (id) => {
    return knex('user')
    .where('id', id)
    .del()
}
module.exports = {
    deleteUser,
    updateUser,
    createUser,
    getAllUsers,
    getUsersById
}