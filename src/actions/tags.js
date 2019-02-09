import uuid from 'uuid';

export const addTag =(
  {
    description = "",
    color = 'black',
    isChecked = false,
    id= uuid()
  } = {}
) => ({
  type: 'ADD_TAG',
  tag: {
    description,
    color,
    isChecked,
    id
  }
});

export const editTag = (id, updates) => ({
  type: "EDIT_TAG",
  id,
  updates
})