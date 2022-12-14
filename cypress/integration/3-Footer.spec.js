import describeOnBranches from '../utils/describeOnBranches';

describeOnBranches('footer')('Footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Uses footer tag', () => {
    cy.get('footer');
  });

  it('Contains link to "profy.dev/employers"', () => {
    cy
      .get('footer')
      .contains('profy.dev')
      .and('have.attr', 'href')
      .and('eq', 'https://profy.dev/employers');
  });

  it('Contains link to "https://github.com/egordanilov/reddit-timer"', () => {
    cy
      .get('footer')
      .contains('Github')
      .and('have.attr', 'href')
      .and('eq', 'https://github.com/egordanilov/reddit-timer');
  });
});
