import { YteClientPage } from './app.po';

describe('yte-client App', function() {
  let page: YteClientPage;

  beforeEach(() => {
    page = new YteClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
