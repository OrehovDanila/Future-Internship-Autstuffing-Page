export default string => string.replace(/[\wа-я]+/gi, s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
