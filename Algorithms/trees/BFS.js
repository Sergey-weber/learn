//BFS поиск в ширину
Tree.prototype.traverse = function (callback) {
  var queue = [this];
  var n;

  while (queue.length > 0) {

    n = queue.shift();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = 0; i < n.children.length; i++) {
      queue.push(n.children[i]);
    }
  }
};