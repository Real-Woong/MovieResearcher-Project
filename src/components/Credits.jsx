import React from 'react';
import {
    CreditsContainer,
    CreditItem,
    CreditImage,
    CreditName,
    CreditRole
} from './StyledCredits';

const NO_IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';

const MovieCredits = ({ credits }) => {
    if (!credits) return null;
  
    return (
        <CreditsContainer>
            {credits.cast && credits.cast.map((person) => (
                <CreditItem key={person.id}>
                    <CreditImage
                    src={person.profile_path ? `http://image.tmdb.org/t/p/w500${person.profile_path}` : NO_IMAGE_URL}
                    alt={person.name}
                    />
                    <CreditName>{person.name}</CreditName>
                    <CreditRole>{person.known_for_department}</CreditRole>
                </CreditItem>
            ))}
      </CreditsContainer>
    );
  };
  
  export default MovieCredits;