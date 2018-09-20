
```js
initialState = {
  checked: true
};
<div>
  <div style={{padding: '10px'}}>
    <SwitchInput
      id="myid"
      onChange={(value) => setState(state => ({checked: !state.checked}))}
      label="Toggle layer"
      checked={state.checked}
      disabled={false}
    />
  </div>
  <div style={{backgroundColor: '#0a212e', padding: '10px'}}>
    <SwitchInput
      id="my2id"
      onChange={(value) => setState(state => ({checked: !state.checked}))}
      label="Toggle layer"
      checked={state.checked}
      disabled={false}
      dark
    />
  </div>
</div>
```
