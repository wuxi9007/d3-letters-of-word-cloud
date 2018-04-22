var words = [
  {text: 'have', size: 1},
  {text: 'Oliver', size: 1},
  {text: 'say', size: 1},
  {text: 'said', size: 1},
  {text: 'bumble', size: 1, href: 'https://en.wikipedia.org/wiki/Beadle'},
  {text: 'will', size: 1},
  {text: 'Is', size: 2},
  {text: 'Mrs', size: 1, href: 'https://en.wikipedia.org/wiki/Mrs.'},
  {text: 'Mann', size: 1, href: 'http://educationcing.blogspot.nl/2012/06/oliver-twist-mrs-manns-character.html'},
  {text: 'Mr', size: 1},
  {text: 'very', size: 1},
  {text: 'child', size: 1},
  {text: 'all', size: 1},
  {text: 'boy', size: 1},
  {text: 'gentleman', size: 1, href: 'http://www.thefreelibrary.com/The+gentleman+in+the+white+waistcoat%3a+Dickens+and+metonymy.-a0154239625'},
  {text: 'great', size: 1},
  {text: 'take', size: 1},
  {text: 'but', size: 1},
  {text: 'beadle', size: 1},
  {text: 'twist', size: 1},
  {text: 'board', size: 1},
  {text: 'more', size: 1},
  {text: 'one', size: 1},
  {text: 'workhouse', size: 1},
  {text: 'parish', size: 1},
  {text: 'there', size: 1},
  {text: 'come', size: 1},
  {text: 'hand', size: 1},
  {text: 'know', size: 1},
  {text: 'sir', size: 1},
  {text: 'being', size: 1},
  {text: 'head', size: 1},
  {text: 'make', size: 1},
  {text: 'out', size: 1},
  {text: 'can', size: 1},
  {text: 'little', size: 1},
  {text: 'reply', size: 1},
  {text: 'any', size: 1},
  {text: 'cry', size: 1},
  {text: 'good', size: 1},
  {text: 'name', size: 1},
  {text: 'poor', size: 1},
  {text: 'time', size: 1},
  {text: 'two', size: 1},
  {text: 'after', size: 1},
  {text: 'dear', size: 1},
  {text: 'get', size: 1},
  {text: 'gruel', size: 1},
  {text: 'long', size: 1},
  {text: 'may', size: 1},
  {text: 'never', size: 1},
  {text: 'some', size: 1},
  {text: 'well', size: 1},
  {text: 'white', size: 1},
  {text: 'woman', size: 1},
  {text: 'chair', size: 1},
  {text: 'day', size: 1},
  {text: 'give', size: 1},
  {text: 'inquire', size: 1},
  {text: 'made', size: 1},
  {text: 'next', size: 1},
  {text: 'now', size: 1},
  {text: 'other', size: 1},
  {text: 'over', size: 1},
  {text: 'small', size: 1},
  {text: 'surgeon', size: 1},
  {text: 'think', size: 1},
  {text: 'too', size: 1},
  {text: 'walk', size: 1},
  {text: 'want', size: 1},
  {text: 'bless', size: 1},
  {text: 'eye', size: 1},
  {text: 'man', size: 1},
  {text: 'master', size: 1},
  {text: 'most', size: 1},
  {text: 'old', size: 1},
  {text: 'people', size: 1},
  {text: 'see', size: 1},
  {text: 'another', size: 1},
  {text: 'at all', size: 1},
  {text: 'authorities', size: 1},
  {text: 'authority', size: 1},
  {text: 'away', size: 1},
  {text: 'face', size: 1},
  {text: 'gate', size: 1},
  {text: 'half', size: 1},
  {text: 'hands', size: 1},
  {text: 'heart', size: 1},
  {text: 'last', size: 1},
  {text: 'might', size: 1},
  {text: 'nurse', size: 1},
  {text: 'once', size: 1},
  {text: 'place', size: 1},
  {text: 'room', size: 1},
  {text: 'table', size: 1},
  {text: 'three', size: 1},
  {text: 'voice', size: 1},
  {text: 'waistcoat', size: 1},
  {text: 'wash', size: 1},
  {text: 'water', size: 1},
  {text: 'a little', size: 1},
  {text: 'bow', size: 1},
  {text: 'business', size: 1},
  {text: 'drop', size: 1},
  {text: 'eyes', size: 1},
  {text: 'fall', size: 1},
  {text: 'find', size: 1},
  {text: 'gin', size: 1},
  {text: 'high', size: 1},
  {text: 'house', size: 1},
  {text: 'infant', size: 1},
  {text: 'night', size: 1},
  {text: 'nobody', size: 1},
  {text: 'orphan', size: 1},
  {text: 'pauper', size: 1},
  {text: 'perhaps', size: 1},
  {text: 'rather', size: 1},
  {text: 'round', size: 1},
  {text: 'sit', size: 1},
  {text: 'world', size: 1},
  {text: 'young', size: 1},
  {text: 'add', size: 1},
  {text: 'ask', size: 1},
  {text: 'at once', size: 1},
  {text: 'behind', size: 1},
  {text: 'bottle', size: 1},
  {text: 'bread', size: 1},
  {text: 'care', size: 1},
  {text: 'copper', size: 1},
  {text: 'die', size: 1},
  {text: 'farm', size: 1},
  {text: 'fat', size: 1},
  {text: 'father', size: 1},
  {text: 'fell', size: 1},
  {text: 'female', size: 1},
  {text: 'going', size: 1},
  {text: 'happen', size: 1},
  {text: 'hat', size: 1},
  {text: 'here', size: 1},
  {text: 'however', size: 1},
  {text: 'hungry', size: 1},
  {text: 'in this', size: 1},
  {text: 'keep', size: 1},
  {text: 'large', size: 1},
  {text: 'low', size: 1},
  {text: 'matter', size: 1},
  {text: 'out of', size: 1},
  {text: 'pound', size: 1},
  {text: 'public', size: 1},
  {text: 'quarter', size: 1},
  {text: 'quite', size: 1},
  {text: 'raise', size: 1},
  {text: 'sleep', size: 1},
  {text: 'spirit', size: 1},
  {text: 'ten', size: 1},
  {text: 'turn', size: 1},
  {text: 'wanted', size: 1},
  {text: 'washing', size: 1},
  {text: 'week', size: 1},
  {text: 'word', size: 1},
  {text: 'age', size: 1},
  {text: 'arm', size: 1},
  {text: 'ask for', size: 1},
  {text: 'assistant', size: 1},
  {text: 'be born', size: 1},
  {text: 'bed', size: 1},
  {text: 'bill', size: 1},
  {text: 'body', size: 1},
  {text: 'born', size: 1},
  {text: 'brick', size: 1},
  {text: 'bring', size: 1},
  {text: 'cane', size: 1},
  {text: 'case', size: 1},
  {text: 'Christian', size: 1},
  {text: 'circumstance', size: 1},
  {text: 'cock', size: 1},
  {text: 'cocked hat', size: 1},
  {text: 'cold', size: 1},
  {text: 'come to', size: 1},
  {text: 'companion', size: 1},
  {text: 'consequence', size: 1},
  {text: 'corner', size: 1},
  {text: 'deposit', size: 1},
  {text: 'dress', size: 1},
  {text: 'eat', size: 1},
  {text: 'eight', size: 1},
  {text: 'expect', size: 1},
  {text: 'expected', size: 1},
  {text: 'experimental', size: 1},
  {text: 'feed', size: 1},
  {text: 'fire', size: 1},
  {text: 'glass', size: 1},
  {text: 'go to', size: 1},
  {text: 'green', size: 1},
  {text: 'halfpenny', size: 1},
  {text: 'hang', size: 1},
  {text: 'have got', size: 1},
  {text: 'hint', size: 1},
  {text: 'hunger', size: 1},
  {text: 'interest', size: 1},
  {text: 'known', size: 1},
  {text: 'latter', size: 1},
  {text: 'lay', size: 1},
  {text: 'lead', size: 1},
  {text: 'let', size: 1},
  {text: 'live', size: 1},
  {text: 'mention', size: 1},
  {text: 'month', size: 1},
  {text: 'morning', size: 1},
  {text: 'ninth', size: 1},
  {text: 'offer', size: 1},
  {text: 'old woman', size: 1},
  {text: 'open', size: 1},
  {text: 'operation', size: 1},
  {text: 'order', size: 1},
  {text: 'pale', size: 1},
  {text: 'pick', size: 1},
  {text: 'possess', size: 1},
  {text: 'possible', size: 1},
  {text: 'pray', size: 1},
  {text: 'process', size: 1},
  {text: 'proper', size: 1},
  {text: 'purpose', size: 1},
  {text: 'raised', size: 1},
  {text: 'remove', size: 1},
  {text: 'removed', size: 1},
  {text: 'render', size: 1},
  {text: 'set', size: 1},
  {text: 'shake', size: 1},
  {text: 'sitting', size: 1},
  {text: 'smile', size: 1},
  {text: 'somewhat', size: 1},
  {text: 'speak', size: 1},
  {text: 'spoon', size: 1},
  {text: 'supper', size: 1},
  {text: 'sure', size: 1},
  {text: 'system', size: 1},
  {text: 'tender', size: 1},
  {text: 'thin', size: 1},
  {text: 'troublesome', size: 1},
  {text: 'twenty', size: 1},
  {text: 'usually', size: 1},
  {text: 'words', size: 1},
  {text: 'yes', size: 1},
  {text: 'a great deal', size: 1},
  {text: 'accident', size: 1},
  {text: 'accompanied', size: 1},
  {text: 'accompany', size: 1},
  {text: 'advance', size: 1},
  {text: 'advancing', size: 1},
  {text: 'allowance', size: 1},
  {text: 'answer', size: 1},
  {text: 'appear', size: 1},
  {text: 'apron', size: 1},
  {text: 'arrive', size: 1},
  {text: 'assign', size: 1},
  {text: 'astonishment', size: 1},
  {text: 'at last', size: 1},
  {text: 'attend', size: 1},
  {text: 'basin', size: 1},
  {text: 'bedstead', size: 1},
  {text: 'besides', size: 1},
  {text: 'birth', size: 1},
  {text: 'birthday', size: 1},
  {text: 'bowed', size: 1},
  {text: 'bowl', size: 1},
  {text: 'bowls', size: 1},
  {text: 'breast', size: 1},
  {text: 'brief', size: 1},
  {text: 'bring up', size: 1},
  {text: 'cast', size: 1},
  {text: 'catch', size: 1},
  {text: 'class', size: 1},
  {text: 'clothe', size: 1},
  {text: 'common', size: 1},
  {text: 'compel', size: 1},
  {text: 'compose', size: 1},
  {text: 'conduct', size: 1},
  {text: 'considerable', size: 1},
  {text: 'consolation', size: 1},
  {text: 'contract', size: 1},
  {text: 'convince', size: 1},
  {text: 'convinced', size: 1},
  {text: 'cook', size: 1},
  {text: 'countenance', size: 1},
  {text: 'couple', size: 1},
  {text: 'cry for', size: 1},
  {text: 'crying', size: 1},
  {text: 'cuff', size: 1},
  {text: 'deal', size: 1},
  {text: 'decidedly', size: 1},
  {text: 'deeply', size: 1},
  {text: 'diet', size: 1},
  {text: 'difficulty', size: 1},
  {text: 'dinner', size: 1},
  {text: 'directly', size: 1},
  {text: 'discover', size: 1},
  {text: 'draw', size: 1},
  {text: 'ecstasy', size: 1},
  {text: 'elderly', size: 1},
  {text: 'evening', size: 1},
  {text: 'excellent', size: 1},
  {text: 'except', size: 1},
  {text: 'experience', size: 1},
  {text: 'extraordinary', size: 1},
  {text: 'faint', size: 1},
  {text: 'fall into', size: 1},
  {text: 'fist', size: 1},
  {text: 'floor', size: 1},
  {text: 'follow', size: 1},
  {text: 'food', size: 1},
  {text: 'fool', size: 1},
  {text: 'forehead', size: 1},
  {text: 'frighten', size: 1},
  {text: 'frightened', size: 1},
  {text: 'garden', size: 1},
  {text: 'gaze', size: 1},
  {text: 'glance', size: 1},
  {text: 'go along', size: 1},
  {text: 'grasp', size: 1},
  {text: 'grasping', size: 1},
  {text: 'great deal', size: 1},
  {text: 'THIS', size: 3},
  {text: 'horse', size: 1},
  {text: 'humane', size: 1},
  {text: 'humility', size: 1},
  {text: 'impress', size: 1},
  {text: 'impressed', size: 1},
  {text: 'in no time', size: 1},
  {text: 'in other words', size: 1},
  {text: 'increase', size: 1},
  {text: 'inmate', size: 1},
  {text: 'inside', size: 1},
  {text: 'instead', size: 1},
  {text: 'interesting', size: 1},
  {text: 'interpose', size: 1},
  {text: 'ladle', size: 1},
  {text: 'lady', size: 1},
  {text: 'leaving', size: 1},
  {text: 'loud', size: 1},
  {text: 'mile', size: 1},
  {text: 'misery', size: 1},
  {text: 'nearly', size: 1},
  {text: 'necessary', size: 1},
  {text: 'notwithstanding', size: 1},
  {text: 'oakum', size: 1},
  {text: 'on the table', size: 1},
  {text: 'opened', size: 1},
  {text: 'overseer', size: 1},
  {text: 'philosopher', size: 1},
  {text: 'picking', size: 1},
  {text: 'piece', size: 1},
  {text: 'pillow', size: 1},
  {text: 'please', size: 1},
  {text: 'pocket', size: 1},
  {text: 'poor people', size: 1},
  {text: 'possessed', size: 1},
  {text: 'probable', size: 1},
  {text: 'proceed', size: 1},
  {text: 'produce', size: 1},
  {text: 'provide', size: 1},
  {text: 'putt', size: 1},
  {text: 'putting', size: 1},
  {text: 'red', size: 1},
  {text: 'relief', size: 1},
  {text: 'remain', size: 1},
  {text: 'repeat', size: 1},
  {text: 'result', size: 1},
  {text: 'reward', size: 1},
  {text: 'roll', size: 1},
  {text: 'rose', size: 1},
  {text: 'seat', size: 1},
  {text: 'sense', size: 1},
  {text: 'shaking', size: 1},
  {text: 'sight', size: 1},
  {text: 'situation', size: 1},
  {text: 'six', size: 2, href: 'https://en.wikipedia.org/wiki/Six'},
  {text: 'slice', size: 1},
  {text: 'society', size: 1},
  {text: 'spoke', size: 1},
  {text: 'start', size: 1},
  {text: 'starve', size: 1},
  {text: 'starved', size: 1},
  {text: 'station', size: 1},
  {text: 'stop', size: 1},
  {text: 'stranger', size: 1},
  {text: 'suffer', size: 1},
  {text: 'supply', size: 1},
  {text: 'support', size: 1},
  {text: 'suppose', size: 1},
  {text: 'take care', size: 1},
  {text: 'taking', size: 1},
  {text: 'talk', size: 1},
  {text: 'tap', size: 1},
  {text: 'teach', size: 1},
  {text: 'tear', size: 1},
  {text: 'tears', size: 1},
  {text: 'telling', size: 1},
  {text: 'to that', size: 1},
  {text: 'tone', size: 1},
  {text: 'too much', size: 1},
  {text: 'town', size: 1},
  {text: 'trade', size: 1},
  {text: 'treat', size: 1},
  {text: 'trouble', size: 1},
  {text: 'useful', size: 1},
  {text: 'usher', size: 1},
  {text: 'view', size: 1},
  {text: 'walk in', size: 1},
  {text: 'warden', size: 1},
  {text: 'wicket', size: 1},
  {text: 'wild', size: 1},
  {text: 'wisdom', size: 1},
  {text: 'wretched', size: 1},
  {text: 'young woman', size: 1},
  {text: 'a couple of', size: 1},
  {text: 'accurate', size: 1},
  {text: 'address', size: 1},
  {text: 'advertise', size: 1},
  {text: 'affect', size: 1},
  {text: 'affected', size: 1},
  {text: 'affix', size: 1},
  {text: 'agony', size: 1},
  {text: 'aim', size: 1},
  {text: 'alarm', size: 1},
  {text: 'alarmed', size: 1},
  {text: 'alive', size: 1},
  {text: 'all over', size: 1},
  {text: 'all the way', size: 1},
  {text: 'allot', size: 1},
  {text: 'allotted', size: 1},
  {text: 'aloud', size: 1},
  {text: 'alphabet', size: 1},
  {text: 'alphabetical', size: 1},
  {text: 'alternately', size: 1},
  {text: 'alternative', size: 1},
  {text: 'anciently', size: 1},
  {text: 'animate', size: 1},
  {text: 'animated', size: 1},
  {text: 'anxious', size: 1},
  {text: 'apparently', size: 1},
  {text: 'apparition', size: 1},
  {text: 'appendage', size: 1},
  {text: 'appetite', size: 1},
  {text: 'applicant', size: 1},
  {text: 'applied', size: 1},
  {text: 'apply', size: 1},
  {text: 'apprentice', size: 1},
  {text: 'approach', size: 1},
  {text: 'approaching', size: 1},
  {text: 'appropriate', size: 1},
  {text: 'approvingly', size: 1},
  {text: 'arrive at', size: 1},
  {text: 'articulate', size: 1},
  {text: 'articulated', size: 1},
  {text: 'as it is', size: 1},
  {text: 'assiduously', size: 1},
  {text: 'assigned', size: 1},
  {text: 'assist', size: 1},
  {text: 'assisted', size: 1},
  {text: 'astound', size: 1},
  {text: 'astounded', size: 1},
  {text: 'at length', size: 1},
  {text: 'atrociously', size: 1},
  {text: 'attended', size: 1},
  {text: 'attending', size: 1},
  {text: 'attribute', size: 1},
  {text: 'awaken', size: 1},
  {text: 'bachelor', size: 1},
  {text: 'badge', size: 1},
  {text: 'bait', size: 1},
  {text: 'balance', size: 1},
  {text: 'baptize', size: 1},
  {text: 'baptized', size: 1},
  {text: 'Beadle', size: 1},
  {text: 'beer', size: 1},
  {text: 'befall', size: 1},
  {text: 'beg', size: 1},
  {text: 'beggar', size: 1},
  {text: 'behold', size: 1},
  {text: 'benevolent', size: 1},
  {text: 'bestow', size: 1},
  {text: 'bid', size: 1},
  {text: 'bidding', size: 1},
  {text: 'biography', size: 1},
  {text: 'bitterly', size: 1},
  {text: 'blandness', size: 1},
  {text: 'blanket', size: 1},
  {text: 'blessed', size: 1},
  {text: 'blessing', size: 1},
  {text: 'blow', size: 1},
  {text: 'bolt', size: 1},
  {text: 'bosom', size: 1},
  {text: 'branch', size: 1},
  {text: 'brat', size: 1},
  {text: 'bread and butter', size: 1},
  {text: 'breakfast', size: 1},
  {text: 'breathe', size: 1},
  {text: 'breathed', size: 1},
  {text: 'brown', size: 1},
  {text: 'brush', size: 1},
  {text: 'brushed', size: 1},
  {text: 'buffet', size: 1},
  {text: 'buffeted', size: 1},
  {text: 'build', size: 1},
  {text: 'burden', size: 1},
  {text: 'burst', size: 1},
  {text: 'butter', size: 1},
  {text: 'by hand', size: 1},
  {text: 'by no means', size: 1},
  {text: 'calico', size: 1},
  {text: 'calling', size: 1},
  {text: 'calm', size: 1},
  {text: 'cap', size: 1},
  {text: 'capital', size: 1},
  {text: 'captivate', size: 1},
  {text: 'captivating', size: 1},
  {text: 'careful', size: 1},
  {text: 'carelessly', size: 1},
  {text: 'catch sight', size: 1},
  {text: 'catch up', size: 1},
  {text: 'catching', size: 1},
  {text: 'cellar', size: 1},
  {text: 'chafe', size: 1},
  {text: 'chafed', size: 1},
  {text: 'check', size: 1},
  {text: 'checked', size: 1},
  {text: 'cheerfulness', size: 1},
  {text: 'childish', size: 1},
  {text: 'choleric', size: 1},
  {text: 'circumference', size: 1},
  {text: 'clean', size: 1},
  {text: 'clearly', size: 1},
  {text: 'cling', size: 1},
  {text: 'cloth', size: 1},
  {text: 'clothes', size: 1},
  {text: 'clothing', size: 1},
  {text: 'coal', size: 1},
  {text: 'coat', size: 1},
  {text: 'cold water', size: 1},
  {text: 'combination', size: 1},
  {text: 'come on', size: 1},
  {text: 'come out', size: 1},
  {text: 'comfort', size: 1},
  {text: 'comfortable', size: 1},
  {text: 'Commons', size: 1},
  {text: 'commons', size: 1},
  {text: 'compelling', size: 1},
  {text: 'complacently', size: 1},
  {text: 'completed', size: 1},
  {text: 'compliment', size: 1},
  {text: 'composed', size: 1},
  {text: 'composition', size: 1},
  {text: 'comprise', size: 1},
  {text: 'concise', size: 1},
  {text: 'conclave', size: 1},
  {text: 'confinement', size: 1},
  {text: 'consideration', size: 1},
  {text: 'consign', size: 1},
  {text: 'consolatory', size: 1},
  {text: 'contents', size: 1},
  {text: 'contracted', size: 1},
  {text: 'contrive', size: 1},
  {text: 'contrived', size: 1},
  {text: 'controvert', size: 1},
  {text: 'cork', size: 1},
  {text: 'corn', size: 1},
  {text: 'cottage', size: 1},
  {text: 'cough', size: 1},
  {text: 'coupled', size: 1},
  {text: 'cover', size: 1},
  {text: 'covering', size: 1},
  {text: 'coverlet', size: 1},
  {text: 'crop', size: 1},
  {text: 'culprit', size: 1},
  {text: 'cupboard', size: 1},
  {text: 'curtsey', size: 1},
  {text: 'custom', size: 1},
  {text: 'darkly', size: 1},
  {text: 'date', size: 1},
  {text: 'deceive', size: 1},
  {text: 'deception', size: 1},
  {text: 'decision', size: 1},
  {text: 'define', size: 1},
  {text: 'defined', size: 1},
  {text: 'delegate', size: 1},
  {text: 'deliberation', size: 1},
  {text: 'deliver', size: 1},
  {text: 'demolition', size: 1},
  {text: 'demonstrate', size: 1},
  {text: 'demonstrated', size: 1},
  {text: 'depict', size: 1},
  {text: 'depicted', size: 1},
  {text: 'depth', size: 1},
  {text: 'desperate', size: 1},
  {text: 'despise', size: 1},
  {text: 'despised', size: 1},
  {text: 'destitute', size: 1},
  {text: 'determine', size: 1},
  {text: 'devotional', size: 1},
  {text: 'devour', size: 1},
  {text: 'dietary', size: 1},
  {text: 'dignified', size: 1},
  {text: 'dignify', size: 1},
  {text: 'dignity', size: 1},
  {text: 'diminutive', size: 1},
  {text: 'dirt', size: 1},
  {text: 'disappear', size: 1},
  {text: 'discussion', size: 1},
  {text: 'dispatch', size: 1},
  {text: 'display', size: 1},
  {text: 'dispose', size: 1},
  {text: 'disposed', size: 1},
  {text: 'distinctly', size: 1},
  {text: 'divide', size: 1},
  {text: 'divided', size: 1},
  {text: 'divorce', size: 1},
  {text: 'doctor', size: 1},
  {text: 'Doctor', size: 1},
  {text: 'domicile', size: 1},
  {text: 'dressed', size: 1},
  {text: 'drudge', size: 1},
  {text: 'duly', size: 1},
  {text: 'dying', size: 1},
  {text: 'eager', size: 1},
  {text: 'ease', size: 1},
  {text: 'eating', size: 1},
  {text: 'educate', size: 1},
  {text: 'educated', size: 1},
  {text: 'education', size: 1},
  {text: 'emanate', size: 1},
  {text: 'embrace', size: 1},
  {text: 'employ', size: 1},
  {text: 'encrust', size: 1},
  {text: 'encrusted', size: 1},
  {text: 'engender', size: 1},
  {text: 'entertainment', size: 1},
  {text: 'envelop', size: 1},
  {text: 'enviable', size: 1},
  {text: 'establish', size: 1},
  {text: 'established', size: 1},
  {text: 'establishment', size: 1},
  {text: 'evaporate', size: 1},
  {text: 'evaporated', size: 1},
  {text: 'event', size: 1},
  {text: 'every night', size: 1},
  {text: 'every quarter', size: 1},
  {text: 'evident', size: 1},
  {text: 'evidently', size: 1},
  {text: 'excitement', size: 1},
  {text: 'exercise', size: 1},
  {text: 'exertion', size: 1},
  {text: 'exist', size: 1},
  {text: 'expand', size: 1},
  {text: 'expense', size: 1},
  {text: 'expensive', size: 1},
  {text: 'experienced', size: 1},
  {text: 'extant', size: 1},
  {text: 'faced', size: 1},
  {text: 'factor', size: 1},
  {text: 'fail', size: 1},
  {text: 'faithful', size: 1},
  {text: 'fall back', size: 1},
  {text: 'fall out', size: 1},
  {text: 'farming', size: 1},
  {text: 'favour', size: 1},
  {text: 'feebly', size: 1},
  {text: 'feint', size: 1},
  {text: 'festive', size: 1},
  {text: 'fetch', size: 1},
  {text: 'fictitious', size: 1},
  {text: 'fictitious name', size: 1},
  {text: 'find out', size: 1},
  {text: 'finding', size: 1},
  {text: 'finger', size: 1},
  {text: 'finish', size: 1},
  {text: 'firmly', size: 1},
  {text: 'fling', size: 1},
  {text: 'flock', size: 1},
  {text: 'flutter', size: 1},
  {text: 'folk', size: 1},
  {text: 'folks', size: 1},
  {text: 'fond', size: 1},
  {text: 'fondling', size: 1},
  {text: 'for the first time', size: 1},
  {text: 'forever', size: 1},
  {text: 'forgotten', size: 1},
  {text: 'forthwith', size: 1},
  {text: 'fortunate', size: 1},
  {text: 'fortunately', size: 1},
  {text: 'furious', size: 1},
  {text: 'gasp', size: 1},
  {text: 'gather', size: 1},
  {text: 'gathered', size: 1},
  {text: 'generation', size: 1},
  {text: 'gesture', size: 1},
  {text: 'get behind', size: 1},
  {text: 'get to', size: 1},
  {text: 'gloom', size: 1},
  {text: 'glove', size: 1},
  {text: 'go away', size: 1},
  {text: 'go to sleep', size: 1},
  {text: 'go with', size: 1},
  {text: 'going away', size: 1},
  {text: 'good-looking', size: 1},
  {text: 'goodness', size: 1},
  {text: 'grace', size: 1},
  {text: 'gracious', size: 1},
  {text: 'gradual', size: 1},
  {text: 'grandmother', size: 1},
  {text: 'gratified', size: 1},
  {text: 'gratify', size: 1},
  {text: 'grief', size: 1},
  {text: 'grown', size: 1},
  {text: 'gruff', size: 1},
  {text: 'hall', size: 1},
  {text: 'hand over', size: 1},
  {text: 'handed', size: 1},
  {text: 'hastily', size: 1},
  {text: 'haughty', size: 1},
  {text: 'headed', size: 1},
  {text: 'healthy', size: 1},
  {text: 'hesitate', size: 1},
  {text: 'hesitating', size: 1},
  {text: 'hitherto', size: 1},
  {text: 'horror', size: 1},
  {text: 'human being', size: 1},
  {text: 'humanely', size: 1},
  {text: 'humble', size: 1},
  {text: 'hurried', size: 1},
  {text: 'hurry', size: 1},
  {text: 'hush', size: 1},
  {text: 'ill-usage', size: 1},
  {text: 'illustration', size: 1},
  {text: 'impart', size: 1},
  {text: 'imperfectly', size: 1},
  {text: 'impertinence', size: 1},
  {text: 'implant', size: 1},
  {text: 'implanted', size: 1},
  {text: 'implicitly', size: 1},
  {text: 'importance', size: 1},
  {text: 'impose', size: 1},
  {text: 'imposed', size: 1},
  {text: 'imprint', size: 1},
  {text: 'in full', size: 1},
  {text: 'in hand', size: 1},
  {text: 'inadvertently', size: 1},
  {text: 'inconvenience', size: 1},
  {text: 'increased', size: 1},
  {text: 'indubitably', size: 1},
  {text: 'induce', size: 1},
  {text: 'inducing', size: 1},
  {text: 'inestimable', size: 1},
  {text: 'inevitably', size: 1},
  {text: 'inflame', size: 1},
  {text: 'inflaming', size: 1},
  {text: 'inform', size: 1},
  {text: 'informed', size: 1},
  {text: 'inheritance', size: 1},
  {text: 'inquest', size: 1},
  {text: 'inquiring', size: 1},
  {text: 'inseparable', size: 1},
  {text: 'instant', size: 1},
  {text: 'intelligence', size: 1},
  {text: 'interrogation', size: 1},
  {text: 'invariably', size: 1},
  {text: 'invitation', size: 1},
  {text: 'issue', size: 1},
  {text: 'item', size: 1},
  {text: 'jury', size: 1},
  {text: 'juvenile', size: 1},
  {text: 'keeping', size: 1},
  {text: 'kick', size: 1},
  {text: 'kill', size: 1},
  {text: 'kindly', size: 1},
  {text: 'kindness', size: 1},
  {text: 'kindred', size: 1},
  {text: 'knock', size: 1},
  {text: 'knowing', size: 1},
  {text: 'lace', size: 1},
  {text: 'laced', size: 1},
  {text: 'lady of the house', size: 1},
  {text: 'lamb', size: 1},
  {text: 'large white', size: 1},
  {text: 'lean', size: 1},
  {text: 'leave behind', size: 1},
  {text: 'left hand', size: 1},
  {text: 'leg', size: 1},
  {text: 'lie', size: 1},
  {text: 'lie in', size: 1},
  {text: 'lighted', size: 1},
  {text: 'liked', size: 1},
  {text: 'linger', size: 1},
  {text: 'lingering', size: 1},
  {text: 'lip', size: 1},
  {text: 'listen', size: 1},
  {text: 'literary', size: 1},
  {text: 'literature', size: 1},
  {text: 'lively', size: 1},
  {text: 'lock', size: 1},
  {text: 'lock up', size: 1},
  {text: 'loneliness', size: 1},
  {text: 'long time', size: 1},
  {text: 'long-headed', size: 1},
  {text: 'loosely', size: 1},
  {text: 'lots', size: 1},
  {text: 'lowest', size: 1},
  {text: 'lump', size: 1},
  {text: 'lung', size: 1},
  {text: 'lustily', size: 1},
  {text: 'luxuriant', size: 1},
  {text: 'magnanimously', size: 1},
  {text: 'maintain', size: 1},
  {text: 'majestic', size: 1},
  {text: 'make it', size: 1},
  {text: 'male', size: 1},
  {text: 'mar', size: 1},
  {text: 'marry', size: 1},
  {text: 'marvellously', size: 1},
  {text: 'material', size: 1},
  {text: 'mattress', size: 1},
  {text: 'meal', size: 1},
  {text: 'mealtime', size: 1},
  {text: 'meanwhile', size: 1},
  {text: 'medical', size: 1},
  {text: 'member', size: 1},
  {text: 'memoir', size: 1},
  {text: 'mercy', size: 1},
  {text: 'merit', size: 1},
  {text: 'miserable', size: 1},
  {text: 'misty', size: 1},
  {text: 'mix', size: 1},
  {text: 'mixing', size: 1},
  {text: 'mollify', size: 1},
  {text: 'morrow', size: 1},
  {text: 'mortality', size: 1},
  {text: 'mortar', size: 1},
  {text: 'narrative', size: 1},
  {text: 'naturally', size: 1},
  {text: 'neat', size: 1},
  {text: 'necessity', size: 1},
  {text: 'neglect', size: 1},
  {text: 'neighbor', size: 1},
  {text: 'nobleman', size: 1},
  {text: 'noticed', size: 1},
  {text: 'notion', size: 1},
  {text: 'nourishment', size: 1},
  {text: 'novel', size: 1},
  {text: 'nudge', size: 1},
  {text: "o'clock", size: 1},
  {text: 'oatmeal', size: 1},
  {text: 'oblige', size: 1},
  {text: 'obliged', size: 1},
  {text: 'observe', size: 1},
  {text: 'occasionally', size: 1},
  {text: 'occasions', size: 1},
  {text: 'occur', size: 1},
  {text: 'occurrence', size: 1},
  {text: 'offend', size: 1},
  {text: 'offended', size: 1},
  {text: 'offender', size: 1},
  {text: 'offering', size: 1},
  {text: 'officiously', size: 1},
  {text: 'once again', size: 1},
  {text: 'onion', size: 1},
  {text: 'oratorical', size: 1},
  {text: 'originally', size: 1},
  {text: 'ounce', size: 1},
  {text: 'outer', size: 1},
  {text: 'overload', size: 1},
  {text: 'overlook', size: 1},
  {text: 'overlooked', size: 1},
  {text: 'page', size: 1},
  {text: 'palm', size: 1},
  {text: 'paralyse', size: 1},
  {text: 'pardon', size: 1},
  {text: 'parental', size: 1},
  {text: 'parishioner', size: 1},
  {text: 'parlour', size: 1},
  {text: 'parochial', size: 1},
  {text: 'participate', size: 1},
  {text: 'participating', size: 1},
  {text: 'passionately', size: 1},
  {text: 'paste', size: 1},
  {text: 'pasted', size: 1},
  {text: 'patchwork', size: 1},
  {text: 'patient', size: 1},
  {text: 'pause', size: 1},
  {text: 'per diem', size: 1},
  {text: 'perception', size: 1},
  {text: 'perform', size: 1},
  {text: 'periodical', size: 1},
  {text: 'periodically', size: 1},
  {text: 'perspective', size: 1},
  {text: 'perspiration', size: 1},
  {text: 'persuasively', size: 1},
  {text: 'perversely', size: 1},
  {text: 'philosophical', size: 1},
  {text: 'philosophy', size: 1},
  {text: 'pick up', size: 1},
  {text: 'pilgrimage', size: 1},
  {text: 'pinion', size: 1},
  {text: 'pinioned', size: 1},
  {text: 'pity', size: 1},
  {text: 'placid', size: 1},
  {text: 'plenty', size: 1},
  {text: 'poise', size: 1},
  {text: 'poised', size: 1},
  {text: 'polish', size: 1},
  {text: 'polished', size: 1},
  {text: 'porringer', size: 1},
  {text: 'portion', size: 1},
  {text: 'possibility', size: 1},
  {text: 'possibly', size: 1},
  {text: 'prayer', size: 1},
  {text: 'prefix', size: 1},
  {text: 'presume', size: 1},
  {text: 'pride', size: 1},
  {text: 'profound', size: 1},
  {text: 'proof', size: 1},
  {text: 'prophetic', size: 1},
  {text: 'prospect', size: 1},
  {text: 'protect', size: 1},
  {text: 'protecting', size: 1},
  {text: 'prudent', size: 1},
  {text: 'put on', size: 1},
  {text: 'quantity', size: 1},
  {text: 'quite a', size: 1},
  {text: 'raising', size: 1},
  {text: 'range', size: 1},
  {text: 'rare', size: 1},
  {text: 'reader', size: 1},
  {text: 'readiness', size: 1},
  {text: 'reasonably', size: 1},
  {text: 'rebel', size: 1},
  {text: 'rebelliously', size: 1},
  {text: 'recent', size: 1},
  {text: 'reckless', size: 1},
  {text: 'recollection', size: 1},
  {text: 'red-faced', size: 1},
  {text: 'reference', size: 1},
  {text: 'reflection', size: 1},
  {text: 'refrain', size: 1},
  {text: 'refusal', size: 1},
  {text: 'regret', size: 1},
  {text: 'regular', size: 1},
  {text: 'regulation', size: 1},
  {text: 'rejoice', size: 1},
  {text: 'rejoicing', size: 1},
  {text: 'relax', size: 1},
  {text: 'relaxed', size: 1},
  {text: 'remonstrance', size: 1},
  {text: 'reported', size: 1},
  {text: 'resolve', size: 1},
  {text: 'resolved', size: 1},
  {text: 'respectful', size: 1},
  {text: 'respiration', size: 1},
  {text: 'respond', size: 1},
  {text: 'right hand', size: 1},
  {text: 'ring', size: 1},
  {text: 'robe', size: 1},
  {text: 'rolled', size: 1},
  {text: 'rough', size: 1},
  {text: 'rub', size: 1},
  {text: 'run out', size: 1},
  {text: 'rush', size: 1},
  {text: 'rushed', size: 1},
  {text: 'rustle', size: 1},
  {text: 'sage', size: 1},
  {text: 'salutation', size: 1},
  {text: 'satisfaction', size: 1},
  {text: 'scald', size: 1},
  {text: 'scarce', size: 1},
  {text: 'scrub', size: 1},
  {text: 'scrubbed', size: 1},
  {text: 'seated', size: 1},
  {text: 'select', size: 1},
  {text: 'self', size: 1},
  {text: 'sending', size: 1},
  {text: 'sequel', size: 1},
  {text: 'set down', size: 1},
  {text: 'set up', size: 1},
  {text: 'setting', size: 1},
  {text: 'settlement', size: 1},
  {text: 'shine', size: 1},
  {text: 'shoe', size: 1},
  {text: 'shoes', size: 1},
  {text: 'shook', size: 1},
  {text: 'shop', size: 1},
  {text: 'shriek', size: 1},
  {text: 'shrieked', size: 1},
  {text: 'shrunken', size: 1},
  {text: 'shudder', size: 1},
  {text: 'sicken', size: 1},
  {text: 'signature', size: 1},
  {text: 'sink', size: 1},
  {text: 'sit down', size: 1},
  {text: 'sit in', size: 1},
  {text: 'sleep in', size: 1},
  {text: 'sleeping', size: 1},
  {text: 'slow', size: 1},
  {text: 'smother', size: 1},
  {text: 'smothered', size: 1},
  {text: 'snappish', size: 1},
  {text: 'sneeze', size: 1},
  {text: 'sob', size: 1},
  {text: 'soften', size: 1},
  {text: 'softened', size: 1},
  {text: 'solemn', size: 1},
  {text: 'sorrow', size: 1},
  {text: 'spare', size: 1},
  {text: 'specimen', size: 1},
  {text: 'speedily', size: 1},
  {text: 'spirited', size: 1},
  {text: 'spirits', size: 1},
  {text: 'splash', size: 1},
  {text: 'spoken', size: 1},
  {text: 'stammer', size: 1},
  {text: 'stand in', size: 1},
  {text: 'stare', size: 1},
  {text: 'staring', size: 1},
  {text: 'start up', size: 1},
  {text: 'startle', size: 1},
  {text: 'startled', size: 1},
  {text: 'starvation', size: 1},
  {text: 'stature', size: 1},
  {text: 'stipend', size: 1},
  {text: 'stipendiary', size: 1},
  {text: 'stir', size: 1},
  {text: 'stirred', size: 1},
  {text: 'stomach', size: 1},
  {text: 'stone', size: 1},
  {text: 'stoop', size: 1},
  {text: 'stoop to', size: 1},
  {text: 'stooped', size: 1},
  {text: 'straw', size: 1},
  {text: 'stray', size: 1},
  {text: 'stretch', size: 1},
  {text: 'stretch out', size: 1},
  {text: 'stretched', size: 1},
  {text: 'stride', size: 1},
  {text: 'strive', size: 1},
  {text: 'striving', size: 1},
  {text: 'struggle', size: 1},
  {text: 'stupefied', size: 1},
  {text: 'stupefy', size: 1},
  {text: 'sturdy', size: 1},
  {text: 'suck', size: 1},
  {text: 'sucking', size: 1},
  {text: 'sugar', size: 1},
  {text: 'suit', size: 1},
  {text: 'summon', size: 1},
  {text: 'superintendence', size: 1},
  {text: 'superlative', size: 1},
  {text: 'surly', size: 1},
  {text: 'surround', size: 1},
  {text: 'surrounded', size: 1},
  {text: 'survive', size: 1},
  {text: 'swallow', size: 1},
  {text: 'swear', size: 1},
  {text: 'sweetness', size: 1},
  {text: 'systematic', size: 1},
  {text: 'take down', size: 1},
  {text: 'take in', size: 1},
  {text: 'take on', size: 1},
  {text: 'take out', size: 1},
  {text: 'take place', size: 1},
  {text: 'take up', size: 1},
  {text: 'talk about', size: 1},
  {text: 'talk of', size: 1},
  {text: 'tall', size: 1},
  {text: 'taste', size: 1},
  {text: 'tasting', size: 1},
  {text: 'tavern', size: 1},
  {text: 'tea', size: 1},
  {text: 'tear into', size: 1},
  {text: 'temerity', size: 1},
  {text: 'temple', size: 1},
  {text: 'temporary', size: 1},
  {text: 'termination', size: 1},
  {text: 'testimony', size: 1},
  {text: 'thanks', size: 1},
  {text: 'the Street', size: 1},
  {text: 'theory', size: 1},
  {text: 'thereby', size: 1},
  {text: 'thereon', size: 1},
  {text: 'theretofore', size: 1},
  {text: 'thingummy', size: 1},
  {text: 'think about', size: 1},
  {text: 'thirteen', size: 1},
  {text: 'thirty', size: 1},
  {text: 'thrash', size: 1},
  {text: 'thrashing', size: 1},
  {text: 'thrust', size: 1},
  {text: 'thrusting', size: 1},
  {text: 'ticket', size: 1},
  {text: 'to be sure', size: 1},
  {text: 'to wit', size: 1},
  {text: 'COOL', size: 1},
  {text: 'treachery', size: 1},
  {text: 'tremble', size: 1},
  {text: 'tremendous', size: 1},
  {text: 'trot', size: 1},
  {text: 'turn up', size: 1},
  {text: 'twice', size: 1},
  {text: 'uncomfortable', size: 1},
  {text: 'unconsciously', size: 1},
  {text: 'unconsciousness', size: 1},
  {text: 'undertake', size: 1},
  {text: 'undertaker', size: 1},
  {text: 'undo', size: 1},
  {text: 'unequally', size: 1},
  {text: 'unexpectedly', size: 1},
  {text: 'unfortunately', size: 1},
  {text: 'uniform', size: 1},
  {text: 'unlimited', size: 1},
  {text: 'unquestionably', size: 1},
  {text: 'unwonted', size: 1},
  {text: 'upstairs', size: 1},
  {text: 'upward', size: 1},
  {text: 'usage', size: 1},
  {text: 'venture', size: 1},
  {text: 'victim', size: 1},
  {text: 'vindicate', size: 1},
  {text: 'vindicated', size: 1},
  {text: 'violent', size: 1},
  {text: 'voracious', size: 1},
  {text: 'wake', size: 1},
  {text: 'walk away', size: 1},
  {text: 'ward', size: 1},
  {text: 'washed', size: 1},
  {text: 'waste', size: 1},
  {text: 'wasted', size: 1},
  {text: 'wave', size: 1},
  {text: 'waving', size: 1},
  {text: 'weak', size: 1},
  {text: 'weakly', size: 1},
  {text: 'wed', size: 1},
  {text: 'wedding', size: 1},
  {text: 'weekly', size: 1},
  {text: 'weep', size: 1},
  {text: 'weeping', size: 1},
  {text: 'whisper', size: 1},
  {text: 'whispered', size: 1},
  {text: 'wildly', size: 1},
  {text: 'wink', size: 1},
  {text: 'wink at', size: 1},
  {text: 'wipe', size: 1},
  {text: 'wise', size: 1},
  {text: 'wit', size: 1},
  {text: 'worn', size: 1},
  {text: 'wrap', size: 1},
  {text: 'wrapped', size: 1},
  {text: 'yellow', size: 1},
  {text: 'Young', size: 1}
];