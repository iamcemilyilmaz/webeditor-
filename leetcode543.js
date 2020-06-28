inOrder() {
    if (this.root === null) return null;
    const nodeList = [];
    const traverse = function(current) {
      if (current.left) traverse(current.left);
      nodeList.push(current.data);
      if (current.right) traverse(current.right);
    };
    traverse(this.root);
    return nodeList;
  };