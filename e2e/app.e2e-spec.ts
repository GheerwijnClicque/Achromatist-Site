import { AchromatistAppPage } from './app.po';

describe('achromatist-app App', () => {
  let page: AchromatistAppPage;

  beforeEach(() => {
    page = new AchromatistAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
