import './App.css';
import { useState, useEffect } from 'react';
import SentenceComponent from "./SentenceComponent/SentenceComponent.js"


function App() {
  const [srcLanguage, setSourceLanguage] = useState("It's all in the eyes. Demure daytime looks. Dramatic night moves Subtle lines, smokey vibes, custom brow looks, classic tones or a  shot of color. Eyeshad ₩, eyeliner, brows, and mascara collections  designed to transform your look");
  const translatedText = "हमारे Magnum Big Shot Mascara को लगाने से आपकी पलकों का पूरा रंग देखने को मिलेगा। यह मस्कारा सिर्फ आपकी पलकों को बढ़ाने के लिए नहीं है, बल्कि उन्हें बदलने के लिए भी। इसका विशेष मिश्रण आपकी पलकों को सिर्फ बोल्ड और नाटकीय बनाता ही नहीं, बल्कि उन्हें पोषण भी देता है, स्वस्थ और सुंदर पलकों को बढ़ाता है। हमारे Magnum Big Shot Mascara के साथ, आप सिर्फ मस्कारा नहीं लगा रहे हैं, आप एक संदेश दे रहे हैं। अपनी बोल्ड और बड़ी पलकों के साथ सबको हैरान करने के लिए तैयार हो जाएं।";
  const [targetText, setTargetText] = useState("")
  const [suggestionsId, setShowSuggestionsId] = useState(null);
  const [target, setTarget] = useState([
    {
      id: 1,
      displayed: {
        id: 11,
        to: "Tout est dans les yeux.",
        from: "It's all in the eyes.",

      },
      suggestions: [
        { id: 11, to: "Tout est dans les yeux.", from: "It's all in the eyes." },
        { id: 12, from: "It's all in the looks.", to: "Tout est dans les yeux." }
      ],
      next: 2
    },
    {
      id: 2,
      displayed: {
        id: 21,

        from: "Demure daytime looks.",
        to: "Des looks de jour sages."
      },
      isBlackListed: true,
      suggestions: [
        { id: 21, from: "Demure daytime looks.", to: "Des looks de jour sages." },
        { id: 22, from: "Demure daytime look.", to: "Look de jour sage." }
      ],
      next: 3
    },
    {
      id: 3,
      displayed: { id: 31, from: "Dramatic night moves", to: "Mouvements nocturnes dramatiques" },
      suggestions: [
        { id: 31, from: "Dramatic night moves", to: "Mouvements nocturnes dramatiques" },
        { id: 32, from: "Spectacular nocturnal movements", to: "Des mouvements nocturnes spectaculaires" }
      ],
      next: 4,
      isLowConfidence: true

    },
    {
      id: 4,
      displayed: { id: 41, from: "Subtle lines, smokey vibes, custom brow looks, classic tones or a", to: "Lignes subtiles, ambiances fumées, looks de sourcils personnalisés, tons classiques ou un " },
      suggestions: [
        { id: 41, from: "Subtle lines, smokey vibes, custom brow looks, classic tones or a", to: "Lignes subtiles, ambiances fumées, looks de sourcils personnalisés, tons classiques ou un " },
        { id: 42, from: "Subtle lines, smoky vibes, custom brow looks, classic tones or a", to: "Des lignes subtiles, des vibrations fumées, des looks de sourcils personnalisés, des tons classiques ou un" }
      ],
      next: 5

    },
    {
      id: 5,
      displayed: { id: 51, from: "shot of color.", to: "coup de couleur." },
      suggestions: [

      ],
      isSeo: true,
      next: 6

    },
    {
      id: 6,
      displayed: { id: 61, from: "Eyeshad ₩, eyeliner, brows, and mascara collections", to: "Collections de fards à paupières ₩, eye-liner, sourcils et mascara" },
      suggestions: [
        { id: 61, from: "Eyeshad ₩, eyeliner, brows, and mascara collections", to: "Collections de fards à paupières ₩, eye-liner, sourcils et mascara" },
        { id: 62, from: "₩ Eyeshadow, Eyeliner, Brow, and Mascara Collections", to: "Collections de fards à paupières ₩, d'eye-liner, de sourcils et de mascara" }
      ],
      next: 7

    },
    {
      id: 7,
      displayed: { id: 71, from: "designed to transform your look", to: "conçu pour transformer votre look" },
      suggestions: [
        { id: 71, from: "designed to transform your look", to: "conçu pour transformer votre look" },
        { id: 72, from: "designed to transform your look", to: "conçu pour transformer votre regard" }
      ],
      next: undefined

    }
  ]);


  const suggestions=[
    {
      text:"लगाने",
      suggestions:[],
      confidence:'0.8'
    },
    {

    }
  ]

  const replacements = [
    ["लगाने", 0.8],
    ["हमारे Magnum Big Shot Mascara", 0.9],
    ["पलकों का पूरा रंग", 0.7],
    ["मस्कारा", 0.9],
    ["पलकों को बढ़ाने", 0.8],
    ["बदलने", 0.7],
    ["विशेष मिश्रण", 0.7],
    ["बोल्ड और नाटकीय", 0.8],
    ["पोषण", 0.7],
    ["स्वस्थ और सुंदर पलकों", 0.8],
    ["संदेश", 0.7],
    ["बोल्ड और बड़ी पलकों", 0.8],
    ["हैरान करने", 0.7],
  ];

  // Sort replacements by score in descending order
  replacements.sort((a, b) => b[1] - a[1]);

  // Apply replacements in the text
  const convertedText = replacements.reduce((resultText, [replacement, _]) => {
    return resultText.split(replacement).join(`<span>${replacement}</span>`);
  }, translatedText);

  console.log(convertedText);
  const regex = /<span.*?>|<\/span>|([^<]+)/g;
  const extractedStrings = [];
  let match;

  while ((match = regex.exec(convertedText)) !== null) {
    if (match[1]) {
      extractedStrings.push([match[1]]);
    }
  }

  console.log(extractedStrings);

  const languages = [
    {
      code: "en",
      value: "English",
    },
    {
      code: "sp",
      value: "Spanish",
    },
    {
      code: "vi",
      value: "Vietnamese",
    },
    {
      code: "fr",
      value: "French",
    },
  ];
  const replaceTarget = (e, id, suggestion) => {
    e.stopPropagation();

    // Find the target entry with the matching id
    const targetEntry = target.find((entry) => entry.id === id);

    if (targetEntry) {
      // Create a copy of the target array
      const updatedTarget = [...target];

      // Find the index of the target entry in the copied array
      const targetIndex = updatedTarget.findIndex((entry) => entry.id === id);

      if (targetIndex !== -1) {
        // Replace the displayed content with the selected suggestion
        updatedTarget[targetIndex] = {
          ...updatedTarget[targetIndex],
          displayed: suggestion,
        };
      }

      // Update the state with the modified array
      setTarget(updatedTarget);
    }

    setShowSuggestionsId(null);
  };


  const onClickHandler = (e, id) => {
    e.stopPropagation();
    setShowSuggestionsId(id);

  };

  const onMouseEnter = (text) => {
    // Handle hover logic here...

    console.log(text)
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      console.log(suggestionsId);
      setShowSuggestionsId(null);
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [suggestionsId]);

  const processedData = () => {
    let currentEntry = target[0];
    const sentenceComponents = [];

    while (currentEntry) {
      sentenceComponents.push(
        <SentenceComponent
          key={currentEntry.id}
          entry={currentEntry}
          onClickHandler={onClickHandler}
          onMouseEnter={onMouseEnter}
          suggestionsId={suggestionsId}
          replaceTarget={replaceTarget}
        />
      );

      currentEntry = target.find((item) => item.id === currentEntry.next);
    }

    return sentenceComponents;
  };

  return (
    <div className="App">
      <div className='text'>
        <div className='section'>
          <div>
            <span className='text'>From:   </span>

            <select>
              {
                languages.map((lg) => <option value={lg.code}>{lg.value}</option>)
              }
            </select>
          </div>
          <div className="source"
          >{srcLanguage}</div>
        </div>
        <div className='section'>
          <div>
            <span className='text'>To:   </span>

            <select>
              {
                languages.map((lg) => <option value={lg.code}>{lg.value}</option>)
              }
            </select>
          </div>
          {/* ... */}
          <div className='target' readOnly>
            {processedData()}
          </div>
        </div>
      </div>
      <button onClick={onClickHandler}>Translate</button>
    </div>
  );
}

