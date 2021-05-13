import React, { useState } from 'react';
import MovieSearch from '../MovieSearch/index';
import ScrollButton from '../ScrollButton'
import FeaturedFetch from '../FeaturedFetch'

export default function HomePage() {
  const [state, setState] = useState(false);

  return (
    <div>
      <MovieSearch setState={setState} />
      {!state && <FeaturedFetch />}
      <ScrollButton />
    </div>
  );
}

