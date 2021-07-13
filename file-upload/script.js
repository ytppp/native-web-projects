const MAX_FILE_SIZE = 10 * 1024 * 1024;
const dragArea = document.querySelector('#drag-area');

dragArea.addEventListener('dragenter', (e) => {
  // 只要有元素被拖动到放置目标上，就会触发 dragenter 事件
  console.log('dragenter');
});

dragArea.addEventListener('dragover', (e) => {
  // 在被拖动的元素还在放置目标的范围内移动时，就会持续触发该事件
  console.log('dragover');
  e.preventDefault(); // 阻止默认行为，这里。对于浏览器可以查看的文件，会查看文件处理；对于浏览器不可查看的文件，浏览器会默认下载
});

dragArea.addEventListener('dragleave', (e) => {
  // 如果元素被拖出了放置目标，dragover 事件不再发生，但会触发 dragleave 事件
  console.log('dragleave');
});

dragArea.addEventListener('drop', (e) => {
  // 如果元素被放到了放置目标中，则会触发 drop 事件而不是 dragleave 事件
  console.log('drop');
  e.preventDefault(); // 阻止默认行为，这里。对于浏览器可以查看的文件，会查看文件处理；对于浏览器不可查看的文件，浏览器会默认下载
  const file = e.dataTransfer.files[0]; // 获取到第一个上传的文件对象

  if (!file) return;
  if (file.size > MAX_FILE_SIZE) {
    return alert('文件大小不能超过10M');
  }
  console.log('file', file);
});
