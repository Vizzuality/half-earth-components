```js
const theme = require('./button-theme.scss');
const Icon = require('components/icon');
const onClick = () => { console.info('hello button') };
<div style={{display: 'flex'}}>
  <Button
    theme={theme}
    onClick={onClick}
    primary
  >
    Submit Button
  </Button>
  <Button
    theme={theme}
    onClick={onClick}
    secondary
  >
    Be careful
  </Button>
</div>
```
