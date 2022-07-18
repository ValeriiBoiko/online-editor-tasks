# arrayToObject

Описати функцію, яка як аргумент приймає масив користувачів, а повертає обʼєкт, де ключем виступає id користувача, а значенням - обʼєкт користувача. Елемент масиву (користувач) представлений обʼєктом виду:

```js
{
  id: 1,
  name: 'John Doe',
}
```

**Приклад:**

```js
arrayToObject([]); // {}
arrayToObject([{id: 1, name: "Foo"}]); // {1: {id: 1, name: "Foo"}}
arrayToObject([{id: 1, name: "Foo"}, {id: 2, name: "Bar"}, {id: 1, name: "Foo"}]); // {1: {id: 1, name: "Foo"}, 2: {id: 2, name: "Bar"}}
```

<details>
  <summary>Підказка</summary>

---
  Найпростійший спосіб реалізувати таке завдення - використати метод масиву [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), який дозволяє виконати перебір всіх елементів масиву і сформувати довільне кінцеве значення.

</details>