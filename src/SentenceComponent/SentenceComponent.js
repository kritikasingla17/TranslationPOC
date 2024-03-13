import React from 'react';
import SuggestionBox from '../SuggestionBox/SuggestionBox';
// import { useTranslation } from '../TranslationContext';

const SentenceComponent = ({ entry, onClickHandler, onMouseEnter, suggestionsId, replaceTarget }) => {
  // const { srcLanguage, suggestionsId, setShowSuggestionsId, target, setTarget, onClickHandler } = useTranslation();

  const getColorStyle = () => {
    if (entry.isSeo) {
      return { color: 'yellow' };
    } else if (entry.isBlackListed) {
      return { color: 'red' };
    } else if (entry.isLowConfidence) {
      return { color: 'orange' };
    } else {
      return {};
    }
  };

  return (
    <span
      className='target_sentence'
      onClick={(e) => onClickHandler(e, entry.id)}
      onMouseEnter={(e) => onMouseEnter(e.target.textContent)}
      onMouseLeave={() => console.log('leave')}
      style={getColorStyle()}
    >
      {entry.displayed.to}
      {suggestionsId === entry.id && entry.suggestions.length > 0 && <SuggestionBox replaceTarget={replaceTarget} list={entry.suggestions} activeText={entry} />}
    </span>
  );
};

export default SentenceComponent;
