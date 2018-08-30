
```js
initialState = {
  checked: true
};
const styles = require('./card-styles.scss');
const SwitchInput = require('../switch-input').default;
<Card title='Card' theme={styles} subtitle='sub title'>
  <SwitchInput
    onChange={(value) => setState(state => ({checked: !state.checked}))}
    label="Toggle layer"
    checked={state.checked}
    disabled={false}
  />
</Card>
```
