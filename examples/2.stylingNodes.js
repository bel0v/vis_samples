var nodes = [
  // API для настройки цвета и формы
  { id: 1, label: 'html цвет', color: 'lime', shape: 'circle' },
  { id: 2, label: 'rgb цвет', color: 'rgb(255,168,7)', shape: 'box' },
  { id: 3, label: 'hex цвет', color: '#7BE141', shape: 'diamond' },
  { id: 4, label: 'rgba цвет', color: 'rgba(97,195,238,0.5)', shape: 'dot' },
  {
    id: 5,
    label: 'объект с описанием цветов',
    color: {
      background: '#F03967',
      border: '#713E7F',
      highlight: { background: 'red', border: 'black', shape: 'star' }
    }
  },
  {
    id: 6,
    font: { size: 30 },
    size: 40,
    label: 'Размеры',
    shape: 'diamond'
  }
]

var edges = [
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 2, to: 6 },
  { from: 4, to: 7 }
]

var container = document.getElementById('networkExample')
var data = {
  nodes: nodes,
  edges: edges
}
var options = {}

new vis.Network(container, data, options)
