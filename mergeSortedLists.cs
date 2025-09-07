
public class ListNode {
     public int val;
     public ListNode next;
     public ListNode(int val=0, ListNode next=null) {
         this.val = val;
         this.next = next;
     }
 }

public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        ListNode currNode1 = new ListNode(list1.val, list1.next);
        ListNode currNode2 = new ListNode(list2.val, list2.next);


        ListNode newList = new ListNode();
        ListNode newListTail = newList;


        bool moveOn = true;

        do
        {

            if (currNode1.val <= currNode2.val)
            {

                //put smaller value in newList
                newListTail.next = currNode1;

                //move new list tail so that you can continue adding to end of new list

                newListTail = newListTail.next;


                //check if we got to end of list
                if (currNode1.next == null)
                {
                    newListTail.next = currNode2;
                    moveOn = false;
                }
                else
                {
                    //move further with currNode 1 so that you can compare next value 
                    currNode1 = currNode1.next;
                }

            }
            else
            {

                //put smaller value in newList
                newListTail.next = currNode2;

                //move new list tail so that you can continue adding to end of new list

                newListTail = newListTail.next;


                //check if we got to end of list
                if (currNode2.next == null)
                {
                    newListTail.next = currNode1;
                    moveOn = false;
                }
                else
                {
                    //move further with currNode 1 so that you can compare next value 
                    currNode2 = currNode2.next;
                }

            }

        } while (moveOn);

        return newList.next;


    }
    
    
    

}

static void Main(string[] args)
{
    MergeTwoLists(new ListNode(),
        new ListNode();
}

