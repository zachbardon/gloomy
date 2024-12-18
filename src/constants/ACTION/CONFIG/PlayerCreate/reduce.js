export default (campaign, { payload: { name }, id, by, dt }) => ({
  ...campaign,
  players: {
    ...campaign.players,
    [id]: {
      id,
      name,
      characters: {},
      retired: {},
      parties: {},
      owners: [],
      notes: '',
      by,
      dt,
    },
  },
});
