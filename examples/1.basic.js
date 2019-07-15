var vis = window.vis

// создаем массив с вершинами
var nodes = [
  { id: 1, label: 'Node 1' },
  { id: 2, label: 'Node 2' },
  { id: 3, label: 'Node 3' },
  { id: 4, label: 'Node 4' },
  { id: 5, label: 'Node 5' }
]

// создаем массив с ребрами
var edges = [
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 3 }
]

var container = document.getElementById('networkExample')
var data = {
  nodes: nodes,
  edges: edges
}
var options = {}
new vis.Network(container, data, options)
