export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  let node;
  const head = { value: array[0], next: null };
  let pnode = head; // pnode变量用来保存前一个节点
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index < array.length; index++) {
    node = { value: array[index], next: null };
    pnode.next = node; // 将前一个节点的next指向当前节点
    pnode = node; // 将node赋值给pnode
  }
  return head;
}
