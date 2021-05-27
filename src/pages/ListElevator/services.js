import { elevators } from '../../mockups/elevators_list';

const getList = async (params) => {
  console.log('params', params);
  let records = [];

  let from_index = (parseInt(params.page) - 1) * parseInt(params.size);
  let to_index = parseInt(params.page) * parseInt(params.size);

  for (let i = from_index; i < to_index; i++) {
    if (elevators.length <= i) continue;
    const item = elevators[i];
    records.push(item);
  }

  return {
    items: records,
    total: elevators.length,
  };
};

export { getList };
