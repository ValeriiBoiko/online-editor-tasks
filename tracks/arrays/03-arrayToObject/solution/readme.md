# arrayToObject

Розв'язання цієї задачі може виглядати ось так:

```js
const arrayToObject = () => {
  return arr.reduce((previousValue, item) => {
    previousValue[item.id] = item;

    return previousValue;
  }, {});
};
```

## Алгоритм дій:

Метод масиву reduce gthibv парметром приймає функцію-callback, а другим - початкове значення. В нашому випадку це порожній обʼєкт

- першиим параметром previousValue, currentValue, currentIndex, array

## Корисні посилання