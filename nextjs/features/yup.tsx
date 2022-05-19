import * as Yup from 'yup';

import { setLocale } from 'yup';

setLocale({
  // use constant translation keys for messages without values
  mixed: {
    default: 'Некорректное значение',
    required: ({path}) => `'${getFieldLabel(path)}' - обязательное поле`,
  },
  // use functions to generate an error object that includes the value from the schema
  number: {
    // min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
    // max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
  },
  string: {
    min: ({ min, path }) => `Поле '${getFieldLabel(path)}' должно быть не менее ${min} символов`,
    max: ({ max, path }) => `Поле '${getFieldLabel(path)}' должно быть не более ${max} символов`,
    email: ({path}) => `Некорректный адрес эл. почты.`
  },
});

function getFieldLabel(value) {
  switch (value) {
    case "email": return "Эл. почта";
    case "password": return "Пароль";
    default: return value;
  }
}

export default Yup as typeof Yup;