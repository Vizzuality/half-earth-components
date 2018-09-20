```js
initialState = { checked: true };
const handleCheckboxClick = () => {
  setState((state) => {
    return { checked: !state.checked }
  });
};
<Checkbox
  id={'id'}
  label={state.checked ? 'uncheck me' : 'check me'}
  checked={state.checked}
  onChange={handleCheckboxClick}
/>
```
