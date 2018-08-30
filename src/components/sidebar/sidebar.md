
```js
initialState = { visible: false };
const handleSidebarToggle = (slug) => {
  setState((state) => {
    return { visible: !state.visible }
  });
};
<Sidebar visible={state.visible} onToggle={handleSidebarToggle}>
  <div>
    My sidebar content
  </div>
</Sidebar>
```
