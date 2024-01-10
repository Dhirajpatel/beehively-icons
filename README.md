# beehively-icons

The Beehively Icons component library is designed for seamless integration into React applications

### Install

```bash
npm install beehively-icons
```

### Usage

```javascript
import React from "react";
import {BiBee} from "beehively-icons";

const App = () => {
  return <BiBee />;
};

export default App;
```

Icons can be configured with inline props:

```javascript
<BiBee color="red" size={48} />
```

You can also include the whole icon pack:

```javascript
import React from "react";
import * as Icon from "beehively-icons";

const App = () => {
  return <Icon.BiBee />;
};

export default App;
```

### Credits

The icon designs originate from flaticon.

### License

Licensed under the MIT license.
