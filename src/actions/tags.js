
export const addTag =(
  {
    description = "",
    color = 'black',
    isChecked = false,
  } = {}
) => ({
  type: 'ADD_TAG',
  tag: {
    description,
    color,
    isChecked
  }
});