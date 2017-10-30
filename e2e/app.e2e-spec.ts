import { MovieSearchPage } from './app.po';

describe('movie-search App', () => {
  let page: MovieSearchPage;

  beforeEach(() => {
    page = new MovieSearchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
