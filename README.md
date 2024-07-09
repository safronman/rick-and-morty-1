
# Rick and Morty мастер класс

## Материалы
- [Методичка](https://safronman.gitbook.io/rick-and-morty-cra)
- [Итоговый результат](https://safronman.github.io/rick-and-morty-CRA/)


## Примеры из интернета

- [Интересный полностраничный пример](https://leonidasesteban.github.io/rick-morty-vanilla/)
- [Подгрузка по скроллу / аккордион](https://rick-and-morty-enes.vercel.app/)
- [Лучший пример в интернете (фильтра, страницы)](https://react-projects-psi.vercel.app/)
  - [Страница как делать](https://www.freecodecamp.org/news/react-js-project-build-a-rick-and-morty-character-wiki/)
- [Прикольный дизайн, много фильтров](https://rick-and-mortyinfo.vercel.app/)
  - [github](https://github.com/DEATHTINYZ/rickandmortyinfo)


## Дополнительные задачи, которыми можно расширить функционал
- [Прикрутить для поиска debounce](https://usehooks-ts.com/react-hook/use-debounce-value)
- Сделать фильтрации (как в примерах)
- Залить приложение на `github pages` или `vercel`
- На странице `Characters` показывать пользователю текущую страницу
  - **1 вариант.** Использовать для решения данной задачи `searchParams`, записывать страницу в квери параметры
  - **2 вариант.**  Достать из респонса url предыдущей страниц, обрезать его и добавить единицу
```js 
function getLastPageNumber(url) {
    if (url === null) {
        return 0
    }
    const match = url.match(/page=(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
}


 const fetchData = (url) => {
        axios.get(url).then((res) => {
            setCharacters(res.data.results);
            setInfo(res.data.info);
            let prevPage = getLastPageNumber(res.data.info.prev)
            console.log('currentPage', prevPage + 1)
        })
    };
```

- Сделать аккордион. Показать / спрятать персонажей на странице `location`

```tsx
const [isShowCharacters, setIsShowCharacters] = useState(false)

{isShowCharacters && l.residents.map((url, index) => {
	const parts = url.split('/');
	const id = parts[parts.length - 1];
	return (
		<div>
			<Link to={`/characters/${id}`}>{`житель - ${index}`}</Link>
		</div>
	)
})}
```
