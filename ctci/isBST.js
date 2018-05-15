function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

const inorder_traversal = (node, arr=[]) => {
  if (node.left !== null) {
    inorder_traversal(node.left, arr);
  }
  arr.push(node.data);
  if (node.right !== null) {
    inorder_traversal(node.right, arr);
  }
  return arr;
}

const check_binary_search_tree = (tree) => {
  const btree = inorder_traversal(tree);

  for (let i = 0; i < btree.length - 1; i++) {
    const curr = btree[i];
    const next = btree[i + 1];
    if (curr > next) {
      return false;
    }
  }

  return true;
}


export {
  Node,
  check_binary_search_tree,
  inorder_traversal
}