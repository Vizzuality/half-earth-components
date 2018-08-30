
```js
initialState = {
  checked: true
};
<SwitchInput
  onChange={(value) => setState(state => ({checked: !state.checked}))}
  label="Toggle layer"
  checked={state.checked}
  disabled={false}
/>
```
