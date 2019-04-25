* Specification vs Implementation
  * Specification is "what things should do"
  * implementation is "how things actually do it"
  * an array and a list both satisfy this specification of
    being able to do all these things:
    * set a value at an index
    * get a value at an index
    * remove a value at an index
    * insert a value at an index
  * one way to build a List is out of an array
  * another way is to build a LinkedList

* Arrays
  * fixed-size never changing
  * in other languages arrays are created where you tell them
    how large they should be
  * in JavaScript we don't really have access to true "array-like"
    arrays. JavaScript is a "high-level" language that keeps us
    away from deep-down internals like this
* Lists or "ArrayLists"
  * a List built out of an array
  * it creates a fixed-size never changing array under the hood
  * it has internal methods for shifting elements around when
    things are inserted or removed in the middle of the array
  * O(1) - append()
  * O(N) - insertAtIndex()
  * O(N) - removeAtIndex()
  * O(N) - private internal grow() function that scales the
           internal array whenever we add enough data to fill
           the thing up
 * LinkedList

# Linked List Common Problems
* detect cycle (is the list a loop?)
