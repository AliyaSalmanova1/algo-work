var swapPairs = function(head) {

  let newHead = null;
  let prev = null;
  let curr = head;

  while (curr && curr.next){
    let next = curr.next.next

    let saved = curr.next 
    curr.next = curr.next.next
    saved.next = curr;

    if (prev){
      prev.next = saved;
      
    } else{
      newHead = saved;

    }

    prev = curr;
    curr = curr.next;

  }

  return newHead;
    
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
};

console.log(swapPairs(head))