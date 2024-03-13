import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [srcLanguage, setSourceLanguage] = useState("It's all in the eyes. Demure daytime looks. Dramatic night moves Subtle lines, smokey vibes, custom brow looks, classic tones or a  shot of color. Eyeshad ₩, eyeliner, brows, and mascara collections  designed to transform your look");
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
      next: 4

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
        { id: 51, from: "shot of color.", to: "coup de couleur." },
        { id: 52, from: "a touch of color.", to: "une touche de couleur." }
      ],
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

  const onClickHandler = (e, id) => {
    e.stopPropagation();

    // Update the target array using setTarget
    setTarget((prevTarget) => {
      const targetEntry = prevTarget.find((entry) => entry.id === id);

      if (targetEntry) {
        const targetIndex = prevTarget.findIndex((entry) => entry.id === id);

        if (targetIndex !== -1) {
          return [
            ...prevTarget.slice(0, targetIndex),
            { ...prevTarget[targetIndex], displayed: targetEntry.displayed },
            ...prevTarget.slice(targetIndex + 1),
          ];
        }
      }

      return prevTarget;
    });

    setShowSuggestionsId(null);
  };

  return (
    <TranslationContext.Provider value={{ srcLanguage, setSourceLanguage, suggestionsId, setShowSuggestionsId, target, setTarget, onClickHandler }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
