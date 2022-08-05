const handleLargeName = (str, maxLength = 20, end = 10) =>
	str.length > maxLength ? `${str.substring(0, maxLength - end)} ... ${str.substring(str.length - end, str.length)}` : str;

export default handleLargeName;
