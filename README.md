# story-blok-demo

```
npm i // install dependencies when you first clone this repo
npm run serve // start up localhost (make sure your port is 8080 - that is the port that storyblok is looking at)
```


[Storyblok Components code folder](https://github.com/mmwoodfo/story-blok-demo/tree/main/src/components/storyblok):
These are the vue components that are tied to the story blok editor:

[Vue code components tie in main.ts](https://github.com/mmwoodfo/story-blok-demo/blob/0b57057de38b3e9bda3545f5f507bca43e3085d6/src/main.ts#L25):
This is where the components are defined for usage within vue

[Storyblok typescript code](https://github.com/mmwoodfo/story-blok-demo/blob/main/src/services/story-blok-service.ts): 
This is where the storyblok client bridge is created w/ the api token & how content is retreived from storyblok.

Story blok UI - components list:
This is where the components are defined in the storyblok UI. Here you create 'schemas' that tell the content editors exactly what you expect these components to be used for, what input you expect as well as the abillity to restrict components usages.
![image](https://user-images.githubusercontent.com/43832670/160151179-e3f705c5-ccfd-4f1e-87c7-91e1da8f48c0.png)
