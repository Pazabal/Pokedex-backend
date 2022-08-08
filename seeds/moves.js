/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('moves').del()
  await knex('moves').insert([
    {move1: 'razor-wind', move2:'sword-dance'},
    {move1: 'sword-dance', move2:'cut'},
    {move1: 'sword-dance', move2:'cut'},
    {move1: 'mega-punch', move2:'fire-punch'},
    {move1: 'mega-punch', move2:'fire-punch'},
    {move1: 'mega-punch', move2:'fire-punch'},
    {move1: 'mega-punch', move2:'ice-punch'},
    {move1: 'mega-punch', move2:'ice-punch'},
    {move1: 'mega-punch', move2:'ice-punch'},
    {move1: 'tackle', move2:'string-shot'},
    {move1: 'string-shot', move2:'harden'},
    {move1: 'razor-wind', move2:'gust'},
    {move1: 'poison-sting', move2:'string-shot'},
    {move1: 'string-shot', move2:'harden'},
    {move1: 'sword-dance', move2:'cut'},
    {move1: 'razor-wind', move2:'gust'},
    {move1: 'razor-wind', move2:'gust'},
    {move1: 'razor-wind', move2:'gust'},
    {move1: 'cut', move2:'headbutt'},
    {move1: 'sword-dance', move2:'cut'},
    {move1: 'razor-wind', move2:'whirlwind'},
    {move1: 'razor-wind', move2:'whirlwind'},
    {move1: 'bind', move2:'slam'},
    {move1: 'bind', move2:'slam'},
    {move1: 'mega-punch', move2:'pay-day'},
    {move1: 'mega-punch', move2:'pay-day'},
    {move1: 'scratch', move2:'sword-dance'},
    {move1: 'scratch', move2:'sword-dance'},
    {move1: 'scratch', move2:'cut'},
    {move1: 'scratch', move2:'cut'}
    
  ]);
};
