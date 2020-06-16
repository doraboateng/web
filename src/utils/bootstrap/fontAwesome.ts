import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const bootstrapFontAwesome = () => {
    // https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
  library.add(
    fab,
    faEnvelope,
    faSearch,
    faTimes,
  );
}

export default bootstrapFontAwesome;