export default App;

// const inputString = '<span>हमारे Magnum Big Shot Mascara</span> को <span>लगाने</span> से आपकी <span>पलकों का पूरा रंग</span> देखने को मिलेगा। यह <span>मस्कारा</span> सिर्फ आपकी <span>पलकों को बढ़ाने</span> के लिए नहीं है, बल्कि उन्हें <span>बदलने</span> के लिए भी। इसका <span>विशेष मिश्रण</span> आपकी पलकों को सिर्फ <span>बोल्ड और नाटकीय</span> बनाता ही नहीं, बल्कि उन्हें <span>पोषण</span> भी देता है, <span>स्वस्थ और सुंदर पलकों</span> को बढ़ाता है। हमारे Magnum Big Shot Mascara के साथ, आप सिर्फ मस्कारा नहीं लगा रहे हैं, आप एक संदेश दे रहे हैं। अपनी बोल्ड और बड़ी पलकों के साथ सबको <span>हैरान करने</span> के लिए तैयार हो जाएं।';

// const regex = /<span.*?>|<\/span>|([^<]+)/g;
// const extractedStrings = [];
// let match;

// while ((match = regex.exec(inputString)) !== null) {
//   if (match[1]) {
//     extractedStrings.push([match[1]]);
//   }
// }

// console.log(extractedStrings); 


