import StoryblokClient, { Richtext } from 'storyblok-js-client';

// https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes
export default class StoryBlokService {
  constructor() {}

  // Set your token - you will be able to create a new space later.
  token = 'qXiPpW7i06teYPCrrmjEoAtt';

  // Initialize the client with the preview token so we can access our API easily
  // from your space dashboard at https://app.storyblok.com
  storyapi = new StoryblokClient({
    accessToken: this.token,
  });

  story = {
    content: {
      body: [],
    },
  };

  create(storyName: string) {
    // Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: this.token,
    });
    window.storyblok.on('change', () => {
      // this will indicate to load the specified story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded
      this.getStory(storyName, 'draft');
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory(storyName, 'draft');
      } else {
        this.getStory(storyName, 'published');
      }
    });
  }

  jsonToHtml(richTextField: Richtext) {
    return this.storyapi.richTextResolver.render(richTextField);
  }

  async getStory(slug: any, version: any) {
    await this.storyapi
      .get('cdn/stories/' + slug, {
        version: version,
      })
      .then((response: any) => {
        this.story = response.data.story;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
