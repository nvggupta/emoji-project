document.addEventListener('DOMContentLoaded', () => {
  const emojis = [
      { emoji: '🏴', description: 'flag: Scotland', category: 'Flags', aliases: ['scotland'] },
      { emoji: '😀', description: 'grinning face', category: 'Smileys & Emotion', aliases: ['grinning'] },
      { emoji: '😃', description: 'smiling face with open mouth', category: 'Smileys & Emotion', aliases: ['smiling'] },
      { emoji: '😍', description: 'smiling face with heart-eyes', category: 'Smileys & Emotion', aliases: ['heart eyes'] },
      { emoji: '🤔', description: 'thinking face', category: 'Smileys & Emotion', aliases: ['thinking'] },
      { emoji: '😎', description: 'smiling face with sunglasses', category: 'Smileys & Emotion', aliases: ['sunglasses'] },
      { emoji: '😢', description: 'crying face', category: 'Smileys & Emotion', aliases: ['crying'] },
      { emoji: '😠', description: 'angry face', category: 'Smileys & Emotion', aliases: ['angry'] },
      { emoji: '🥳', description: 'partying face', category: 'Smileys & Emotion', aliases: ['party'] },
      { emoji: '💩', description: 'pile of poo', category: 'Smileys & Emotion', aliases: ['poop'] },
      { emoji: '👏', description: 'clapping hands', category: 'People & Body', aliases: ['clapping'] },
      { emoji: '🔥', description: 'fire', category: 'Travel & Places', aliases: ['fire'] },
      { emoji: '👍', description: 'thumbs up', category: 'People & Body', aliases: ['thumbs up'] },
      {
        "emoji": "😀"
      , "description": "grinning face"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "grinning"
        ]
      , "tags": [
          "smile"
        , "happy"
        ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😃"
      , "description": "grinning face with big eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "smiley"
        ]
      , "tags": [
          "happy"
        , "joy"
        , "haha"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😄"
      , "description": "grinning face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "smile"
        ]
      , "tags": [
          "happy"
        , "joy"
        , "laugh"
        , "pleased"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😁"
      , "description": "beaming face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "grin"
        ]
      , "tags": [
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😆"
      , "description": "grinning squinting face"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "laughing"
        , "satisfied"
        ]
      , "tags": [
          "happy"
        , "haha"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😅"
      , "description": "grinning face with sweat"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "sweat_smile"
        ]
      , "tags": [
          "hot"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "🤣"
      , "description": "rolling on the floor laughing"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "rofl"
        ]
      , "tags": [
          "lol"
        , "laughing"
        ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      }
    , {
        "emoji": "😂"
      , "description": "face with tears of joy"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "joy"
        ]
      , "tags": [
          "tears"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "🙂"
      , "description": "slightly smiling face"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "slightly_smiling_face"
        ]
      , "tags": [
        ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      }
    , {
        "emoji": "🙃"
      , "description": "upside-down face"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "upside_down_face"
        ]
      , "tags": [
        ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
      }
    , {
        "emoji": "😉"
      , "description": "winking face"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "wink"
        ]
      , "tags": [
          "flirt"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😊"
      , "description": "smiling face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "blush"
        ]
      , "tags": [
          "proud"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    , {
        "emoji": "😇"
      , "description": "smiling face with halo"
      , "category": "Smileys & Emotion"
      , "aliases": [
          "innocent"
        ]
      , "tags": [
          "angel"
        ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      }
    ,
  ];

  const searchInput = document.getElementById('searchInput');
  const emojiContainer = document.getElementById('emojiContainer');

  // Display all emojis initially
  displayEmojis(emojis);

  // Add event listener to the search input
  searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredEmojis = emojis.filter(emoji =>
          emoji.description.toLowerCase().includes(searchTerm) ||
          emoji.category.toLowerCase().includes(searchTerm) ||
          emoji.aliases.some(alias => alias.toLowerCase().includes(searchTerm))
      );
      displayEmojis(filteredEmojis);
  });

  // Function to display emojis in the container
  function displayEmojis(emojis) {
      emojiContainer.innerHTML = '';
      emojis.forEach(emoji => {
          const emojiCard = document.createElement('div');
          emojiCard.className = 'emoji-card';

          const emojiElement = document.createElement('span');
          emojiElement.className = 'emoji';
          emojiElement.textContent = emoji.emoji;

          const emojiDescription = document.createElement('div');
          emojiDescription.className = 'emoji-description';
          emojiDescription.textContent = emoji.description;

          const emojiCategory = document.createElement('div');
          emojiCategory.className = 'emoji-category';
          emojiCategory.textContent = `Category: ${emoji.category}`;

          emojiCard.appendChild(emojiElement);
          emojiCard.appendChild(emojiDescription);
          emojiCard.appendChild(emojiCategory);
          emojiContainer.appendChild(emojiCard);
      });
  }
});
