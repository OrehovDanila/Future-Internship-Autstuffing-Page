export const testEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const testName = name => /^[a-zA-Zа-яА-ЯёЁ]+$/iu.test(name);
