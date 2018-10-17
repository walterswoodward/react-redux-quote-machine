export const NEXT_QUOTE = 'NEXT_QUOTE';

export const nextQuoteAction = function(quotes) {
  var next = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    type: NEXT_QUOTE,
    payload: next
  };
};