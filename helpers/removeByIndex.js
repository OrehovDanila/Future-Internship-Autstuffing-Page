const removeByIndex = (list, index) => [...list.slice(0, index), ...list.slice(index + 1)];

export default removeByIndex;
