import { Node, inorder_traversal, check_binary_search_tree } from '../isBST'

describe('BST', () => {
  test('check inorder traversal', () => {
    const bst = new Node(10);
    bst.left = new Node(5);
    bst.left.left = new Node(1);

    bst.left.right = new Node(7);

    bst.right = new Node(15);
    bst.right.left = new Node(12);
    bst.right.right = new Node(20);


    expect(inorder_traversal(bst)).toEqual([1, 5, 7, 10, 12, 15, 20]);

  });
  test('is valid bst', () => {


    const bst = new Node(10);
    bst.left = new Node(5);
    bst.left.left = new Node(1);

    bst.left.right = new Node(7);

    bst.right = new Node(15);
    bst.right.left = new Node(12);
    bst.right.right = new Node(20);

    const actual = check_binary_search_tree(bst);
    expect(actual).toEqual(true);
  });

  test('is invalid bst', () => {

    const bst = new Node(10);
    bst.left = new Node(5);
    bst.left.left = new Node(1);

    bst.left.right = new Node(25);

    bst.right = new Node(15);
    bst.right.left = new Node(12);
    bst.right.right = new Node(20);

    const actual = check_binary_search_tree(bst);
    expect(actual).toEqual(false);
  });


});