function start() {
  let imgs = Array.from(document.querySelectorAll('#imgContainer img'))

  console.log()
  let drop1 = document.getElementById('dropBox1');
  let drop2 = document.getElementById('dropBox2');
  let drop3 = document.getElementById('dropBox3');

  console.log({drop1, drop2, drop3})

  imgs.forEach((img, index) => {
    console.log({index, img})
    imgs[index].addEventListener('dragstart', drag, false);
  })

    drop1.addEventListener('dragenter', function (e) {
      e.preventDefault();
    }, false);
    drop1.addEventListener('dragover', function (e) {
      e.preventDefault();
    }, false);
    drop1.addEventListener('drop', drop, false);

    drop2.addEventListener('dragenter', function (e) {
      e.preventDefault();
    }, false);
    drop2.addEventListener('dragover', function (e) {
      e.preventDefault();
    }, false);
    drop2.addEventListener('drop', drop, false);
  

    drop3.addEventListener('dragenter', function (e) {
      e.preventDefault();
    }, false);
    drop3.addEventListener('dragover', function (e) {
      e.preventDefault();
    }, false);
    drop3.addEventListener('drop', drop, false);
}

function drag(dragEvent) {
  console.log("Drag event", dragEvent.target.id)
  dragEvent.dataTransfer.setData('text', dragEvent.target.id);
}

function drop(dropEvent) {
  console.log("Drop event", dropEvent.target.id)
  dropEvent.preventDefault();
  let id = dropEvent.dataTransfer.getData('text');
  console.log({id})
  let img = document.getElementById(id);
  img.style.display = 'none';
  dropEvent.target.innerHTML = `<img src="${img.src}" height="400px" width="275px">`;
}

function restart() {
  window.location.reload();
}

start()