cardArray.sort(() => 0.5 - Math.random());

OR

cardArray.sort((first, second) => {
  const randomValue = 0.5 - Math.random();
  return randomValue;
}); 

The comparison returns:

A negative number if the first element should come before the second.
A positive number if the first element should come after the second.
Zero if the two elements are equal in terms of order. 

so if it gets a -ve value first will not replace
if it gets a +ve value first will replace



The issue I was encountering wass due to the way you're updating obj.score in the flipCard function. The createBoard function wass executed before any card is clicked, so the initial value of obj.score is 0 and stayed that way until flipCard is triggered by a user click.

Since the score is only updated inside flipCard, the score increment happens after the board has been created. That's why when createBoard runs initially, obj.score remains unchanged.

Solution
To address this, you should either:

Call createBoard Again After Score Increases: Once the score is updated in flipCard, you can recreate the board with the updated number of entries. This would involve clearing the grid and rerunning createBoard.

Issue:
When you add more cards to the board after the first set, they do not flip back to the blank image if the pair is wrong. This is because the new cards may not be correctly associated with their data-id and event listeners, especially when they are dynamically added after the initial board setup.

Solution:
The core issue is not with how the event listeners are attached or how the cards are set up initially but rather with how the cards are managed when the board is expanded. We need to ensure that the new cards get their correct attributes and event listeners, and we need to properly reset the state when the board expands.