
export const addTag =(
  {
    description = "",
    color = 'black',
  } = {}
) => ({
  type: 'ADD_TAG',
  tag: {
    description,
    color,
  }
});