import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export const rootReducer = combineReducers({
  quotes: QuotesReducer,
  currentQuote: CurrentQuoteReducer
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

function QuotesReducer() {
  return [
    {
      key: 0,
      content:
        "You've been down there, Neo. You already know that road. You know exactly where it ends. And I know that's not where you want to be.",
      author: "Trinity"
    },
    {
      key: 1,
      content:
        "The present is theirs; the future, for which I really worked, is mine.",
      author: "Nicola Tesla"
    },
    {
      key: 2,
      content:
        "Take positive care of your mind, and it would surely take positive care of your life.",
      author: "Edmond Mbiaka"
    },
    {
      key: 3,
      content:
        "I don't care if it works on your machine! We are not shipping your machine!",
      author: "Vidiu Platon"
    },
    {
      key: 4,
      content:
        "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
      author: "Christopher Thompson"
    },
    {
      key: 5,
      content:
        "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
      author: "Alan Kay"
    },
    {
      key: 6,
      content:
        "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
      author: "Seymour Cray"
    },
    {
      key: 7,
      content:
        "On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",
      author: "Charles Babbage"
    },
    {
      key: 8,
      content:
        "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
      author: "Linus Torvalds"
    },
    {
      key: 9,
      content:
        "Learning to code is useful no matter what your career ambitions are.",
      author: "Arianna Huffington"
    },
    {
      key: 10,
      content: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde"
    },
    {
      key: 11,
      content:
        "You start at your most popular and least capable, and you end at your most capable and least popular.",
      author: "Tony Blair"
    },
    {
      key: 12,
      content:
        "Grant me the following in the name of our Lord Jesus Christ. Like a leper rotting in flesh, let all avoid me. Like a cripple without limbs, let me not move freely. Remove my cheeks, that tears may not roll down them. Crush my lips and tongue, that I may not sin with them. Pull out my nails, that I may grasp nothing. Let my shoulders and back be bent, that I may carry nothing. Like a man with a tumor in his head let me lack judgment. Ravage my body sworn to chastity leave me with no pride, and have me live in shame. Let no one pray for me. But only the grace of the Lord Jesus Christ have mercy on me.",
      author: "Sang-hyeon"
    }
  ];
}

function nextQuoteAction() {
  const quotes = QuotesReducer().slice();
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function CurrentQuoteReducer(state = nextQuoteAction(), action) {
  switch (action.type) {
    case "NEXT_QUOTE":
      return action.payload;
    default:
      return state;
  }
  return state;
}
