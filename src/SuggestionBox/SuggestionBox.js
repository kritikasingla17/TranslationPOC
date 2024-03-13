import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import DoneIcon from '@mui/icons-material/Done';
// import { useTranslation } from './TranslationContext';

const SuggestionBox = ({ list, activeText, replaceTarget }) => {
    //   const { srcLanguage, suggestionsId, setShowSuggestionsId, target, setTarget, onClickHandler } = useTranslation();

    return (
        <List
            sx={{
                bgcolor: 'background.paper',
                zIndex: 1,
                position: 'absolute',
                top: '100%',
                left: 0,
                minWidth: '400px',
                border: '1px solid #ccc',
            }}
        >
            {list.map((data) => (
                <ListItem
                    key={data.id}
                    alignItems="flex-start"
                    sx={{
                        border: '1px solid #ccc',
                        backgroundColor: `${data.id === activeText.displayed.id ? '#e8f0fe' : ''}`,
                        '&:hover': {
                            backgroundColor: `${data.id === activeText.displayed.id ? '' : '#f1f3f4'}`
                        }
                    }}
                    className="listItem"
                    onClick={(e) => replaceTarget(e, activeText.id, data)}
                >
                    <ListItemIcon>
                        {data.id === activeText.displayed.id ? <DoneIcon color="primary" /> : null}
                    </ListItemIcon>
                    <ListItemText
                        primary={data.to}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {data.from}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default SuggestionBox;
