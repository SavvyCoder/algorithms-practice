class Node {
    constructor(val){
        this.val = val;
        this.next= null;
    }
    
    static collectNodes(node){
    if(!node.next){
        return node.val;
    }
    else 
        return node.val + " " + this.collectNodes(node.next);
}
}


class LinkedList {
    constructor(){
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }
    
    
    push(val){
        if(this.head === null){
            this.head = new Node(val);
            this.tail = this.head; 
            this.length++; 
        }
        else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next; 
            this.length++;
        }
    }
    
    pop(){
        let newTail = this.get(this.length-2);
        let oldTail = this.tail;
        this.tail = newTail;
        newTail.next = null; 
        this.length--;
        return oldTail.val; 
    }
    shift(){
        let deleted_node = this.head; 
        this.head = this.head.next; 
        this.length--;
        return deleted_node.val; 
        
    }
    unshift(val){
        let old_head = this.head; 
        this.head = new Node(val);
        this.head.next = old_head; 
        this.length++;
    }
    get(index){
        if(index + 1 > this.length){
            return -1; 
        }
        let currentNode;
        for(let i = 0; i <= index; i++){
            if(i === 0){
              currentNode = this.head; 
            }
            else {
                currentNode = currentNode.next; 
            }
        }
        return currentNode; 
    }
    set(index, val){
        let node = this.get(index);
        node.val = val; 
    }
    insert(index, val){
        let node = this.get(index);
        if(node === this.head){
            this.head = new Node(val);
            this.head.next = node; 
        }
        else if(node === this.tail){
            this.tail = new Node(val);
            node.next = this.tail; 
        }
        else{
            let prevNode = this.get(index-1); 
            prevNode.next = new Node(val);
            prevNode.next.next = node; 
        }
        this.length++;
    }
    remove(index){
        let removedNode = this.get(index);
        if(removedNode === this.head){
            this.shift();
        }
        else if(removedNode === this.tail){
            this.pop();
        }
        else{
            let prevNode = this.get(index - 1); 
            prevNode.next = removedNode.next; 
            removedNode.next = null;
            return removedNode.val; 
        }
        this.length--; 
    }
    reverse(){
        let currentNode;
        let prevNode; 
        for(let i = this.length-1; i > 0; i--){
            currentNode = this.get(i);
            prevNode = this.get(i-1); 
            currentNode.next = prevNode;
        }
        let newTail = this.head;
        let newHead = this.tail;
        newTail.next = null; 
        this.head = newHead;
        this.tail = newTail;
    }
    display(){
        
        console.log(Node.collectNodes(this.head));

    }
    
}

// let link_list = new LinkedList(); 

// link_list.push("taco");
// link_list.push("icecream");
// link_list.push("banana");
// link_list.push("takoyaki");
// link_list.push("lingling");
// link_list.push("binbong");
// link_list.push("astronomy");

// link_list.display();
// link_list.reverse();
// link_list.display();
// console.log(link_list.pop());
// link_list.display();


//console.log(link_list.pop());
//link_list.display();

//STACK

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    push(val){
        if(this.first === null){
            this.first = new Node(val);
            this.last = this.first; 
        } 
        else {
            let second = this.first; 
            this.first = new Node(val);
            this.first.next = second; 
        }
        this.size++; 
        
    }
    pop(){
        let removed_node = this.first; 
        this.first = removed_node.next;
        this.size--; 
        return removed_node.val; 
    }
    display(){
        console.log(Node.collectNodes(this.first));
    }
}

// let testStack = new Stack();
// testStack.push("first");
// testStack.push("second");
// testStack.push("third");
// testStack.display();
// testStack.pop();
// testStack.display();

class Queue {
    constructor(){
        this.first = null; 
        this.last = null; 
        this.size = null; 
    }
    
    enqueue(val){
        if(this.first === null){
            this.first = new Node(val);
            this.last = this.first; 
        }
        else{
            let old_last = this.last;
            this.last = new Node(val);
            old_last.next = this.last; 
        }
        this.size++;
    }
    
    enqueue_node(node){
        if(!this.first){
            this.first = node;
            this.last = this.first; 
        }
        else{
            let old_last = this.last;
            this.last = node;
            old_last.next = this.last; 
        }
        this.size++;
    }
    
    dequeue(){
        let removed_node = this.first; 
        this.first = removed_node.next; 
        this.size--;
        return removed_node; 
    }
    display(){
        console.log(Node.collectNodes(this.first));
    }
}

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// q.display();
// console.log(q.dequeue());
// q.display(); 

class TreeNode {
    constructor(val){
        this.val = val; 
        this.left = null;
        this.right = null;
    }
    
    static collectTreeNodes(root){
        
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        if(this.root === null){
            this.root = new TreeNode(val);
        }
        else {
            let current_node = this.root; 
            while(1){
                if(current_node.val > val){
                    if(current_node.left){
                        current_node = current_node.left; 
                        continue; 
                    }
                    else {
                        current_node.left = new Node(val);
                        return 1; 
                    }
                }
                else if (current_node.val === val){
                    return -1;
                }
                else {
                    if(current_node.right){
                        current_node = current_node.right; 
                        continue;
                    }
                    else {
                        current_node.right = new Node(val);
                        return 1; 
                    }
                }
            }
            
        }
    }
    
