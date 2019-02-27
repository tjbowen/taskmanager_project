import moment from 'moment';

export default (todos, { text, sortBy, ascending, startDate, endDate, tags }) => {
  return todos.filter((todo) => {
    const dueDate = moment(todo.dueDate);
    const startDateMatch = startDate ? startDate.isSameOrBefore(dueDate, 'day'): true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(dueDate, 'day') : true;
    const textMatch = todo.description.toLowerCase().includes(text.toLowerCase());
    const tagsMatch = tags.length >=1 ? todo.tags.some(tag => tags.indexOf(tag) >=0) : true;
    return startDateMatch && endDateMatch && textMatch && tagsMatch
  }).sort((a, b) => {
    if(sortBy==='createDate'){
      return a.createDate < b.createdAt ? ascending: !ascending;
    }else if (sortBy === 'dueDate'){
      return a.dueDate < b.dueDate ? ascending: !ascending;
    }
  });
};
