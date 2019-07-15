var editor = CodeMirror(document.getElementById('code'), {
  value: 'function myScript(){return 100;}\n',
  mode: 'javascript',
  theme: 'material',
  extraKeys: {
    'Ctrl-Enter': evaluate
  }
})

function loadFile(e) {
  return new Promise(resolve => {
    var file = e.target.files[0]
    const type = file.type
    var reader = new FileReader()
    reader.readAsText(file)
    reader.onload = e => {
      resolve(e.target.result)
    }
  })
}

function evaluate() {
  eval(editor.getValue())
}

function openFile(evt) {
  loadFile(evt).then(res => {
    console.log(res)
    editor.setValue(res)
  })
}

document.getElementById('evaluate').addEventListener('click', evaluate)
document.getElementById('fileInput').addEventListener('change', openFile)