    traverse(){
      let queue = new Queue; 
      let tree_values = [];
      let node = null; 
      queue.enqueue_node(this.root);
      while(queue.first){
          queue.display();
          node = queue.dequeue();
          tree_values.push(node.val);
          if(node.left){
              queue.enqueue_node(node.left);
          }
          if(node.right){
              queue.enqueue_node(node.right);
          }
      }
      return tree_values;
       
    }
    
    display(){
        let tree_values = this.traverse();
        console.log(tree_values);
    }
}

// let bst = new BinarySearchTree();
// bst.insert(6);
// bst.insert(2);
// bst.insert(10);
// bst.insert(16);
// bst.insert(23);
// bst.insert(11);
// bst.insert(93);
// bst.insert(56);
// bst.display();

class BinaryHeap{
    constructor(){
        this.values = []; 
    }
    push(val){
        this.values.push(val);
        let index = this.values.length - 1;
        let parent = 0;
        let child = 0; 
        while(index > 0){
            let parent_index = Math.floor((index-1)/2);
            parent = this.values[parent_index];
            child = this.values[index];
            if(parent < child){
                this.values[parent_index] = child;
                this.values[index] = parent; 
                index = parent_index;
            }
            else {
                index = 0; 
            }
        }
  
    }
    remove(){
        if(this.values.length <= 1){
            if(this.values.length === 0){
                return -1; 
            }
            return this.values.pop();
        }
        let removed_value = this.values[0]; 
        this.values[0] = this.values.pop();
        let sink_value = this.values[0];
        let sink_value_index = 0;
        let child_right = this.values[2];
        let child_right_index = 2;
        let child_left = this.values[1];
        let child_left_index = 1;
        while((child_right > sink_value) || (child_left > sink_value)){
            
            let largest_child_index = (child_left > child_right ? child_left_index : child_right_index);
            
            this.values[sink_value_index] = this.values[largest_child_index];
            this.values[largest_child_index] = sink_value; 
            sink_value_index = largest_child_index; 
            
            child_left_index = (2*sink_value_index) + 1;
            child_right_index = (2*sink_value_index) + 2; 
            child_left = (this.values[child_left_index] ? this.values[child_left_index] : Number.NEGATIVE_INFINITY);
            child_right = (this.values[child_right_index] ? this.values[child_right_index] : Number.NEGATIVE_INFINITY);
            
        }
        
    }
}

// let b = new BinaryHeap();
// b.push(10);
// b.push(43);
// b.push(12);
// b.push(54);
// b.push(234);
// b.push(32);
// console.log(b.values);
// b.remove();
// console.log(b.values);

class PriorityNode {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = []; 
    }
    push(val, priority){
        this.values.push(new PriorityNode(val, priority));
        let index = this.values.length - 1;
        let parent = 0;
        let child = 0; 
        while(index > 0){
            let parent_index = Math.floor((index-1)/2);
            parent = this.values[parent_index];
            child = this.values[index];
            if(parent.priority > child.priority){
                this.values[parent_index] = child;
                this.values[index] = parent; 
                index = parent_index;
            }
            else {
                index = 0; 
            }
        }
  
    }
    remove(){
        if(this.values.length <= 1){
            if(this.values.length === 0){
                return -1; 
            }
            return this.values.pop();
        }
        //let removed_value = this.values[0]; 
        this.values[0] = this.values.pop();
        let sink_value = this.values[0];
        let sink_value_index = 0;
        let child_right = this.values[2];
        let child_right_index = 2;
        let child_left = this.values[1];
        let child_left_index = 1;
        while((child_right.priority < sink_value.priority) || (child_left.priority < sink_value.priority)){
            
            let highest_priority_child_index = (child_left.priority <= child_right.priority ? child_left_index : child_right_index);
            
            this.values[sink_value_index] = this.values[highest_priority_child_index];
            this.values[highest_priority_child_index] = sink_value; 
            sink_value_index = highest_priority_child_index; 
            
            child_left_index = (2*sink_value_index) + 1;
            child_right_index = (2*sink_value_index) + 2; 
            child_left = (this.values[child_left_index] ? this.values[child_left_index] : Number.POSITIVE_INFINITY);
            child_right = (this.values[child_right_index] ? this.values[child_right_index] : Number.POSITIVE_INFINITY);
            
        }
        
    }
}

let pq = new PriorityQueue();
pq.push("Jason", 5);
pq.push("Anna", 3);
pq.push("John", 6);
pq.push("Kimberly", 2);
pq.push("Kate", 1);
pq.push("Elizabeth", 3);
pq.push("David", 7);
pq.push("Nathan", 2);
pq.push("Carlos", 4);
console.log(pq);
pq.remove();
console.log(pq);