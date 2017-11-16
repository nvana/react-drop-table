# react-drop-table
React component that allow file management

## API
| Property     | Description                                                                                                                         | Type     | Default |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| data         | data passed to table                                                                                                                | `JSON`     | -       |
| header       | Pass this JSON to display specific keys of objects `[{ name: "email", label: "Email" }]`, if null, each keys of objects are displayed | `JSON`     | -       |
| onDragAction | Function called when drag is performed                                                                                              | `Function(idDrag, idDrop)` |         |


## Example 
![react-drop-table](https://github.com/nvana/react-drop-table/blob/master/docs/example-table.png)
