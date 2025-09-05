### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   ans:
   getElementById: is used to get precise selection of a single element by its unique ID
   getElementsByClassName: is used to get a live collection of elements sharing a specific class
   querySelector / querySelectorAll: to get the first element matching a CSS selector use querySelector and to get all elements matching a CSS selector use querySelectorAll.

2. How do you **create and insert a new element into the DOM**?
   ans:
   There are two steps of creating and inserting a new element into the DOM.

1) first step is to create a new element using document.createElement() and passing the tag name as a string
2) second step is to insert the element inton DOM.
   Example:
   parentNode.appendChild(newChild): Appends newChild as the last child of parentNode

3. What is **Event Bubbling** and how does it work?
   ans:
   Event bubbling is a DOM event propagation mechanism where an event first triggers on the the target element and then goes up through its ancestors in the DOM tree, executing event handlers on each parent element in sequence until it reaches the root of the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   ans:Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.It is useful because it helps you write a cleaner code and rather than using multiple eventListeners on every child, we can write eventListener in their parent and as long as any new child are part of the parent element it will work.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   ans:
   preventDefault() and stopPropagation() serve different purpose in handling event behavior.
   preventDefault() :This method prevents the default action that would happen when an event is triggered
   stopPropagation():This method prevents the event from propagating further in the DOM hierarchy, either during the capturing phase or the bubbling phase.
