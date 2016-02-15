Remember that an Array is a fixed length of continguous memory.
What if you have more data than you predicted?
You can't go outside the bounds of the initial declaration because the computer might have already used the bits next to the Array for something else.
What you would have to do is declare a new Array, make it larger this time and store the information.
This makes Arrays a pain to use when you don't know how much you are going to store.
Linked List is a solution to this problem, although it has some downsides as well.
Think of Linked List as a list of objects.
Each object has one job, to remember one other person that is after them.
This way, all objects are linked once you start from the very first object.
You can ask the first object where the next object is and so on.
Because Linked Lists aren't contiguous chunk of memory, we can't find elements as fast as an Array with an index.
However, we don't have to worry about predicting exactly how much data that we need.
