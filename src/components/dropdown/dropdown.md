```js
const options = [{slug: 'all-taxa', label: 'all taxa'}, {slug: 'mammals', label: 'mammals'}, {slug: 'hummingbirds', label: 'hummingbirds'}];
initialState = { selected: {slug: 'all-taxa', label: 'all taxa'} };
const handleSelectionChange = option => {
  setState((state) => {
    return { selected: option }
  });
};
<div style={{fontFamily: '"PierSans", sans-serif'}}>For
<Dropdown options={options} selected={state.selected} onSelect={handleSelectionChange} />
this area has high richness and high rarity</div>
```

```js
const options = [{slug: 'intro', label: 'intro'}, {slug: 'global', label: 'global'}, {slug: 'regional', label: 'regional'}];
const handleSelectionChange = option => {
  setState((state) => {
    return { selected: option }
  });
};
initialState = {selected: {slug: 'global', label: 'global'} };
const theme = require('./themes/block-theme.scss');
<div style={{backgroundColor: '#0a212e', padding: '30px', height: '200px'}}>
  <Dropdown options={options} selected={state.selected} onSelect={handleSelectionChange} theme={theme} dark/>
</div>
```
