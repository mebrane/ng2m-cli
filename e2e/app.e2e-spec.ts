import { Ng2mCliPage } from './app.po';

describe('ng2m-cli App', () => {
  let page: Ng2mCliPage;

  beforeEach(() => {
    page = new Ng2mCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
