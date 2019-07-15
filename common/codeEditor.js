var editor = CodeMirror(document.getElementById('code'), {
  mode: 'javascript',
  theme: 'mdn-like',
  lineNumbers: true,
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
    evaluate()
  })
}

document.getElementById('evaluate').addEventListener('click', evaluate)
document.getElementById('fileInput').addEventListener('change', openFile)
