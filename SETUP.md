# Setup

## Local setup
Download or clone the repository and run the following commands from the root directory

**Web Components**
```
npm install
npm run web
# open http://localhost:9000
```

**Native Components**
```
npm install

# terminal-1
npm run native:storybook

# terminal-2
npm run native
# press i for ios
# press a for android
```

**Amp Components**
```
npm install
npm run amp
# open http://localhost:9001
```

## Folder Structure

```
leaf-ui
  └──src      
    └──Button                   (component name)
      ├──amp                    
      |   ├──index.js           (top level exports/re-exports)
      |   ├──Button.js          (amp Button implementation)
      |   └──Button.story.js    (amp components for stories)
      ├──native                 
      |   ├──index.js           (top level exports/re-exports)
      |   ├──Button.js          (native Button implementation)
      |   └──Button.story.js    (native components for stories)
      ├──web                    
      |   ├──index.js           (top level exports/re-exports)
      |   ├──Button.js          (web Button implementation)
      |   └──Button.story.js    (web components for stories)
      └──makeStories.js         (Button stories)
```