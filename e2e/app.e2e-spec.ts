import { MaxicreditPage } from './app.po';

describe('maxicredit App', () => {
  let page: MaxicreditPage;

  beforeEach(() => {
    page = new MaxicreditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
