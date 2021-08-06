const socket = io.connect("https://usure.one");

socket.on('userCount', userCount => {
let doc = document.getElementById('connectionCount');
  if(doc) {
    doc.innerHTML = userCount;
  }
})
