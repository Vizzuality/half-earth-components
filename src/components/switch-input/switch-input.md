
```js
initialState = {
  checked: true
};
<SwitchInput
  id="myid"
  onChange={(value) => setState(state => ({checked: !state.checked}))}
  label="Toggle layer"
  checked={state.checked}
  disabled={false}
/>
```
