
```js
initialState = { open: false };
const toggleModalOpen = (slug) => {
  setState((state) => {
    return { open: !state.open }
  });
};
const Button = require('../button').default;
<React.Fragment>
  <Button onClick={toggleModalOpen} >
    Open it
  </Button>
  <Modal
    isOpen={state.open}
    onRequestClose={toggleModalOpen}
  >
    <h2>Your modal content here</h2>
  </Modal>
</React.Fragment>
```

