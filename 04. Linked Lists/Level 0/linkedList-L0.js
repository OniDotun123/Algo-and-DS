

// Before diving into creating the Linked List, we start with a series of warmups.
//
// Use the following code as boilerplate:
//
function LinkedListNode(data, next) {
  this.data = data || null;
  this.next = next || null;
}

var head = null;
var tail = null;

// A Linked List node is nothing more than a structure with some data and a reference
//  to the next node.  It has no direct way to access any previous nodes.  That's what
//  make it a favorite among interviewers.
//
// There are 3 main concerns with Linked Lists:
//
//   HEAD  :   the first node
//   TAIL  :   the last node
//   MIDDLE:   everything else
//
// If an add or remove operation can use the HEAD or TAIL then we can gain special
//  optimzations by not having to find the previous node as we must with any middle
//  operation.
//
// For any middle node operation, we must locate the previous node first.
//
// As such, we can visual a Linked List like this:
//
// SECTION:            HEAD             MIDDLE           MIDDLE           TAIL
// STRUCTURE: NULL -> [Data, Next] --> [Data, Next] --> [Data, Next] --> [Data, Next] -> NULL
// META:                    (Prev)           (Prev)           (Prev)
// META (Index):      0                1                2                3
//
//
// For any middle or tail node, there's always a previous node but there's no way to
//  directly know what it is, it has to be _found_.
//

// Complete the following warmups:
//
//   * DO NOTE COPY AND PASTE any code.  Complete each warmup by writing the necessary code
//      (again if you already wrote it before)
//
// EASY
//
//   1. [x]  Write a function that takes data as input and returns a new instance of
//            LinkedListNode using that data
//   2. [x]  Extend that function to set the head to the new node if head is null.
//   3. [x]  Write a function that takes data as input and always adds the new node
//            at the beginning of the list and makes it the new head.  If there isn't
//            already a head, the new node becomes the head.
//   4. [x]  Write a function that takes data as input and always adds the new node
//            immediately after the head.  If there isn't already a head, the new node
//            becomes the head.
//   5. [x]  Extend all previous functions to make the very first node added to both
//            the head and the tail -- keeping in mind that only the last node in the
//            list should ever be the tail (even if there's only 1 node). //**EXTENDED INITIAL FUNCTION**//
//   6. [x]  Write a function that takes data as input and adds the new node after
//            the current tail.  If there isn't a tail, then make it the first node
//            in the list.
//   7. [x]  Write a function that removes the current head.
//   8. [x]  Write a function that removes the node after the current head.
//         [ ] What happens if that was the tail?  Make it do the right thing.
//
// MEDIUM
//
//   9. [x] Write a function that takes head (don't call it head) and an index as input
//           and returns the node at that position in the linked list, assuming head
//           is position 0 and head.next is position 1, etc.
//  10. [ ] Extend the previous function to return the previous node (if any).
//  11. [x] Write a function that removes the current tail.  What node becomes the new
//           tail?  Make it do the right thing.
//
// HARD
//
//  12. [ ] Write a function that takes head (don't call it head), index, and data as
//           input and inserts a new node at that position.
//         [ ] Make sure it handles the special cases if index is head or would be the
//              node after tail.
//  13. [ ] Write a function that can remove any node in the list.
//         [ ] Make sure it handles the special cases if index is head or tail
//  14. [ ] Write a function that takes head (don't call it head) as input and returns
//       and array of just the data in the linked list in the same order of nodes in
//       the list.
//


function createNode(data){
let node = new LinkedListNode(data);
 if( head == null){
   head = node;  
 }elseif(tail == null){
  let tail = new LinkedListNode(data)
  tail = tail
 }else{
   return node;
 }
}


// new node
// node.next = head.next
// head.next = node
//
//   { 1 } -> { 2 } -> ...
//
// 1: New Node
//
//   { x }    { 1 } -> { 2 } -> ...
//
// 2: node.next = head.next
//
//              H
//   { x }    { 1 } -> { 2 } -> ...
//       +---------------^
//
// 3: head.next = node
//
//     H
//   { 1 } -> { x } -> { 2 } -> ...
//
//
// If you skip #2
//
//      H
//    { 1 } -> { x }    |     { 2 } -> ...
//

function insertAfterHead(data){
  let node = new LinkedListNode(data);
  if(node.head == null && node.tail == null){
    head = node 
    tail = node 
  }elseif(head == tail){
    node.next = head.next;
    head.next = node;
    tail = node;
  }else{
    node.next = head.next
    head.next = node; 
  }
}







// new node
// tail.next = node
// tail = node;


//
//    H  T
//    null
//
// 1: create first node for list
//      H  T
//    { fist }
//
// else
//      H            T
//    { first } -> { other }
//
// else
//      H                          T
//    { first } -> { middle } -> { last }
//







function addNodeToTail(data){
  let node = new LinkedListNode(data); 
  if(head == null && tail == null){
    node = head; 
    node = tail;
  }else{
 tail.next = node;
 tail = node;
  }
}

function removeCurrentHead(node){
  if(node.head =! null){
    new node 
    node.next = head 
    head = node
  }
  

// if head and tail aren't null and are the same
//  ...
// else aren't null
//  ...
// else          <are null>
//  do nothing
//

// FROM:
//
//      H                          T
//    { first } -> { middle } -> { last }
//
// TO:
//       H             T
//     { middle } -> { last }
//


}

function removeNodeAfterCurrentHead(){
  if(head.next != null ){
    tempNode = head.next;
    head = tempNode.next;
  }else{
    let node = new LinkedListNode(); 
    node = head;
    node = tail;
  }
}

function returnNodePosition(first,index_input){
    if(first.next === index_input){
      return first.next ;  
    }else{
      first = first.next;
    }
}






function removeCurrentTail(){
  if(node.next.next.next == null){
    tail = node.next
    tail.next = null
  }
}





